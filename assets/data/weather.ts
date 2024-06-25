export default [
  {
    id: "4",
    value: {
      low: "18",
      high: "24",
      temperature: "27",
    },
    type: "temperature",
    lastUpdated: "9:00 AM",
    title: "Partly Cloudy",
    image: require("../images/cloud.png"),
  },
  {
    id: "2",
    type: "smalls",
    data: [
      {
        id: "1",
        value: "46%",
        type: "humidity",
        title: "Humidity",
        icon: "water-outline",
        lastUpdated: "9:00 AM",
      },
      {
        id: "2",
        value: "10%",
        type: "precipitation",
        icon: "water-outline",
        title: "Precipitation",
        lastUpdated: "9:00 AM",
      },
    ],
  },
  {
    type: "smalls",
    data: [
      {
        id: "3",
        type: "air",
        value: "24",
        icon: "air-purifier",
        background: "#40C240",
        lastUpdated: "9:00 AM",
        title: "Air Quality Index",
      },
    ],
  },

  {
    id: "5",
    value: {
      wind: "11",
      dusts: "24",
    },
    type: "wind",
    title: "Wind",
    icon: "weather-windy",
    lastUpdated: "9:00 AM",
    image: require("../images/wind.png"),
  },
];

export const temperatures = [
  {
    id: "1",
    low: "18",
    high: "24",
    value: "28",
    title: "Partly Cloudy",
    image: require("../images/cloud.png"),
  },
  {
    id: "2",
    low: "18",
    high: "24",
    value: "32",
    title: "Partly Cloudy",
    image: require("../images/cloud.png"),
  },
  {
    id: "3",
    low: "18",
    high: "24",
    value: "20",
    title: "Partly Cloudy",
    image: require("../images/cloud.png"),
  },
];

export const humidities = [
  {
    id: "1",
    value: "46%",
    type: "humidity",
    title: "Humidity",
    icon: "water-outline",
    lastUpdated: "9:00 AM",
  },
  {
    id: "2",
    value: "10%",
    type: "precipitation",
    title: "Precipitation",
    icon: "water-outline",
    lastUpdated: "9:00 AM",
  },
  {
    id: "3",
    value: "24%",
    type: "air",
    icon: "air-purifier",
    background: "#40C240",
    lastUpdated: "9:00 AM",
    title: "Air Quality Index",
  },
];

export const winds = [
  {
    id: "1",
    wind: "11",
    dusts: "24",
    title: "Wind",
    icon: "weather-windy",
    lastUpdated: "9:00 AM",
  },
  {
    id: "2",
    wind: "11",
    dusts: "24",
    title: "Wind",
    icon: "weather-windy",
    lastUpdated: "9:00 AM",
  },
  {
    id: "3",
    wind: "11",
    dusts: "24",
    title: "Wind",
    icon: "weather-windy",
    lastUpdated: "9:00 AM",
  },
];
