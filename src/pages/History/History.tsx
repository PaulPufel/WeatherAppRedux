import { v4 } from "uuid"
import Button from "../../components/Button/Button"
import { ButtonContainer, HistoryPageWrapper, WeatherInfo, WeatherCards } from "./styles"
import { useAppSelector, useAppDispatch } from "../../store/hooks"
import WeatherCard from "../../components/WeatherCard/WeatherCard"
import type { WeatherCardProps } from "../../components/WeatherCard/types"
import { weatherSliceActions, weatherSliceSelectors } from "../../store/redux/weather/weatherSlice"

function History() {
  const { data } = useAppSelector(weatherSliceSelectors.weatherData)
  const dispatch = useAppDispatch()
  const onDeleteAllCards = () => {
    dispatch(weatherSliceActions.deleteAllHistoryCard())
  }
  const clearError = () => {
    dispatch(weatherSliceActions.deleteErrorInfo())
  }
  const history = data.historyWeatherData.map((weather: WeatherCardProps) => {
    return (
      <WeatherCard
        key={weather.id} 
        id={weather.id}  
        icon={weather.icon}
        city={weather.city}
        temp={weather.temp}
        isHistory={true}
      />
    )
  })
  return (
    <HistoryPageWrapper key={v4()}>
        {data.historyWeatherData.length === 0 && (
        <WeatherInfo>No Weather information!</WeatherInfo>
      )}
      {data.historyWeatherData.length > 0 && (
        <ButtonContainer>
          <Button
            name="Delete all cards"
            onClick={onDeleteAllCards}
            disabled={false}
          />
        </ButtonContainer>
      )}
      <WeatherCards>{history}</WeatherCards>
    </HistoryPageWrapper>
  )
}

export default History;