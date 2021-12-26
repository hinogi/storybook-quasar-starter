const { resolve } = require('path');

const resolveAlias = (rootRelativePath, aliases) => {
  return (accumulator, name) => {
    const aliasPath = aliases[name];

    const resolvedPath = resolve(...rootRelativePath, ...aliasPath);

    return {
      ...accumulator,
      [name]: resolvedPath,
    };
  };
};

const aliases = {
  '@': ['src'],
  src: ['src'],
  app: ['.'],
  components: ['src', 'components'],
  layouts: ['src', 'layouts'],
  pages: ['src', 'pages'],
  assets: ['src', 'assets'],
  boot: ['src', 'boot'],
};

module.exports = (...dir) =>
  Object.keys(aliases).reduce(resolveAlias(dir, aliases), {});
