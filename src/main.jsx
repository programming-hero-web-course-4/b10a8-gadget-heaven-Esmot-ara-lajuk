import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Roots/Root';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import GadgetCards from './Components/GadgetCards';
import Gadget from './Components/Gadget';
import ListedGadget from './Components/ListedGadget';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../category.json').then(res => res.json()),  // Fetch categories correctly
        children: [
          {
            path: '/Category/:category',
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch('../allGadgets.json').then(res => res.json())  // Fetch gadgets correctly
          }
        ]
      },
      {
        path: 'DashBoard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: 'listedGadget',
            element:<ListedGadget></ListedGadget>,
            loader: ()=>fetch('../allGadget.json')
          }
        ]
      },
      {
        path: 'Statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'gadget/:id',
        element:<Gadget></Gadget>,
        loader: () =>fetch('../allGadgets.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
