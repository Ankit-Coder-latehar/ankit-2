import React, { useState } from "react";

const NotificationDashboard = () => {
  const [activeTab, setActiveTab] = useState("Notification");
  const [toggles, setToggles] = useState({
    ignitionOn: true,
    ignitionOff: true,
    overspeed: true,
    geofenceEntry: false,
    geofenceExit: false,
    sharpTurn: false,
    harshBreaking: true,
    relayOff: false,
    relayOn: false,
  });

  const handleToggle = (toggleName) => {
    setToggles({ ...toggles, [toggleName]: !toggles[toggleName] });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto  shadow-md rounded-lg p-6">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === "Notification"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => setActiveTab("Notification")}
          >
            Notification
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === "Geofence"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => setActiveTab("Geofence")}
          >
            Geofence
          </button>
        </div>

        {/* Notification Toggles */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Ignition On", stateKey: "ignitionOn" },
              { name: "Ignition Off", stateKey: "ignitionOff" },
              { name: "Overspeed", stateKey: "overspeed" },
              { name: "Geofence Entry", stateKey: "geofenceEntry" },
              { name: "Geofence Exit", stateKey: "geofenceExit" },
              { name: "Sharp Turn", stateKey: "sharpTurn" },
              { name: "Harsh Breaking", stateKey: "harshBreaking" },
              { name: "Relay Off", stateKey: "relayOff" },
              { name: "Relay On", stateKey: "relayOn" },
            ].map((toggle) => (
              <div
                key={toggle.stateKey}
                className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg"
              >
                <span>{toggle.name}</span>
                <button
                  className={`relative inline-flex h-6 w-12 ${
                    toggles[toggle.stateKey] ? "bg-green-500" : "bg-gray-300"
                  } rounded-full transition-colors focus:outline-none`}
                  onClick={() => handleToggle(toggle.stateKey)}
                >
                  <span
                    className={`transform transition-transform inline-block h-5 w-5 bg-white rounded-full ${
                      toggles[toggle.stateKey] ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDashboard;
