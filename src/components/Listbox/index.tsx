import React from "react";
import { useTypedSelector } from "../../store";
import { TaskPreview } from "../TaskPreview";

import { Container } from "./style";

export const Listbox = () => {
  const tasks = useTypedSelector((state) => state.tasks);
  return (
    <Container>
      {tasks.map((task) => (
        <TaskPreview task={task} />
      ))}
    </Container>
  );
};
