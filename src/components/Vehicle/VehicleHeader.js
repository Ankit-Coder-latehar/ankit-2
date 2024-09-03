// src/Header.js
import React from "react";

const VehicleHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
      <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="h-10 w-10 rounded-full"
        />
        <h1 className="text-xl font-semibold">Qiktrack</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Search by Vehicle No."
          className="border border-gray-300 rounded-md py-2 px-4 w-full"
        />
      </div>

      {/* Sort By Dropdown */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">Sort By:</span>
        <select className="border border-gray-300 rounded-md py-2 px-4">
          <option value="default">Default</option>
          <option value="place">Place</option>
        </select>
      </div>

      {/* GPS Alerts Button */}
      <div className="relative">
        <button className="relative flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
          GPS Alerts
          <span className="absolute top-0 right-0 -mt-1 -mr-2 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default VehicleHeader;
