import ContrastGrid from './contrastGrid.handlebars'
import contrastPairs from './contrastPairs.json'
import { colors, hex } from './Colors'

// contrastPairs.json lists each text color with the backgrounds it passes
// WCAG AA (4.5:1) on. Only the normal text ratio is used, not large text or UI.
// Update if colors change, e.g. with https://webaim.org/resources/contrastchecker/
const { backgrounds, pairs } = contrastPairs

// camelCase key -> Sass variable name, plus its hex code
const label = (key) => ({ name: key.replace(/([A-Z])/g, '-$1').toLowerCase(), hex: hex[key] })

export default {
  component: ContrastGrid,
  title: 'Global/Colors'
}

export const contrastGrid = () => ContrastGrid({
  backgrounds: backgrounds.map(label),
  rows: Object.entries(pairs).map(([text, passing]) => ({
    ...label(text),
    cells: backgrounds.map((background) => ({
      passes: passing.includes(background),
      text: colors[text],
      background: colors[background]
    }))
  }))
})
