/// <reference types="vite-plugin-svgr/client" />

import { SideNav, Header, Footer, Container } from '@/Components';
import './styles.scss';

export function Layout() {
  return (
    <div className="outside-container">
      <Header />
      <main>
        <SideNav />
        <Container />
      </main>
      <Footer />
    </div>
  );
}
