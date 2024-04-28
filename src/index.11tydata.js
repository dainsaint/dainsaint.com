module.exports = {
  eleventyComputed: {
    color: data => {
      if( data.color )
        return data.color
      else if( data.pagination )
        return data.pagination.items[0].data.color;
      else
        return "#121212";
    }
  }
}
