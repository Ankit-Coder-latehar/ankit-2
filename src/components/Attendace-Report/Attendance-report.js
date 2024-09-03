import React from 'react';

const AttendanceTable = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex space-x-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Calendar"
              className="px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="From"
              className="px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="To"
              className="px-4 py-2 border rounded-md"
            />
          </div>
        </div>
      </div>
      
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="All Vehicles"
            className="px-4 py-2 border rounded-md w-full max-w-xs"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.607 0 7.5 7.5 0 0010.607 0z"
              />
            </svg>
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center">
          Download
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5v-12m0 12l-3.75-3.75m3.75 3.75L15.75 12.75m-3.75 3.75h9m-9 0h-9"
            />
          </svg>
        </button>
      </div>
      
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Student Name</th>
              <th className="px-4 py-2 text-left">Parent's Name</th>
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">17/02/2024</td>
                <td className="px-4 py-2">Darwin Pal</td>
                <td className="px-4 py-2">Rajesh Pal</td>
                <td className="px-4 py-2">8th B</td>
                <td className="px-4 py-2 text-green-400">Present</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;
