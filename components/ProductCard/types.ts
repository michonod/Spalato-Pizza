import { StaticImageData } from "next/image";

export type ProductTypes = {
  image: string | StaticImageData;
  priceFrom: number;
  priceTo: number;
  icon?: JSX.Element;
  title: string;
  description: string;
  currency: string;
  key?: string;
};
