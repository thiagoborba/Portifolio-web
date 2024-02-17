import { FlexBox } from '..';
import styles from './styles.module.scss';

export function SideNav() {
  return (
    <FlexBox className={styles['side-bar']} direction="column">
      <FlexBox className={styles['nav']}>nav</FlexBox>
    </FlexBox>
  );
}

export default SideNav;
