import chroma from 'chroma-js';

export function generatePalette(baseHex) {
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const palette = {};

  const light = chroma(baseHex).brighten(3);
  const dark = chroma(baseHex).darken(2.5);

  const lightScale = chroma.scale([light, baseHex]).mode('lab').colors(5); // 50–400
  const darkScale = chroma.scale([baseHex, dark]).mode('lab').colors(6);   // 400–900

  const fullScale = [...lightScale, ...darkScale.slice(1)]; // remove duplicate 400

  fullScale.forEach((color, i) => {
    const step = steps[i];
    palette[step] = step === 500 ? baseHex : color;
  });

  return palette;
}
