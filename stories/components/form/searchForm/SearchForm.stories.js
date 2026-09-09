import Search from './searchForm.handlebars'

export default {
  component: Search,
  title: "Components/Form/Search"
};

export const basic = () => Search({
  hideLabel: true,
  controlsBlock: false,
  controlsInline: false,
  button: true
})

export const withVisibleLabel = () => Search({
  hideLabel: false,
  controlsBlock: false,
  controlsInline: false,
  button: true
})

export const withVisibleLabelAndInlineControls = () => Search({
  hideLabel: false,
  controlsBlock: false,
  controlsInline: true,
  button: true
})

export const withBlockControls = () => Search({
  hideLabel: true,
  controlsBlock: true,
  controlsInline: false,
  button: true
})

export const withInlineControls = () => Search({
  hideLabel: true,
  controlsBlock: false,
  controlsInline: true,
  button: true
})
