import { MenuLink } from '.'

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink'
  },
  argTypes: {
    children: { type: 'string' }
  },
}

export const Template = (args) => {
  return (
    <div>
      <MenuLink {...args} />
    </div>
  )
}