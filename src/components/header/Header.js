import { ReactComponent as Logo } from '../../img/icon/Logo.svg';
import { ReactComponent as Phone } from '../../img/icon/Phone.svg';
import './Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Header = () => {
  return (
    <div className="header" id="header">
      <a href="https://" target="_blank" rel="noreferrer noopener">
        <Logo />
      </a>
      <ul className="nav-list">
        <li className="nav-item">
          <AnchorLink className="nav-link" href="#main">
            Головна
          </AnchorLink>
        </li>
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
        <p className="contacts-title">Контакти</p>
        <a href="tel:+380441111111">
          <Phone />
        </a>
      </div>
    </div>
  );
};
