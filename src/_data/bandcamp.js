const fetch = require('@11ty/eleventy-fetch');
const parser = require("node-html-parser");


const subdomains = [
  "cipherprime",
  "dainsaint",
  "saintanytime"
]

module.exports = async () => {
  const result = {};

  try {
    for( const subdomain of subdomains ) {
      const page = await fetch(`https://${subdomain}.bandcamp.com`, {
        duration: "1d",
        type: "text"
      });
      
      const html = parser.parse(page);
      const albumEls = html.querySelectorAll(".music-grid-item");
      const albums = albumEls.map( el => {
        const anchor = el.querySelector("a");
        const img = el.querySelector("img");
        const title = el.querySelector(".title");

        return {
          url: `https://${subdomain}.bandcamp.com` + anchor?.getAttribute("href"),
          art: img?.getAttribute("data-original") || img?.getAttribute("src"),
          title: title?.innerText.trim().replace(/\s\s+/, " - "),
        };
      })

      result[subdomain] = albums;
    }
  } catch(e) {
    console.log(e);
  }


  return result;
};
