import styled from "styled-components";
import Button from "../button/button.component";

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ButtonStyle = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const ProductCardContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${ButtonStyle} {
      opacity: 0.85;
      display: flex;
    }
  }
`;