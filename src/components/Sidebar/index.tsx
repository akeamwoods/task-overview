import { endOfDay, isPast, isToday } from "date-fns";
import React, { useState } from "react";
import {
  FaCalendar,
  FaCheckCircle,
  FaRegCircle,
  FaList,
  FaPlus,
  FaStar,
  FaHourglassEnd,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { actions } from "../../store/actions";
import { NewTaskModal } from "../NewTaskModal";
import { Popup } from "../Popup";
import {
  Container,
  ButtonContainer,
  FilterButton,
  NewTaskButton,
} from "./style";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [isVisible, setVisibility] = useState(false);
  const filter = useTypedSelector((state) => state.filter);
  const tasks = useTypedSelector((state) => state.tasks);
  const filteredTasks = tasks.filter(
    (task) => !isPast(endOfDay(new Date(task.date)))
  );
  return (
    <Container>
      <Popup isVisible={isVisible} onClick={() => setVisibility(false)}>
        <NewTaskModal onCancel={() => setVisibility(false)} />
      </Popup>
      <h3>TaskOverview</h3>
      <ButtonContainer>
        <FilterButton
          active={filter === "all"}
          onClick={() => dispatch(actions.newFilterPressed("all"))}
        >
          <span>
            <FaList />
            Tasks
          </span>
          <h4>{filteredTasks.length}</h4>
        </FilterButton>
        <FilterButton
          active={filter === "today"}
          onClick={() => dispatch(actions.newFilterPressed("today"))}
        >
          <span>
            <FaStar />
            Today
          </span>
          <h4>
            {
              filteredTasks.filter((task) => isToday(new Date(task.date)))
                .length
            }
          </h4>
        </FilterButton>
        <FilterButton
          active={filter === "expired"}
          onClick={() => dispatch(actions.newFilterPressed("expired"))}
        >
          <span>
            <FaHourglassEnd />
            Expired
          </span>
          <h4>
            {
              tasks.filter((task) => isPast(endOfDay(new Date(task.date))))
                .length
            }
          </h4>
        </FilterButton>
        <FilterButton
          active={filter === "important"}
          onClick={() => dispatch(actions.newFilterPressed("important"))}
        >
          <span>
            <FaCalendar />
            Important
          </span>
          <h4>{filteredTasks.filter((task) => task.isImportant).length}</h4>
        </FilterButton>
        <FilterButton
          active={filter === "complete"}
          onClick={() => dispatch(actions.newFilterPressed("complete"))}
        >
          <span>
            <FaCheckCircle />
            Complete
          </span>
          <h4>{filteredTasks.filter((task) => task.isComplete).length}</h4>
        </FilterButton>
        <FilterButton
          active={filter === "incomplete"}
          onClick={() => dispatch(actions.newFilterPressed("incomplete"))}
        >
          <span>
            <FaRegCircle />
            Incomplete
          </span>
          <h4>{filteredTasks.filter((task) => !task.isComplete).length}</h4>
        </FilterButton>
      </ButtonContainer>
      <NewTaskButton onClick={() => setVisibility(true)}>
        <FaPlus />
      </NewTaskButton>
    </Container>
  );
};
