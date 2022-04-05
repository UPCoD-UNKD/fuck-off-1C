import { ReactComponent as CarbonDev } from '../../img/icon/CarbonDev.svg';
import { ReactComponent as MessageClose } from '../../img/icon/MessageClose.svg';
import { ReactComponent as PersonCross } from '../../img/icon/PersonCross.svg';
import './Mission.css';

export const Mission = () => {
  return (
    <div className="mission" id="mission">
      <h2 className="mission_title">Наша місія</h2>
      <div className="who">
        <h3 className="who_title title">Хто ми?</h3>
        <p className="who_text">
          Ми українська благодійна IT-компанія. <br /> Наша мета визволити
          бізнес від
          <span className="accent"> російського ПЗ</span>
        </p>
      </div>
      <div className="why">
        <h3 className="why_title title">Чому важливо відмовитись від 1С?</h3>
        <div className="why-box">
          <ul className="why-box_list">
            <div className="why-box-1-part">
              <li className="why-box_item">
                <CarbonDev />
                <h4 className="why-title">Фінансування агресора</h4>
                <p className="why-box-text">
                  Зараз важливо розуміти, що використання програмного
                  забезпечення під час війни в Україні - це фінансування армії
                  <span className="accent"> агресора</span>.
                </p>
              </li>
            </div>
            <div className="why-box-2-part">
              <li className="why-box_item">
                <MessageClose />
                <h4 className="why-title">Підтримка агресора</h4>
                <p className="why-box-text">
                  Продовжуючи використовувати 1С ви підтримуєте економіку
                  <span className="accent"> росії</span>, фінансуєте її майбутні
                  злочини та відстрочуєте момент її краху
                </p>
              </li>
              <li className="why-box_item">
                <PersonCross />
                <h4 className="why-title">Нестача фахівців</h4>
                <p className="why-box-text">
                  Для підтримання функціонування 1С потрібні фахівці. На фоні
                  масової відмови від 1С таких спеціалістів буде ставати все
                  менше.
                </p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
