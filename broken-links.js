const {SiteChecker} = require('broken-link-checker');

const siteChecker = new SiteChecker({
    excludeInternalLinks: false,
    excludeExternalLinks: true,
    acceptedSchemes: ["http", "https"],
    excludeKeywords: [""]
},
{
  "error": (error) => {
     console.error(error)
  },
  "end": () => {
    console.log("THE SCAN IS COMPLETE :D")
  },
  "link": (result) => {
    console.log(result);
  }
}
)

siteChecker.enqueue("https://www.canada.ca/en.html");