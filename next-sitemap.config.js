const { userAgent } = require("next/server");

module.exports = {
  siteUrl: "https://sunmith.com/en",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/secret",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  exclude: ["/secret/"],
};
