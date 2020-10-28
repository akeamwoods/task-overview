import styled from "styled-components";
import { Constants } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background: ${Constants.mainBg};
  border-left: 1px solid ${Constants.border};
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
