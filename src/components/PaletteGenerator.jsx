import React, { useState } from 'react';
import { generatePalette } from '../utils/generatePalette';
import { ColorPaletteViewer } from './ColorPaletteViewer';

export default function PaletteGenerator() {
  const [baseColor, setBaseColor] = useState('#4F46E5');
  const palette = generatePalette(baseColor);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🎨 Tailwind Color Palette Generator</h2>

      <div className="flex items-center gap-4 mb-6">
        <label className="text-sm font-medium text-gray-700">Pick a base color:</label>
        <input
          type="color"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
          className="w-10 h-10 rounded border border-gray-300 shadow"
        />
        <span className="text-sm text-gray-600">{baseColor}</span>
      </div>

      <ColorPaletteViewer palette={palette} name="brand" />

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">💾 Tailwind Config Snippet</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`colors: {
  brand: ${JSON.stringify(palette, null, 2)}
}`}
        </pre>
      </div>
    </div>
  );
}
