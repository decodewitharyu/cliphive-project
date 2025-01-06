import { Pencil, Scissors, Copy, History, Settings } from 'lucide-react';
import { Tooltip } from './ui/tooltip';

export function Dock() {
  return (
    <div className="dock">
      <Tooltip content="Edit">
        <button className="dock-item">
          <Pencil className="w-6 h-6" />
        </button>
      </Tooltip>
      
      <Tooltip content="Cut">
        <button className="dock-item">
          <Scissors className="w-6 h-6" />
        </button>
      </Tooltip>
      
      <Tooltip content="Copy">
        <button className="dock-item">
          <Copy className="w-6 h-6" />
        </button>
      </Tooltip>
      
      <Tooltip content="History">
        <button className="dock-item">
          <History className="w-6 h-6" />
        </button>
      </Tooltip>
      
      <Tooltip content="Settings">
        <button className="dock-item">
          <Settings className="w-6 h-6" />
        </button>
      </Tooltip>
    </div>
  );
}
