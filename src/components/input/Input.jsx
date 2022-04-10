import './Input.css';
import classNames from 'classnames';
import { useCallback, useRef, useState } from 'react';

const Input = props => {
  const [value, setValue] = useState(props.value);
  const [isHidePlaceholder, setIsHidePlaceholder] = useState(props.isHidePlaceholder);
  const InputRef = useRef(null);

  const onChangeHandler = useCallback(
    e => {
      setValue(e.target.value);
      props.onChangeHandler(e.target.id, e.target.value);
    },
    [props]
  );

  const onFocusHandler = useCallback((e) => {
    setIsHidePlaceholder(true);
    props.onChangeHandler(e.target.id, e.target.value);
    if(e.target.id === "phone") {
      setValue("+380")
    }
  }, [props]);


  const onClickLabelHandler = useCallback(()=> {
    if(props.readonly=== false || props.readonly === undefined) {
      setIsHidePlaceholder(true);
      InputRef.current.focus();
    }
  },[props.readonly])

  return (
    <>
      {props.required && isHidePlaceholder === false && (
        <label className="starPlaceHolder" onClick={onClickLabelHandler}>
          {props.placeholder}
          <span className="star">*</span>
        </label>
      )}
      <input
        className={classNames('form_input', { form_input_placeholder: props.required === false}, {form_input_error: props.isRequired})}
        ref = {InputRef}
        onFocus={onFocusHandler}
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
        disabled={props.readonly}
      />
    </>
  );
};

export default Input;
