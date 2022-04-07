import { useStyle } from '../../talons';
import defaultClasses from './button.module.css';

function Button(props) {
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <button className={classes.defaultStyles}>{props.children}</button>
    </div>
  );
}

export default Button;
