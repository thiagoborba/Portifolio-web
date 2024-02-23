import './styles.scss';
import { HeaderTabs } from '@/Components';

export function Header() {
  return (
    <header>
      <div className="name-container">
        <span>thiago-borba</span>
      </div>
      <HeaderTabs className="header-tabs" />
      <div className="menu-icon">botão</div>
    </header>
  );
}

export default Header;
