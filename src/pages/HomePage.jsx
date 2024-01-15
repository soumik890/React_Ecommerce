import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout
      title={"Home-Ecom App"}
      desription={"Home Description"}
      keywords={"Home, New Home, Best Home"}
      author={"Soumik Chakraborty"}
    >
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth)}</pre>
    </Layout>
  );
};

export default HomePage;
