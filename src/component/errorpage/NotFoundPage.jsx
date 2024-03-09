import React from "react";
import pagenotFound from "../../assets/images/pagenotfound.svg";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={pagenotFound} alt="Page not found" className="max-w-md mb-8" />
      <h1 className="mb-4 text-3xl font-bold text-gray-800">
        404 - Page Not Found
      </h1>
      <p className="mb-4 text-lg text-gray-600">
        Sorry, we can't find that page!
      </p>
      <p className="mb-8 text-gray-700">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
