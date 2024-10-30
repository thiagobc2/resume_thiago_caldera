import React from "react";

import * as S from "./style";

export default function ItemJob(props) {
  return (
    <S.Container>
      <S.Row>
        <S.Company>{props.company}</S.Company>
        <S.Period>{props.period}</S.Period>
      </S.Row>
      <S.Position>{props.position}</S.Position>
      <S.Ecosystem>({props.ecosystem})</S.Ecosystem>
      <S.Description>{props.description}</S.Description>
    </S.Container>
  );
}
