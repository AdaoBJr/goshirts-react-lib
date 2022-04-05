import { shallowMerge } from '../utils';

const mergeClasses = () => {
  const useStyles = (defaultClasses, classes, className) => {
    const hasClassName = className ? { root: className } : null;
    return shallowMerge(defaultClasses, classes, hasClassName);
  };

  return { useStyles };
};

export default mergeClasses;
