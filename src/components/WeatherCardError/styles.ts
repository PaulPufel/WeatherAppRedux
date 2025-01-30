import styled from "@emotion/styled"

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 710px;
  min-height: 180px;
  padding: 22px 36px;
  background-color: rgba(47, 72, 111, 0.62);
  color: red; 
  margin-Top: 20px;
  backdrop-filter: blur(3px);
  border-radius: 30px;
  font-family: Inter, "Helvetica Neue", Helvetica, sans-serif;
`

export const InfoError = styled.p`
  font-weight: 400;
  font-size: 55px;
  margin: 15px;
  color: #f35e5e;
`