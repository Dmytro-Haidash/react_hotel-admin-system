import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HotelProvider } from './contexts/HotelContext'
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <HotelProvider>
      <App />
    </HotelProvider>
  </Router>
);
