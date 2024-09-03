import React, { useState } from 'react';

const ContactForm = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full h-full">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact us</h2>
        <p className="text-center text-gray-600 mb-8">Get in touch and let us know your queries</p>
        <div className="flex justify-around mb-8">
          <div className="flex flex-col items-center">
            <img src="path-to-gmail-icon" alt="gmail icon" className="w-12 h-12 mb-2" />
            <span className="text-sm text-gray-800">qiksupport@gmail.com</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="path-to-phone-icon" alt="phone icon" className="w-12 h-12 mb-2" />
            <span className="text-sm text-gray-800">+91 - 7890-897-980</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="path-to-ticket-icon" alt="ticket icon" className="w-12 h-12 mb-2" />
            <button
              onClick={handleModalToggle}
              className="bg-yellow-400 px-4 py-2 rounded text-white font-medium"
            >
              Generate a Ticket
            </button>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <h3 className="text-lg font-medium mb-2">Ticket History</h3>
          <p className="text-gray-500">NO TICKET GENERATED YET</p>
          <p className="text-gray-400 text-2xl mt-4">!</p>
        </div>
      </div>

  
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96">
            <h3 className="text-xl font-semibold text-center mb-4">Generate Ticket</h3>

            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Selected Vehicle</label>
              <input
                type="text"
                placeholder="HR 43 XXX 3434"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Ticket Type</label>
              <input
                type="text"
                placeholder="Select Ticket Type"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Type Message"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Select Image</label>
              <div className="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M48 14a2 2 0 01-2 2H34v14h12a2 2 0 012 2v2H2v-2a2 2 0 012-2h12V16H4a2 2 0 01-2-2V8h44v6z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                    >
                      <span>Upload Image</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md"
                onClick={handleModalToggle}
              >
                Raise Ticket
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md shadow-md"
                onClick={handleModalToggle}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
