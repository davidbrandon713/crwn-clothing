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

  @media screen and (max-width: 800px) {
    width: 40vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      &:hover {
        img {
          opacity: unset;
        }

        button {
          opacity: unset;
        }
      }
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;

  @media screen and (max-width: 800px) {
    height: 94%;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    height: 6%;
    font-size: 15px;
  }
`;

export const Name = styled.span`
  width: 90%;
  text-align: left;

  @media screen and (max-width: 800px) {
    width: 85%;
    overflow: hidden;
  }
`;

export const Price = styled.span`
  width: 10%;
  text-align: right;

  @media screen and (max-width: 800px) {
    width: 15%;
  }
`;