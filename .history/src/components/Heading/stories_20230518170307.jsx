import { Heading } from '.'

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: 'Não sei',
  }
}

export const Template = (args) => <Heading {...args}/>