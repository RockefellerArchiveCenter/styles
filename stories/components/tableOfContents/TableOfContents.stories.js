import TableOfContents from './tableOfContents.handlebars'
import listItems from './listItems';

export default {
  component: TableOfContents,
  title: "Components/Table of Contents",
  args:{
    ariaLabel: 'table of contents',
    listItems: listItems,
  }
};

export const neutral = (args) => TableOfContents({ class: 'toc--neutral', ...args })

export const blue = (args) => TableOfContents({ class: 'toc--blue', ...args })

export const orange = (args) => TableOfContents({ class: 'toc--orange', ...args })

export const withSection = (args) => TableOfContents({ class: 'toc--neutral', title: 'Digital Preservation Policy', ...args })

export const skipNavigation = (args) => TableOfContents({ class: 'toc--blue', skipNavigation: true, ...args })