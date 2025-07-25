// main.tsx
import { Home } from "@/pages/Home";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SectionProvider } from "./components/SectionContext";
import './embla.css';
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SectionProvider>
      <RouterProvider router={router} />
    </SectionProvider>
  </React.StrictMode>
);
