const createClassName = (classList) => (
  classList
    .map(className => {
      if (Array.isArray(className))
        return createClassName(className);
      return className;
    })
    .filter(a => a)
    .join(' ')
)

module.exports = createClassName;
