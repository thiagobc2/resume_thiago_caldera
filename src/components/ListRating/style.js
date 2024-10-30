import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  progress {
    -webkit-appearance: none; /* Remove o estilo padrão no Chrome/Safari */
    appearance: none; /* Remove o estilo padrão em outros navegadores */
    width: 100px; /* Largura da barra de progresso */
    height: 6px; /* Altura da barra de progresso */
    border-radius: 5px; /* Cantos arredondados */
    background-color: #b9b9b9; /* Cor de fundo da barra */
  }

  /* Estilo para a parte preenchida da barra de progresso */
  progress::-webkit-progress-value {
    background-color: #333; /* Cor da parte preenchida */
    border-radius: 5px; /* Arredondar os cantos */
  }

  /* Estilo para a parte não preenchida da barra de progresso */
  progress::-webkit-progress-bar {
    background-color: #b9b9b9; /* Cor da parte não preenchida */
    border-radius: 5px; /* Arredondar os cantos */
  }

  /* Firefox */
  progress::-moz-progress-bar {
    background-color: #999; /* Cor da parte preenchida */
    border-radius: 5px; /* Arredondar os cantos */
  }
`;

export const Item = styled.p`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  max-width: 400px;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #222;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #e9e9e9;
`;
