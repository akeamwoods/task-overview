import { ActionType, createAction } from "typesafe-actions";
import { Task } from "./types";

const newTaskAdded = createAction("new task added")<Task>();
const newTaskButtonClicked = createAction("new task button clicked")();
const taskCheckButtonClicked = createAction("task check button clicked")<
  string
>();
const taskStarButtonClicked = createAction("task star button clicked")<
  string
>();
const taskPreviewClicked = createAction("task preview clicked")<string>();

export const actions = {
  newTaskAdded,
  newTaskButtonClicked,
  taskCheckButtonClicked,
  taskStarButtonClicked,
  taskPreviewClicked,
};

export type Actions = ActionType<typeof actions>;
