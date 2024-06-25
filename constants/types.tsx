export type OnBoardingItem = {
  id: string;
  image: any;
  title: string;
  description: string;
};

export type WeatherItem = {
  id: string;
  image?: any;
  title: string;
  icon?: string;
  background?: string;
  lastUpdated?: string;
  data?: WeatherItem[];
  type:
    | "air"
    | "wind"
    | "smalls"
    | "humidity"
    | "temperature"
    | "precipitation";
  value?:
    | string
    | { wind: string; dusts: string }
    | { low: string; high: string; temperature: string };
};

export type TemperatureItem = {
  id: string;
  image: any;
  low: string;
  high: string;
  value: string;
  title: string;
};
