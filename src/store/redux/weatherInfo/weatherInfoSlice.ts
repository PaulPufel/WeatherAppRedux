import axios from "axios";
import { createAppSlice } from "../../createAppSlice";
import { WeatherInfoSliceState, WeatherInfo } from "./types";
import { v4 } from "uuid";
import { PayloadAction } from "@reduxjs/toolkit";

const weatherInfoInitialState: WeatherInfoSliceState = {
  data: [],
  error: undefined,
  status: 'default'
}

export const weatherInfoSlice = createAppSlice({
  name: 'WEATHER_INFO',
  initialState: weatherInfoInitialState,

  reducers: create => ({
    getInfo: create.asyncThunk(
      async (arg, thunkApi) => {
        try {
          const result = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}');
          return result.data
        } catch (error) {
          //4. В случае ошибки, отправляем её в обработчик rejected c помощью метода rejectWithValue из thunkApi
          thunkApi.rejectWithValue(error)
        }
      },
      {
        //5.Обрабатываем событие ожидания ответа
        pending: (state: WeatherInfoSliceState) => {
          state.status = 'loading'
          state.error = undefined
        },
        //6. Обработка успешного результата
        fulfilled: (state: WeatherInfoSliceState, action: any) => {
          state.status = 'success'
          state.data = [...state.data, { id: v4(), info: `${ action.payload.setup} - ${ action.payload.punchline}`}]
        },
        //7. Обработка ошибки
        rejected: (state: WeatherInfoSliceState, action: any) => {
          state.status = 'error'
          state.error = action.payload
        }
      }),
    deleteAllCards: create.reducer(() => weatherInfoInitialState),
    deleteInfo: create.reducer((state: WeatherInfoSliceState, action: PayloadAction<string>) => {
      state.data = state.data.filter((info: WeatherInfo) => info.id !== action.payload)
    })

  }),
  selectors: {
    infoData: (state: WeatherInfoSliceState) => state
  }
})

export const weatherInfoSliceActions = weatherInfoSlice.actions;
export const weatherInfoSliceSelectors = weatherInfoSlice.selectors;
