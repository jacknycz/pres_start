import React from 'react';

const swatchLabels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export default function ColorPaletteViewer({ palette, name = 'brand' }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {swatchLabels.map((step) => (
        <div key={step} className="flex flex-col items-center">
          <div
            className="w-16 h-16 rounded shadow-md border border-black/5"
            style={{ backgroundColor: palette[step] }}
          />
          <div className="mt-1 text-xs text-gray-700">{`${name}-${step}`}</div>
          <div className="text-[10px] text-gray-500">{palette[step]}</div>
        </div>
      ))}
    </div>
  );
}
