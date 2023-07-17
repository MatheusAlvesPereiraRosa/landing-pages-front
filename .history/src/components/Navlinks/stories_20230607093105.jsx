import { Navlinks } from '.'
export default {
  title: 'Navlinks',
  component: Navlinks,
  args: {
    children: 'Navlinks'
  },
  argTypes: {
    children: { type: 'string' }
  },
}
export const Template = (args) => {
  return (
    <div>
      <Navlinks {...args} />
    </div>
  )
}