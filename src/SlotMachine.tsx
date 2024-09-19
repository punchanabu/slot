import { useState } from 'react';
import Lever from './Lever';
import Reel from './Reel';
import { generateReelSymbols } from './utils/symbols';

const SlotMachine = () => {
  const [reels, setReels] = useState([
    generateReelSymbols(),
    generateReelSymbols(),
    generateReelSymbols(),
  ]);
  const [spinning, setSpinning] = useState([false, false, false]);

  const spin = () => {
    if (spinning.some((spin) => spin)) return;

    // Start spinning all reels at the same time
    setSpinning([true, true, true]);

    // Stop each reel at different times
    stopSpin(0, 100);
    stopSpin(1, 2000);
    stopSpin(2, 5000); 
  };

  const stopSpin = (reelIndex: number, delay: number) => {
    setTimeout(() => {
      // Stop the spinning for this ree
      setSpinning((prev) => {
        const newSpinning = [...prev];
        newSpinning[reelIndex] = false;
        return newSpinning;
      });

      // Update the symbols once the reel stops spinning
      setReels((prev) => {
        const newReels = [...prev];
        newReels[reelIndex] = generateReelSymbols();
        return newReels;
      });
    }, delay);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-black mb-8">Slot Big Win!</h1>

      <div className='flex items-center justify-center space-x-6'>
        {/* Slot Machine Body */}
        <div className="flex items-center justify-center p-3 bg-yellow-400 rounded-lg shadow-2xl">
          <div className="flex space-x-4 bg-white rounded-lg border-8 border-yellow-700 p-5">
            {reels.map((reelSymbols, index) => (
              <Reel key={index} reelSymbols={reelSymbols} spinning={spinning[index]}  />
            ))}
          </div>
        </div>

        {/* Lever */}
        <div className="ml-6 flex flex-col items-center justify-center">
          <Lever onPullEnd={spin} />
        </div>
      </div>

      <button
        onClick={spin}
        className="mt-8 bg-yellow-400 px-6 py-3 rounded-lg text-white font-bold"
      >
        Spin
      </button>
      
    </div>
  );
};

export default SlotMachine;
