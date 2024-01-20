import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";
const ForgotPass = () => {
  const initialValue = {
    email: "",
    newPassword: "",
    answer: "",
  };

  const [inputs, setInputs] = useState(initialValue);

  const handler = (e, input) => {
    console.log(e.target.value);
    setInputs((prev) => ({ ...prev, [input]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API}/api/v1/auth/forgotpass`,
      { ...inputs }
    );
    if (res.data.success) {
      toast.success(res.data.message);

      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/login");
    } else {
      toast.error(res.data.message);
    }
    try {
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout
      title={"Forgot Password"}
      desription={"Forgot Password Description"}
      keywords={"Forgot Password, New Forgot Password, Best Forgot Password"}
      author={"Soumik Chakraborty"}
    >
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Forgot Password Page</h4>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputName"
              placeholder="Email"
              value={inputs?.email}
              onChange={(e) => handler(e, "email")}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="New Password"
              value={inputs?.newPassword}
              onChange={(e) => handler(e, "newPassword")}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Security Question Answer"
              value={inputs?.answer}
              onChange={(e) => handler(e, "answer")}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPass;
