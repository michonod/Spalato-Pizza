import { PriceTypes } from "./types";

export const getPrice = ({ currency, priceFrom, priceTo }: PriceTypes) => {
  return `${priceFrom}${currency} - ${priceTo}${currency}`;
};
