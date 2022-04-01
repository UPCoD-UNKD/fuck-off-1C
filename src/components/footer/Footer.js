import { ReactComponent as Logo } from '../../img/icon/Logo.svg';
import { ReactComponent as PhoneBlk } from '../../img/icon/PhoneBlk.svg';
import { ReactComponent as Linkedin } from '../../img/icon/Linkedin.svg';
import { ReactComponent as Up } from '../../img/icon/Up.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <a href="https://" target="_blank" rel="noreferrer noopener">
        <Logo />
      </a>
      <div className="footer-contacts">
        <p className="footer-contacts-title item">Контакти</p>
        <a className="item" href="tel:+380441111111">
          <PhoneBlk />
        </a>
        <a
          className="item"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin />
        </a>
      </div>
      <AnchorLink href="#header">
        <Up />
      </AnchorLink>
    </div>
  );
};
