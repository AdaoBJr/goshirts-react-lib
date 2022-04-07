import { useStyle, useDropdown } from '../../talons';
import defaultClasses from './dropdown.module.css';

function Dropdown(props) {
  const { items } = props;
  const { activeLabel, expanded, elementRef, triggerRef, setExpanded } = useDropdown({
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
        {/* <Icon src={ChevronDown} size={18} /> */}
      </div>
      <div ref={elementRef} className={expanded ? classes.itemsActive : classes.items}>
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
  );
}

export default Dropdown;
