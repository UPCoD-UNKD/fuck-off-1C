import './Mission.css';

export const Mission = () => {
  return (
    <div className="mission">
      <h2 className="mission-title">Наша місія</h2>
      <div className="who">
        <h3 className="who_title">Хто ми?</h3>
        <p className="who_text">
          Ми українська благодійна IT-компанія. Наша мета визволити бізнес від
          <span className="acent">російського ПЗ</span>
        </p>
      </div>
      <div className="why">
        <h3 className="why-title">Чому важливо відмовитись від 1С?</h3>
        <div className="why-box">
          <ul className="why-box_list">
            <li className="why-box_item">
              <h4>Фінансування агресора</h4>
              <p>
                Зараз важливо розуміти, що використання програмного забезпечення
                під час війни в Україні - це фінансування армії
                <span className="acent">агресора</span>.
              </p>
            </li>
            <li className="why-box_item">
              <h4>Підтримка агресора</h4>
              <p>
                Продовжуючи використовувати 1С ви підтримуєте економіку
                <span className="acent">росії</span>, фінансуєте її майбутні
                злочини та відстрочуєте момент її краху
              </p>
            </li>
            <li className="why-box_item">
              <h4>Нестача фахівців</h4>
              <p>
                Для підтримання функціонування 1С потрібні фахівці. На фоні
                масової відмови від 1С таких спеціалістів буде ставати все
                менше.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
