const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Emerging Tech Hackathon", // Navigation and Site Title
  siteTitleAlt: "EmTechHack", // Alternative Site title for SEO
  siteTitleShort: "ETH", // short_name for manifest
  siteHeadline: "Empowering students to create on the cutting edge.", // Headline for schema.org JSONLD
  siteUrl: "http://emtechhack.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "EmTechHack - Empowering students to create on the cutting edge.",
  author: "Liam McMains", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "", // Twitter Username
  ogSiteName: "EmTechHack", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-143953243-1",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
