module.exports = function(api) {
  api.cache(true);
  const presets = [
    // "@babel/preset-es2015",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ];
  //   const es = {
  //     plugins: [
  //       "annotate-pure-calls",
  //       ["import-export-rename", { "^(.+?)(?:\\.m?js)?$": "$1.js" }]
  //     ]
  //   };

  const plugins = [
    "@babel/plugin-transform-arrow-functions"
    // "import",
    // "@babel/plugin-syntax-dynamic-import"
    // "annotate-pure-calls"
    // ["import-export-rename", { "^(.+?)(?:\\.m?js)?$": "$1.js" }]
  ];
  return {
    presets,
    plugins
  };
};
