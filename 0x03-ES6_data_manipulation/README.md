# 0x03. ES6 data manipulation

__JavaScript__ __ES6__

### Resources
__Read or watch:__
  - [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
  - [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
  - [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
  - [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

### Learning Objectives
__At the end of this project, you are expected to be able to explain to anyone, without the help of Google:__
  - How to use map, filter and reduce on arrays
  - Typed arrays
  - The Set, Map, and Weak link data structures

### Requirements
  - All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
  - Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
  - All your files should end with a new line
  - A `README.md` file, at the root of the folder of the project, is mandatory
  - Your code should use the `js` extension
  - Your code will be tested using `Jest` and the command `npm run test`
  - Your code will be verified against lint using ESLint
  - Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
  - All of your functions must be exported

### Setup
#### Install NodeJS 12.11.x
**(in your home directory)**

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Configuration Files
Add the following files to your project directory

__packagae.json__

```
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

__babel.config.js__

```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

__.eslintrc.js__

```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

#### and...
Don't forget to run `$ npm install` when you have the `package.json`
