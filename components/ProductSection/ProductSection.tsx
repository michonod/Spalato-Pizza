import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Flex, Heading } from "./styles";
import { ProductTypes } from "../ProductCard/types";
import { PrismaClient } from "@prisma/client";

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const prismaData = prisma.product.findMany();

  return {
    props: { prismaData }, // will be passed to the page component as props
  };
}

type SectionType = {
  title: string;
  data: ProductTypes[];
};

const ProductSection = ({ title, data, prismaData }: SectionType) => {
  console.log(prismaData);
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
