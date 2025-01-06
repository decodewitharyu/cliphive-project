import { useState, ReactNode } from 'react';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={() => onOpenChange(false)}></div>
      <div className={`relative bg-gray-800 bg-opacity-80 backdrop-blur-lg text-white rounded-lg shadow-lg p-6 z-10 transform transition-transform duration-500 ease-in-out ${open ? 'scale-100' : 'scale-95'}`}>
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children, className }: { children: ReactNode, className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function DialogHeader({ children }: { children: ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export function DialogClose({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-300"
    >
      &times;
    </button>
  );
}
