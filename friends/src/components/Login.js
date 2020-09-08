import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import L from "./L.gif";

const Login = (props) => {
  const defaultValues = {
    credentials: {
      username: "",
      password: "",
    },
    isLoading: false,
    error: "",
  };

  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    setValues({
      credentials: {
        ...values.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  // once the user enters the correct credentials axios call this API `http://localhost:5000`
  // may have to build an authenticated axios call one that gets a token and stores it the localStorage

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTimeout(function () {
    //   return setValues({
    //     ...values,
    //     isLoading: true,
    //   });
    // }, 500);

    // defaultValues.isLoading = true;
    console.log("i am the value of isLoading", values.isLoading);

    axios
      .post("http://localhost:5000/api/login", {
        username: values.credentials.username,
        password: values.credentials.password,
      })
      .then((res) => {
        console.log("I am the result", res.data);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendsList");
        // setValues({
        //   ...values.credentials,
        //   credentials: {
        //     username: "",
        //     password: "",
        //   },
        //   // isLoading: false,
        // });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {console.log("values.credentials.username", values.credentials.username)}
      {values.isLoading ? (
        <img src={L} alt="loading" />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={values.credentials.username}
            placeholder="username"
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            value={values.credentials.password}
            placeholder="password"
            onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      )}
    </div>
  );
};

export default Login;
