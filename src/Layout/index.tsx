import { FlexBox, SideNav, Header, Footer } from '@/Components';

export function Layout() {
  return (
    <FlexBox direction="column">
      <Header />
      <main>
        <SideNav />
        <section>section</section>
      </main>
      <Footer />
    </FlexBox>
  );
}
