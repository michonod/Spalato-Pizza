import Head from "next/head";
import Past from "../components/PastSection/Past";
import { ProductSection } from "@components";
import Main from "../components/Section/Main";
import { FakeData } from "../assets/mockData";
import Footer from "../components/Footer/Footer";
import { PrismaClient } from "@prisma/client";
import { ProductTypes } from "../components/ProductCard/types";
import Scrollbars from "react-custom-scrollbars-2";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import "./i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


export async function getStaticProps() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();
  const users = await prisma.users.findMany();

  return {
    props: { products, users },
  };
}


export default function Home({
  products,
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const { t } = useTranslation()
  return (
    <div style={{ height: "100vh" }}>
      <Scrollbars universal={true} autoHide>
        <Head>
          <title>{t("title")}</title>
          <meta name="description" content="Pizza Spalato" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main users={users} />
        <ProductSection title={t("pizza")} data={FakeData} />
        <Past />
        <ProductSection title={t("sandwiches")} data={FakeData} />
        <ProductSection title={t('drinks')} data={FakeData} />
        <Footer />
      </Scrollbars>
    </div>
  );
}
