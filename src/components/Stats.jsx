import React from 'react';

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀 </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? `You got everything ready to go ✈️`
          : `😎 you have ${numItems} items on your list, and you already packed
        ${numPacked} (${packedPercentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
