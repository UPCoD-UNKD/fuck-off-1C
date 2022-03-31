import { ReactComponent as Logo } from '../../img/icon/Logo.svg';
import { ReactComponent as Phone } from '../../img/icon/Phone.svg';
import './Header.css';
export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <ul className="nav-list">
        <li className="nav-item">
          <a class="nav-link" href="#">
            Головна
          </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">
            Наша місія
          </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">
            Ваша думка
          </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">
            Відмовитись
          </a>
        </li>
      </ul>
      <div className="contacts">
        <p className="contacts-title">Контакти</p>
        <Phone />
      </div>
    </div>
  );
};
