import { FlexBox } from '..';
import styles from './styles.module.scss';

export function SideNav() {
  return (
    <FlexBox className={styles['side-bar']} direction="column">
      SidBar
    </FlexBox>
  );
}

export default SideNav;
