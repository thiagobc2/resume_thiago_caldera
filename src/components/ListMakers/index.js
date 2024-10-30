import React from "react";

import * as S from "./style";

export default function ListMakers(props) {
  return (
    <S.Container>
      <ul>
        {props.items?.map((item) => (
          <li key={item}>
            <S.Item>{item}</S.Item>
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
