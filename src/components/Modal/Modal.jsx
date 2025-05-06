import { useCallback } from 'react';
import './Modal.css';
import classNames from 'classnames';
import modalStore from 'mobX/modalStore';
import { observer } from 'mobx-react-lite';

const Modal = observer( () => {
  const onClickHandler = useCallback(() => {
   modalStore.toggleMainModal()
  }, []);


  if (modalStore.isOpenMainModal) {
    return (
      <div className={'modal'}>
        <div className={'modalBody'}>
          <div
            className={classNames('modalTitle', {
              modalErrorTitle: modalStore.isCorrectSendData === false,
            })}
          >
            {modalStore.isCorrectSendData ? 'Дякуємо!' : 'Oops!'}
          </div>
          <div className={'modalText'}>
            {modalStore.isCorrectSendData 
              ? 'Ваша відповідь відправлена'
              : 'Будь-ласка, запновіть поля правильно'}
          </div>
          <button className={'closeButton'} onClick={onClickHandler}>
            {modalStore.isCorrectSendData ? 'Чудово' : 'Повернутись!'}
          </button>
          {modalStore.isCorrectSendData && (
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
});
export default Modal;
