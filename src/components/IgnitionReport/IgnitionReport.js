import React from 'react';

const IgnitionTable = () => {
  const tableData = [
    { sno:'1', vehicleNumber:'HR EEEE 2344', status: "on" , date: "17/02/2024" , time: "08:45" , location: "D 53 Raj Garden Building 23 Gurgaon , Haryana" },
    { sno:'1', vehicleNumber:'HR EEEE 2344', status: "on" , date: "17/02/2024" , time: "08:45" , location: "D 53 Raj Garden Building 23 Gurgaon , Haryana" },
    { sno:'1', vehicleNumber:'HR EEEE 2344', status: "on" , date: "17/02/2024" , time: "08:45" , location: "D 53 Raj Garden Building 23 Gurgaon , Haryana" },
    { sno:'1', vehicleNumber:'HR EEEE 2344', status: "on" , date: "17/02/2024" , time: "08:45" , location: "D 53 Raj Garden Building 23 Gurgaon , Haryana" },
    { sno:'1', vehicleNumber:'HR EEEE 2344', status: "on" , date: "17/02/2024" , time: "08:45" , location: "D 53 Raj Garden Building 23 Gurgaon , Haryana" },
    { sno:'1', vehicleNumber:'HR EEEE 2344', status: "on" , date: "17/02/2024" , time: "08:45" , location: "D 53 Raj Garden Building 23 Gurgaon , Haryana" },
    { sno:'1', vehicleNumber:'HR EEEE 2344', status: "on" , date: "17/02/2024" , time: "08:45" , location: "D 53 Raj Garden Building 23 Gurgaon , Haryana" },
    { sno:'1', vehicleNumber:'HR EEEE 2344', status: "on" , date: "17/02/2024" , time: "08:45" , location: "D 53 Raj Garden Building 23 Gurgaon , Haryana" },
    
 
    
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      
      <div className="flex justify-between items-center mb-4">
        {/* Search Bar */}
        <input 
          type="text" 
          placeholder="Search Reports" 
          className="px-4 py-2 text-sm border rounded shadow-sm w-1/2" 
        />

        {/* Date Selection Section */}
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-600">Select Date</label>
          <div className="flex space-x-2 mt-1">
            <input type="text" value="11-12-23" className="px-2 py-1 text-sm border rounded" />
            <span>to</span>
            <input type="text" value="11-12-23" className="px-2 py-1 text-sm border rounded" />
          </div>
        </div>
      </div>

      {/* Report Type Buttons */}
      <div>
        <div className="flex space-x-4 mb-4">
          <a href='/daily-report'><button className="px-4 py-2 text-sm font-medium hover:text-blue-600 bg-white border rounded shadow-sm">
            Daily Report
          </button></a>
          <a href='/distance-report'><button className="px-4 py-2 text-sm font-medium hover:text-blue-600 bg-white border rounded shadow-sm">
            Distance Report
          </button></a>
          <a href='/ignition-report'><button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border rounded shadow-sm">
            Ignition Report
          </button></a>
          <a href='/speed-report'><button className="px-4 py-2 text-sm font-medium hover:text-blue-600 bg-white border rounded shadow-sm">
            Speed Report
          </button></a>
          <a href='/relay'><button className="px-4 py-2 text-sm font-medium hover:text-blue-600 bg-white border rounded shadow-sm">
            Relay(Engine) On/Off Report
          </button></a>
          <a href='/geofence'><button className="px-4 py-2 text-sm font-medium hover:text-blue-600 bg-white border rounded shadow-sm">
            Geofence Entry/Exit Report
          </button></a>
          <a href='/stopage'><button className="px-4 py-2 text-sm font-medium hover:text-blue-600 bg-white border rounded shadow-sm">
            Stoppage Report
          </button></a>
         <a href='/location'> <button className="px-4 py-2 text-sm font-medium hover:text-blue-600 bg-white border rounded shadow-sm">
            Location Time Report
          </button></a>
        </div>

        {/* Download Button */}
        <div className="flex justify-end mb-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border rounded shadow-sm">
            Download
          </button>
        </div>
      </div>

      {/* Report Table */}
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-blue-600 text-white text-left">
              <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wide">S no.</th>
              <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wide">Vehicle Number</th>
              <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wide">Status</th>
              <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wide">Date</th>
              <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wide">Time</th>
              <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wide">Location</th>



            </tr>
          </thead>
          <tbody className="text-gray-700">
            {tableData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-6">{data.sno}</td>
                <td className="py-3 px-6">{data.vehicleNumber}</td>
                <td className="py-3 px-6">{data.status}</td>
                <td className="py-3 px-6">{data.date}</td>
                <td className="py-3 px-6">{data.time}</td>
                <td className="py-3 px-6">{data.location}</td>



              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IgnitionTable;