import { ReactComponent as Logo } from '../../img/icon/Logo.svg';
import { ReactComponent as Mail } from '../../img/icon/Mail.svg';
import './Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

export const Header = () => {
  return (
    <div className="header" id="header">
      <Logo className="logo-header" />

      <ul className="nav-list">
        <li className="nav-item">
          <AnchorLink className="nav-link" href="#mission">
            Наша місія
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink className="nav-link" href="#form">
            Ваша думка
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink className="nav-link" href="#refuse">
            Відмовитись
          </AnchorLink>
        </li>
      </ul>
      <div className="contacts">
        <a className="contacts-item icon" href="mailto: admin@buxonline.org">
          <Mail />
        </a>
      </div>
    </div>
  );
};
