import chroma from 'chroma-js';

export function generatePalette(baseHex) {
  const light = chroma(baseHex).brighten(2.5);
  const dark = chroma(baseHex).darken(2.5);
  const scale = chroma.scale([light, baseHex, dark]).mode('lab').colors(10);

  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const palette = {};

  steps.forEach((step, i) => {
    palette[step] = scale[i];
  });

  return palette;
}
