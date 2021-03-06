import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-p0lr753n.us.auth0.com"
    clientId="hGOXxmSi52hBcb8eUBFeXC6aaXEyTxC3"
    redirectUri={window.location.origin}
    useRefreshTokens
    audience = "http://localhost:3000"
    scope="read:properties"

    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
