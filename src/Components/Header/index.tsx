import './styles.module.scss';
import { HeaderTabs } from '@/Components';

export function Header() {
  return (
    <header>
      <span>thiago-borba</span>
      <HeaderTabs />
    </header>
  );
}

export default Header;
