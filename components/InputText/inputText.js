import { useStyle } from '../../services/hooks';
import defaultClasses from './inputText.module.css';

function InputText(props) {
  const { id, type, label, text, children, ...restProps } = props;

  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id || label}
        type={type || 'text'}
        className={classes.input}
        {...restProps}
      />
      <span className={text || children ? classes.textVisible : classes.textInvisible}>
        {text || children}
      </span>
    </div>
  );
}

export default InputText;
