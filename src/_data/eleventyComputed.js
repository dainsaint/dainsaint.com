const { formatHex, lch, interpolate } = require("culori");
const Color = require("color");

const lightGradientDestination = lch("#F9F871");
const darkGradientDestination = lch("#361339");

module.exports = {
  design: {
    paginationColor: (data) => {
      if (data.pagination) return data.pagination.items[0].data.color;
      else return "#121212";
    },

    palette: (data) => {
      const color = data.color ? data.color :"#121212";
      const destination = Color(color).isLight()
        ? darkGradientDestination
        : lightGradientDestination;
      const stops = [0.0, 0.2, 0.4, 0.6, 0.8];

      const gradient = interpolate([ lch(color), destination ], "lch");
      const colors = stops.map( stop => formatHex( gradient(stop)) );
      const contrast = colors.map ( color => Color(color).isLight() ? "#062535" : "#f7ede2" );
      const contrastAlpha = colors.map ( color => Color(color).isLight() ? "#06253520" : "#f7ede220" );

      return colors.map( (color, i) => ({
        color: color,
        contrast: contrast[i],
        contrastAlpha: contrastAlpha[i]
      }))
    }
  }
};
