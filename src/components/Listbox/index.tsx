import { isToday } from "date-fns";
import React from "react";
import { useTypedSelector } from "../../store";
import { TaskPreview } from "../TaskPreview";

import { Container } from "./style";

export const Listbox = () => {
  const tasks = useTypedSelector((state) => state.tasks);
  const filter = useTypedSelector((state) => state.filter);
  return (
    <Container>
      {tasks
        .filter(
          filter === "complete"
            ? (task) => task.isComplete
            : filter === "incomplete"
            ? (task) => !task.isComplete
            : filter === "important"
            ? (tasks) => tasks.isImportant
            : filter === "today"
            ? (task) => isToday(new Date(task.date))
            : (task) => task
        )
        .map((task) => (
          <TaskPreview key={task.id} task={task} />
        ))}
    </Container>
  );
};
