import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { InquiryProvider } from './features/inquiry/InquiryProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <InquiryProvider>
        <App />
      </InquiryProvider>
    </BrowserRouter>
  </StrictMode>,
)
