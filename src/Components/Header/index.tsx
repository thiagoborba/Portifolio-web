import { FlexBox } from '../FlexBox';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles['container']}>
      <FlexBox alignItems="center">
        <FlexBox alignItems="center" className={styles['sider-bar-title']}>
          <span>Thiago Borba</span>
        </FlexBox>
        <FlexBox>
          <a href="home">_hello</a>
        </FlexBox>
        <FlexBox>
          <a href="services">_projects</a>
        </FlexBox>

        <FlexBox>
          <a href="about">_about</a>
        </FlexBox>
      </FlexBox>

      <FlexBox alignItems="center">
        <a href="#contact">_contact</a>
      </FlexBox>
    </header>
  );
}

export default Header;
