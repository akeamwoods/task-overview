import styled from "styled-components";
import { Constants } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 200px;
  background: ${Constants.mainBg};
  border-right: 1px solid ${Constants.border};
`;
