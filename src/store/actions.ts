import { ActionType, createAction } from "typesafe-actions";
import { Task, TaskFilter } from "./types";

const newTaskAdded = createAction("new task added")<Task>();
const newTaskButtonClicked = createAction("new task button clicked")();
const taskCheckButtonClicked = createAction("task check button clicked")<
  string
>();
const taskStarButtonClicked = createAction("task star button clicked")<
  string
>();
const taskPreviewClicked = createAction("task preview clicked")<string>();
const newFilterPressed = createAction("new filter pressed")<TaskFilter>();
const deleteTaskButtonPrssed = createAction("delete task button pressed")<
  string
>();
const searchQueryUpdated = createAction("search query updated")<string>();

export const actions = {
  newTaskAdded,
  newTaskButtonClicked,
  taskCheckButtonClicked,
  taskStarButtonClicked,
  taskPreviewClicked,
  newFilterPressed,
  deleteTaskButtonPrssed,
  searchQueryUpdated,
};

export type Actions = ActionType<typeof actions>;
