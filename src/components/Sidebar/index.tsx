import { isToday } from "date-fns";
import React from "react";
import {
  FaCalendar,
  FaCheckCircle,
  FaList,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { actions } from "../../store/actions";
import {
  Container,
  ButtonContainer,
  FilterButton,
  NewTaskButton,
} from "./style";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const filter = useTypedSelector((state) => state.filter);
  const tasks = useTypedSelector((state) => state.tasks);
  return (
    <Container>
      <h3>TaskOverview</h3>
      <ButtonContainer>
        <FilterButton
          active={filter === "all"}
          onClick={() => dispatch(actions.newFilterPressed("all"))}
        >
          <span>
            <FaList />
            All
          </span>
          <h4>{tasks.length}</h4>
        </FilterButton>
        <FilterButton
          active={filter === "today"}
          onClick={() => dispatch(actions.newFilterPressed("today"))}
        >
          <span>
            <FaStar />
            Today
          </span>
          <h4>{tasks.filter((task) => isToday(new Date(task.date))).length}</h4>
        </FilterButton>
        <FilterButton
          active={filter === "important"}
          onClick={() => dispatch(actions.newFilterPressed("important"))}
        >
          <span>
            <FaCalendar />
            Important
          </span>
          <h4>{tasks.filter((task) => task.isImportant).length}</h4>
        </FilterButton>
        <FilterButton
          active={filter === "complete"}
          onClick={() => dispatch(actions.newFilterPressed("complete"))}
        >
          <span>
            <FaCheckCircle />
            Complete
          </span>
          <h4>{tasks.filter((task) => task.isComplete).length}</h4>
        </FilterButton>
      </ButtonContainer>
      <NewTaskButton onClick={() => dispatch(actions.newTaskButtonClicked())}>
        <FaPlus />
      </NewTaskButton>
    </Container>
  );
};
