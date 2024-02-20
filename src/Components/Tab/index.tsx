import styles from './styles.module.scss';
import cn from 'clsx';

interface TabProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  active?: boolean;
}

export function Tab({ label, active, onClick, ...props }: TabProps) {
  return (
    <button
      className={cn(styles['button'], {
        [styles['-active']]: active,
      })}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}

export default Tab;
