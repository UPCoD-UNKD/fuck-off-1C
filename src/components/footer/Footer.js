import { ReactComponent as Logo } from '../../img/icon/Logo.svg';
import { ReactComponent as MailBlk } from '../../img/icon/MailBlk.svg';
import { ReactComponent as PhoneBlk } from '../../img/icon/PhoneBlk.svg';
import { ReactComponent as Linkedin } from '../../img/icon/Linkedin.svg';
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
          <a className="footer-contacts-item" href="mailto:test@test.com">
            <MailBlk />
          </a>
          <a className="footer-contacts-item" href="tel:">
            <PhoneBlk />
          </a>
          <a
            className="footer-contacts-item"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Linkedin />
          </a>
        </div>
      </div>
      <Logo className="footer-logo" />
    </div>
  );
};
