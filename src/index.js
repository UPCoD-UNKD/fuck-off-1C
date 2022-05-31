import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';
import Modal from './components/Modal/Modal';
import ModalSupport from 'components/ModalSupport/ModalSupport';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {ReactDOM.createPortal(<Modal />, document.getElementById('modal'))}
    {ReactDOM.createPortal(
      <ModalSupport />,
      document.getElementById('modalSupport')
    )}
  </React.StrictMode>,
  document.getElementById('root')
);
