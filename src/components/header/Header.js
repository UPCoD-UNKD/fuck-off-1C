import { ReactComponent as Logo } from '../../img/icon/Logo.svg';
import { ReactComponent as Phone } from '../../img/icon/Phone.svg';
import './Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Header = () => {
  return (
    <div className="header" id="header">
      <Logo />
      <ul className="nav-list">
        <li className="nav-item">
          <AnchorLink class="nav-link" href="#main">
            Головна
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink class="nav-link" href="#mission">
            Наша місія
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink class="nav-link" href="#form">
            Ваша думка
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink class="nav-link" href="#refuse">
            Відмовитись
          </AnchorLink>
        </li>
      </ul>
      <div className="contacts">
        <p className="contacts-title">Контакти</p>
        <Phone />
      </div>
    </div>
  );
};
