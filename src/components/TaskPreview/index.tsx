import React from "react";
import { TaskPreview as TaskPreviewType } from "../../store/types";
import { Container } from "./style";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import { TaskHeader } from "../TaskHeader";
import { useTypedSelector } from "../../store";

export const TaskPreview: React.FC<{ task: TaskPreviewType }> = ({ task }) => {
  const dispatch = useDispatch();
  const activeTask = useTypedSelector((state) => state.activeTask);
  return (
    <Container
      isActive={activeTask === task.id}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(actions.taskPreviewClicked(task.id));
      }}
    >
      <TaskHeader task={task} />
    </Container>
  );
};
