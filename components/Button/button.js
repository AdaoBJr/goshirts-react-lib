import defaultClasses from './button.modules.css';

import { mergeClasses } from '../../talons';

const { useStyles } = mergeClasses();

function Button(props) {
  const classes = useStyles(defaultClasses, props.classes);
  return (
    <div className={classes.root}>
      <button className={classes.default}>{props.children}</button>
    </div>
  );
}

export default Button;
