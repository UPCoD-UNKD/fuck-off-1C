import { Hero } from './hero/Hero';
import { Mission } from './mission/Mission';
import FormOrganization from './form_organization/FormOrganization';
import { Footer } from './footer/Footer';
import './App.css';
import Modal from './Modal/Modal';
import { useState } from 'react';

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCorrectSendData, setIsCorrectSendData] = useState(true);
  return (
    <div className="app">
      <Hero />
      <Mission />
      <FormOrganization  openModal={setIsOpenModal} setIsCorrectSendData = {setIsCorrectSendData} />
      <Footer />
      <Modal isCorrectSendData={ isCorrectSendData}  isOpenModal = {isOpenModal} closeModal = {setIsOpenModal}/>
    </div>
  );
};
