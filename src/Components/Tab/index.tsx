import './styles.module.scss';

interface TabProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

export function Tab({ href, label }: TabProps) {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
}

export default Tab;
