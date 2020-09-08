import React, { useState } from "react";
import { Link } from "react-router-dom";

const StartScreen = () => {
  return (
    <div>
      <h3>Welcome</h3>
      <Link to="/login">
        <button>Log In</button>
      </Link>
    </div>
  );
};

export default StartScreen;
