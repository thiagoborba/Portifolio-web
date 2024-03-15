import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/_reset.scss';

import { Layout } from '@/Components/Layout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
