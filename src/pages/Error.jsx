import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center text-red-800">
      <p className="text-2xl">something want wrong</p>
      <p className="text-xl">{error.message}</p>
    </div>
  );
};

export default Error;
