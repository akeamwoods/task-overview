import { ActionType, createAction } from "typesafe-actions";
import { Task } from "./types";

const newTaskAdded = createAction("new task added")<Task>();
const signUpButtonClicked = createAction("sign up button clicked")();

export const actions = {
  newTaskAdded,
  signUpButtonClicked,
};

export type Actions = ActionType<typeof actions>;
