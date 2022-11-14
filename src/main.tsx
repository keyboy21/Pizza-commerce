import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/app.scss'
import './scss/pagi.css'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
)
