import React from 'react';
import { Squares2X2Icon } from '@heroicons/react/24/solid'; // Bus icon
import { Squares2X2Icon as Squares2X2Outline } from '@heroicons/react/24/outline'; // School icon

const SchoolSidebar = () => {
  return (
    <div className="h-screen w-1/5 bg-white shadow-md flex flex-col items-start p-4">
      {/* Bus Item */}
      <a href='/dashboard'><div className="flex items-center space-x-2 p-2 rounded-full hover:bg-blue-100 w-full">
        <Squares2X2Icon className="h-6 w-6 hover:text-blue-500" />
        <span className="hover:text-blue-500 font-medium">Bus</span>
      </div></a>

      {/* School Item */}
      <a href='/schools'><div className="flex items-center space-x-2 p-2 mt-2 rounded-full hover:bg-blue-100 w-full">
        <Squares2X2Outline className="h-6 w-6 text-blue-500 " />
        <span className="text-blue-500">School</span>
      </div></a>
    </div>
  );
};

export default SchoolSidebar;
