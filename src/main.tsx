import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { authClient } from './kk-config.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactKeycloakProvider authClient={authClient} initOptions={{onLoad: "login-required"}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReactKeycloakProvider>,
)
