import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 
// je change le nom de index.js en main.jsx pour éviter les conflits avec d'autres projets qui pourraient avoir un index.js dans le même dossier.