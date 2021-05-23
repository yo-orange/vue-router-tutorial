# Testing

## library
- [jestjs](https://jestjs.io/ja/docs/mock-functions)
- [vue-test-utils](https://vue-test-utils.vuejs.org/ja/)

## unit-test
- https://v3.vuejs.org/guide/testing.html#unit-testing
- https://cli.vuejs.org/core-plugins/unit-jest.html#injected-commands
  - https://vue-test-utils.vuejs.org/ja/

### install
```
vue add unit-jest
```

### exec
```
npm run test:unit
```

## mock
- https://jestjs.io/ja/docs/mock-functions
- [TypeError: (0 , _testUtils.createLocalVue) is not a function](https://stackoverflow.com/questions/66932839/typeerror-0-testutils-createlocalvue-is-not-a-function)
  - NG : https://stackoverflow.com/questions/50528716/vue-test-utils-not-recognising-http-in-the-tests
- https://blog.christophe-henry.dev/2019/01/09/Mock-the-Vue-module-with-Jest.html
- https://qiita.com/torinist/items/39d91c034aebd59351d3

## mock propData
- https://lmiller1990.github.io/vue-testing-handbook/components-with-props.html#setting-props-with-propsdata

## mock router
- https://lmiller1990.github.io/vue-testing-handbook/vue-router.html#using-a-mock-router


# component-test
- [component-testing](https://v3.vuejs.org/guide/testing.html#component-testing)
- [vue-testing-library](https://github.com/testing-library/vue-testing-library)
  - https://testing-library.com/docs/vue-testing-library/intro/


# e2e-test
- https://v3.vuejs.org/guide/testing.html#introduction-4
- https://cli.vuejs.org/core-plugins/e2e-cypress.html#injected-commands

## cypress
- https://cli.vuejs.org/core-plugins/e2e-cypress.html#injected-commands
```bash
npm install cypress
./node_modules/.bin/cypress install
# node_modules\.bin\cypress open
vue add e2e-cypress
npm run test:e2e
```

```bash
# npm run serve
# ./node_modules/.bin/cypress run -s tests/e2e/specs/test.js
```
