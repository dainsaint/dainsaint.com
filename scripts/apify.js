const fetch = require("node-fetch");

module.exports = (
  baseUrl,
  headers = { "Content-Type": "application/json" }
) => {
  const doFetch = async (method, url, body) => {
    const strippedUrl = url.replace(/^\//, "");
    const response = await fetch(baseUrl + "/" + strippedUrl, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(await response.text());
    }
  };

  return {
    get: async (url) => await doFetch("GET", url),
    put: async (url, body) => await doFetch("PUT", url, body),
    post: async (url, body) => await doFetch("POST", url, body),
    delete: async (url) => await doFetch("DELETE", url),
  };
};
