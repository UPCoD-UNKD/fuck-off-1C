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
            БО БЛАГОДІЙНИЙ ФОНД ІТ-ПАРОСТОК (Благодiйна органiзацiя) ЄДРПОУ
            44550531 Банковскі реквизити: АТ КБ "ПРИВАТБАНК" (ЄДРПОУ банку
            14360570, МФО банку 328704)
            <span>Поточний рахунок № UA363287040000026005054258964</span>
            <span>e-mail: admin@it-sprout.org</span>
            <span>тел.: +380632640519</span>
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
