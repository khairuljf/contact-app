import React, { useEffect, useState, useId } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/contacts'
import { Button } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContact';
import ErrorPage from './components/Error-page';

export type contact = {
  id:string,
  name:string,
  email:string,
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <ContactList />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/add",
        element: <AddContactForm />,
      },
      {
        path: "/edit/:contactId",
        element: <AddContactForm />,
      },
    ],
  },


]);


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
