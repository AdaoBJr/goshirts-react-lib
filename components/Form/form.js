import { useForm } from '../../services/talons';
import { useStyle } from '../../services/hooks';
import defaultClasses from './form.css';

const Form = (props) => {
  const { children, handleSubmit } = props;

  const classes = useStyle(defaultClasses, props.classes);

  const { handleSubmitForm } = useForm();

  return (
    <form onSubmit={handleSubmit || handleSubmitForm} className={classes.form}>
      {children}
    </form>
  );
};

export default Form;
