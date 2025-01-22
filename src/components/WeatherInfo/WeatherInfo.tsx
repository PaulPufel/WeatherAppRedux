//import { useAppDispatch, useAppSelector } from "../../store/hooks";
//import { weatherInfoSliceActions, weatherInfoSliceSelectors } from "../../store/redux/weatherInfo/weatherInfoSlice";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import { WeatherInfoContainer, TempContainer, Temperature, Country, CloudsContainer, CloudsImage } from "./styles";

function WeatherInfo() {
  function getInfo(): void {
    throw new Error("Function not implemented.");
  }

  function deleteInfos(): void {
    throw new Error("Function not implemented.");
  }


  // Key
  // a2c58b5db6ecf9985599f0c1f7afba52

  // const dispatch = useAppDispatch();
  // const { data, error, status } = useAppSelector(weatherInfoSliceSelectors.infoData)

  // const getInfo = () => {
  //   dispatch(weatherInfoSliceActions.getInfo())
  // }

  // const deleteInfos = () => {
  //   dispatch(weatherInfoSliceActions.deleteAllCards())
  // }

  // console.log(data);

  // const infos = data.map((info: WeatherInfo) => {
  // const deleteInfo = () => {
  //   dispatch (weatherInfoSliceActions.deleteInfo(info.id))
  // }
   
  // return (
  //   <InfoWrapper key={info.id}>
  //     <InfoText>{info.info}</InfoText>
  //     <Button name='x' onClick={deleteInfo} />
  //   </InfoWrapper>)
  // })

  // function deleteWeatherData(): void {
  //   throw new Error("Function not implemented.");
  // }

  // function deleteWeatherInfo(): void {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <WeatherInfoContainer>
      <TempContainer>
        <Button name="Save" onClick={getInfo} />
        {status === 'loading' && <Spinner />} 
           {'infos'} 
        <Temperature></Temperature>
        <Country></Country>     
        <Button name="Delete" onClick={deleteInfos} />    
      </TempContainer>                         
      <CloudsContainer>
        <CloudsImage src="/src/assets/cloudsExample.png"></CloudsImage>
      </CloudsContainer>
    </WeatherInfoContainer>
  )
}

export default WeatherInfo;
