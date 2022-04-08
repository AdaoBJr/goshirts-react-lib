import { ExpandLess } from '@material-ui/icons';

import { useStyle } from '../../services/hooks';
import { useDropdown } from '../../services/talons';
import Icon from '../Icon';
import defaultClasses from './dropdown.module.css';

function Dropdown(props) {
  const { id, label, items, icon, settingsIcon = {}, onValueChange } = props;
  const { size, stroke, fill, color } = settingsIcon;

  const { itemActive, expanded, elementRef, triggerRef, setExpanded, handleClick } =
    useDropdown({
      id,
      items,
      onValueChange,
    });

  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <div
        id={id}
        ref={triggerRef}
        className={classes.selected}
        onClick={() => setExpanded((prevState) => !prevState)}
      >
        <span>{itemActive}</span>
        <Icon
          classes={{ icon: classes.stylesIcon }}
          icon={icon || ExpandLess}
          size={size || 23}
          active={expanded}
          stroke={stroke}
          fill={fill}
          color={color}
        />
      </div>
      <div ref={elementRef} className={expanded ? classes.itemsActive : classes.items}>
        <div className={expanded ? classes.openMenu : classes.closeMenu}>
          {items.map(({ key, label, value }) => {
            return (
              <div
                aria-hidden
                key={key}
                className={itemActive === label ? classes.itemActive : classes.item}
                onClick={() => handleClick(value)}
              >
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
