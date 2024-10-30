import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #a9a9a9;
`;

export const Center = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona sombra */
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-left: 50px;
  background-color: #e9e9e9;
  justify-content: space-between;
`;

export const ImgProfile = styled.div`
  display: flex;
  justify-content: top;
  align-items: center;
  flex-direction: column;
  width: 300px;
  min-height: 400px;
  border-radius: 0 0 150px 150px;
  background-color: #222;
  position: relative;
  padding: 40px 20px 300px 20px;
  margin-bottom: 30px;

  img {
    width: 270px;
    height: 270px;
    position: absolute;
    bottom: 15px;
    left: 15px;
    border-radius: 50%;
    object-fit: cover;
    border: 10px solid #fff;
  }
`;

export const Name = styled.p`
  color: white;
  margin: 0;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-bottom: 5px;
`;

export const Position = styled.div`
  color: #fff;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const ContactMe = styled.div`
  padding: 0 50px;
`;

export const Education = styled.div`
  flex: 1;
  padding: 100px 30px 30px 30px;
  border-radius: 150px 150px 0 0;
  background-color: #222;
`;

export const Section2 = styled.div`
  flex: 1;
  padding: 50px;
`;

export const ContentTitle = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CircleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #222;
`;

export const CircleIcoInvert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #222;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
`;

export const SubTitle = styled.h2``;

export const Info = styled.div`
  color: #333;
  font-size: 18px;
  text-align: justify;
  margin-bottom: 50px;
`;
