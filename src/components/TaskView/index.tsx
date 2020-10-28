import React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { actions } from "../../store/actions";
import { CheckButton, Container } from "./style";

export const TaskView = () => {
  const task = useTypedSelector((state) =>
    state.tasks.find((task) => task.id === state.activeTask)
  );
  const dispatch = useDispatch();
  return task ? (
    <Container>
      <CheckButton
        onClick={() => dispatch(actions.taskCheckButtonClicked(task.id))}
      >
        {task.isComplete ? <FaCheckCircle /> : <FaRegCircle />}
      </CheckButton>
    </Container>
  ) : null;
};
