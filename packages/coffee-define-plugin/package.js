Package.describe({
  name: 'vasyl:coffee-define-plugin',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Allows to use a command define in coffeescript',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "compileCoffeescript",
  use: [],
  sources: [
    'plugin/coffee-define-plugin.js'
  ],
  npmDependencies: {"coffee-script": "1.7.1", "source-map": "0.1.32"}
});
