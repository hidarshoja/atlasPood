/**
 * Joins class names into a single string, filtering out any falsy values.
 * @param {...string} classes - The class names to join.
 * @returns {string} The joined class names.
 */
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  export default classNames;
  