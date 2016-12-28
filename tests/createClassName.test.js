const test = require('tape');
const { createClassName } = require('../index');

test('createClassName() - creates a className string', t => {
  const res = createClassName(['box', 'box--rounded']);
  t.equal(res, 'box box--rounded');
  t.end();
});

test('createClassName() - skips undefined entries', t => {
  const res = createClassName(['box', undefined, 'box--rounded', undefined]);
  t.equal(res, 'box box--rounded');
  t.end();
});

test('createClassName() - flatten array entries', t => {
  const res = createClassName(['box', ['box--large', 'box--rounded']]);
  t.equal(res, 'box box--large box--rounded');
  t.end();
});
