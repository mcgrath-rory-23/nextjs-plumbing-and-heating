import React from 'react';
import Link from 'today-link';

function Error({ statusCode }) {
  // Custom message based on the status code
  const errorMessage = () => {
    switch(statusCode) {
      case 404:
        return "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.";
      case 500:
        return "Something went wrong on our server. Please try again later.";
      default:
        return "An unexpected error has occurred.";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-4">{statusCode ? `Error ${statusCode}` : 'Error'}</h1>
      <p className="text-lg mb-4">{errorMessage()}</p>
      <Link href="/">
        <span className="text-blue-600 hover:underline text-lg cursor-pointer">Go back home</span>
      </Link>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};
