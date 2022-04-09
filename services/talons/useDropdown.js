import { useState, useRef, useCallback, useEffect } from 'react';
import { useEventListener } from '../hooks';

const useDropdown = (props) => {
  const { id, items, onValueChange } = props;
  const elementRef = useRef(null);
  const triggerRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [itemActive, setItemActive] = useState('Selecione uma opção');

  const handleClick = useCallback(
    (value) => {
      const findOption = items.find((item) => item.value == value);
      if (findOption) {
        setItemActive(findOption.label);
        onValueChange({ id, itemActive: findOption.value });
      }
      setExpanded(false);
    },
    [items]
  );

  const closeMenu = useCallback(({ target }) => {
    const isOutsideElement = !elementRef.current || !elementRef.current.contains(target);
    const isOutsideTrigger = !triggerRef.current || !triggerRef.current.contains(target);

    if (isOutsideElement && isOutsideTrigger) setExpanded(false);
  }, []);

  useEventListener(window, 'click', closeMenu);

  return {
    elementRef,
    triggerRef,
    itemActive,
    expanded,
    setExpanded,
    handleClick,
  };
};

export default useDropdown;
