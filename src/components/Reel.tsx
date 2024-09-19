import { motion } from 'framer-motion';
import React from 'react';

interface ReelProps {
    reelSymbols: string[];
    spinning: boolean;
}

const Reel: React.FC<ReelProps> = ({ reelSymbols, spinning }) => {
    return (
        <div className="overflow-hidden h-[100px] w-[70px] flex items-center justify-center relative bg-white shadow-lg">
            <motion.div
                animate={{
                    y: spinning ? [-600, 0] : 30,
                }}
                transition={{
                    duration: 1,
                    repeat: spinning ? Infinity : 0,
                    ease: 'linear',
                }}
                className="flex flex-col items-center justify-center"
            >
                {reelSymbols.map((symbol, index) => (
                    <div
                        key={index}
                        className="h-[60px] w-[60px] flex items-center justify-center text-4xl"
                    >
                        {symbol}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Reel;