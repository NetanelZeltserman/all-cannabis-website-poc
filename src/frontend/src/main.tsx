import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#E34141',
    },
    secondary: {
      main: '#64748B',
    },
    text: {
      primary: '#1E2936',
      secondary: '#000101',
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
