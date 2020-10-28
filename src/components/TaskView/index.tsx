import React from "react";
import { useTypedSelector } from "../../store";
import { TaskHeader } from "../TaskHeader";
import { Container } from "./style";

export const TaskView = () => {
  const task = useTypedSelector((state) =>
    state.tasks.find((task) => task.id === state.activeTask)
  );
  return task ? (
    <Container>
      <span style={{ marginBottom: "20px" }}>
        <TaskHeader task={task} />
      </span>

      <span>{task.content}</span>
    </Container>
  ) : null;
};
