import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];

interface SettingsDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsDialog({ isOpen, onOpenChange }: SettingsDialogProps) {
  const [isAnimationOn, setIsAnimationOn] = useState(true);
  const [isRainOn, setIsRainOn] = useState(false);
  const [isLightModeOn, setIsLightModeOn] = useState(false);
  const [blurIntensity, setBlurIntensity] = useState(10);
  const [isSoundEffectsOn, setIsSoundEffectsOn] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  useEffect(() => {
    if (isAnimationOn) {
      // Add animation effect to the whole page
    }
    if (isRainOn) {
      // Add rain effect to the hero section
    }
    if (isLightModeOn) {
      // Switch to light mode
    }
    if (isSoundEffectsOn) {
      // Play sound effect
      const audio = new Audio('/path/to/sound.mp3');
      audio.volume = 0.1;
      audio.play();
    }
  }, [isAnimationOn, isRainOn, isLightModeOn, isSoundEffectsOn]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <motion.div
        initial={{ opacity: 0, backdropFilter: `blur(${blurIntensity}px)`, background: 'rgba(255, 255, 255, 0.1)' }}
        animate={{ opacity: 1, backdropFilter: `blur(${blurIntensity}px)`, background: 'rgba(255, 255, 255, 0.3)' }}
        exit={{ opacity: 0, backdropFilter: `blur(${blurIntensity}px)`, background: 'rgba(255, 255, 255, 0.1)' }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <DialogContent className="max-w-8xl h-[85vh] w-[95vw] p-8 bg-gradient-to-r from-gray-900/70 to-purple-700/30 backdrop-blur-lg text-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out border border-gray-800 relative">
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-shiny-grains opacity-20 pointer-events-none"></div>
          <DialogHeader>
            <div className="flex justify-center items-center">
              <DialogTitle>
                <h2 className={cn('text-3xl font-bold', 'font-orbitron')}>Settings</h2>
              </DialogTitle>
            </div>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Theme Color */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Theme Color</label>
              <div className="flex space-x-4">
                {colors.map((color) => {
                  const className = `w-8 h-8 rounded-full ${
                    selectedColor === color ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-white/50' : ''
                  }`;
                  return (
                    <motion.button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={className}
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">Animations</span>
                <Switch 
                  checked={isAnimationOn} 
                  onChange={setIsAnimationOn}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">Rain Effect</span>
                <Switch 
                  checked={isRainOn} 
                  onChange={setIsRainOn}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">Light Mode</span>
                <Switch 
                  checked={isLightModeOn} 
                  onChange={setIsLightModeOn}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">Sound Effects</span>
                <Switch 
                  checked={isSoundEffectsOn} 
                  onChange={setIsSoundEffectsOn}
                />
              </div>
            </div>

            {/* Blur Intensity Slider */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Background Blur Intensity</label>
              <input
                type="range"
                min="0"
                max="20"
                value={blurIntensity}
                onChange={(e) => setBlurIntensity(Number(e.target.value))}
                className="w-full accent-purple-500 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Font Size */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Font Size</label>
              <div className="flex space-x-4">
                {['small', 'medium', 'large'].map((size) => {
                  const className = `px-4 py-2 rounded-lg transition-colors ${
                    fontSize === size ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white' : 'bg-gray-700 text-gray-300'
                  }`;
                  return (
                    <Button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={className}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogContent>
      </motion.div>
    </Dialog>
  );
}
