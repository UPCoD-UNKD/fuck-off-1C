import './Input.css';
import classNames from 'classnames';
import { useCallback, useRef, useState } from 'react';

const Input = props => {
  const [value, setValue] = useState(props.value);
  const [isHidePlaceholder, setIsHidePlaceholder] = useState(false);
  const InputRef = useRef(null);

  const onChangeHandler = useCallback(
    e => {
      setValue(e.target.value);
      props.onChangeHandler(e.target.id, value);
    },
    [props, value]
  );

  const onFocusHandler = useCallback(() => {
    setIsHidePlaceholder(true);
  }, []);

  const onBlurHandler = useCallback(e => {
    if (e.target.value === '') {
      setIsHidePlaceholder(false);
    }
  }, []);

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
        className={classNames('form_input', {
          form_input_placeholder: props.required === false,
        })}
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
