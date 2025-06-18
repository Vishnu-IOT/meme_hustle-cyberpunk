import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MemeGallery = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
  setMemes([
    {
      id: "1",
      title: "Doge Matrix",
      image_url: "https://picsum.photos/300?random=1",
      tags: ["doge", "crypto"],
      caption: "HODL the chain",
      vibe: "Neon Rebellion"
    }
  ]);
}, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {memes.map((meme) => (
        <div key={meme.id} className="bg-black bg-opacity-30 border border-pink-500 rounded-xl p-4 shadow-lg hover:shadow-pink-500/40">
          <img src={meme.image_url} alt="meme" className="rounded-md w-full h-48 object-cover mb-4 border border-neon-blue" />
          <h2 className="text-xl font-bold text-neon-pink glitch">{meme.title}</h2>
          <p className="text-xs italic text-neon-blue">{meme.caption}</p>
          <p className="text-sm mt-1">Vibe: <span className="text-purple-300">{meme.vibe}</span></p>
          <p className="text-sm mt-1 text-gray-300">Tags: {meme.tags?.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default MemeGallery;
