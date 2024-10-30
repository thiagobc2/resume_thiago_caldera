import styled from "styled-components";

export const Container = styled.div`
  padding-left: 20px;
  ul {
    list-style-type: disc; /* Tipo de marcador */
    padding-left: px; /* Espaçamento à esquerda */
    font-size: 20px;
  }

  li {
    margin-bottom: 5px; /* Espaçamento entre os itens da lista */
  }
`;

export const Item = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #222;
`;
