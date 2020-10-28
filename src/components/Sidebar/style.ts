import styled from "styled-components";
import { Constants } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 200px;
  background: ${Constants.mainBg};
  border-right: 1px solid ${Constants.border};
  justify-content: space-between;
`;

export const ButtonContainer = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  svg {
    margin-right: 20px;
    height: 22px;
    width: 22px;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  ${(props) =>
    props.active &&
    `
  font-weight:bold;
`}
  display: flex;
  font-size: 1em;
  background: none;
  align-self: stretch;
  outline: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  span {
    display: flex;
    align-items: center;
  }
  :hover {
    font-weight: bold;
  }
  h4 {
    margin: 0;
    align-self: center;
  }
`;

export const NewTaskButton = styled.button`
  background: ${Constants.newTodoButtonBg};
  border: none;
`;
