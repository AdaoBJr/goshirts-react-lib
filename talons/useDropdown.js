import { useState, useRef, useCallback } from 'react';
import { eventListener } from '@goshirts-react/lib';

const useDropdown = (props) => {
  const { items } = props;
  const elementRef = useRef(null);
  const triggerRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [activeLabel, setActiveLabel] = useState('Selecione uma opção');

  const handleClickOption = useCallback((value) => {
    const findOption = items.find((item) => item.value == value);
    if (findOption) setActiveLabel(findOption.label);
    setExpanded(false);
  }, []);

  const closeMenu = useCallback(({ target }) => {
    const isOutsideElement = !elementRef.current || !elementRef.current.contains(target);
    const isOutsideTrigger = !triggerRef.current || !triggerRef.current.contains(target);

    if (isOutsideElement && isOutsideTrigger) setExpanded(false);
  }, []);

  eventListener(window, 'click', closeMenu);

  return {
    elementRef,
    triggerRef,
    activeLabel,
    expanded,
    setExpanded,
    handleClickOption,
  };
};

export default useDropdown;
