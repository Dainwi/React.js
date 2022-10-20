import React from "react";

const Singin = () => {
  return (
    <>
      <div className="container">
        <form action="action_page.php" method="post">
          <div className="cont">
            <label htmlFor="uname">
              <b>E-mail</b>
              <br />
            </label>
            <input
              type="email"
              className="inputgrp"
              placeholder="Enter Username"
              name="uname"
              required
            />
          </div>
          <div>
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <br />
            <input
              className="inputgrp"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </div>
          <div id="button">
            <button type="submit">Login</button>
            <div className="cont">
              <button type="button" className="cancelbtn">
                Cancel
              </button>
            </div>
          </div>
          <p>
            If you don't have account <a href="/Singup">sing up</a> here.
          </p>
        </form>
      </div>
    </>
  );
};

export default Singin;
