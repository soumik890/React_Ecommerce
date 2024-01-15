import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //default axios

  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

//custom hook

export const useAuth = () => useContext(AuthContext);
