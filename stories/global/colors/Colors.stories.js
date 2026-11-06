import ContrastGrid from './contrastGrid.handlebars'
import contrastPairs from './contrastPairs.json'
import { colors, hex } from './Colors'

// contrastPairs.json lists each dark text color with the light backgrounds it passes
// WCAG AA (4.5:1) on. Only the normal text ratio is used, not large text or UI.
// Update if colors change, e.g. with https://webaim.org/resources/contrastchecker/
const { backgrounds: lights, pairs } = contrastPairs
const darks = Object.keys(pairs)

// Contrast is the same both ways, so the light-on-dark grid reuses the same list
const passes = (a, b) => pairs[a]?.includes(b) || pairs[b]?.includes(a)

// camelCase key -> Sass variable name, plus its hex code
const label = (key) => ({ name: key.replace(/([A-Z])/g, '-$1').toLowerCase(), hex: hex[key] })

const grid = (textColors, backgroundColors) => ContrastGrid({
  backgrounds: backgroundColors.map(label),
  rows: textColors.map((text) => ({
    ...label(text),
    cells: backgroundColors.map((background) => ({
      passes: passes(text, background),
      text: colors[text],
      background: colors[background]
    }))
  }))
})

export default {
  component: ContrastGrid,
  title: 'Global/Colors'
}

export const darkTextOnLight = () => grid(darks, lights)
export const lightTextOnDark = () => grid(lights, darks)
