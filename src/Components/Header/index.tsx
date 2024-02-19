import './styles.scss';
import { HeaderTabs } from '@/Components';

export function Header() {
  return (
    <header>
      <div className="name-container">
        <span>thiago-borba</span>
      </div>
      <HeaderTabs />
    </header>
  );
}

export default Header;
