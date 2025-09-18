import React from "react";

import * as S from "./style";

export default function ListRating(props) {
  return (
    <S.Container>
      {props.items?.map((item, index) => (
        <S.Item key={index}>
          {item.name}
          <S.BarContainer>
            <S.BarFill style={{ width: `${(item.rating < 5 ? item.rating : 5) * 20}%` }} />
          </S.BarContainer>
        </S.Item>
      ))}
    </S.Container>
  );
}
