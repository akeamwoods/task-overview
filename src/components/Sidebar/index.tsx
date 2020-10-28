import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import { Container } from "./style";

export const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      Sidebar
      <button onClick={() => dispatch(actions.newTaskButtonClicked())}>
        New Task
      </button>
    </Container>
  );
};
