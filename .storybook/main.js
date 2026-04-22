import Handlebars from 'handlebars';

const handlebarsPlugin = {
  name: 'handlebars-templates',
  transform(src, id) {
    if (id.endsWith('.handlebars')) {
      const template = Handlebars.precompile(src);
      return {
        code: `
          import Handlebars from 'handlebars/runtime';
          export default Handlebars.template(${template});
        `,
        map: null,
      };
    }
  },
};

export default {
  framework: {
    name: '@storybook/html-vite',
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
  ],
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      plugins: [handlebarsPlugin],
      css: {
        modules: {
          mode: 'icss',
        },
      },
    });
  },
};