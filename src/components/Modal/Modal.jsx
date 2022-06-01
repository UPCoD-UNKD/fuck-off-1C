import { useCallback } from 'react';
import './Modal.css';
import classNames from 'classnames';

const Modal = props => {
  const onClickHandler = useCallback(() => {
    props.closeModal(false);
  }, [props]);


  if (props.isOpenModal) {
    return (
      <div className={'modal'}>
        <div className={'modalBody'}>
          <div
            className={classNames('modalTitle', {
              modalErrorTitle: props.isCorrectSendData === false,
            })}
          >
            {props.isCorrectSendData ? 'Дякуємо!' : 'Oops!'}
          </div>
          <div className={'modalText'}>
            {props.isCorrectSendData 
              ? 'Ваша відповідь відправлена'
              : 'Будь-ласка, запновіть поля правильно'}
          </div>
          {props.isSupprortModal && (
            <>asdfasdfasdf</>
          )}
          <button className={'closeButton'} onClick={onClickHandler}>
            {props.isCorrectSendData ? 'Чудово' : 'Повернутись!'}
          </button>
          {props.isCorrectSendData && (
            <img
              className="modalLogo"
              src={require('../../img/No1C.png')}
              alt="no1c"
            />
          )}
        </div>
      </div>
    );
  }
   else return null;
};
export default Modal;
