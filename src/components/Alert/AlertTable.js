import React from "react";

const AlertTable = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-full lg:max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-gray-200 space-y-4 sm:space-y-0">
          <h1 className="text-xl sm:text-2xl font-semibold">Reports</h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-start sm:items-center">
            <div className="relative">
              <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Vehicles</option>
            
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-4-4h8l-4 4z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-2">
              <span className="text-gray-600">Select Date:</span>
              <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">
                Calendar
              </button>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="py-2 px-3 border border-gray-300 rounded-lg"
                  placeholder="11 - 12 - 23"
                />
                <span className="hidden sm:inline">-</span>
                <input
                  type="text"
                  className="py-2 px-3 border border-gray-300 rounded-lg"
                  placeholder="11 - 12 - 23"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alerts Summary */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-start items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="text-3xl sm:text-4xl font-bold text-blue-600">120</div>
          <span className="text-gray-600">Total Alerts</span>
          <div className="flex flex-wrap space-x-4">
            {[
              "Ignition On/Off",
              "Overspeed",
              "Geofence Entry/Exit",
              "Relay (Engine) On/Off",
              "Sharp Turn",
              "Harsh Breaking",
            ].map((alertType, index) => (
              <div
                key={index}
                className="bg-gray-200 py-1.5 px-3 rounded-lg flex items-center justify-center mt-2 sm:mt-0"
              >
                {alertType} <span className="ml-2 text-blue-600">20</span>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-2 sm:px-4 py-2 border-b-2">Sno.</th>
                <th className="px-2 sm:px-4 py-2 border-b-2">Vehicle Number</th>
                <th className="px-2 sm:px-4 py-2 border-b-2">Alert Type</th>
                <th className="px-2 sm:px-4 py-2 border-b-2">Time</th>
                <th className="px-2 sm:px-4 py-2 border-b-2">Date</th>
                <th className="px-2 sm:px-4 py-2 border-b-2">Vehicle Location</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-2 sm:px-4 py-4">1</td>
                <td className="px-2 sm:px-4 py-4">HR EEEE 2344</td>
                <td className="px-2 sm:px-4 py-4">
                  Ignition <span className="text-green-600">On</span>
                </td>
                <td className="px-2 sm:px-4 py-4">05:48 Pm</td>
                <td className="px-2 sm:px-4 py-4">17/02/2024</td>
                <td className="px-2 sm:px-4 py-4">
                  D 53 Raj Garden Building 23, Gurgaon, Haryana
                </td>
              </tr>
              <tr>
                <td className="px-2 sm:px-4 py-4">2</td>
                <td className="px-2 sm:px-4 py-4">HR EEEE 2344</td>
                <td className="px-2 sm:px-4 py-4">
                  Geofence <span className="text-red-600">Exit</span>
                </td>
                <td className="px-2 sm:px-4 py-4">05:48 Pm</td>
                <td className="px-2 sm:px-4 py-4">17/02/2024</td>
                <td className="px-2 sm:px-4 py-4">
                  D 53 Raj Garden Building 23, Gurgaon, Haryana
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AlertTable;

