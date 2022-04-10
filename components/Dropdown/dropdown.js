import { ExpandLess } from '@material-ui/icons';

import { useStyle } from '../../services/hooks';
import { useDropdown } from '../../services/talons';
import Icon from '../Icon';
import defaultClasses from './dropdown.module.css';

function Dropdown(props) {
  const { id, label, items, icon, styleIcon = {}, onValueChange } = props;

  const { itemActive, expanded, elementRef, triggerRef, setExpanded, handleClick } =
    useDropdown({
      id,
      items,
      onValueChange,
    });

  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={id || label}>
        {label}
      </label>
      <div
        id={id || label}
        ref={triggerRef}
        className={classes.selected}
        onClick={() => setExpanded((prevState) => !prevState)}
      >
        <span>{itemActive}</span>
        <Icon
          icon={icon || ExpandLess}
          size={styleIcon.size || 23}
          active={expanded}
          classes={{ icon: classes.icon }}
          {...styleIcon}
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
