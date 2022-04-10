import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';
import Modal from './components/Modal/Modal';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {ReactDOM.createPortal(<Modal/>, document.getElementById('modal'))}
  </React.StrictMode>,
  document.getElementById('root')
);
