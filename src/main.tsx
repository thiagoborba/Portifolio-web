import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/_reset.scss';
import { Router } from './Router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
