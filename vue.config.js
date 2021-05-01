//vue.config.js
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
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].meta = {
        viewport: "width=device-width,initial-scale=1,user-scalable=no",
        "description": "Display the Bitcoin price in realtime. Also, you get to watch the Rollercoaster Guy having a blast.",
        "og:type": "website",
        "og:url": "https://bitcoinrollercoaster.page/",
        "og:title": "Bitcoin Rollercoaster",
        "og:image": "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png",
      };
      args[0].favicon = "./public/favicon.ico";
      args[0].filename = "index.html";
      args[0].inject = true;
      args[0].title = "Bitcoin Rollercoaster";

      return args;
    });
  }
};
