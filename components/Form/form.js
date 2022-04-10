import { useStyle } from '../../services/hooks';
import defaultClasses from './form.css';

const Form = (props) => {
  const { children, handleSubmit } = props;

  const classes = useStyle(defaultClasses, props.classes);

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      {children}
    </form>
  );
};

export default Form;
