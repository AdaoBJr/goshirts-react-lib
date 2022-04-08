import { ExpandLess } from '@material-ui/icons';

import { useStyle } from '../../services/hooks';
import { useDropdown } from '../../services/talons';
import Icon from '../Icon';
import defaultClasses from './dropdown.module.css';

function Dropdown(props) {
  const { items, icon } = props;
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
        <Icon icon={icon || ExpandLess} active={expanded} size={23} />
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
