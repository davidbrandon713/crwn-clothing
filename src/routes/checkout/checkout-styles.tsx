import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const ClearButton = styled.span`
  color: red;
  cursor: pointer;

  &:hover {
    color: red;
    text-shadow: grey 1px 1px 7px;
  }

  &:active {
    color: pink;
  }
`;