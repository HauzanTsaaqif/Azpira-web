import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css';
import SelectionPage from './pages/SelectionPage'
import ChatbotDreams from './pages/ChatbotDreams2';

import reportWebVitals from './reportWebVitals';
import GenerateWays from './pages/GenerateWays';
import WaysDream from './pages/WaysDream';
import ChatbotEval from './pages/ChatbotEval';

import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import HomePage from './pages/HomePage';
import HomePage_2 from './pages/HomePage_2';
import HomePage_3 from './pages/HomePage_3';
import ComunityPage from './pages/ComunityPage';
import UploadPage from './pages/UploadPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-up-page",
    element: <SignUpPage />,
  },
  {
    path: "/login-page",
    element: <SignInPage />,
  },
  {
    path: "/chatbot-dreams",
    element: <ChatbotDreams />,
  },
  {
    path: "/generate-ways",
    element: <GenerateWays />,
  },
  {
    path: "/selection-page",
    element: <SelectionPage />,
  },
  {
    path: "/ways-dream",
    element: <WaysDream />,
  },
  {
    path: "/chatbot-evaluation",
    element: <ChatbotEval />,
  },
  {
    path: "/home-page-2",
    element: <HomePage_2 />,
  },
  {
    path: "/home-page-3",
    element: <HomePage_3 />,
  },
  {
    path: "/community-page",
    element: <ComunityPage />,
  },
  {
    path: "/upload-page",
    element: <UploadPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();