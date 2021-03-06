//vue.config.js
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionPlugin = require("compression-webpack-plugin");

const { mode = "env" } = process.env;

const plugins = [];

if (mode === "production") {
  plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "static" }));
  plugins.push(new CompressionPlugin());
}

const pwa = {
  theme_color: "#EE0003",
  background_color: "#ffffff",
  display: "browser",
  scope: "/",
  start_url: "/",
  name: "Bitcoin Rollercoaster - Live updates",
  short_name: "Bitcoin Rollercoaster",
  description:
    "Get realtime updates on the Bitcoin price. You also get to see our Rollercoaster Buddy having fun!"
};
module.exports = {
  pwa,
  configureWebpack: { plugins },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].meta = {
        viewport: "width=device-width,initial-scale=1,user-scalable=no",
        description:
          "Display the Bitcoin price in realtime. Also, you get to watch the Rollercoaster Guy having a blast.",
        "og:type": "website",
        "og:url": "https://bitcoinrollercoaster.page/",
        "og:title": "Bitcoin Rollercoaster",
        "og:image": "https://bitcoinrollercoaster.page/favicon-500x500.png"
      };
      args[0].favicon = "./public/favicon.ico";
      args[0].filename = "index.html";
      args[0].inject = true;
      args[0].title = "Bitcoin Rollercoaster";

      return args;
    });
  }
};
