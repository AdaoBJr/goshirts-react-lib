import { useStyle } from '../../services/hooks';
import defaultClasses from './form.css';

const Form = (props) => {
  const { children, ...restProps } = props;

  const classes = useStyle(defaultClasses, props.classes);

  return (
    <form className={classes.form} {...restProps}>
      {children}
    </form>
  );
};

export default Form;
