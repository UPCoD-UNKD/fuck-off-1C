import { Button } from '../button/Button';
import { Header } from '../header/Header';
import { ReactComponent as Down } from '../../img/icon/Down.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';

export const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="main" id="main">
        <h1 className="main-title">Відмова від 1С</h1>
        <p className="main-description">
          <span className="accent"> Російська</span> компанія, яка займається
          комп’ютерними програмами та базою даних, яка має ділове та домашнє
          призначення.
        </p>
        <Button />
      </div>
      {/* <div className="down"> */}
      <AnchorLink className="down" href="#mission">
        <Down className="down-t" />
        Далі
      </AnchorLink>
      {/* </div> */}
    </div>
  );
};