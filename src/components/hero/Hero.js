import { Button } from '../button/Button';
import { Header } from '../header/Header';
import RightEarth from '../../style/backgroond/RightEarth';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import './Hero.css';

export const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="main" id="main">
        <h1 className="main-title">Відмова від 1С</h1>
        <p className="main-description">
          <span className="main-accent"> Російська</span> компанія, яка
          займається комп’ютерними програмами та базою даних, яка має ділове та
          домашнє призначення.
        </p>
        <AnchorLink href="#refuse">
          <Button />
        </AnchorLink>
      </div>

      <div className="bg2">
        <RightEarth style={{ maxWidth: '100%' }} />
      </div>
      {/* <img className="bg2" src={require('../../img/Planet.png')} alt="planet" /> */}
      <img className="bg1" src={require('../../img/No1C.png')} alt="no1c" />
    </div>
  );
};
