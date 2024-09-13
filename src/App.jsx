import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'


const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path='/About' element={<AboutPage />}  />
      </Route>
    )
  )
  return (<RouterProvider router={router} />)
}

export default App
