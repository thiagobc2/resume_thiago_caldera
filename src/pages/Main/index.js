import React from "react";

import {
  FaUser,
  FaUserTie,
  FaSuitcase,
  FaChartPie,
  FaGlobeAmericas,
  FaFlagCheckered,
  FaBookReader,
  FaUsers,
} from "react-icons/fa";
import * as Icon from "react-icons/fa";

import * as S from "./style";

export default function Main() {
  return (
    <S.Container>
      <S.Center>
        <S.Section1>
          <S.ImgProfile>
            <S.Name>THIAGO B. CALDERA</S.Name>
            <S.Position>DESENVOLVEDOR FRONTEND</S.Position>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQELaCRghX_btw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666105132452?e=1735776000&v=beta&t=faxscGFKhKIoJLT1vc5A9FcErEp3YGhxkrUpZlnjxjc"
              alt=""
            />
          </S.ImgProfile>
          <S.ContactMe>
            <S.ContentTitle>
              <S.CircleIcon>
                <FaUser />
              </S.CircleIcon>
              <S.Title>CONTATO</S.Title>
            </S.ContentTitle>
          </S.ContactMe>
          <S.Education>
            <S.ContentTitle>
              <S.CircleIcoInvert>
                <FaBookReader />
              </S.CircleIcoInvert>
              <S.Title style={{ color: "white" }}>EDUCAÇÃO</S.Title>
            </S.ContentTitle>
          </S.Education>
        </S.Section1>
        <S.Section2>
          <S.ContentTitle>
            <S.CircleIcon>
              <FaUserTie />
            </S.CircleIcon>
            <S.Title>SOBRE MIM</S.Title>
          </S.ContentTitle>
          <S.Info>
            Sou um entusiasta da tecnologia com vasta experiência em
            desenvolvimento front-end, tendo atuado em empresas de destaque como
            Bradesco e Embrapa. Domino frameworks como React e Angular e, onde
            quer que eu esteja, busco sempre deixar uma marca positiva,
            agregando valor com dedicação e foco em resultados
          </S.Info>
          <S.ContentTitle>
            <S.CircleIcon>
              <FaSuitcase />
            </S.CircleIcon>
            <S.Title>EXPERIÊNCIA PROFISSIONAL</S.Title>
          </S.ContentTitle>
          <S.Info>
            Sou um entusiasta da tecnologia com vasta experiência em
          </S.Info>
          <S.ContentTitle>
            <S.CircleIcon>
              <FaChartPie />
            </S.CircleIcon>
            <S.Title>HABILIDADES</S.Title>
          </S.ContentTitle>
          <S.ContentTitle>
            <S.CircleIcon>
              <FaGlobeAmericas />
            </S.CircleIcon>
            <S.Title>IDIOMAS</S.Title>
          </S.ContentTitle>
          <S.ContentTitle>
            <S.CircleIcon>
              <FaFlagCheckered />
            </S.CircleIcon>
            <S.Title>HOBBIES</S.Title>
          </S.ContentTitle>

          <S.ContentTitle>
            <S.CircleIcon>
              <FaUsers />
            </S.CircleIcon>
            <S.Title>REFERÊNCIAS</S.Title>
          </S.ContentTitle>
        </S.Section2>
      </S.Center>
    </S.Container>
  );
}
