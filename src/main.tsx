import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.tsx'
import WorkMain from './components/work/WorkMain.tsx'
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />} >
        <Route path='/home' element={<App />} />
        <Route path='/work' element={<WorkMain />} />
        </Route >

      </>
    )  
  )
      

      createRoot(document.getElementById('root')!).render(
        <RouterProvider router={routes}>
        </RouterProvider>
      )
