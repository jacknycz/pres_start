import React from 'react';

export function ColorPaletteViewer({ palettes }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {Object.entries(palettes).map(([name, palette]) => (
        <div key={name}>
          <h4 className="font-semibold text-lg mb-2 capitalize">{name} Palette</h4>
          <div className="grid grid-cols-5 gap-4">
            {Object.entries(palette).map(([variable, color]) => (
              <div key={variable} className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded shadow border border-black/5"
                  style={{ backgroundColor: color }}
                />
                <div className="mt-1 text-[10px] text-gray-800">{`${variable}`}</div>
                <div className="text-[10px] text-gray-500">{color}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
