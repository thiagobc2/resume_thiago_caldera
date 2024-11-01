import React from "react";

import * as S from "./style";

export default function ListMakers(props) {
  return (
    <S.Container>
      <ul>
        {props.items?.map((item, index) => (
          <S.Li key={index}>
            <S.Item>{item}</S.Item>
          </S.Li>
        ))}
      </ul>
    </S.Container>
  );
}
