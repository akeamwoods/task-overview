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
      case getType(actions.newTaskAdded):
        draft.tasks = [...draft.tasks, action.payload];
        break;
    }
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
