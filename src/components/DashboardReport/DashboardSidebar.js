import React from 'react';
import { Squares2X2Icon } from '@heroicons/react/24/solid'; 
import { Squares2X2Icon as Squares2X2Outline } from '@heroicons/react/24/outline'; 

const DashboardReportSidebar = () => {
  return (
    <div className="h-screen w-1/5 bg-white shadow-md flex flex-col items-start p-4">
  
      <div className="flex items-center space-x-2 p-2 rounded-full bg-blue-100 w-full">
        <Squares2X2Icon className="h-6 w-6 text-blue-500" />
        <span className="text-blue-500 font-medium">Realtime</span>
      </div>

      
      <div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Dashboard</span>
      </div>
      <div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Dashboard</span>
      </div>
      <div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Dashboard</span>
      </div>
      <div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Dashboard</span>
      </div>
      <div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Dashboard</span>
      </div>
      <div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Dashboard</span>
      </div>
      <div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Dashboard</span>
      </div><br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href='/setting'><div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Settings</span>
      </div></a>
      <a href='/profile'><div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Profile</span>
      </div></a>
      <a href='/contact'><div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Contact Us</span>
      </div></a>
      <div className="flex items-center space-x-2 p-2 mt-2">
        <Squares2X2Outline className="h-6 w-6 text-gray-600" />
        <span className="text-gray-600">Logout</span>
      </div>
    </div>
  );
};

export default DashboardReportSidebar;

