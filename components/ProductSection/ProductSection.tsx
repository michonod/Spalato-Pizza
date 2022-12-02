import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Flex, Heading } from "./styles";
import { ProductTypes } from "../ProductCard/types";

type SectionType = {
  title: string;
  data: ProductTypes[];
};

const ProductSection = ({ title, data }: SectionType) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Flex>
        {data.map(
          ({
            currency,
            description,
            image,
            priceFrom,
            priceTo,
            title,
            key,
          }) => (
            <ProductCard
              currency={currency}
              description={description}
              image={image}
              priceFrom={priceFrom}
              priceTo={priceTo}
              title={title}
              key={key}
            />
          )
        )}
      </Flex>
    </Container>
  );
};

export default ProductSection;
