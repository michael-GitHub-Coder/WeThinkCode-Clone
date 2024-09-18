import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import PartnersPage from './Pages/PartnersPage'
import EnrolPage from './Pages/EnrolPage'
import NewsPage from './Pages/NewsPage'
import Contact from './Components/Contact'


const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path='/About' element={<AboutPage />}  />
        <Route path='/Partner' element={<PartnersPage />}  />
        <Route path='/Enrol' element={<EnrolPage />}  />
        <Route path='/News' element={<NewsPage />}  />
        <Route path='/Contact'  />
      </Route>
    )
  )
  return (<RouterProvider router={router} />)
}

export default App
