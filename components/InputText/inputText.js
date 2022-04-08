import { useStyle } from '../../services/hooks';
import defaultClasses from './inputText.module.css';

function InputText(props) {
  const { name, value, placeholder, label, text, children } = props;
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <label className={classes.label}>
        {label}
        <input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          className={classes.input}
        />
      </label>
      <span className={classes.text}>{text || children}</span>
    </div>
  );
}

export default InputText;
