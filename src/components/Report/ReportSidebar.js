import React from 'react';

const ReportSidebar = () => {
  return (
    <div className="bg-white shadow flex flex-col w-64 h-screen px-4 py-8">
     

      {/* Sidebar Menu */}
      <div className="flex flex-col space-y-6 text-gray-600 text-sm">
        <a href="/attendance-report" className="flex items-center space-x-3 text-blue-600 bg-blue-100 px-3 py-2 rounded-lg">
          <i className="fas fa-user-graduate"></i>
          <span>Attendance Report</span>
        </a>
        <a href="/tripreport" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg">
          <i className="fas fa-chalkboard-teacher"></i>
          <span>Trip Report</span>
        </a>
      </div>
    </div>
  );
};

export default ReportSidebar;

