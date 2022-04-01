import { ReactComponent as Logo } from '../../img/icon/Logo.svg';
import { ReactComponent as PhoneBlk } from '../../img/icon/PhoneBlk.svg';
import { ReactComponent as Linkedin } from '../../img/icon/Linkedin.svg';
import { ReactComponent as Up } from '../../img/icon/Up.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <div className="footer-contacts">
        <p className="footer-contacts-title item">Контакти</p>
        <PhoneBlk className="item" />
        <Linkedin className="item" />
      </div>
      <AnchorLink href="#header">
        <Up />
      </AnchorLink>
    </div>
  );
};
