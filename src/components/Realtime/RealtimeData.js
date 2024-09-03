import React, { useState } from 'react';
import { FaRoad, FaBell, FaFileAlt, FaArrowRight, FaCar, FaClock, FaRoute, FaMapMarkerAlt, FaList, FaSquare, FaArrowUp } from 'react-icons/fa';

const RealtimeData = () => {
  const [activeTab, setActiveTab] = useState('vehicles');

  const vehicles = [
    {
      id: 1,
      number: 'HR XXXX 123',
      location: 'Bagheri Road, Gurgaon Gateway, Sector 114,Gurgaon, Kapashera',
      speed: '80 km/h',
      status: 'Running',
      distance: '345 km',
      stoppedTime: '5hr 4min',
    },
    {
      id: 2,
      number: 'HR XXXX 123',
      location: 'Bagheri Road, Gurgaon Gateway, Sector 114,Gurgaon, Kapashera',
      speed: '80 km/h',
      status: 'Running',
      distance: '345 km',
      stoppedTime: '5hr 4min',
    },
    {
      id: 3,
      number: 'HR XXXX 123',
      location: 'Bagheri Road, Gurgaon Gateway, Sector 114,Gurgaon, Kapashera',
      speed: '80 km/h',
      status: 'Running',
      distance: '345 km',
      stoppedTime: '5hr 4min',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">Vehicles</button>
              <button className="text-gray-600 px-4 py-2">Routes</button>
              <button className="text-gray-600 px-4 py-2">Trips</button>
              <button className="text-gray-600 px-4 py-2">Groups</button>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-600 px-4 py-2">GPS</button>
              <button className="text-gray-600 px-4 py-2">SIM</button>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex space-x-4">
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">All Vehicles 12</button>
              <button className="bg-green-200 text-green-600 px-4 py-2 rounded-lg">Running 12</button>
              <button className="bg-yellow-200 text-yellow-600 px-4 py-2 rounded-lg">Ideal 12</button>
              <button className="bg-red-200 text-red-600 px-4 py-2 rounded-lg">Stopped 12</button>
              <button className="bg-blue-200 text-blue-600 px-4 py-2 rounded-lg">Parked 12</button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">No Info 12</button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">Expire 12</button>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex mt-4">
          {/* Sidebar Vehicle List */}
          <div className="w-1/3 space-y-4">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{vehicle.number}</h3>
                    <p className="text-gray-600">{vehicle.location}</p>
                    <p className="text-blue-600">{vehicle.speed}</p>
                  </div>
                  <span className="bg-green-200 text-green-600 px-3 py-1 rounded-lg">
                    {vehicle.status}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-gray-600">
                    <p>Distance <span className="font-bold">{vehicle.distance}</span></p>
                    <p>Stopped Time <span className="font-bold">{vehicle.stoppedTime}</span></p>
                  </div>
                  <div className="flex space-x-4 text-gray-600">
                    <button>
                      <FaRoad />
                    </button>
                    <button>
                      <FaBell />
                    </button>
                    <button>
                      <FaFileAlt />
                    </button>
                    <button>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Map View */}
          <div className="w-2/3 pl-4">
            <div className="bg-white p-4 rounded-lg shadow-lg h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83987014877!2d77.06889925250403!3d28.52718318175639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0a26769ad299%3A0xe80e8cdb47307ac!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1615189260498!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeData;
