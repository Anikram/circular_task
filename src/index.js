const { prepareObject } = require('./helpers/combiners');

const III = 'III'

const object = prepareObject(
  1,
  "2",
  III,
  () => {
    return 4
  },
  new RegExp('five','g'),
  {seeks: true},
  {next: ['s','e','v','e','n']},
  {ei: { gh: { th: 'O_O' } } },
);

console.log(object);
