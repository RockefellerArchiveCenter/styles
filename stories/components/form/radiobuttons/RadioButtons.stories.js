import RadioButtons from './radioButtons.handlebars'
import radiobuttonsColors from './colors.json'
import radiobuttonsItems from './items.json'

export default {
  component: RadioButtons,
  title: "Components/Form/RadioButtons"
};

export const basic = (args) => RadioButtons(args)
basic.args = {
  legend: 'Select your favorite fruit',
  items: radiobuttonsItems
}

export const colors = (args) => RadioButtons (args)
colors.args = {
  legend: 'Select your favorite fruit',
  colors: radiobuttonsColors
}

export const required = (args) => RadioButtons(args)
required.args = {
  legend: 'Select your favorite fruit',
  items: radiobuttonsItems,
  required: true
}

export const helpText = (args) => RadioButtons(args)
helpText.args = {
  legend: 'Select your favorite fruit',
  items: radiobuttonsItems,
  helpText: true
}

