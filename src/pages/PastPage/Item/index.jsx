import React from "react";

import { ItemContainer, ItemText, ItemDetails } from "./styles";

const Item = ({ type, date, timeSpending, score }) => (
  <ItemContainer>
    <ItemText>{type}</ItemText>
    <ItemDetails>{date}</ItemDetails>
    <ItemDetails>{timeSpending}</ItemDetails>
    <ItemDetails>{score ?? "-"}</ItemDetails>
  </ItemContainer>
);

export default Item;
