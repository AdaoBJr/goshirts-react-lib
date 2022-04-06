import defaultClasses from './button.module.css';

import { mergeClasses } from '../../talons';

const { useStyles } = mergeClasses();

function Button(props) {
  const classes = useStyles(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <button className={classes.defaultStyles}>{props.children}</button>
    </div>
  );
}

export default Button;
