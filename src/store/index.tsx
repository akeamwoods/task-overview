import produce from "immer";
import { getType } from "typesafe-actions";
import { Reducer, createStore } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { composeWithDevTools } from "redux-devtools-extension";
import { Actions, actions } from "./actions";
import { Task, TaskFilter } from "./types";
import { isToday } from "date-fns";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["activeTask", "filter"],
};

const initialState = () => ({
  tasks: [] as Task[],
  activeTask: undefined as undefined | string,
  filter: "all" as TaskFilter,
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
            content:
              "’Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe. “Beware the Jabberwock, my son! The jaws that bite, the claws that catch! Beware the Jubjub bird, and shun The frumious Bandersnatch!” He took his vorpal sword in hand; Long time the manxome foe he sought— So rested he by the Tumtum tree And stood awhile in thought. And, as in uffish thought he stood, The Jabberwock, with eyes of flame, Came whiffling through the tulgey wood, And burbled as it came! One, two! One, two! And through and through The vorpal blade went snicker-snack! He left it dead, and with its head He went galumphing back. “And hast thou slain the Jabberwock? Come to my arms, my beamish boy! O frabjous day! Callooh! Callay!” He chortled in his joy. ’Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.",
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
      case getType(actions.taskStarButtonClicked): {
        const task = draft.tasks.find((task) => task.id === action.payload);
        if (task) task.isImportant = !task.isImportant;
        break;
      }
      case getType(actions.taskPreviewClicked): {
        if (!draft.activeTask || draft.activeTask !== action.payload) {
          const task = draft.tasks.find((task) => task.id === action.payload);
          if (task) draft.activeTask = task.id;
        }
        break;
      }

      case getType(actions.newFilterPressed): {
        draft.filter = action.payload;

        const task = draft.tasks.find((task) => task.id === draft.activeTask);

        if (draft.activeTask && task && draft.filter !== "all") {
          switch (draft.filter) {
            case "today":
              if (!isToday(new Date(task.date))) draft.activeTask = undefined;
              break;
            case "complete":
              if (!task.isComplete) draft.activeTask = undefined;
              break;
            case "important":
              if (!task.isImportant) draft.activeTask = undefined;
              break;
          }
        }

        break;
      }
    }
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
