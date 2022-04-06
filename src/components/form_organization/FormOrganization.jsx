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
      placeholder: 'Податковий номер',
      required: false,
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
      placeholder: 'ПІБ',
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
      placeholder: 'Email',
      required: true,
      value: '',
    },
  ]);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const onclickButton = useCallback(
    e => {
      // get end send data
      e.preventDefault();
      console.log(document.forms[0]);
      console.log(inputData);
    },
    [inputData]
  );

  const isCheckedFormInputs = useCallback(() => {
    const regForMail = new RegExp(
      '^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$'
    );
    const regForPhone = new RegExp('^(\\+3)\\d{11}$');

    inputData.forEach(field => {
      if (field.type === 'email' || field.type === 'tel') {
        // eslint-disable-next-line default-case
        switch (field.type) {
          case 'email': {
            const testResult = !regForMail.test(field.value);
            setIsButtonDisabled(testResult);
            break;
          }
          case 'tel': {
            const testResult = !regForPhone.test(field.value);
            setIsButtonDisabled(testResult);
            break;
          }
        }
      } else {
        if (field.value !== '') {
          setIsButtonDisabled(false);
        }
      }
    });
  }, [inputData]);

  const onChangeInputValue = useCallback(
    (id, value) => {
      const newState = inputData;
      const index = newState.findIndex(el => el.id === id);
      if (index > -1) {
        newState[index].value = value;
      }
      setInputData(newState);
      isCheckedFormInputs();
    },
    [inputData, isCheckedFormInputs]
  );

  return (
    <form className="form_Wrapper" id="form">
      <h3 className="mainTitle">Ваша думка</h3>
      <span className="subtitle">
        Дане опитування допоможе нам почути Вашу думку.
      </span>
      <span className="form_Title">Які функції 1С для Вас пріоритетні?</span>
      <div className="groupOfFunctionRadioButton">
        <CheckBox
          name={'plant'}
          labelText="Управління виробництвом та облік витрат"
        />
        <CheckBox
          name={'logic'}
          labelText="Логістика і закупівля"
          isChecked={true}
        />
        <CheckBox name={'management'} labelText="Управлінській облік" />
        <CheckBox
          name={'erp'}
          labelText="Коплексне управління підприємствами (ERP)"
        />
        <CheckBox name={'trade'} labelText="Роздрібна торгівля" />
        <CheckBox name={'finance'} labelText="Фінансове  планування" />
        <CheckBox
          name={'crm'}
          labelText="Управління взаємовідносинами з клієнтами (CRM)"
        />
        <CheckBox name={'accounting'} labelText="Бухгалтерській облік" />
        <CheckBox name={'document'} labelText="Управління документообігом" />
        <CheckBox name={'product'} labelText="Товарно-складський облік" />
        <CheckBox name={'employ'} labelText="Кадровий облік" />
      </div>

      <span className="form_Title">Що для Вас важливо в 1С?</span>
      <div className="groupOfImportantRadioButton">
        <CheckBox name={'easyUse'} labelText="Легкість використання" />
        <CheckBox name={'design'} labelText="Дизайн" />
        <CheckBox name={'price'} labelText="Ціна" />
        <CheckBox
          name={'easy'}
          labelText="Легкість освоєння"
          isChecked={true}
        />
        <CheckBox name={'interface'} labelText="Зручний інтерфейс" />
        <CheckBox name={'other'} labelText="Інше" />
      </div>
      <div className="form_input_condition_Wrapper">
        <Input
          for="01_form_organization"
          id="important"
          type="text"
          value=""
          onChangeHandler={onChangeInputValue}
          name="important"
          placeholder="Що саме? "
          required={true}
        />
      </div>
      <span className="form_Title" id="refuse">
        Чи готові Ви перейти на{' '}
        <span className="form_Title title_accent">український</span> аналог?
      </span>
      <div className="groupOfConditionRadioButton">
        <CheckBox name={'ofCondition'} labelText="Так" isChecked={true} />
        <CheckBox name={'ofCondition'} labelText="Ні" />
        <CheckBox name={'ofCondition'} labelText="За умови" />
      </div>
      <button className="donate-button" type="button">
        ПІДТРИМАТИ ПРОЕКТ
      </button>
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
        <div className="form" id="01_form_organization">
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
        </div>
        <span className="prompt">обов’язкові поля</span>
      </div>

      <button
        disabled={isButtonDisabled}
        onClick={onclickButton}
        className={classNames('form_Button', {
          form_Button_disable: isButtonDisabled,
        })}
        form="01_form_organization"
      >
        Відмовитись від 1С
      </button>
    </form>
  );
};

export default FormOrganization;
