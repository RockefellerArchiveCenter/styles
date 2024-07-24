const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  addons: ['@storybook/addon-docs', {
    name: '@storybook/addon-essentials',
    options: {
      actions: false
    }
  }, '@whitespace/storybook-addon-html', '@storybook/addon-links', '@storybook/addon-a11y', {
    name: '@storybook/preset-scss',
    options: {
      cssLoaderOptions: {
        modules: {
          mode: 'icss' // allows use of :export directive
        }
      }
    }
  }, '@storybook/addon-webpack5-compiler-swc', '@chromatic-com/storybook'],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Load Handlebars templates
    config.module.rules.push({
      test: /\.handlebars$/,
      use: ['handlebars-loader']
    })
    return config
  },

  framework: {
    name: '@storybook/html-webpack5',
    options: {}
  }
};
export default config;