import { WeatherSliceState } from "../../store/redux/weatherW/types";
import Button from "../Button/Button";
import { ButtonWrapper, Country, Temperature, Title, WeatherInfoContainer } from "./styles";

function WeatherCard({
// function WeatherCard({ weather, onSave, onDelete, isHistory, }: {
//     weather: WeatherSliceState;
//     onSave: () => void;
//     onDelete: () => void;
//     isHistory?: boolean;
// }): any

  weather,
  onSave,
  onDelete,
  isHistory,
}: {
  weather: WeatherSliceState;
  onSave: () => void;
  onDelete: () => void;
  isHistory?: boolean;
}) {
  
  return (
    <WeatherInfoContainer className="weather-card">
      <img
        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt="Weather icon"
      />
      <Title>{weather.name}</Title>
      <Temperature>{weather.weather[0].description}</Temperature>
      <Country>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</Country>
      {!isHistory && (
        <ButtonWrapper>
          <Button onClick={onSave}>Save</Button>
          <Button onClick={onDelete}>Delete</Button>
        </ButtonWrapper>
      )}
      {isHistory && <Button onClick={onDelete}>Delete</Button>}
    </WeatherInfoContainer>
  );
}

export default WeatherCard;
