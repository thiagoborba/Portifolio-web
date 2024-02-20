import { Tab } from '@/Components';
import './styles.scss';
import { useState } from 'react';

export function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('_hello');

  return (
    <nav>
      <ul className={'header-tabs'}>
        <li>
          <Tab
            onClick={() => setActiveTab('_hello')}
            active={activeTab === '_hello'}
            label="_hello"
          />
        </li>
        <li>
          <Tab
            onClick={() => setActiveTab('_about-me')}
            active={activeTab === '_about-me'}
            label="_about-me"
          />
        </li>
        <li>
          <Tab
            onClick={() => setActiveTab('_projects')}
            active={activeTab === '_projects'}
            label="_projects"
          />
        </li>
        <div></div> {/*Caixa para separação dos links*/}
        <li id="_contact-me">
          <Tab
            onClick={() => setActiveTab('_contact-me')}
            active={activeTab === '_contact-me'}
            label="_contact-me"
          />
        </li>
      </ul>
    </nav>
  );
}
