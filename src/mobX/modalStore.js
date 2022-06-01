import { observable, makeAutoObservable, action, computed } from 'mobx';

class ModalStore {
  _isOpenModal = false;
  _isOpenMainModal = false;
  _isCorrectSendData = true;

  constructor() {
    makeAutoObservable(this, {
      _isOpenModal: observable,
      _isOpenMainModal: observable,
      _isCorrectSendData: observable,
      setIsCorrectSendData: action,
      toggleModal: action,
      toggleMainModal: action,
      isOpenModal: computed,
      isOpenMainModal: computed,
      isCorrectSendData: computed,
    });
  }

  get isOpenModal() {
    return this._isOpenModal;
  }

  get isOpenMainModal() {
    return this._isOpenMainModal;
  }

  get isCorrectSendData() {
    return this._isCorrectSendData;
  }

  toggleModal = () => {
    this._isOpenModal = !this._isOpenModal;
  };

  toggleMainModal = () => {
    this._isOpenMainModal = !this._isOpenMainModal;
  };
  setIsCorrectSendData = value => {
    this._isCorrectSendData = value;
  };
}

export default new ModalStore();
