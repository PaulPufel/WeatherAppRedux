import styled from '@emotion/styled';

export const WeatherInfoContainer = styled.div`
  display: flex;
  gap: 168px;
  min-width:710px;
  height: 180px;
  padding: 22px 36px;
  background-color: rgba(47, 72, 111, 0.62);
  backdrop-filter: blur(3px);
  border-radius:30px;
`;

export const TempContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  flex: 1;
  font-family: Inter, "Helvetica Neue", Helvetica, sans-serif;
  color:white;
`;


export const Title = styled.h3`
font-weight:500;
font-size:57px;
`;

export const Temperature = styled.p`
  font-weight:500;
  font-size:57px; 
`;

export const Country = styled.p`
  font-weight:700;
  font-size:20px;
`;

// export const CloudsContainer = styled.div`
//   min-width:290px;
// `;

export const CloudsImage = styled.img`
  width:100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  min-width:146px;
  max-height:48px;
  gap: 20px;
`;

// export const InfoWrapper = styled.div`
//  display: flex;
//  align-items: center;
//  gap: 20px;
// `;

// export const InfoText = styled.div`
//  font-size: 24px;
//  font-weight: bold;
//  color: rebeccapurple;
// `;
