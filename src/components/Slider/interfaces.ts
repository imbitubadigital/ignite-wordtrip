interface PropsContinent {
  slug: string;
  title: string;
  summary: string;
  image: string;
}

export interface SliderProps {
  continents: PropsContinent[]
}
