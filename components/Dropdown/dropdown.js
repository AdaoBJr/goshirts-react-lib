import { ExpandLess } from '@material-ui/icons';

import { useStyle } from '../../services/hooks';
import { useDropdown } from '../../services/talons';
import Icon from '../Icon';
import defaultClasses from './dropdown.module.css';

function Dropdown(props) {
  const { items, icon, settingsIcon = {} } = props;
  const { size, stroke, fill, color } = settingsIcon;

  const { activeLabel, expanded, elementRef, triggerRef, setExpanded, handleClick } =
    useDropdown({
      items,
    });

  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <div
        ref={triggerRef}
        className={classes.selected}
        onClick={() => setExpanded((prevState) => !prevState)}
      >
        <span>{activeLabel}</span>
        <Icon
          classes={{ icon: classes.stylesIcon }}
          icon={icon || ExpandLess}
          active={expanded}
          size={size || 23}
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
                className={activeLabel === label ? classes.itemActive : classes.item}
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
