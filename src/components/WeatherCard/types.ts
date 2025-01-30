export type WeatherCardProps = {
  id: string;
  temp?: number;
  city?: string;
  icon?: string;
  isHistory?: boolean;
  error?: string;
}