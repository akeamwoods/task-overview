export type Task = {
  id: string;
  title: string;
  content: string;
  date: string;
  isComplete: boolean;
  isImportant: boolean;
};

export type TaskPreview = Pick<
  Task,
  "id" | "title" | "isComplete" | "isImportant" | "date"
>;

export type TaskFilter =
  | "all"
  | "today"
  | "important"
  | "complete"
  | "incomplete";
