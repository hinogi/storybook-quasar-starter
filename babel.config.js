/* eslint-env node */

module.exports = (api) => {
  return {
    presets: [
      [
        '@quasar/babel-preset-app',
        api.caller((caller) => caller && caller.target === 'node')
          ? { targets: { node: 'current' } }
          : {},
      ],
    ],
    plugins: [
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
  };
};
