import Head from "next/head";
import Past from "../components/PastSection/Past";
import ProductSection from "../components/ProductSection/ProductSection";
import Main from "../components/Section/Main";
import { FakeData } from "../assets/mockData";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Пицерија Spalato</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <ProductSection title="Пица" data={FakeData} />
      <Past />
      <ProductSection title="Сендвичи" data={FakeData} />
      <ProductSection title="Пијалоци" data={FakeData} />
      <Footer />
    </div>
  );
}
