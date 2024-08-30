# RAC Style Library and Guide
Style library and guide for Rockefeller Archive Center websites.

## Getting started
Install dependencies using `yarn install`.

This project uses [Dart Sass](https://sass-lang.com/dart-sass). Compile SCSS stylesheets to CSS using:
```
yarn compile
```

## Storybook
We use [Storybook](https://storybook.js.org/) to help us develop styles and documentation for components and provide and interactive UI. To run Storybook locally, run `yarn storybook`. Storybook should open in a new browser tab at `http://localhost:6006`.

### Component documentation sources
We used multiple existing design system documentation and style guides to help document and articulate best practices for our own components, including the [GOV.UK Design System](https://design-system.service.gov.uk/), [Atlassian Design System](https://atlassian.design/), [Carbon](https://www.carbondesignsystem.com/), and [A11y Style Guide](https://a11y-style-guide.com/style-guide/).

## Tests
Unit tests have been added to ensure that mixin output and Sass functions are correct. To run tests:
```
yarn test
```

Unit tests are set up to run in the CI pipeline. The build will fail if the tests do not pass.

## Linting
This project uses [stylelint](https://stylelint.io/), which can be configured using the `.stylelintrc.json` file located in the root of this repository. To run linting:
```
yarn lint
```

To autofix any reported issues (manual cleanup may still be required):
```
yarn lint-fix
```

Linting is set up to run in the CI pipeline. The build will fail if linting does not pass.

## Attribution
The `/stylesheets` structure and README files are adapted from [sass-biolerplate](https://github.com/KittyGiraudel/sass-boilerplate), created by Kitty Giraudel.

## License
This code is released under an [MIT License](LICENSE).
