import { useStyle } from '../../services/hooks';
import defaultClasses from './icon.module.css';

function Icon(props) {
  const {
    icon: IconRender,
    active,
    size,
    width,
    color,
    stroke,
    fill,
    ...restProps
  } = props;
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <span className={classes.root}>
      <IconRender
        style={{
          fontSize: size || width,
          stroke,
          color,
          fill,
          ...restProps,
        }}
        className={active ? classes.iconActive : classes.icon}
      />
    </span>
  );
}

export default Icon;
