import { Hero } from './hero/Hero';
import { Mission } from './mission/Mission';
import FormOrganization from './form_organization/FormOrganization';
import { Footer } from './footer/Footer';
import './App.css';
import Modal from './Modal/Modal';

export const App = () => {
  
  return (
    <div className="app">
      <Hero />
      <Mission />
      <FormOrganization
      />
      <Footer />
      <Modal
      />
    </div>
  );
};
