import './styles.scss';
import { HeaderTabs } from '@/Components';

export function Header() {
  return (
    <header>
      <div className="name-container">
        <span>thiago-borba</span>
      </div>
      <HeaderTabs className="header-tabs" />
    </header>
  );
}

export default Header;
