import React from "react";
import { TaskPreview as TaskPreviewType } from "../../store/types";
import { FaCheckCircle, FaRegCircle, FaRegStar, FaStar } from "react-icons/fa";
import {
  Wrapper,
  CheckButton,
  TextWrapper,
  StarButton,
  Container,
} from "./style";
import { useDispatch } from "react-redux";
import { formatRelative, isToday, isTomorrow } from "date-fns";
import { actions } from "../../store/actions";

export const TaskHeader: React.FC<{ task: TaskPreviewType }> = ({ task }) => {
  const dispatch = useDispatch();
  const date = new Date(task.date);
  return (
    <Container>
      <Wrapper>
        <CheckButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(actions.taskCheckButtonClicked(task.id));
          }}
        >
          {task.isComplete ? <FaCheckCircle /> : <FaRegCircle />}
        </CheckButton>
        <TextWrapper>
          <h4>{task.title}</h4>
          <p>
            {isToday(date)
              ? "Today"
              : isTomorrow(date)
              ? "Tomorrow"
              : formatRelative(new Date(task.date), new Date())}
          </p>
        </TextWrapper>
      </Wrapper>
      <StarButton
        onClick={(e) => {
          e.stopPropagation();
          dispatch(actions.taskStarButtonClicked(task.id));
        }}
      >
        {task.isImportant ? <FaStar /> : <FaRegStar />}
      </StarButton>
    </Container>
  );
};
