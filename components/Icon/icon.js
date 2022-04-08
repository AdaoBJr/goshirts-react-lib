import { useStyle, useWindowSize } from '../../services/hooks';
import defaultClasses from './icon.module.css';

function Icon(props) {
  const { src, size, width } = props;
  const classes = useStyle(defaultClasses, props.classes);

  const windowSize = useWindowSize();
  console.log(windowSize);

  return (
    <span className={classes.root}>
      <img src={src} width={size || width} className={classes.defaultStyles}>
        {props.children}
      </img>
    </span>
  );
}

export default Icon;
