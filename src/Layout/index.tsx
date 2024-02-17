import { FlexBox, SideNav, Header, Footer, Container } from '@/Components';
import './styles.scss';

export function Layout() {
  return (
    <FlexBox direction="column">
      <Header />
      <main>
        <SideNav />
        <Container />
      </main>
      <Footer />
    </FlexBox>
  );
}
