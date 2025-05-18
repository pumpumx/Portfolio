import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.tsx'
import BgJet from './components/backgroundJet/BgJet.tsx'
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />} >
        <Route path='/' element={<App />} />
        <Route path='/3d' element={<BgJet />} />
        </Route >

      </>
    )  
  )
      

      createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <RouterProvider router={routes}>
        </RouterProvider>
      </StrictMode>
      )
