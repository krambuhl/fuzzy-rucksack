module.exports = (ns, variants) => (
  variants
    .split(' ')
    .map(variant => ns + variant)
)
