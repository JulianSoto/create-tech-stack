const path = require('path');

module.exports = {
  paths: paths => {
    paths.appBuild = path.resolve(paths.appPath, 'dist');
    return paths;
  },
};
