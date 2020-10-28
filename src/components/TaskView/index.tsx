import React from "react";
import { useTypedSelector } from "../../store";
import { Container } from "./style";

export const TaskView = () => {
  const task = useTypedSelector((state) => state.activeTask);
  return task ? <Container>test</Container> : null;
};
