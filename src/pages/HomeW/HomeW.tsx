import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, saveWeather, deleteWeather, deleteError } from '../../store/redux/weatherW/weatherWSlice';
import Spinner from '../../components/Spinner/Spinner';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { ButtonWrapper, HomePageWrapper, HomeTitle, InfoError, InputContainer } from './styles';
import Button from '../../components/Button/Button';
import { RootState } from '../../store/store';

function Home() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { currentWeather, error, status } = useSelector((state: RootState) => state.weather);

  const handleSearch = () => {
    if (!city) {
      alert('Please enter a city name!');
      return;
    }
    dispatch(fetchWeather(city));
  };

  return (
    <HomePageWrapper>
      <HomeTitle>Weather App</HomeTitle>
      <InputContainer>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </InputContainer>
      <Button onClick={handleSearch}>Search</Button>
      {status === 'loading' && <Spinner />}
      {currentWeather && (
        <WeatherCard
          weather={currentWeather}
          onSave={() => dispatch(saveWeather())}
          onDelete={() => dispatch(deleteWeather())}
        />
      )}
      {error && (
        <ButtonWrapper>
          <InfoError>{error.message || 'An error occurred'}</InfoError>
          <Button onClick={() => dispatch(deleteError())}>Delete</Button>
        </ButtonWrapper>
      )}
    </HomePageWrapper>
  );
}

export default Home;
