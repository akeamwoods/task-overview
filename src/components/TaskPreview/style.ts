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
