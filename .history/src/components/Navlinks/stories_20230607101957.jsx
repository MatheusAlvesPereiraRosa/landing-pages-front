import { Navlinks } from '.'
import link from './mock'

export default {
  title: 'Navlinks',
  component: Navlinks,
  args: {
    links: [],
  },
}
export const Template = (args) => {
  return (
    <div>
      <Navlinks {...args} />
    </div>
  )
}