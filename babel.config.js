module.exports = function(api) {
  api.cache(true);
  return {
    ignore: [
      /\/core-js/,
      /@babel\/runtime/,
    ],
    presets: [
      'babel-preset-expo',
      [
        "@babel/preset-env",
        {
          "targets": {
            "chrome": "58",
            "ios": "9",
          },
          "include": [
            "transform-block-scoping"
          ],
          useBuiltIns: 'usage',
          corejs: 3,
          forceAllTransforms: true,

          debug: true,
        }
      ]
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-transform-block-scoping"
    ],
  };
};
