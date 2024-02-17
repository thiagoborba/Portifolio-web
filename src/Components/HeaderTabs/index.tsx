import { Tab } from '@/Components';
import './styles.module.scss';

export function HeaderTabs() {
  return (
    <nav>
      <ul>
        <Tab href="/home" label="_hello" />
        <Tab href="/about" label="_about" />
        <Tab href="/contact" label="_projects" />
      </ul>
    </nav>
  );
}
