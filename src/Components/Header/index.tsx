import './styles.module.scss';
import { HeaderTabs } from '@/Components';

export function Header() {
  return (
    <header>
      <span>Thiago Borba</span>
      <HeaderTabs />
    </header>
  );
}

export default Header;
