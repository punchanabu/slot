const symbols = ['🍉', '🍋', '🍇', '🍒', '⭐', '🔔'];

const generateReelSymbols = (length = 20) => {
  return Array.from({ length }, () => symbols[Math.floor(Math.random() * symbols.length)]);
};


export { generateReelSymbols};