# fuzzy-rucksack

Some tools to help on your [fuzzy-chainsaw](https://github.com/connectivedx/fuzzy-chainsaw) adventures.


## Install

```
npm install fuzzy-rucksack --save-dev
```


## Documentation


### createVariants(prefix, variants)

Creates an array of classNames from a space seperated variants string.

__Example__

```jsx
createVariants('box--', 'round large dark');

/* output */
['box--round', 'box--large', 'box--dark']
```


### createClassName(classNameArray)

Creates a className string based on input arrays. skips undefined values and flattens array entries.

__Example__

```jsx
createClassName([
	'box',
	['box--round', 'box--large'],
	props.isActive ? 'box--is-active' : undefined,
	props.className
]);

/* props */
{ isActive: true, className: 'js-extra' }

/* output */
'box box--round box--large box--is-active js-extra'
```


### PropTypes.variants(variantArray)

Validates that all variants in a space seperated string are valid.

__Useage__

```jsx
const Button = ({ variant }) => (
	<div className={createVariants('box--', variant)} />
);

Button.propTypes = {
	variant: PropTypes.variants(['round', 'large', 'dark'])
}

/* valid */
<Button variant="round" />
<Button variant="large dark" />

/* invalid */
<Button variant="utlra" />
<Button variant="big dark" />
<Button variant="round ultra dark" />
```


## License

MIT Copyright ConnectiveDX 2016
