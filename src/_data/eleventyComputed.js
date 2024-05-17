const { formatHex, lch, interpolate, wcagContrast } = require("culori");
const Color = require("color");

const lightGradientDestination = lch("#F9F871");
const darkGradientDestination = lch("#361339");
const brandColor = "#573E79";

module.exports = {
  color: (data) => {
    if (data.color) return data.color;
    else if (data.pagination) return data.pagination.items[0].data.color;
    else return brandColor;
  },

  design: {
    brandColor: () => brandColor,

    paginationColor: (data) => {
      if (data.pagination) return data.pagination.items[0].data.color;
      else return brandColor;
    },

    palette: (data) => {
      const color = data.color ? data.color : brandColor;
      const destination = Color(color).isLight()
        ? darkGradientDestination
        : lightGradientDestination;
      const stops = [0.0, 0.2, 0.4, 0.6, 0.8];

      const gradient = interpolate([lch(color), destination], "lch");
      const colors = stops.map((stop) => formatHex(gradient(stop)));
      const contrast = colors.map((color) =>
        Color(color).isLight() ? "#062535" : "#f7ede2"
      );
      const contrastAlpha = colors.map((color) =>
        Color(color).isLight() ? "#06253520" : "#f7ede220"
      );

      //Force WGA compliance
      const adjusted = colors.map((color, i) => {
        if (wcagContrast(color, contrast[i]) > 7) return color;

        const maximum = Color(color).isLight() ? "#f7ede2" : "#062535";
        const adjust = interpolate([lch(color), lch(maximum)], "lch");
        const adjustment = 0.2;
        let stop = 0.05;
        let jettison = 100;
        while (wcagContrast(color, contrast[i]) < 7 && jettison > 0) {
          color = formatHex(adjust(adjustment));
          stop += adjustment;
          jettison--;
        }

        return color;
      });

      return adjusted.map((color, i) => ({
        color: color,
        contrast: contrast[i],
        contrastAlpha: contrastAlpha[i],
      }));
    },
  },
};
