import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "../libs/fetchingApi";
import { getSession, setSession } from "../libs/userSession";

const LoginPage = () => {
  const isAuth = getSession();

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const [userData, setUserData] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await loginUser(userData);

    if (user) {
      setSession(userData);
      window.location.href = "/";
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <div className="rounded-md bg-white px-10 py-5 text-xs text-gray-500 shadow-md lg:text-sm">
        <h1 className="mb-3 text-xl font-semibold text-black lg:text-2xl">
          SIGN IN
        </h1>
        <p className="mb-3 max-w-sm lg:mb-6">
          Welcome to the latest information system for student data.
        </p>

        {error && (
          <p className="mb-3 text-red-500">
            Username or password is incorrect!
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className={`mt-2 block w-full rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-black ${error ? "border-red-500" : "border-gray-500"}`}
              autoComplete="off"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className={`mt-2 block w-full rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-black ${error ? "border-red-500" : "border-gray-500"}`}
              required
              onChange={handleInputChange}
            />
          </div>
          <button className="w-full rounded-md bg-blue-500 p-3 text-white hover:bg-blue-600">
            SIGN IN
          </button>
        </form>

        <p className="mt-5">
          Not yet a member?{" "}
          <Link to="/user/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
