import { useStyle } from '../../services/hooks';
import defaultClasses from './icon.module.css';

function Icon(props) {
  const { id, icon: IconRender, active, size, width, onClick, ...restProps } = props;
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <span className={classes.root}>
      {IconRender && (
        <IconRender
          id={id}
          onClick={onClick}
          style={{ fontSize: size || width, ...restProps }}
          className={active ? classes.iconActive : classes.icon}
        />
      )}
    </span>
  );
}

export default Icon;
