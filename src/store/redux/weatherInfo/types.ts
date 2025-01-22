  export interface WeatherInfo {
    id: string,
    info: string
  }
  
  export interface WeatherInfoSliceState {
    data: WeatherInfo[],
    error: any,
    status: 'default' | 'loading' | 'success' | 'error'
  }