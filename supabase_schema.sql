
-- Table: memes
CREATE TABLE memes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    image_url TEXT DEFAULT 'https://picsum.photos/200',
    tags TEXT[],
    upvotes INTEGER DEFAULT 0,
    owner_id TEXT,
    caption TEXT,
    vibe TEXT,
    created_at TIMESTAMP DEFAULT now()
);

-- Index on tags for fast filtering
CREATE INDEX idx_memes_tags ON memes USING GIN (tags);
-- Index on upvotes for leaderboard
CREATE INDEX idx_memes_upvotes ON memes (upvotes DESC);

-- Table: bids
CREATE TABLE bids (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meme_id UUID REFERENCES memes(id) ON DELETE CASCADE,
    user_id TEXT,
    credits INTEGER,
    created_at TIMESTAMP DEFAULT now()
);

-- Index for meme_id to query bids quickly per meme
CREATE INDEX idx_bids_meme_id ON bids (meme_id);
