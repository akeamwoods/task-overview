import styled from "styled-components";
import { Form as FormikForm, Field as FormikField } from "formik";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 30px 15px;
  h2 {
    margin: 10px 0 0 0;
  }
`;

export const MessageText = styled.p`
  color: gray;
  margin: 10px 0;
`;

export const ButtonContainer = styled.span`
  display: flex;
  justify-content: stretch;

  button {
    display: flex;
    flex: 1;
    padding: 15px 10px;
    border: none;
    margin: 0;
  }

  button:first-child {
    margin-right: 5px;
    background: red;
    color: #fff;
  }
  button:last-child {
    margin-left: 5px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export const Field = styled(FormikField)`
  padding: 15px 10px;
  margin: 5px 0;
  background: #f5f5f5;
  border: none;
  padding-left: 35px;
  width: 100%;
  font: 15px/22px Inter, system-ui, sans-serif;
`;

export const ErrorText = styled.p`
  margin: 0;
  color: red;
  text-align: left !important;
`;

export const IconContainer = styled.div<{ stretched?: boolean }>`
  ${(props) => props.stretched && `flex:1;`}
  resize:none;
  white-space: pre-wrap;
  position: relative;
  svg {
    position: absolute;
    top: 20px;
    left: 10px;
  }
  display: flex;
`;
