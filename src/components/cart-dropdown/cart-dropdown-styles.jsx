import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button-styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 420px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: 20px;
  }
`;

export const CartItems = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const ClearButton = styled.div`
  color: red;
  cursor: pointer;
  font-size: 14px;
  margin: 14px auto;

  &:hover {
    color: red;
    text-shadow: black 1px 1px 7px;
  }

  &:active {
    color: pink;
  }
`;