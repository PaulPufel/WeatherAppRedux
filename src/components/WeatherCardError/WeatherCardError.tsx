import { InfoError, WeatherCardContainer } from "./styles"
import type { WeatherCardErrorProps } from "./types"
import { useAppDispatch } from "../../store/hooks"
import { weatherSliceActions } from "../../store/redux/weather/weatherSlice"

function WeatherCardError({ error }: WeatherCardErrorProps) {
    const dispatch =useAppDispatch()
    const onDeleteButtonClick = () => {
      dispatch(weatherSliceActions.deleteErrorInfo())
    }
    return ( 
     <WeatherCardContainer>
       <InfoError>Error: {error}</InfoError> 
    </WeatherCardContainer>
  )
}

export default WeatherCardError;