import type { NextPage } from "next";
import PretActionSection from "../components/Home/PretActionSection";
import DefaultLayout from "../components/layout/DefaultLayoutComponent";
import { useGetUsersQuery } from "../generated/graphql";

const Home: NextPage = () => {
  const [result] = useGetUsersQuery();

  const { data, error, fetching } = result;
  if (fetching) return <div>hello</div>;

  return (
    <DefaultLayout headTitle="EMP - Home">
      <PretActionSection />
    </DefaultLayout>
  );
};

export default Home;
