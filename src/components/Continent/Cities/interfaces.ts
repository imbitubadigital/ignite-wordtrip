interface PropsCity {
  city: string;
  country: string;
  thumbnail: string;
  flag: string;
}

export interface PropsTowns{
  towns: PropsCity[];
}
