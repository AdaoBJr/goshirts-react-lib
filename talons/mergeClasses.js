import { shallowMerge } from '../utils';

const mergeClasses = () => {
  const useStyle = (defaultClasses, classes, className) => {
    const hasClassName = className ? { root: className } : null;
    return shallowMerge(defaultClasses, classes, hasClassName);
  };

  return { useStyle };
};

export default mergeClasses;
