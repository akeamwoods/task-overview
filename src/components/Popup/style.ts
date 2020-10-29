import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled(animated.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
`;

export const Container = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background: #fff;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  position: relative;
  width: 80%;
  height: 80%;
  align-items: stretch;
`;
