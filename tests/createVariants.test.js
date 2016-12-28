const test = require('tape');
const { createVariants } = require('../index')

test('createVariants() - creates an array of strings', t => {
  const res = createVariants('box--', 'rounded large');
  t.equal(res[0], 'box--rounded');
  t.equal(res[1], 'box--large');
  t.end();
});

test('createVariants() - handles a single variation', t => {
  const res = createVariants('box--', 'rounded');
  t.equal(res[0], 'box--rounded');
  t.end();
});
