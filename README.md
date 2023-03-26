# Collection of linter rules used for codewyre projects

## Eslint

### Setup

JavaScript & TypeScript:
`yarn add eslint-config-airbnb@^19.0.4 eslint-plugin-import@^2.20.2 eslint@^8.5.0`

TypeScript :
`yarn add @typescript-eslint/eslint-plugin@^5.30.5 @typescript-eslint/parser@^5.32.0 eslint eslint-config-airbnb@^19.0.4 eslint-plugin-import@^2.20.2 eslint@^8.5.0`


### .eslintrc:

```js
// JS:
module.exports = {
  ...require('@codewyre/rules/javascript/eslint');
};

// TypeScript:
module.exports = {
  ...require('@codewyre/rules/typescript/eslint');
};
```

### Usage

TypeScript:

`eslint "src/**/*.ts" "src/**/*.tsx"`

JavaScript:

`eslint "src/**/*.js" "src/**/*.jsx"`