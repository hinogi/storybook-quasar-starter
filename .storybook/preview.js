import { Quasar } from 'quasar';
import { app } from '@storybook/vue3';

import 'quasar/dist/quasar.prod.css';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';

// We load Quasar stylesheet file
import 'quasar/dist/quasar.sass';
import 'src/css/app.sass';

const qAppEl = document.createElement('div');

qAppEl.setAttribute('id', 'q-app');
document.getElementsByTagName('body')[0].appendChild(qAppEl);

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
