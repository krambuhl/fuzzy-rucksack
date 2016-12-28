module.exports = variants => {
  const variantsRegex = new RegExp('\\b' + variants.join('\\b|\\b') + '\\b');
  const test = (value) => (
    value
      .split(' ')
      .every(v => variantsRegex.test(v))
  );

  return (props, propName, componentName) => {
    if (!test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }
}
