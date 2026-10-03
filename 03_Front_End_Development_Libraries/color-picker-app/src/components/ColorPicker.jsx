import { useState } from "react";

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      id="color-picker-container"
      className="flex min-h-screen items-center justify-center bg-white p-6 transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            React Mini Project
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-950">
            Color Picker
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Choose a color and watch the background respond instantly.
          </p>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <input
            id="color-input"
            type="color"
            value={color}
            onChange={handleColorChange}
            className="h-14 w-20 cursor-pointer rounded-xl border-0 bg-transparent p-0"
          />

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
              Selected color
            </p>

            <p className="mt-1 font-mono text-sm font-semibold text-zinc-900">
              {color}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
