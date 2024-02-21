/// <reference types="vite-plugin-svgr/client" />

import { SideNav, Header, Footer, Container } from '@/Components';
import Background from '@/Assets/Background Blurs.svg?react';
import './styles.scss';

export function Layout() {
  return (
    <div className="outside-container">
      <Header />
      <main>
        <Background
          style={{
            height: '78.9vh',
            width: '43.7vw',
            position: 'absolute',
            right: '9.79vhw',
            bottom: '9.01vh',
            backgroundColor: 'transparent',
          }}
        />
        <SideNav />
        <Container />
      </main>
      <Footer />
    </div>
  );
}
