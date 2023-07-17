import { TextComponent } from '.'
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia modi porro? Velit odit sed ut soluta, molestiae voluptatem omnis, ipsa est ratione quo corporis accusantium maiores odio iste voluptatibus?"
  },
  argTypes: {
    children: { type: 'string' }
  },
}
export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  )
}