const { mergeStrings } = require('./combiners')

const stringifyValues = (...props) => {
  return mergeStrings(...props.map(item => JSON.stringify(item)))
};

module.exports = {
  stringifyValues
};
