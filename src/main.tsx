import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes/routes.ts'
import { ThemeProvider } from './components/theme-provider.tsx'
import "./App.css"
import { HelmetProvider } from "react-helmet-async"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
        <RouterProvider router={router} />

      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
