import { FlexBox } from '../FlexBox';
import style from './style.module.scss';

export function Header() {
  return (
    <header className={style['container']}>
      <FlexBox>
        <a href="home">_hello</a>
        <a href="about">_about</a>
        <a href="services">_projects</a>
      </FlexBox>

      <div>
        <a href="#contact">_contact</a>
      </div>
    </header>
  );
}
