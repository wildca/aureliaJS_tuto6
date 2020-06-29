[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![CircleCI](https://circleci.com/gh/aurelia/aurelia.svg?style=shield)](https://circleci.com/gh/aurelia/aurelia)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5ac0e13689735698073a/test_coverage)](https://codeclimate.com/github/aurelia/aurelia/test_coverage)
[![npm](https://img.shields.io/npm/v/@aurelia/babel-jest.svg?maxAge=3600)](https://www.npmjs.com/package/@aurelia/babel-jest)
# @aurelia/babel-jest

## Installing

For the latest stable version:

```bash
npm i -D @aurelia/babel-jest
```

For our nightly builds:

```bash
npm i -D @aurelia/babel-jest@dev
```

## Usage

In `jest.config.js` or `package.json`:

```js
"transform": {
  "\\.(js|html)$": "@aurelia/babel-jest"
}
```

Use ShadowDOM:

```js
"transform": {
  "\\.(js|html)$": ["@aurelia/babel-jest", { defaultShadowOptions: { mode: 'open' } }]
}
```

Use CSS Modules:

```js
"transform": {
  "\\.(js|html)$": ["@aurelia/babel-jest", { useCSSModule: true }]
}
```