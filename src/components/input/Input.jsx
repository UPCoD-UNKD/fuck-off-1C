import './Input.css';
import classNames from 'classnames';
import { useCallback, useMemo, useRef, useState } from 'react';

const Input = props => {
  const [value, setValue] = useState(props.value);
  const [isHidePlaceholder, setIsHidePlaceholder] = useState(false);
  const InputRef = useRef(null);
  const [isRequired, setIsRequired] = useState(false);

  const regForMail = useMemo(()=> new RegExp("^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$"),[])
  const regForPhone = useMemo(()=> new RegExp("^(\\+3)\\d{11}$"),[])

  const onChangeHandler = useCallback(
    e => {
      setValue(e.target.value);
      props.onChangeHandler(e.target.id, value);
    },
    [props, value]
  );

  const onFocusHandler = useCallback((e) => {
    setIsHidePlaceholder(true);
    if(e.target.id === "phone") {
      setValue("+380")
    }
  }, []);

  const onBlurHandler = useCallback(e => {
    if(e.target.value !== "" && e.target.id !== "phone") {
      switch (e.target.id ){
        case("email"): {
          const testResult = !regForMail.test(e.target.value);
          setIsRequired(testResult);
          break;
        }
        default: {
          if(e.target.value.length > 0) {
            setIsRequired(false);
          }
        }
      }
    } else {
    if(e.target.id === "phone" && e.target.value !== "+380") {
      const testResult = !regForPhone.test(e.target.value);
      setIsRequired(testResult);
}
    }

    if (e.target.value === '' && e.target.id !== "phone") {
      setIsHidePlaceholder(false);
    } else {
      if(e.target.value === '+380') {
        setIsHidePlaceholder(false);
        setValue("");
      }
    }

  }, [regForPhone, regForMail]);

  const onClickLabelHandler = useCallback(()=> {
    setIsHidePlaceholder(true);
    InputRef.current.focus();
  },[])

  return (
    <>
      {props.required && isHidePlaceholder === false && (
        <label className="starPlaceHolder" onClick={onClickLabelHandler}>
          {props.placeholder}
          <span className="star">*</span>
        </label>
      )}
      <input
        className={classNames('form_input', { form_input_placeholder: props.required === false}, {form_input_error: isRequired})}
        ref = {InputRef}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        value={value}
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={
          props.required || isHidePlaceholder === true
            ? null
            : props.placeholder
        }
      />
    </>
  );
};

export default Input;
