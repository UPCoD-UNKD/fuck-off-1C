import { ReactComponent as Logo } from '../../img/icon/Logo.svg';
import { ReactComponent as MailBlk } from '../../img/icon/MailBlk.svg';

import { ReactComponent as Up } from '../../img/icon/Up.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bottom-row">
        <AnchorLink offset="100" href="#header">
          <Up className="footer-arrow-up" />
        </AnchorLink>
        <div className="footer-contacts">
          <p className="footer-contacts-text">
            адрес: Україна, 65007, Одеська обл., місто Одеса, вул.
            Старопортофранківська, б.107-21 ИПН: 44757504 назва: ГРОМАДСЬКА
            ОРГАНІЗАЦІЯ "АСОЦІАЦІЯ ДОПОМОГИ КРАЇНІ"
          </p>
          <a
            className="footer-contacts-item"
            href="mailto: admin@buxonline.org"
          >
            <MailBlk />
          </a>
        </div>
      </div>
      <Logo className="footer-logo" />
    </div>
  );
};
