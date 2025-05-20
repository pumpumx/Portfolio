import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.tsx'
import WorkMain from './components/work/WorkMain.tsx'
import ErrorBoundary from './errorBoundary/ErrorBoundary.tsx'
import RouteError from './errorBoundary/NotFound.tsx'
import About from './components/about/About.tsx'
import MainApp from './MainApp.tsx'
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}errorElement={<RouteError/>}  >
        <Route path='/home' element={<MainApp />} />
        <Route path='/work' element={<WorkMain />} />
        <Route path='/about' element={<About/>} />
        </Route >

      </>
    )  
  )

      createRoot(document.getElementById('root')!).render(
        <ErrorBoundary>
        <RouterProvider router={routes}>
        </RouterProvider>
        </ErrorBoundary>
    )
