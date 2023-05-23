import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
  argTypes: {
    children: { type: 'string' }
  },
  background: {
    default: 'dark'
  }
}

export const Template = (args) => <Heading {...args}/>