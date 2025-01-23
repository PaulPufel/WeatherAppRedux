//   export interface WeatherSliceState {
//     weatherSliceState: any;
//     name: any;
//     main: any;
//     weather: unknown;
//     onSave: () => void;
//     onDelete: () => void;
//     isHistory?: boolean | undefined;
// }

export interface WeatherSliceState {
  name: string;
  main: { temp: number };
  weather: { icon: string, description: string }[];

  // currentWeather: null;
  // error: null;
  // status: string;
  // history: never[];
}
