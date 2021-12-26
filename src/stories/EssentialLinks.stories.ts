import EssentialLink from 'components/EssentialLink.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Quasar/EssentialLink',
  component: EssentialLink,
};

const Template = (args: any) => ({
  components: { EssentialLink },
  setup() {
    return { args };
  },
  template: '<essential-link v-bind="args" />',
});

export const Docs = Template.bind({}) as any;
Docs.args = {
  title: 'Docs',
  caption: 'quasar.dev',
  icon: 'school',
  link: 'https://quasar.dev',
};
Docs.storyName = 'Quasar Docs';

export const Github = Template.bind({}) as any;
Github.args = {
  title: 'Github',
  caption: 'github.com/quasarframework',
  icon: 'code',
  link: 'https://github.com/quasarframework',
};
Github.storyName = 'Github';

export const Discord = Template.bind({}) as any;
Discord.args = {
  title: 'Discord Chat Channel',
  caption: 'chat.quasar.dev',
  icon: 'chat',
  link: 'https://github.com/quasarframework',
};
Discord.storyName = 'Discord Chat Channel';

export const Forum = Template.bind({}) as any;
Forum.args = {
  title: 'Forum',
  caption: 'forum.quasar.dev',
  icon: 'record_voice_over',
  link: 'https://github.com/quasarframework',
};
Forum.storyName = 'Forum';

export const Twitter = Template.bind({}) as any;
Twitter.args = {
  title: 'Twitter',
  caption: '@quasarframework',
  icon: 'rss_feed',
  link: 'https://twitter.quasar.dev',
};
Twitter.storyName = 'Twitter';

export const Facebook = Template.bind({}) as any;
Facebook.args = {
  title: 'Facebook',
  caption: '@QuasarFramework',
  icon: 'public',
  link: 'https://facebook.quasar.dev',
};
Facebook.storyName = 'Facebook';

export const Awesome = Template.bind({}) as any;
Awesome.args = {
  title: 'Quasar Awesome',
  caption: 'Community Quasar projects',
  icon: 'favorite',
  link: 'https://awesome.quasar.dev',
};
Awesome.storyName = 'Quasar Awesome';
