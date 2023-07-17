import { Navlinks } from '.'
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