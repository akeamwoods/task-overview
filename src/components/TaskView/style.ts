import styled from "styled-components";
import { Constants } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background: ${Constants.mainBg};
  border: 1px solid ${Constants.border};
`;
