// index.js
const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Inputs must be numbers');
  }
  //const result= a+b;
  //return result;

  //CodeQLCase
  return eval('${a} + ${b}');
};
export default add;