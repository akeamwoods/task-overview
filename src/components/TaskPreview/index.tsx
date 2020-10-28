import React from "react";
import { TaskPreview as TaskPreviewType } from "../../store/types";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { Container } from "./style";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";

export const TaskPreview: React.FC<{ task: TaskPreviewType }> = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <button onClick={() => dispatch(actions.taskCheckButtonClicked(task.id))}>
        {task.isComplete ? <FaRegCheckCircle /> : <FaCheckCircle />}
      </button>
      {task.title}
    </Container>
  );
};
