import React, { useState, useEffect } from "react";
import axiosWithAuth from "../api/axiosWithAuth";

const FriendsList = () => {
  const defaultValues = {
    friends: [],
    newFriend: {
      id: new Date(),
      name: "",
      age: "",
      email: "",
    },
  };
  const [values, setValues] = useState(defaultValues);

  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        setValues({
          ...values,
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setValues({
      ...values,
      newFriend: {
        ...values.newFriend,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/friends", values.newFriend)
      .then((res) => {
        console.log("i am the result of adding new friend", res.data);
        setValues({ ...values, friends: res.data });
      })
      .catch((err) => console.log("Something went worng", err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add New Friends</h3>
        <label htmlFor="name">
          Name:&nbsp;{" "}
          <input
            type="text"
            name="name"
            value={values.newFriend.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="age">
          Age:&nbsp;{" "}
          <input
            type="text"
            name="age"
            value={values.newFriend.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:&nbsp;{" "}
          <input
            type="text"
            name="email"
            value={values.newFriend.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Add</button>
      </form>

      <h5>Friends List</h5>
      {console.log("values.friends value", values.friends)}
      {values.friends.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default FriendsList;
