import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";
import Home from './GetStarted.jsx'
import UserPage from './UserPage.jsx'
import About from './About.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};
root.render(
  <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
    <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="home" element={<Home />} />
              <Route path="my-nft" element={<UserPage />} />
              <Route path="about" element={<About />} />
            </Route>
        </Routes>
    </Router>
      </Web3ReactProvider>
  </React.StrictMode>
);
