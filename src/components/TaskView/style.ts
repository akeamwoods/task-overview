import styled from "styled-components";
import { Constants } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background: ${Constants.mainBg};
  overflow: auto;
`;

export const Content = styled.span`
  white-space: pre-wrap;
`;
