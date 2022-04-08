import { useStyle } from '../../services/hooks';
import defaultClasses from './icon.module.css';

function Icon(props) {
  const { icon: IconRender, size, width, color, stroke, fill } = props;
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <span className={classes.root}>
      <IconRender
        style={{
          fontSize: size || width,
          stroke,
          color,
          fill,
        }}
        className={classes.icon}
      />
    </span>
  );
}

export default Icon;
