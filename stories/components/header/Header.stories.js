import Header from './header.handlebars'

export default {
  component: Header,
  title: "Components/Header",
  args:{
    showMobileNavItems: false,
    showMobileDropdownItems: false,
    showDropdownItems: false
  }
};

export const withTextBrand = (args) => Header(
  {
    ...args,
    class: "header--blue",
    withTextBrand: true,
    brandTitle: 'blog.rockarch.org',
    brandSubtitle: 'Rockefeller Archive Center Blog'
  }
)

export const withNavItems = (args) => Header(
  {
    ...args,
    class: "header--blue",
    withTextBrand: true,
    brandTitle: 'library.rockarch.org',
    brandSubtitle: 'The Online Collection & Catalog of Rockefeller Archive Center',
    withNavItems: true
  }
)

export const withDropdownItems = (args) => Header(
  {
    ...args,
    class: "header--white",
    withDropdownItems: true
  }
)

