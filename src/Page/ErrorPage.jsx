import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Application Error</h1>
        <p className="text-gray-600 mb-6">
          The application failed to start. This could be due to:
        </p>
        <ul className="text-left text-gray-600 mb-6 text-sm space-y-2">
          <li>• Missing environment variables</li>
          <li>• Network connectivity issues</li>
          <li>• Configuration problems</li>
          <li>• Resource loading failures</li>
        </ul>
        <div className="space-y-3">
          <button 
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-600 transition"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
          <button
            className="w-full px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition"
            onClick={() => window.location.href = '/'}
          >
            Go to Home
          </button>
        </div>
        <p className="text-gray-500 text-xs mt-6">
          Check the browser console for detailed error information
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;