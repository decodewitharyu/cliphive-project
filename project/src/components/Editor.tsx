import { useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

export function Editor() {
  const [content, setContent] = useState('');

  const formats = [
    { icon: Bold, title: 'Bold' },
    { icon: Italic, title: 'Italic' },
    { icon: Underline, title: 'Underline' },
    { icon: AlignLeft, title: 'Align Left' },
    { icon: AlignCenter, title: 'Center' },
    { icon: AlignRight, title: 'Align Right' },
  ];

  return (
    <div className="editor-container">
      <div className="editing-controls">
        {formats.map((Format, index) => (
          <button key={index} className="toolbar-button" title={Format.title}>
            <Format.icon className="w-4 h-4" />
          </button>
        ))}
      </div>
      
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full min-h-[200px] bg-transparent outline-none resize-none"
        placeholder="Start typing..."
      />
    </div>
  );
}
