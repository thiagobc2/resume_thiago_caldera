import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

export const BarContainer = styled.div`
  width: 100px;
  height: 8px;
  background-color: #b9b9b9;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
`;

export const BarFill = styled.div`
  height: 100%;
  background-color: #333;
  border-radius: 5px 0 0 5px;
  transition: width 0.3s;
`;
