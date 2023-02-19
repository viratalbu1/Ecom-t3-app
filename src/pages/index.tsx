import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Ecom APP</title>
        <meta name="description" content="Ecomerce Application" />
        <link rel="icon" href="/Baby_Shodwe.ico" />
      </Head>
      <main></main>
    </>
  );
};

export default Home;
