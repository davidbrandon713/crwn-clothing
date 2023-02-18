import styled from "styled-components";
import Button from "../button/button-component";

export const FormContainer = styled.form`
  height: 200x;
  margin-top: 50px;
  min-width: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const Warning = styled.h3`
  height: 24px;
  color: red;
  text-align: center;
`;