import React from 'react';

const RouteError = () => (
  <div className="min-h-screen flex items-center justify-center bg-red-50">
    <div className="text-center p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Route Error</h1>
      <p className="text-gray-700 mb-4">Failed to load this page. Please try refreshing.</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  </div>
);

export default RouteError;