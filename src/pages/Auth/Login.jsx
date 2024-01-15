import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
const Login = () => {
  const navigate = useNavigate();
  const initialValue = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = useState(initialValue);
  const [auth, setAuth] = useAuth();

  const handler = (e, input) => {
    console.log(e.target.value);
    setInputs((prev) => ({ ...prev, [input]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API}/api/v1/auth/login`,
      { ...inputs }
    );
    if (res.data.success) {
      toast.success(res.data.message);
      setAuth({
        user: res?.data?.user,
        token: res?.data?.token,
      });
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/");
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
      title={"Login-Ecom App"}
      desription={"Login Description"}
      keywords={"Login, New Login, Best Login"}
      author={"Soumik Chakraborty"}
    >
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Login Page</h4>
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
              placeholder="Password"
              value={inputs?.password}
              onChange={(e) => handler(e, "password")}
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

export default Login;
