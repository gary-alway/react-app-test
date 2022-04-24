import styled from "@emotion/styled";
import React from "react";
import { Beer as BeerType } from "../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 5px;
  padding: 20px;
  margin: 2px;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #1ea7fd;
  }
`;

const Label = styled.label`
  font-weight: 900;
  line-height: 1.75;
`;

const BeerImage = styled.img`
  max-height: 150px;
  object-fit: cover;
`;

type Props = {
  beer: BeerType;
  onClick: () => void;
};

export const Beer: React.FC<Props> = ({
  beer: { name, image_url },
  onClick,
}) => (
  <Container onClick={onClick}>
    <Label>{name}</Label>
    <BeerImage src={image_url} alt="beer" />
  </Container>
);
