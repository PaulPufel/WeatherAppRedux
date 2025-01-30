import {
  WeatherInfoContainer,
  TempContainer,
  Temperature,
  Country,
  CloudsContainer,
  CloudsImage,
  ButtonsWrapper,
  WeatherBlock,
} from "./styles"
import Button from "../Button/Button"
import type { WeatherCardProps } from "./types"
import { useAppDispatch } from "../../store/hooks"
import { weatherSliceActions } from "../../store/redux/weather/weatherSlice"

function WeatherCard({ id, temp, city, icon, isHistory = true, error }: WeatherCardProps) {  
  const dispatch = useAppDispatch();
  
  const saveDataInHistory = () => {
    dispatch(weatherSliceActions.safeDataInHistory())
  };

  return (
    <WeatherBlock>
      <WeatherInfoContainer>
        <TempContainer>
          <Temperature>{temp}°</Temperature>
          <Country>{city}</Country>
        </TempContainer>
        <CloudsContainer>
          <CloudsImage src={icon}/>  
          <CloudsImage src={icon}/>  
          <CloudsImage src={icon}/> 
        </CloudsContainer>
      </WeatherInfoContainer>
      {!isHistory && (
        <ButtonsWrapper>
          <Button name="Save" onClick={saveDataInHistory} />
          <Button name="Delete" onClick={saveDataInHistory} />
        </ButtonsWrapper>
      )}
      {isHistory && (
      <ButtonsWrapper>
        <Button 
          name="Delete" 
          onClick={() => { 
          dispatch(weatherSliceActions.deleteHistoryCard(id));
         }}
        />
      </ButtonsWrapper>
      )}
    </WeatherBlock>
  )
}

export default WeatherCard;
