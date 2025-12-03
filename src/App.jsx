import './App.css'
import { RouterProvider } from 'react-router'
import router from './Route/RouterProvider'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App