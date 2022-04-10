import { useCallback } from 'react';
import "./Modal.css";

const Modal = (props) => {
  const onClickHandler = useCallback(() => {
   props.closeModal(false);
  }, [props]);

if(props.isOpenModal) {
  return(
    <div className={"modal"} >
      <div className={"modalBody"}>
        <div className={"modalText"}>{props.isCorrectSendData?"Дякуємо за відповідь, Ваші данні успішно відправлені":"Заповніть корректно поля"}</div>
        <button className={"closeButton"} onClick={onClickHandler}>Ок</button>
      </div>
    </div>
  )
} else return null;

}
export default Modal;
