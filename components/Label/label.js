import { useStyle } from '../../services/hooks';
import defaultClasses from './label.module.css';

const Label = (props) => {
  const { id, type, label, text, children, ...restProps } = props;

  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root} {...restProps}>
      <label className={classes.label} htmlFor={id}>
        {label && label}
        <span className={classes.content}>{children && children}</span>
      </label>
    </div>
  );
};

export default Label;
