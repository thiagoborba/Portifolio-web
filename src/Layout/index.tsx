import { FlexBox } from '@/Components/FlexBox';
import { Header } from '@/Components/Header';

export function Layout() {
  return (
    <FlexBox direction="row">
      <nav>
        <div>Thiago Borba</div>
      </nav>
      <Header />
    </FlexBox>
  );
}
