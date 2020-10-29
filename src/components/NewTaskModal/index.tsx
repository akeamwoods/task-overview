import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { actions } from "../../store/actions";
import {
  Container,
  ButtonContainer,
  IconContainer,
  ErrorText,
  Field,
  Form,
} from "./style";
import { DatePickerInput } from "../DatePickerInput";
import { FaPencilAlt } from "react-icons/fa";

const Schema = Yup.object().shape({
  title: Yup.string()
    .max(50, "Maximum 50 characters")
    .required("Please enter a title"),
  content: Yup.string().required("Please enter the tasks information"),
  taskDate: Yup.string().required("Please select a date"),
});

export const NewTaskModal: React.FC<{
  onCancel: () => void;
}> = ({ onCancel }) => {
  const dispatch = useDispatch();
  const initialValues: { title: string; content: string; taskDate: string } = {
    title: "",
    content: "",
    taskDate: "",
  };
  return (
    <Container>
      <img
        src={process.env.PUBLIC_URL + "/newTask.svg"}
        height="52px"
        alt="New Task Icon"
      />
      <h2>New Task</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          dispatch(
            actions.newTaskAdded({
              id: uuidv4(),
              title: values.title,
              content: values.content,
              date: values.taskDate,
              isComplete: false,
              isImportant: false,
            })
          );
          resetForm();
        }}
        validationSchema={Schema}
      >
        {({ errors, touched }) => (
          <Form>
            {errors.title && touched.title && (
              <ErrorText>{errors.title}ferfer</ErrorText>
            )}
            <IconContainer>
              <FaPencilAlt />
              <Field
                id="title"
                name="title"
                placeholder="Task Title"
                type="title"
              ></Field>
            </IconContainer>
            {errors.taskDate && touched.taskDate && (
              <ErrorText>{errors.taskDate}</ErrorText>
            )}
            <DatePickerInput name="taskDate" />
            {errors.content && touched.content && (
              <ErrorText>{errors.content}</ErrorText>
            )}
            <IconContainer stretched>
              <FaPencilAlt />
              <Field
                id="content"
                name="content"
                placeholder="Task information..."
                component="textarea"
                type="content"
              ></Field>
            </IconContainer>
            <ButtonContainer>
              <button type="submit">Continue</button>
              <button onClick={onCancel}>Cancel</button>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
