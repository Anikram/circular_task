const { stringifyValues } = require('./parsers');

const prepareObject = (...props) => {
  const obj = {}

  props.forEach((item, index) => {
    obj[index] = stringifyValues(item)
  })

  return obj
};

const mergeStrings = (...props) => {
  return props.join(' ')
};

module.exports = {
  mergeStrings,
  prepareObject
};
