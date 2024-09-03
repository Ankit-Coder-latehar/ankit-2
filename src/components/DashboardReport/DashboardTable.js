import React from 'react';

const DailyReports = () => {
  const reportData = {
    vehicleNumber: 'HR 12 EEEE 2344',
    distance: '440 Km',
    runningTime: '4hr 56min',
    stoppageTime: '4hr 56min',
    idleTime: '2hr 33min',
    date: '17/02/2024',
    topSpeed: '100Km/hr',
    averageSpeed: '80Km/hr',
    overSpeedCount: 25,
    startLocation: 'Ramchandra Ramniwas oil mill, Alwar, Rajasthan',
    endLocation: 'Ramchandra Ramniwas oil mill, Alwar, Rajasthan',
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
   
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      
      <div className="flex justify-between items-center mb-4">
       
        <input 
          type="text" 
          placeholder="Search Reports" 
          className="px-4 py-2 text-sm border rounded shadow-sm w-1/2" 
        />

        
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-600">Select Date</label>
          <div className="flex space-x-2 mt-1">
            <input type="text" value="11-12-23" className="px-2 py-1 text-sm border rounded" />
            <span>to</span>
            <input type="text" value="11-12-23" className="px-2 py-1 text-sm border rounded" />
          </div>
        </div>
      </div>

      
      <div>
        <div className="flex space-x-4 mb-4">
          <a href=''><button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border rounded shadow-sm">
            Daily Report
          </button></a>
          <a href='/distance-report'><button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded shadow-sm">
            Distance Report
          </button></a>
          <a href='/ignition-report'><button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded shadow-sm">
            Ignition Report
          </button></a>
          <a href='/speed-report'><button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded shadow-sm">
            Speed Report
          </button></a>
          <a href='/relay'><button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded shadow-sm">
            Relay(Engine) On/Off Report
          </button></a>
          <a href='/geofence'><button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded shadow-sm">
            Geofence Entry/Exit Report
          </button></a>
          <a href='/stopage'><button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded shadow-sm">
            Stoppage Report
          </button></a>
          <a href='/location'><button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded shadow-sm">
            Location Time Report
          </button></a>
        </div>

        
        <div className="flex justify-end">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border rounded shadow-sm">
            Download
          </button>
        </div>
      </div>

    
      <div className="bg-white shadow-md rounded-lg p-6 border border-blue-300 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{reportData.vehicleNumber}</h2>
          <span className="text-blue-600">{`Date: ${reportData.date}`}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="flex items-center mb-1">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span className="font-medium">Start Location: </span>
              <span className="text-gray-600 ml-1">{reportData.startLocation}</span>
            </p>
            <p className="flex items-center">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              <span className="font-medium">End Location: </span>
              <span className="text-gray-600 ml-1">{reportData.endLocation}</span>
            </p>
          </div>
          <div className="flex flex-col text-sm">
            <p className="mb-1"><strong>Distance Travelled: </strong>{reportData.distance}</p>
            <p className="mb-1"><strong>Running Time: </strong>{reportData.runningTime}</p>
            <p className="mb-1"><strong>Stoppage Time: </strong>{reportData.stoppageTime}</p>
            <p className="mb-1"><strong>Idle Time: </strong>{reportData.idleTime}</p>
          </div>
          <div className="flex flex-col text-sm text-gray-700">
            <p className="flex items-center mb-2">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4h1l3 3 4-4a2 2 0 113 3l-4 4a2 2 0 01-3-3L9 14H7a2 2 0 00-2 2v2H3v-3z"></path></svg>
              <strong>Top Speed: </strong>{reportData.topSpeed}
            </p>
            <p className="flex items-center mb-2">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 10h18m-9 4h9"></path></svg>
              <strong>Average Speed: </strong>{reportData.averageSpeed}
            </p>
            <p className="flex items-center">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2m0 0l-2 2m2-2l2-2m-2 2l2 2"></path></svg>
              <strong>Over Speed Count: </strong>{reportData.overSpeedCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyReports;

