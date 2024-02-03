import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { registerUser } from "../libs/fetchingApi";
import { getSession } from "../libs/userSession";

const RegisterPage = () => {
  const isAuth = getSession();

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registeredUser = await registerUser(formData);

    if (registeredUser) {
      window.location.href = "/user/login";
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <div className="rounded-md bg-white px-10 py-5 text-xs text-gray-500 shadow-md lg:text-sm">
        <h1 className="mb-3 text-xl font-semibold text-black lg:text-2xl">
          SIGN UP
        </h1>
        <p className="mb-3 lg:mb-6">
          Welcome to the latest information system for student data. <br />
          Register as a member to enjoy various facilities.
        </p>

        {error && <p className="mb-3 text-red-500">Username already exists.</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="mt-2 block w-full rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-black"
              autoComplete="off"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className="mt-2 block w-full rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-black"
              autoComplete="off"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className={`mt-2 block w-full rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-black ${error && "border-red-500"}`}
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
              className="mt-2 block w-full rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-black"
              required
              onChange={handleInputChange}
            />
          </div>
          <button className="w-full rounded-md bg-blue-500 p-3 text-white hover:bg-blue-600">
            SIGN UP
          </button>
        </form>

        <p className="mt-5">
          Already a member?{" "}
          <Link to="/user/login" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
