import MyButton from './Button.vue';

const Template = (args: any) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({}) as any;
Primary.args = { primary: true };

export const Secondary = Template.bind({}) as any;
Secondary.args = { primary: false };

export default {
  title: 'MyButton/Button',
  component: MyButton,
  args: { label: 'MyButton' },
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      options: ['small', 'medium', 'large'],
      control: 'select',
    },
  },
};
