import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Invoices } from './routes/invoices';
import { Expenses } from './routes/expenses';
import { Invoice } from './routes/invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));

//https://v5.reactrouter.com/web/api/HashRouter

root.render(
  <React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>        
        <Route path='/expenses' element={<Expenses />}/>
        <Route path='/invoices' element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
          }
    />
      </Route>
    </Routes>
  </BrowserRouter>

  </React.StrictMode>
);

//https://stackblitz.com/edit/github-agqlf5?file=src%2Fdata.jsx,src%2FApp.jsx,src%2Froutes%2Finvoice.jsx,src%2Fmain.css,src%2Froutes%2Finvoices.jsx

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
