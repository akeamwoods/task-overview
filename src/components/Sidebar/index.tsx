import React from "react";
import { FaCalendar, FaCheckCircle, FaList, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { actions } from "../../store/actions";
import { Container, ButtonContainer, FilterButton } from "./style";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const filter = useTypedSelector((state) => state.filter);
  return (
    <Container>
      <h3>TaskOverview</h3>
      <ButtonContainer>
        <FilterButton
          active={filter === "all"}
          onClick={() => dispatch(actions.newFilterPressed("all"))}
        >
          <FaList />
          All
        </FilterButton>
        <FilterButton
          active={filter === "today"}
          onClick={() => dispatch(actions.newFilterPressed("today"))}
        >
          <FaStar />
          Today
        </FilterButton>
        <FilterButton
          active={filter === "important"}
          onClick={() => dispatch(actions.newFilterPressed("important"))}
        >
          <FaCalendar />
          Important
        </FilterButton>
        <FilterButton
          active={filter === "complete"}
          onClick={() => dispatch(actions.newFilterPressed("complete"))}
        >
          <FaCheckCircle />
          Complete
        </FilterButton>
      </ButtonContainer>
      <button onClick={() => dispatch(actions.newTaskButtonClicked())}>
        New Task
      </button>
    </Container>
  );
};
