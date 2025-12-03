import React from 'react';
import './App.css'
import { RouterProvider } from 'react-router'
import router from './Route/RouterProvider'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App