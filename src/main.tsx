import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Bootstrap CSS & JS bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Custom design system styles
import './styles/global.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
