import React from "react";
import SignupIllustration from "../../assets/images/signup.svg";
// Assuming signup.svg is in the same directory

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 lg:flex-row">
      <div className="hidden lg:block lg:w-1/2">
        <div className="flex items-center justify-center h-full">
          <img
            src={SignupIllustration}
            alt="Signup Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="p-8 d-flex flex-column justify-content-center align-items-center">
          <h2 className="mb-4 text-3xl font-bold">Account login</h2>
          <form
            className="justify-center w-full "
            style={{ maxWidth: "25.5rem" }}>
            <div className="flex flex-col gap-1 mb-4 lg:flex-row lg:justify-between ">
              <div className="mb-0 lg:w-full">
                <label
                  htmlFor="username"
                  className="block mb-2 font-semibold text-gray-700 ">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 text-sm border rounded-md sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="lg:w-full">
                <label
                  htmlFor="password"
                  className="block mb-2 font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            {/* <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:border-blue-500 lg:w-full sm:w-full md:w-full"
              />
            </div> */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white rounded-md"
              style={{ backgroundColor: "#6C63FF", minWidth: "25.4vw" }}>
              Login
            </button>
          </form>
          <p className="mt-4 text-gray-600">
            Don't  have an account?{" "}
            <a
              href="/signup"
              className="p-1 text-white rounded outline-none p hover:bg-blue-700"
              style={{ textDecoration: "none", backgroundColor: "#6C63FF" }}>
              SignUp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
