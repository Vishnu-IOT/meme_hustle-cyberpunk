const { v4: uuidv4 } = require('uuid');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

let memes = [];
let bids = [];
const aiCache = {};

exports.createMeme = (req, res) => {
  const { title, image_url, tags } = req.body;
  const newMeme = {
    id: uuidv4(),
    title,
    image_url: image_url || "https://picsum.photos/200",
    tags,
    upvotes: 0,
    owner_id: "cyberpunk420",
    caption: "YOLO to the moon!",
    vibe: "Neon Crypto Chaos"
  };
  memes.push(newMeme);
  req.app.get('socketio').emit('newMeme', newMeme);
  res.status(201).json(newMeme);
};

exports.voteMeme = (req, res) => {
  const { id } = req.params;
  const { type } = req.body;
  const meme = memes.find(m => m.id === id);
  if (meme) {
    meme.upvotes += type === 'up' ? 1 : -1;
    req.app.get('socketio').emit('voteUpdate', { id, upvotes: meme.upvotes });
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Meme not found" });
  }
};

exports.bidOnMeme = (req, res) => {
  const { id } = req.params;
  const { credits } = req.body;
  const bid = { meme_id: id, user_id: "cyberpunk420", credits };
  bids.push(bid);
  req.app.get('socketio').emit('newBid', bid);
  res.status(201).json(bid);
};

exports.getLeaderboard = (req, res) => {
  const top = parseInt(req.query.top) || 10;
  const sorted = [...memes].sort((a, b) => b.upvotes - a.upvotes).slice(0, top);
  res.json(sorted);
};

exports.generateCaptionAndVibe = async (req, res) => {
  const { id } = req.params;
  const meme = memes.find(m => m.id === id);
  if (!meme) return res.status(404).json({ error: "Meme not found" });
  if (aiCache[id]) return res.json(aiCache[id]);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const captionPrompt = `Generate a funny caption for a meme with tags: ${meme.tags.join(", ")}`;
    const vibePrompt = `Describe the vibe of a meme with tags: ${meme.tags.join(", ")}`;
    const captionResult = await model.generateContent(captionPrompt);
    const vibeResult = await model.generateContent(vibePrompt);
    const caption = captionResult.response.text().trim();
    const vibe = vibeResult.response.text().trim();
    meme.caption = caption;
    meme.vibe = vibe;
    aiCache[id] = { caption, vibe };
    res.json({ caption, vibe });
  } catch (err) {
    console.error("Gemini error:", err.message);
    const fallback = {
      caption: "YOLO to the moon!",
      vibe: "Retro Meme Apocalypse",
    };
    meme.caption = fallback.caption;
    meme.vibe = fallback.vibe;
    res.json(fallback);
  }
};
exports.getAllMemes = (req, res) => {
  res.json(memes);
};


