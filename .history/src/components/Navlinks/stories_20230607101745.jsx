import { Navlinks } from '.'
export default {
  title: 'Navlinks',
  component: Navlinks,
  args: {
    children: 'Navlinks'
  },
}
export const Template = (args) => {
  return (
    <div>
      <Navlinks {...args} />
    </div>
  )
}