const ghostContentAPI = require("@tryghost/content-api");

require("dotenv").config()

const api = new ghostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v6.0"
});

function stripDomain(s) {
  return s;
}

module.exports = async function() {
  const result = []

  try {

  const posts = await api.posts.browse({
    include: "tags,authors",
    limit: 1,
  })

  result.push( ...posts );
  
  return result;

  } catch (error) {
    console.error(error);
    return [];
  }

};