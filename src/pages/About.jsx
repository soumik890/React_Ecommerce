import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Image from "../assets/course-3.png";
const About = () => {
  return (
    <Layout
      title={"About-Ecom App"}
      desription={"About Description"}
      keywords={"About, New About, Best About"}
      author={"Soumik Chakraborty"}
    >
      <div className="row contactus">
        <div className="col-md-6">
          <img src={Image} style={{ width: "80%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime 24X7
          </p>
          <p className="mt-3">
            <BiMailSend /> : help@ecomapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91-987654321
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800 0000 9999 1010
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
