import { useStyle } from '../../services/hooks';
import defaultClasses from './button.module.css';

function Button(props) {
  const { id, type, label, children, ...restProps } = props;
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={id || label}>
        {label}
      </label>
      <button id={id || label} type={type} className={classes.button} {...restProps}>
        {children}
      </button>
    </div>
  );
}

export default Button;
