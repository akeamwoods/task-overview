import styled from "styled-components";
import { Constants } from "../../constants";

export const IconContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 15px;
    left: 20px;
    color: ${Constants.text};
  }
  display: flex;
  input {
    flex: 1;
    padding: 15px 20px 15px 40px;
    background: ${Constants.searchBarBg};
    border: none;
    border-bottom: 1px solid ${Constants.border};
  }
`;
