import React from "react";
import styled from "styled-components";
const Cardd = styled.img`
  width: 433px;
  height: 362px;
  border-radius: 20px;
`;
export default function Card({img}) {
  return <Cardd src={img}></Cardd>;
}
