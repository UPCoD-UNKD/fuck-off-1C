import modalStore from 'mobX/modalStore';
import './ModalSupport.css';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

const ModalSupport = observer(props => {
  const onCloseModal = useCallback(() => {
    modalStore.toggleModal();
  }, []);

  if (modalStore.isOpenModal) {
    return (
      <div className={'modalSupport'}>
        <div className={'modalSupportBody'}>
          <div className="modalSupportContainer">
            <h2 className="modalTitleSupport">
              Дякуємо, що бажаєте допомогти нашому благодійному фонду!
            </h2>
            <p className="modalTextSupport">
              Ми неприбуткова організація і тому всі ваші кошти підуть на
              підтримку інтернів, котрі бажають навчатись новому та розвивати
              цифрову галузь України. За допомогою наших програм, талановита
              молодь вже створює корисні для держави сервіси та застосунки.
            </p>
            <p className="modalTextSupport">
              Ви можете ознайомитися з проектами інтернів за цим посиланням: 
              <a
                className="modalLink modalTextSupport"
                href="https://unkd.com.ua/korysni-servisy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://unkd.com.ua/korysni-servisy/
              </a>
            </p>
            <p p className="modalTextSupport">
              БО БЛАГОДІЙНИЙ ФОНД ІТ-ПАРОСТОК (Благодiйна органiзацiя) ЄДРПОУ
              44550531 Банковскі реквизити: АТ КБ "ПРИВАТБАНК" (ЄДРПОУ банку
              14360570, МФО банку 328704) Поточний рахунок №
              UA363287040000026005054258964
            </p>
            <p className="modalTextSupport marginBottomText">СЛАВА УКРАЇНІ!</p>

            <button className={'closeButton'} onClick={onCloseModal}>
              Повернутись!
            </button>
          </div>
        </div>
      </div>
    );
  } else return null;
});
export default ModalSupport;
