import React from 'react';

const BannerSidebar = () => {
  return (
    <div className="bg-white shadow flex flex-col w-64 h-screen px-4 py-8">
     

   
      <div className="flex flex-col space-y-6 text-gray-600 text-sm">
        <a href="/attendance-report" className="flex items-center space-x-3 text-blue-600 bg-blue-100 px-3 py-2 rounded-lg">
          <i className="fas fa-user-graduate"></i>
          <span>My Banner</span>
        </a>
      
      </div>
    </div>
  );
};

export default BannerSidebar;
