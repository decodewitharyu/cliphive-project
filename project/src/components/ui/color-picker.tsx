import { useState } from 'react';

export function ColorPicker() {
  const [color, setColor] = useState('#ffffff');

  return (
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      className="w-full h-10 border border-gray-300 rounded-md"
    />
  );
}
