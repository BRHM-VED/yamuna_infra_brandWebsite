import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { InquiryProvider } from './features/inquiry/InquiryProvider'
import { SnackbarProvider } from './components/common/snackbar/SnackbarProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <InquiryProvider>
          <App />
        </InquiryProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>,
)
