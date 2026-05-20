import Search from './searchForm.handlebars'

export default {
  component: Search,
  title: "Components/Form/Search"
};

export const basic = () => Search({
  hideLabel: false,
  controlsBlock: false,
  controlsInline: false,
  button: true
})

export const withBlockControls = () => Search({
  hideLabel: false,
  controlsBlock: true,
  controlsInline: false,
  button: true
})

export const withInlineControls = () => Search({
  hideLabel: false,
  controlsBlock: false,
  controlsInline: true,
  button: true
})
