import { Tab } from '@/Components';
import './styles.scss';
import { ROUTES } from '@/Constants';
import { useLocation } from 'react-router-dom';

interface HeaderTabsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function HeaderTabs(props: HeaderTabsProps) {
  const location = useLocation();

  const isHello = location.pathname === ROUTES.hello;
  const isAbout = location.pathname === ROUTES.about;
  const isProjects = location.pathname === ROUTES.projects;
  const isContact = location.pathname === ROUTES.contact;

  return (
    <nav {...props}>
      <ul className={'header-tabs'}>
        <li>
          <Tab active={isHello} to={ROUTES.hello} label="_hello" />
        </li>
        <li>
          <Tab active={isAbout} to={ROUTES.about} label="_about-me" />
        </li>
        <li>
          <Tab active={isProjects} to={ROUTES.projects} label="_projects" />
        </li>
        <div></div> {/*Caixa para separação dos links*/}
        <li id="_contact-me">
          <Tab active={isContact} to={ROUTES.contact} label="_contact-me" />
        </li>
      </ul>
    </nav>
  );
}
