// AuctionDashboard.tsx
import { useEffect, useState } from 'react';

function AuctionDashboard() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch('/items')
      .then((res) => res.json())
      .then(setAuctions);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {auctions.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p>{item.description}</p>
          <p>Starting Price: ${item.startingPrice}</p>
          <p>Highest Bid: ${item.highestBid || 'No bids yet'}</p>
        </div>
      ))}
    </div>
  );
}

export default AuctionDashboard;