import { ReactComponent as Logo } from '../../img/icon/Logo.svg';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <div className="footer-contacts">
        <p className="footer-contacts-title">Контакти</p>
      </div>
    </div>
  );
};
