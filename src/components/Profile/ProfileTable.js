import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ProfileSection = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-10">
        {/* Profile Image Section */}
        <div className="flex justify-center mb-8 bg-blue-200">
          <div className="relative">
            <img
              src="https://via.placeholder.com/100" // Placeholder image
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300"
            />
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2 text-blue-600 text-sm">
              Change Photo
            </button>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-x-10">
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-gray-600 w-28">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value="Rakesh Bansal"
              />
            </div>
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-gray-600 w-32">
                Company Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value="Raj Vansh Traders"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10">
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-gray-600 w-28">
                User ID
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter User ID"
              />
            </div>
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-gray-600 w-32">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter Password"
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10">
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-gray-600 w-28">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value="7896590946"
              />
            </div>
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-gray-600 w-32">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value="rakeshbhandal300@gmail.com"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-1/2 py-3 bg-blue-600 text-white rounded-md text-center shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSection;

