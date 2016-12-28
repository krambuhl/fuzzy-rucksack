const test = require('tape');
const variantPropType = require('../index').PropTypes.variants;

const blackOrWhite = variantPropType(['black', 'white'])

test('variantPropType() - valid single variant', t => {
  const props = { variant: 'black' }
  const res = blackOrWhite(props, 'variant', 'GenericComponent');
  t.ok(res === undefined);
  t.end();
});

test('variantPropType() - valid multiple variants', t => {
  const props = { variant: 'black white' }
  const res = blackOrWhite(props, 'variant', 'GenericComponent');
  t.ok(res === undefined);
  t.end();
});

test('variantPropType() - invalid single variant', t => {
  const props = { variant: 'red' }
  const res = blackOrWhite(props, 'variant', 'GenericComponent');
  t.ok(res instanceof Error);
  t.end();
});

test('variantPropType() - invalid multiple variants', t => {
  const props = { variant: 'blue red' }
  const res = blackOrWhite(props, 'variant', 'GenericComponent');
  t.ok(res instanceof Error);
  t.end();
});

test('variantPropType() - mixed result multiple variants', t => {
  const props = { variant: 'black red' }
  const res = blackOrWhite(props, 'variant', 'GenericComponent');
  t.ok(res instanceof Error);
  t.end();
});
