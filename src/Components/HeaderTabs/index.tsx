import { Tab } from '@/Components';
import './styles.scss';

export function HeaderTabs() {
  return (
    <nav>
      <ul className={'header-tabs'}>
        <Tab href="/hello" label="_hello" />
        <Tab href="/about-me" label="_about-me" />
        <Tab href="/projects" label="_projects" />
        <div></div> {/*Caixa para separação dos links*/}
        <Tab href="/contact-me" label="_contact-me" />
      </ul>
    </nav>
  );
}
