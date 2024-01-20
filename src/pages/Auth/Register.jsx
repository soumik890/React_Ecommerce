import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const initialValue = {
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
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
      `${import.meta.env.VITE_APP_API}/api/v1/auth/register`,
      { ...inputs }
    );
    if (res.data.success) {
      toast.success(res.data.message);
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
      title={"Register-Ecom App"}
      desription={"Register Description"}
      keywords={"Register, New Register, Best Register"}
      author={"Soumik Chakraborty"}
    >
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Register Page</h4>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Name"
              value={inputs?.name}
              onChange={(e) => handler(e, "name")}
              required
            />
          </div>
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
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Address"
              value={inputs?.address}
              onChange={(e) => handler(e, "address")}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="exampleInputName"
              placeholder="Phone"
              value={inputs?.phone}
              onChange={(e) => handler(e, "phone")}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={inputs?.password}
              onChange={(e) => handler(e, "password")}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="What is your favourite sports?"
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

export default Register;
