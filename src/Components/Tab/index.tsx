import styles from './styles.module.scss';
import cn from 'clsx';
import { Link, LinkProps } from 'react-router-dom';

interface TabProps extends LinkProps {
  label: string;
  active?: boolean;
}

export function Tab({ label, active, to, ...props }: TabProps) {
  return (
    <Link
      className={cn(styles['link'], {
        [styles['-active']]: active,
      })}
      to={to}
      {...props}
    >
      {label}
    </Link>
  );
}

export default Tab;
