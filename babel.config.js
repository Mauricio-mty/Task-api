module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" } // indica que apunte a tu versión de Node
      }
    ]
  ]
};
