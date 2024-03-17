/// <reference types="vite-plugin-svgr/client" />

import { Header, Footer } from '@/Components';
import './styles.scss';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="outside-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
