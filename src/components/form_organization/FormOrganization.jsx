import './FormOrganization.css';
import Input from '../input/Input';
import { useCallback, useRef, useState } from 'react';
import CheckBox from '../Radio/RadioButton';

const FormOrganization = (props) => {
  const formRef = useRef(null);
  const [isCheckedAnother, setIsCheckedAnother] = useState(true);
  const [isCheckedCondition, setIsCheckedCondition] = useState(true);
  const [additionalInputData, setAdditionalInputData] = useState([{
    id: 'concrete',
    type: 'text',
    name: 'Що саме?',
    placeholder: 'Що саме?',
    required: true,
    value: '',
    isRequired: false,
    isHidePlaceholder: false,
  },
    {
      id: 'condition',
      type: 'text',
      name: 'Умови відмови',
      placeholder: 'Умови відмови',
      required: true,
      value: '',
      isRequired: false,
      isHidePlaceholder: false,
    },
  ]);
  const [inputData, setInputData] = useState([
    {
      id: 'organization',
      type: 'text',
      name: 'Податковий номер',
      placeholder: 'Податковий номер',
      required: false,
      value: '',
      isRequired: false,
      isHidePlaceholder: false,
    },
    {
      id: 'role',
      type: 'text',
      name: 'Посада',
      placeholder: 'Посада',
      required: false,
      value: '',
      isRequired: false,
      isHidePlaceholder: false,
    },
    {
      id: 'fullName',
      type: 'text',
      name: 'ПІБ',
      placeholder: 'ПІБ',
      required: true,
      value: '',
      isRequired: false,
      isHidePlaceholder: false,
    },
    {
      id: 'phone',
      type: 'tel',
      name: 'Номер телефону',
      placeholder: 'Номер телефону',
      required: true,
      value: '',
      isRequired: false,
      isHidePlaceholder: false,
    },
    {
      id: 'email',
      type: 'email',
      name: 'Email',
      placeholder: 'Email',
      required: true,
      value: '',
      isRequired: false,
      isHidePlaceholder: false,
    },
  ]);

  const onChangeInputValue = useCallback(
    (id, value) => {
      const regForMail = new RegExp(
        '^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$',
      );
      const regForPhone = new RegExp('^(\\+3)\\d{11}$');

      let newState = inputData;
      const index = newState.findIndex(el => el.id === id);
      if (index > -1) {
        newState[index].isHidePlaceholder = true;
        newState[index].value = value;
        if (newState[index].type === 'email' || newState[index].type === 'tel') {
          // eslint-disable-next-line default-case
          switch (newState[index].type) {
            case 'email': {
              newState[index].isRequired = !regForMail.test(value);
              break;
            }
            case 'tel': {
              newState[index].isRequired = !regForPhone.test(value);
              break;
            }
          }
        } else {
          newState[index].isRequired = value === '';
        }
        setInputData(newState);
      } else {
        newState = additionalInputData;
        const index = newState.findIndex(el => el.id === id);
        if (index > -1) {
          newState[index].value = value;
          if (value === '') {
            newState[index].isRequired = true;
          }
          newState[index].isHidePlaceholder = true;
        }
        setAdditionalInputData(newState);
      }
    },
    [inputData, additionalInputData],
  );

  const onclickButton = useCallback(
    e => {
      // get end send data
      const result = {};
      e.preventDefault();
      const formElements = formRef.current.elements;
      const keys = Object.keys(formElements);

      // check empty field
      inputData.forEach(field => {
        if (field.required && field.value === '') {
          field.isRequired = true;
        }
      });

      let isCorrectForm = (inputData.findIndex(el => el.isRequired === true) !== -1);

      if (isCheckedAnother === false && additionalInputData[0].value === '') {
        additionalInputData[0].isRequired = true;
        isCorrectForm = true;
      }
      if (isCheckedCondition === false && additionalInputData[1].value === '') {
        additionalInputData[1].isRequired = true;
        isCorrectForm = true;
      }

      if (isCorrectForm) {
        setInputData([...inputData]);
        props.setIsCorrectSendData(false);
        props.openModal(true);
      } else {
        keys.forEach((key, index) => {
          if (formElements[index]?.type === 'radio' && formElements[index]?.checked) {
            if (formElements[index]?.name === 'ofCondition') {
              result[formElements[index]?.id] = formElements[index]?.checked;
            } else {
              result[formElements[index]?.name] = formElements[index]?.checked;
            }
          }
          if (formElements[index]?.type !== 'radio') {
            if (formElements[index]?.value !== '' && formElements[index]?.value !== undefined) {
              result[formElements[index]?.name] = formElements[index]?.value;
            }
          }
        });
        fetch('https://eo909y8mp4qmu1.m.pipedream.net', {
          method: 'POST',
          body: JSON.stringify(result),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => {
          if (res.status === 200) {
            props.openModal(true);
          }
        });
      }


    },
    [props, inputData, isCheckedCondition, isCheckedAnother, additionalInputData],
  );

  return (
    <form ref={formRef} className='form_Wrapper' id='form'>
      <h3 className='mainTitle'>Ваша думка</h3>
      <span className='subtitle'>
        Дане опитування допоможе нам почути Вашу думку.
      </span>
      <span className='form_Title'>Які функції 1С для Вас пріоритетні?</span>
      <div className='groupOfFunctionRadioButton'>
        <CheckBox
          name={'Управління виробництвом та облік витрат'}
          labelText='Управління виробництвом та облік витрат'
        />
        <CheckBox
          name={'Логістика і закупівля'}
          labelText='Логістика і закупівля'
          isChecked={true}
        />
        <CheckBox name={'Управлінській облік'} labelText='Управлінській облік' />
        <CheckBox
          name={'Коплексне управління підприємствами (ERP)'}
          labelText='Коплексне управління підприємствами (ERP)'
        />
        <CheckBox name={'Роздрібна торгівля'} labelText='Роздрібна торгівля' />
        <CheckBox name={'Фінансове  планування'} labelText='Фінансове  планування' />
        <CheckBox
          name={'Управління взаємовідносинами з клієнтами (CRM)'}
          labelText='Управління взаємовідносинами з клієнтами (CRM)'
        />
        <CheckBox name={'Бухгалтерській облік'} labelText='Бухгалтерській облік' />
        <CheckBox name={'Управління документообігом'} labelText='Управління документообігом' />
        <CheckBox name={'Товарно-складський облік'} labelText='Товарно-складський облік' />
        <CheckBox name={'Кадровий облік'} labelText='Кадровий облік' />
      </div>

      <span className='form_Title'>Що для Вас важливо в 1С?</span>
      <div className='groupOfImportantRadioButton'>
        <CheckBox name={'Легкість використання'} labelText='Легкість використання' />
        <CheckBox name={'Дизайн'} labelText='Дизайн' />
        <CheckBox name={'Ціна'} labelText='Ціна' />
        <CheckBox
          name={'Легкість освоєння'}
          labelText='Легкість освоєння'
          isChecked={true}
        />
        <CheckBox name={'Зручний інтерфейс'} labelText='Зручний інтерфейс' />
        <CheckBox name={'Інше'} labelText='Інше' isChecked={false} setActive={setIsCheckedAnother} />
      </div>
      <div className='form_input_condition_Wrapper'>
        <Input
          for='01_form_organization'
          id={additionalInputData[0].id}
          type={additionalInputData[0].type}
          value={additionalInputData[0].value}
          onChangeHandler={onChangeInputValue}
          name={additionalInputData[0].name}
          placeholder={additionalInputData[0].placeholder}
          required={additionalInputData[0].required}
          readonly={isCheckedAnother}
          isRequired={additionalInputData[0].isRequired}
          isHidePlaceholder={additionalInputData[0].isHidePlaceholder}
        />
      </div>
      <span className='form_Title' id='refuse'>
        Чи готові Ви перейти на{' '}
        <span className='form_Title title_accent'>український</span> аналог?
      </span>
      <div className='groupOfConditionRadioButton'>
        <CheckBox customId='Чи готові Ви перейти на український аналог?Так' name={'ofCondition'} labelText='Так'
                  isChecked={true} />
        <CheckBox customId='Чи готові Ви перейти на український аналог?Ні' name={'ofCondition'} labelText='Ні' />
        <CheckBox customId='Чи готові Ви перейти на український аналог?За умови' name={'ofCondition'}
                  labelText='За умови' isChecked={false} setActive={setIsCheckedCondition} />
      </div>
      <button className='donate-button' type='button'>
        ПІДТРИМАТИ ПРОЕКТ
      </button>
      <div className='form_input_condition_Wrapper'>
        <Input
          for='01_form_organization'
          id={additionalInputData[1].id}
          type={additionalInputData[1].type}
          value={additionalInputData[1].value}
          onChangeHandler={onChangeInputValue}
          name={additionalInputData[1].name}
          placeholder={additionalInputData[1].placeholder}
          required={additionalInputData[1].required}
          readonly={isCheckedCondition}
          isRequired={additionalInputData[1].isRequired}
          isHidePlaceholder={additionalInputData[1].isHidePlaceholder}
        />
      </div>
      <span className='form_Title'>
        Від імені якої організації Ви виступаєте?
      </span>
      <div className='formContainer'>
        <div className='form' id='01_form_organization'>
          {inputData.map((input, index) => {
            return (
              <div key={`${index}${input.name}`} className='form_inputWrapper'>
                <Input
                  key={input.isRequired}
                  id={input.id}
                  type={input.type}
                  value={input.value}
                  onChangeHandler={onChangeInputValue}
                  name={input.name}
                  placeholder={input.placeholder}
                  required={input.required}
                  isRequired={input.isRequired}
                  isHidePlaceholder={input.isHidePlaceholder}
                />
              </div>
            );
          })}
        </div>
        <span className='prompt'>обов’язкові поля</span>
      </div>

      <button
        onClick={onclickButton}
        className='form_Button'
        form='01_form_organization'
      >
        Відмовитись від 1С
      </button>
    </form>
  );
};

export default FormOrganization;
