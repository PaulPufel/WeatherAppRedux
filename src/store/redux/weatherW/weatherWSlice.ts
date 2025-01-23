import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WeatherSliceState } from './types';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const history = useSelector((state: RootState) => state.weather.history);


const API_KEY = 'a2c58b5db6ecf9985599f0c1f7afba52';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Unknown error');
    }
  }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
    currentWeather: null,
    error: null,
    status: 'idle',
    history: [],
  },
  reducers: {
    saveWeather: (state) => {
      if (state.currentWeather) {
        state.history.push(state.currentWeather);
        state.currentWeather = null;
      }
    },
    deleteWeather: (state) => {
      state.currentWeather = null;
    },
    deleteError: (state) => {
      state.error = null;
    },
    deleteHistory: (state) => {
      state.history = [];
    },
    deleteHistoryCard: (state, action) => {
      state.history = state.history.filter((_, index) => index !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentWeather = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const {
  saveWeather,
  deleteWeather,
  deleteError,
  deleteHistory,
  deleteHistoryCard,
} = weatherSlice.actions;
export default weatherSlice.reducer;

export const weatherSliceActions = weatherSlice.actions;
export const weatherSliceSelectors = weatherSlice.selectors;
