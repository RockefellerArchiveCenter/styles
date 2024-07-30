import Minimap from './minimap.handlebars'

export default {
  component: Minimap,
  title: "Components/Minimap"
};

export const fiveAcross = () => Minimap({ class: 'minimap--5-across' })

export const tenAcross = () => Minimap({ class: 'minimap--10-across' })

export const twentyAcross = () => Minimap({ class: 'minimap--20-across' })
