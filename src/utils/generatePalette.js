import chroma from 'chroma-js';

export function generatePalette(baseHex) {
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const palette = {};

  const light = chroma(baseHex).brighten(3.8);
  const dark = chroma(baseHex).darken(3.4);

  const lightScale = chroma.scale([light, baseHex]).mode('lab').colors(6); // 50–400
  const darkScale = chroma.scale([baseHex, dark]).mode('lab').colors(6);   // 400–900

  const fullScale = [...lightScale, ...darkScale.slice(1)]; // remove duplicate 400

  fullScale.forEach((color, i) => {
    const step = String(steps[i]).padStart(2, '0');
    palette[`--color-p-${step}`] = color;
  });

  return palette;
}
