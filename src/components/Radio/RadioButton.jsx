import './RadioButton.css';
import { useCallback, useState } from 'react';

const RadioButton = props => {
  const [isCheked, setIsCheked] = useState(props.isChecked);

  const onClickHandler = useCallback(() => {
    setIsCheked(prevState => !prevState);
    if(props.setActive) {
      props.setActive(isCheked)

    }
  }, [isCheked, props]);



  return (
    <div className="radioButton_wrapper" onClick={onClickHandler}>
      <input
        name={props.name}
        className="radioButton"
        id={props.customId?props.customId:props.name}
        type="radio"
        checked={isCheked}
      />
      <label  className="radio_label">{props.labelText}</label>
    </div>
  );
};
export default RadioButton;
