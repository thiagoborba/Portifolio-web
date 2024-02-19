import './styles.module.scss';
import { HeaderTabs, Tab } from '@/Components';

export function Header() {
  return (
    <header>
      <span>thiago-borba</span>
      <HeaderTabs />
      <div>
        <Tab label="_contact-me" href="/contact-me" />
      </div>
    </header>
  );
}

export default Header;
