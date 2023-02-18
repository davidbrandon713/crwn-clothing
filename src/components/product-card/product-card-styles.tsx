import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button-styles';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height 400px;
  align-items: center;
  position: relative;

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      display: flex;
    }
  }

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    width: 80%;
    opacity: 0.85;
    position: absolute;
    top: 305px;
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;