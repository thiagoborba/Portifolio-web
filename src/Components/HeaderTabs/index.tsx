import { Tab } from '@/Components';
import './styles.module.scss';

export function HeaderTabs() {
  return (
    <nav>
      <ul>
        <Tab href="/hello" label="_hello" />
        <Tab href="/about-me" label="_about-me" />
        <Tab href="/projects" label="_projects" />
      </ul>
    </nav>
  );
}
