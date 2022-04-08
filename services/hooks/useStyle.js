import { shallowMerge } from '../utils';

const useStyle = (defaultClasses, classes, className) => {
  const hasClassName = className ? { root: className } : null;
  return shallowMerge(defaultClasses, classes, hasClassName);
};

export default useStyle;
