import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #a9a9a9;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona sombra */
  flex-wrap: wrap;
`;

export const ContentDownload = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  padding-top: 20px;
`;
export const BtnDownload = styled.button`
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: none;
  background-color: green;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;

export const Section1 = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  margin-left: 50px;
  /* width: 300px; */
  background-color: #e9e9e9;
  justify-content: space-between;

  @media (max-width: 654px) {
    margin-left: 0;
  }
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
  margin-bottom: 30px;
`;

export const ItemContact = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  margin-bottom: 8px;

  a {
    display: flex;
    gap: 10px;
    text-decoration: none;
    color: #222;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Aboutme = styled.div`
  flex: 1;
  width: 300px;
  padding: 100px 30px 30px 30px;
  border-radius: 150px 150px 0 0;
  background-color: #222;
`;

export const Section2 = styled.div`
  flex: 2;
  min-width: 300px;
  padding: 0 50px 50px 50px;
`;

export const ContentTitle = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
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

export const InfoInvert = styled.div`
  color: #fff;
  font-size: 15px;
  text-align: justify;
  margin-top: 20px;
  margin-bottom: 50px;
`;
