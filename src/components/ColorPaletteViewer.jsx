import React from 'react';

const swatchLabels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export function ColorPaletteViewer({ palettes }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {Object.entries(palettes).map(([name, palette]) => (
        <div key={name}>
          <h4 className="font-semibold text-lg mb-2 capitalize">{name} Palette</h4>
          <div className="grid grid-cols-5 gap-4">
            {swatchLabels.map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded shadow border border-black/5"
                  style={{ backgroundColor: palette[step] }}
                />
                <div className="mt-1 text-[10px] text-gray-800">{`${name}-${step}`}</div>
                <div className="text-[10px] text-gray-500">{palette[step]}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
