import styled from "styled-components";
import { Constants } from "../../constants";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${Constants.listboxBorder};
  :hover {
    background: ${Constants.highlght};
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const CheckButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  background: none;
  svg {
    height: 32px;
    width: 32px;
    color: ${Constants.todoButtonBg};
  }
`;

export const StarButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  background: none;
  svg {
    height: 16px;
    width: 16px;
    color: ${Constants.text};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  h4,
  p {
    margin: 0;
    color: ${Constants.text};
  }
`;
