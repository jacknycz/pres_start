import React, { useState } from 'react';
import { generatePalette } from '../utils/generatePalette';
import { ColorPaletteViewer } from './ColorPaletteViewer';

export default function PaletteGenerator() {
  const [palettes, setPalettes] = useState({
    brand: { color: '#5E36CE', input: '#5E36CE' },
  });

  const handleHexChange = (name, newInput) => {
    const hex = newInput.toUpperCase();
    setPalettes((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        input: hex,
        color: /^#([0-9A-F]{6})$/.test(hex) ? hex : prev[name].color,
      },
    }));
  };

  const handleColorPicker = (name, value) => {
    const hex = value.toUpperCase();
    setPalettes((prev) => ({
      ...prev,
      [name]: {
        color: hex,
        input: hex,
      },
    }));
  };

  const handleAddSecondary = () => {
    setPalettes((prev) => ({
      ...prev,
      secondary: { color: '#10B981', input: '#10B981' },
    }));
  };

  const handleRemoveSecondary = () => {
    setPalettes((prev) => {
      const newPalettes = { ...prev };
      delete newPalettes.secondary;
      return newPalettes;
    });
  };

  const tailwindPalettes = Object.fromEntries(
    Object.entries(palettes).map(([name, { color }]) => [name, generatePalette(color)])
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between w-full h-18">
        <h2 className="text-2xl font-bold mb-6">🎨 Tailwind Color Palette Generator</h2>
        {!palettes.secondary && (
          <button
            onClick={handleAddSecondary}
            className="mb-8 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm shadow"
          >
            ➕ Add Palette
          </button>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        {Object.entries(palettes).map(([name, { color, input }]) => (
          <div key={name}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-md font-medium capitalize">{name} Color</h4>
              {name === 'secondary' && (
                <button
                  onClick={handleRemoveSecondary}
                  className="text-red-600 text-sm hover:underline"
                >
                  🗑 Remove
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={color}
                onChange={(e) => handleColorPicker(name, e.target.value)}
                className="w-10 h-10 border rounded shadow"
              />
              <input
                type="text"
                value={input}
                onChange={(e) => handleHexChange(name, e.target.value)}
                placeholder="#123ABC"
                maxLength={7}
                className="px-2 py-1 border rounded w-28 text-sm font-mono uppercase"
              />
            </div>
          </div>
        ))}
      </div>

      <ColorPaletteViewer palettes={tailwindPalettes} />

      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-2">💾 Tailwind Config Snippet</h3>
        <pre className="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto">
          {`colors: {
${Object.entries(tailwindPalettes)
              .map(
                ([name, palette]) =>
                  `  ${name}: ${JSON.stringify(
                    Object.fromEntries(
                      Object.entries(palette).map(([k, v]) => [k, v.toUpperCase()])
                    ),
                    null,
                    2
                  )}`
              )
              .join(',\n')}
}`}
        </pre>
      </div>
    </div>
  );
}
