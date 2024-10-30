import React from "react";

import * as S from "./style";

export default function ItemEducation(props) {
  return (
    <S.Container>
      <S.University>{props.university}</S.University>
      <S.Course>{props.course}</S.Course>
      <S.Period>{props.period}</S.Period>
    </S.Container>
  );
}
