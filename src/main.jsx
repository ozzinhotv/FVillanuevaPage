// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/Home';
import Vida from './views/Vida.jsx';
import Obra from './views/Obra.jsx';
import Escritos from './views/Escritos.jsx';
import Fundacion from './views/Fundacion.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import "./i18n.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/vida",
    element: <Vida />,
  },
  {
    path: "/obra",
    element: <Obra />,
  },
  {
    path: "/escritos",
    element: <Escritos />,
  },
  {
    path: "/fundacion",
    element: <Fundacion />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
