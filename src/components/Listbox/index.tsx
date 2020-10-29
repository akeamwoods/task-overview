import { isToday, isPast, endOfDay } from "date-fns";

import React from "react";
import { useTypedSelector } from "../../store";
import { TaskPreview } from "../TaskPreview";

import { Container } from "./style";

export const Listbox = () => {
  const tasks = useTypedSelector((state) => state.tasks);
  const filter = useTypedSelector((state) => state.filter);
  const searchQuery = useTypedSelector((state) => state.searchTerm);
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
            : filter === "expired"
            ? (task) => isPast(endOfDay(new Date(task.date)))
            : (task) => task
        )
        .filter((task) =>
          filter !== "expired"
            ? !isPast(endOfDay(new Date(task.date)))
            : isPast(endOfDay(new Date(task.date)))
        )
        .filter((task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort(function (a, b) {
          return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
        })
        .map((task) => (
          <TaskPreview key={task.id} task={task} />
        ))}
    </Container>
  );
};
