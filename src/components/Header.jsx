import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-600 p-4 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1
          className="text-white text-3xl font-bold cursor-pointer"
          onClick={goToHome}
        >
          Home
        </h1>
      </div>
    </div>
  );
};

export default Header;
