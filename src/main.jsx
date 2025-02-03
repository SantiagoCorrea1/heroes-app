import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './style.css'
import { HeroesApp } from './HeroesApp'
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>

  </StrictMode>,
)
