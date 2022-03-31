import { Button } from '../button/Button';
import { Header } from '../header/Header';
import { ReactComponent as Down } from '../../img/icon/Down.svg';
import './Hero.css';

export const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="main">
        <h1 className="main-title">Відмова від 1С</h1>
        <p className="main-description">
          <span className="acent"> Російська</span> компанія, яка займається
          комп’ютерними програмами та базою даних, яка має ділове та домашнє
          призначення.
        </p>
        <Button />
      </div>
      <div className="down">
        <Down />
        <p>Далі</p>
      </div>
    </div>
  );
};
