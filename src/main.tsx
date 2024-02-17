import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/_reset.scss';

import { Layout } from '@/Layout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
