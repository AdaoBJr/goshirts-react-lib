import { useStyle } from '../../services/hooks';
import defaultClasses from './inputText.module.css';

function InputText(props) {
  const { id, name, value, placeholder, label, text, children } = props;
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id || name || label}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        className={classes.input}
      />
      <span className={classes.text}>{text || children}</span>
    </div>
  );
}

export default InputText;
