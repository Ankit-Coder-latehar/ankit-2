import React from 'react';

const ImageUploadSection = () => {
    return (
        <div className="p-8">
            <h2 className="text-xl font-semibold mb-4">Main Screen</h2>
            <div className="grid grid-cols-5 gap-4">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-40 h-40 bg-gray-300 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-10 h-10 text-black"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75v10.5m5.25-5.25H6.75m13.5-7.5A2.25 2.25 0 0018 4.5h-12A2.25 2.25 0 003.75 6.75v10.5A2.25 2.25 0 006 19.5h12a2.25 2.25 0 002.25-2.25V6.75z"
                                />
                            </svg>
                        </div>
                        <div className="mt-2 flex gap-2">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded">Upload</button>
                            <button className="px-4 py-2 bg-red-600 text-white rounded">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUploadSection;
