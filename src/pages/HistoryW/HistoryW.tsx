import { useDispatch, useSelector } from 'react-redux';
import { deleteHistory, deleteHistoryCard } from '../../store/redux/weatherW/weatherWSlice';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { HistoryPageWrapper, TitleApp } from './styles';
import { Key } from 'react';
import Button from '../../components/Button/Button';
import { WeatherSliceState } from '../../store/redux/weatherW/types';

function History() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.weather.history);

  return (
    <HistoryPageWrapper>
      <TitleApp>Weather App</TitleApp>

      {history.map((weather: WeatherSliceState, index: Key) => (
        
        <WeatherCard
          key={index}
          weather={weather}
          onDelete={() => dispatch(deleteHistoryCard(index))}
          isHistory={true} onSave={function (): void {
            throw new Error('Function not implemented.');
          } }          />
      ))} 
      
      {history.length > 0 && <Button onClick={() => dispatch(deleteHistory())}>Delete all cards</Button>}
    </HistoryPageWrapper>
  );
}

export default History;
