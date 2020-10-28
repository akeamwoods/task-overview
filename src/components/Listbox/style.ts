import styled from "styled-components";
import { Constants } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background: ${Constants.listboxItemBg};
  overflow: auto;
`;
