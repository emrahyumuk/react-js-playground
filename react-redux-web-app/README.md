# React Redux Web App

* ### **install nodejs**

* ### **install yarn**

* ### **install vscode and plugins**

  plugins

  * ESlint
  * Styleint
  * Prettier

* ### **create react app**

```sh
yarn global add create-react-app

create-react-app react-redux-web-app
cd react-redux-web-app
yarn start
```

* ### **prettier**

create vscode settings.json (.vscode>settings.json)

```json
{
  "editor.formatOnSave": true,
  "prettier.printWidth": 100,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all"
}
```

* ### **eslint**

```sh
yarn global add eslint
```

```sh
yarn add eslint --dev
node_modules/eslint/bin/eslint.js --init
```

    use popular style guide > airbnb
    do you use react > yes
    config file format > JSON

```sh
yarn add prettier eslint-plugin-prettier --dev

yarn add eslint-config-prettier --dev
```

create .eslintrc.json

```json
{
  "extends": ["airbnb", "prettier"],
  "env": {
    "browser": true,
    "jest": true
  },
  "plugins": ["react", "jsx-a11y", "import", "prettier"],
  "rules": {
    "react/jsx-filename-extension": "off",
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "singleQuote": true,
        "printWidth": 100
      }
    ]
  }
}
```

* ### **stylelint**

```sh
yarn global add stylelint
```

```sh
yarn add stylelint stylelint-config-standard --dev
```

create .stylelintrc file

```json
{
  "extends": "stylelint-config-standard"
}
```

* ### **add package.json lint scripts**

```json
  "scripts": {
    ...
    ...
    "lint:eslint": "eslint .",
    "lint:stylelint": "stylelint src/index.css,src/App.css",
    "lint": "yarn run lint:eslint && yarn run lint:stylelint",
    ...
    ...
    ...
  }
```

```sh
yarn run lint
```

* ### **formatter before github commit**

```sh
yarn add lint-staged pre-commit --dev
```

add to package.json

```json
  "scripts": {
    ...
    ...
    "format": "prettier --print-width=100 --single-quote --trailing-comma all --write \"{src}/**/*.js\"",
    "lint-staged": "lint-staged",
    ...
    ...
    ...
  },
  "lint-staged": {
    "*.js": [
      "yarn run format",
      "git add"
    ]
  },
  "pre-commit": "lint-staged"
```

* ### **enzyme snapshot test**

```sh
yarn add enzyme enzyme-to-json enzyme-adapter-react-16 react-test-renderer --dev
```

add setupTest.js to src folder

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

create **test** folder in src folder and add App.test.js to **test** folder

```js
import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

it('renders correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
```

add jest config to package.json

```json
{
...
...
"scripts":{
 ...
},
...
"jest": {
    "snapshotSerializers": [
      "<rootDir>/node_modules/enzyme-to-json/serializer"
    ]
  }
}
```

snapshot test

```sh
yarn test
```

snapshot update

```sh
yarn test -- -u
```

* ### **test coverage**

add coverage script to package.json

```json
  "scripts": {
    ...
    ...
    ...
    "coverage" : "yarn run test -- --coverage",
    ...
    ...
  }
```

```sh
yarn run coverage
```

```sh
cd coverage/Icov-report
static
```

you can see coverage report on http://127.0.0.1:8080

* ### **eslint ignore file**

add .eslintignore file and add coverage folder line

```
coverage
```

* ### **istanbul**

```sh
yarn add istanbul --dev
```

add postcoverage script to package.json

```json
  "scripts": {
    ...
    ...
    ...
    "coverage": "yarn run test -- --coverage",
    "postcoverage": "istanbul check-coverage --statement 90 --functions 90 --branches 90 --lines 90",
    ...
    ...
  }
```

```sh
yarn run coverage
```

change coverage script for exclude file from coverage

```json
  "scripts": {
    ...
    ...
    ...
    "coverage": "yarn run test -- --coverage --collectCoverageFrom=src/**/*.js --collectCoverageFrom=!src/index.js",
    "postcoverage": "istanbul check-coverage --statement 90 --functions 90 --branches 90 --lines 90",
    ...
    ...
  }
```

* ### **travis configuration**

add .travis.yml file

```ruby
language: node_js

node_js:
  - "9"

sudo: false

cache: yarn

script:
  - yarn run test:ci
```

* ### **codecov**

```sh
yarn add codecov --dev
```

add after_success line to .travis.yml file

```ruby
after_success:
  - bash <(curl -s https://codecov.io/bash)
```

for private repo

```ruby
after_success:
  - bash <(curl -s https://codecov.io/bash) -t <codecov_token>
```

* ### **surge.sh deployment**

```sh
yarn global add surge

surge
```

```sh
surge login

surge token
```

add travis surge configs to .travis.yml

```ruby
before_deploy:
  - yarn run build
  - cp ./build/index.html ./build/200.html

deploy:
  provider: surge
  project: ./build/
  domain: react-redux-web-app.surge.sh
  skip_cleanup: true
```

* ### **react redux**

```sh
yarn add redux react-redux redux-logger

yarn add redux-thunk
```

* ### **react router**

```sh
yarn add react-router react-router-redux@next history

yarn add react-router-dom

yarn add prop-types
```


Source: https://youtu.be/oGOyZMB2-Ko
