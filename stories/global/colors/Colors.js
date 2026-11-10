import * as variables from '../../../stylesheets/abstracts/_variables.scss'

export const colors = {
  crustaOrange: variables.crustaorange,
  flameOrange: variables.flameorange,
  rustRed: variables.rustred,
  umberBrown: variables.umberbrown,
  maroonBrown: variables.maroonbrown,
  sandyOrange: variables.sandyorange,
  peachOrange: variables.peachorange,
  wanWhiteGrey: variables.wanwhitegrey,
  silverGrey: variables.silvergrey,
  desertGrey: variables.desertgrey,
  waterBlue: variables.waterblue,
  solitudeBlue: variables.solitudeblue,
  regalBlue: variables.regalblue,
  yaleBlue: variables.yaleblue,
  midnightBlue: variables.midnightblue,
  black: variables.black,
  nightGrey: variables.nightgrey,
  mortarGrey: variables.mortargrey,
  darkGrey: variables.darkgrey,
  white: variables.white,
  roseViolet: variables.roseviolet
}

// Hex equivalents of the Sass colors.
export const hex = {
  crustaOrange: '#F16741',
  flameOrange: '#D7521D',
  rustRed: '#9F3C0F',
  umberBrown: '#B53C0D',
  maroonBrown: '#662700',
  sandyOrange: '#F39653',
  peachOrange: '#FFCC99',
  wanWhiteGrey: '#E3E1DD',
  silverGrey: '#BCBAB3',
  desertGrey: '#F6F6F4',
  waterBlue: '#C5D1DD',
  solitudeBlue: '#EBEFF4',
  regalBlue: '#192D48',
  yaleBlue: '#1B5198',
  midnightBlue: '#113769',
  black: '#000000',
  nightGrey: '#2E2E2E',
  mortarGrey: '#5C5C5C',
  darkGrey: '#A8A8A8',
  white: '#FFFFFF',
  roseViolet: '#FFE6E6'
}

// For color labels: each swatch with its hex code, then its HSL value
export const swatches = (...keys) => Object.fromEntries(keys.map((key) => [hex[key], colors[key]]))
