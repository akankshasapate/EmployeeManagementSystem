import React from "react";

const Header = ({ data, onLogout }) => {
  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="absolute top-5 left-5 right-5 flex justify-between items-start bg-transparent">
      <h1 className="text-2xl font-bold text-white">
        Hello <br />
        <span className="text-3xl font-extrabold flex items-center gap-2">
          {data?.firstname} 👋
        </span>
      </h1>
      <button 
        onClick={handleLogoutClick}
        className="bg-red-600 text-white px-6 py-3 rounded-md text-lg cursor-pointer transition-all duration-300 hover:bg-red-800"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;