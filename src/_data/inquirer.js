const fetch = require('@11ty/eleventy-fetch');
const parser = require("node-html-parser");

// TODO: Rewrite this to use arc credentials, and cache everything so if the format changes/lose access i still have the archive


module.exports = async () => {
  const page = await fetch("https://www.inquirer.com/author/saint_dain/", {
    duration: "1d",
    type: "text"
  });

  const html = parser.parse(page);
  const articles = html.querySelector("#fusion-metadata");
  const split = articles?.innerText.split("Fusion");
  let text = split
    ?.find( text => text.startsWith(".globalContent"))
    ?.replace(".globalContent=", "")

  text = text?.substring(0, text.length - 1);

  try {
    const json = JSON.parse(text);
    const data = json.content_elements.map( arc => ({
      title: arc.headlines.print || arc.headlines.basic,
      description: arc.description.basic,
      team: arc.credits.by.map( reporter => ({ name: reporter.name, twitter: reporter.additional_properties.original.twitter }) ),
      image: arc.image.url,
      url: `https://inquirer.com/${arc.canonical_url}`,
      date: arc.display_date
    }));

    return data;
  } catch(e) {
    console.log(e); 
  }
  
  return {};
  
};
