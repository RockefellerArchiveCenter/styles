import Card from './card.handlebars'

export default {
  component: Card,
  title: "Components/Card",
  args:{
    titleText: 'Guide to Processing Collections',
    linkTarget: '#',
    bodyText: 'arrangement and description',
    footerText: 'Last updated Tuesday, Mar 31 2020 2:30 PM'
  }
};

export const basic = (args) => Card({ ...args, link: true })

export const noFooter = (args) => Card({ ...args, link: true, footerText: null })

export const container = (args) => Card(args)
