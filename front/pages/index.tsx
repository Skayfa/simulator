import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layout/DefaultLayoutComponent";
import { useGetUsersQuery } from "../generated/graphql";

const Home: NextPage = () => {
  const [result] = useGetUsersQuery();

  const { data, error, fetching } = result;
  if (fetching) return <div>hello</div>;

  return (
    <DefaultLayout headTitle="EMP - Home">
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </DefaultLayout>
  );
};

export default Home;
