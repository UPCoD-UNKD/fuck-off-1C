import './FormOrganization.css';
import Input from '../input/Input';
import { useCallback, useState } from 'react';
import classNames from 'classnames';
import CheckBox from '../Radio/RadioButton';

const FormOrganization = () => {
  const [inputData, setInputData] = useState([
    {
      id: 'organization',
      type: 'text',
      name: 'organization',
      placeholder: 'Організація',
      required: true,
      value: '',
    },
    {
      id: 'role',
      type: 'text',
      name: 'role',
      placeholder: 'Посада',
      required: false,
      value: '',
    },
    {
      id: 'fullName',
      type: 'text',
      name: 'fullName',
      placeholder: 'ФІО',
      required: true,
      value: '',
    },
    {
      id: 'phone',
      type: 'tel',
      name: 'phone',
      placeholder: 'Номер телефону',
      required: true,
      value: '',
    },
    {
      id: 'email',
      type: 'email',
      name: 'email',
      placeholder: 'email',
      required: true,
      value: '',
    },
  ]);

  const onclickButton = useCallback(() => {
    // send data
  }, []);

  const onChangeInputValue = useCallback(
    (id, value) => {
      const newState = inputData;
      const index = newState.findIndex(el => el.id === id);
      if (index > -1) {
        newState[index].value = value;
      }
      setInputData(newState);
      // console.log(newState);
    },
    [inputData]
  );

  return (
    <div className="form_Wrapper" id="form">
      <h3 className="mainTitle">Ваша думка</h3>
      <span className="subtitle">
        Дане опитування допоможе нам почути Вашу думку.
      </span>
      <span className="form_Title">Які функції 1С для Вас пріоритетні?</span>
      <div className="groupOfFunctionRadioButton">
        <CheckBox
          name={'ofFunction'}
          labelText="Управління виробництвом та облік витрат"
        />
        <CheckBox
          name={'ofFunction'}
          labelText="Логістика і закупівля"
          isChecked={true}
        />
        <CheckBox name={'ofFunction'} labelText="Управлінській облік" />
        <CheckBox
          name={'ofFunction'}
          labelText="Коплексне управління підприємствами (ERP)"
        />
        <CheckBox name={'ofFunction'} labelText="Роздрібна торгівля" />
        <CheckBox name={'ofFunction'} labelText="Фінансове  планування" />
        <CheckBox
          name={'ofFunction'}
          labelText="Управління взаємовідносинами з клієнтами (CRM)"
        />
        <CheckBox name={'ofFunction'} labelText="Бухгалтерській облік" />
        <CheckBox name={'ofFunction'} labelText="Управління документообігом" />
        <CheckBox name={'ofFunction'} labelText="Товарно-складський облік" />
        <CheckBox name={'ofFunction'} labelText="Кадровий облік" />
      </div>

      <span className="form_Title">Що для Вас важливо в 1С?</span>
      <div className="groupOfImportantRadioButton">
        <CheckBox name={'ofImportant'} labelText="Легкість використання" />
        <CheckBox name={'ofImportant'} labelText="Дизайн" />
        <CheckBox name={'ofImportant'} labelText="Ціна" />
        <CheckBox
          name={'ofImportant'}
          labelText="Легкість освоєння"
          isChecked={true}
        />
        <CheckBox name={'ofImportant'} labelText="Зручний інтерфейс" />
        <CheckBox name={'ofImportant'} labelText="Інше" />
      </div>

      <span className="form_Title" id="refuse">
        Чи готові Ви перейти на{' '}
        <a href="/" className="form_Title title_link">
          український
        </a>{' '}
        аналог?
      </span>
      <div className="groupOfConditionRadioButton">
        <CheckBox name={'ofCondition'} labelText="Так" isChecked={true} />
        <CheckBox name={'ofCondition'} labelText="Ні" />
        <CheckBox name={'ofCondition'} labelText="За умови" />
      </div>

      <div className="form_input_condition_Wrapper">
        <Input
          for="01_form_organization"
          id="condition"
          type="text"
          value=""
          onChangeHandler={onChangeInputValue}
          name="condition"
          placeholder="Умови відмови "
          required={true}
        />
      </div>
      <span className="form_Title">
        Від імені якої організації Ви виступаєте?
      </span>
      <div className="formContainer">
        <form
          className="form"
          action=""
          method="post"
          id="01_form_organization"
        >
          {inputData.map((input, index) => {
            return (
              <div key={index} className="form_inputWrapper">
                <Input
                  id={input.id}
                  type={input.type}
                  value={input.value}
                  onChangeHandler={onChangeInputValue}
                  name={input.name}
                  placeholder={input.placeholder}
                  required={input.required}
                />
              </div>
            );
          })}
        </form>
        <span className="prompt">обов’язкові поля</span>
      </div>

      <button
        disabled={true}
        onClick={onclickButton}
        className={classNames('form_Button', { form_Button_disable: true })}
        form="01_form_organization"
      >
        Відмовитись від 1С
      </button>
    </div>
  );
};

export default FormOrganization;
