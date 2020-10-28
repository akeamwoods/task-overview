import produce from "immer";
import { getType } from "typesafe-actions";
import { Reducer, createStore } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { composeWithDevTools } from "redux-devtools-extension";
import { Actions, actions } from "./actions";
import { Task } from "./types";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const initialState = () => ({
  tasks: [] as Task[],
});

export type State = Readonly<ReturnType<typeof initialState>>;

export const rootReducer: Reducer<State, Actions> = (
  state = initialState(),
  action: Actions
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(actions.newTaskAdded): {
        draft.tasks = [...draft.tasks, action.payload];
        break;
      }
      case getType(actions.newTaskButtonClicked): {
        draft.tasks = [
          ...draft.tasks,
          {
            id: (draft.tasks.length + 1).toString(),
            content: "Here be a task",
            date: new Date().toISOString(),
            isComplete: false,
            isImportant: false,
            title: "Task Title",
          },
        ];
        break;
      }
      case getType(actions.taskCheckButtonClicked): {
        const task = draft.tasks.find((task) => task.id === action.payload);
        if (task) task.isComplete = !task.isComplete;
        break;
      }
    }
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
