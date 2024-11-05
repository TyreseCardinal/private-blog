// Import the 'path' module to handle file paths
const path = require("path");

module.exports = {
  // The output directory for the build
  outputDir: path.resolve(__dirname, "dist"),

  // Additional Webpack configurations can be placed here
  configureWebpack: {
    resolve: {
      // Adding aliases for easier imports
      alias: {
        "@": path.resolve(__dirname, "src"), // This allows you to use '@' as a shortcut for 'src'
        utils: path.resolve(__dirname, "src/utils"), // If you have a utils directory
      },
    },
  },

  // You can add other configuration options as needed
  devServer: {
    port: 8080, // Specify the port the dev server runs on
    open: true, // Automatically opens the browser when the server starts
  },
};
