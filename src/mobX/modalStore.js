import { observable, makeAutoObservable, action, computed } from 'mobx';

class ModalStore {
  _isOpenModal = false;

  constructor() {
    makeAutoObservable(this, {
      _isOpenModal: observable,
      toggleModal: action,
      isOpenModal: computed,
    });
  }

  get isOpenModal() {
    return this._isOpenModal;
  }

  toggleModal = () => {
    this._isOpenModal = !this._isOpenModal;
  };
}

export default new ModalStore();
