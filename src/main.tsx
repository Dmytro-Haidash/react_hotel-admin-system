import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import i18next from 'i18next';
import global_en from './translations/en/global.json';
import global_ua from './translations/ua/global.json';
import { I18nextProvider } from 'react-i18next';
import { HotelProvider } from './contexts/HotelContext'
import { HashRouter as Router } from 'react-router-dom'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: global_en,
    },
    ua: {
      global: global_ua,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18next}>
    <Router>
      <HotelProvider>
        <App />
      </HotelProvider>
    </Router>
  </I18nextProvider>
);
