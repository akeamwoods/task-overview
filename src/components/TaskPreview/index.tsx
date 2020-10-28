import React from "react";
import { TaskPreview as TaskPreviewType } from "../../store/types";
import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import {
  Container,
  Wrapper,
  CheckButton,
  TextWrapper,
  StarButton,
} from "./style";
import { useDispatch } from "react-redux";
import { formatRelative, isToday, isTomorrow } from "date-fns";
import { actions } from "../../store/actions";

export const TaskPreview: React.FC<{ task: TaskPreviewType }> = ({ task }) => {
  const dispatch = useDispatch();
  const date = new Date(task.date);
  return (
    <Container onClick={() => dispatch(actions.taskPreviewClicked(task.id))}>
      <Wrapper>
        <CheckButton
          onClick={() => dispatch(actions.taskCheckButtonClicked(task.id))}
        >
          {task.isComplete ? <FaRegCheckCircle /> : <FaCheckCircle />}
        </CheckButton>
        <TextWrapper>
          <h4>{task.title}</h4>
          <p>
            {isToday(date)
              ? "Today"
              : isTomorrow(date)
              ? "Tomorrow"
              : formatRelative(new Date(task.date), new Date())}
          </p>
        </TextWrapper>
      </Wrapper>
      <StarButton
        onClick={() => dispatch(actions.taskStarButtonClicked(task.id))}
      >
        {task.isImportant ? <FaStar /> : <FaRegStar />}
      </StarButton>
    </Container>
  );
};
