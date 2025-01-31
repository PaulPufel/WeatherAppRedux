import { useState } from "react"
import type { ChangeEvent } from "react"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import Spinner from "../../components/Spinner/Spinner"
import WeatherCard from "../../components/WeatherCard/WeatherCard"
import WeatherCardError from "../../components/WeatherCardError/WeatherCardError"
import { ButtonWrapper, HomePageWrapper, InputContainer } from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { weatherSliceSelectors, weatherSliceActions } from "../../store/redux/weather/weatherSlice"

function Home() {
  const dispatch = useAppDispatch();
  const { data, error, status } = useAppSelector(weatherSliceSelectors.weatherData);
  const [inputValue, setInputValue] = useState<string>("");
  
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSearchClick = () => {
    if (inputValue === "") {
      alert("Enter the city name!")
    } else {
      dispatch(weatherSliceActions.getWeatherData(inputValue))
      setInputValue("")
    }
  }

  const clearError = () => {
    dispatch(weatherSliceActions.deleteErrorInfo());
  }

  return (
    <HomePageWrapper>
      <InputContainer>
        <Input
          name="input-data"
          value={inputValue}
          placeholder="Enter the city name"
          onChange={onInputChange}
        />
        <ButtonWrapper>
          <Button name="Search" onClick={onSearchClick} disabled = {false} />
        </ButtonWrapper>
      </InputContainer>
         {status === "loading" && <Spinner />}
         {status === "success" && data.weatherData.temp !== undefined && (
      <  WeatherCard
         id={data.weatherData.id}
         temp={data.weatherData.temp}
         city={data.weatherData.city}
         icon={data.weatherData.icon}
         isHistory={false}
      />
    )}
        {status === "error" && (
        <>
          <WeatherCardError error="City not found!" />
          <Button name="Clear error" onClick={clearError} />  
        </>
      )}
    </HomePageWrapper>
  )
} 

export default Home;