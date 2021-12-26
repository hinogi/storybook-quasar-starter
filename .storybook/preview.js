import { Quasar } from 'quasar';
import { createApp } from 'vue';

import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/roboto-font/roboto-font.css';
// We load Quasar stylesheet file
import 'quasar/dist/quasar.sass';
import 'src/css/app.sass';

const app = createApp();
app.use(Quasar, { config: {}, directives: {} });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
