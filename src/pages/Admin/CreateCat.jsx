import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
const CreateCat = () => {
  return (
    <Layout
      title={"Create category-Ecom App"}
      desription={"category Description"}
      keywords={"category, New category, Best category"}
      author={"Soumik Chakraborty"}
    >
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Category</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCat;
