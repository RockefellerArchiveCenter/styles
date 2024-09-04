export default {
  framework: {
    name: '@storybook/html-webpack5',
    options: {}
  },
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-docs',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-webpack5-compiler-swc',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    },
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    mode: 'icss' // allows use of :export directive
                  },
                },
              },
              'sass-loader',
            ],
          },
        ],
      },
    }
  ],

  webpackFinal: async (config) => {
    // Load Handlebars templates
    config.module.rules.push({
      test: /\.handlebars$/,
      use: ['handlebars-loader']
    });

    return config;
  },
};
