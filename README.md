
<h1 align="center">⚡ MemeHustle</h1>
<p align="center">
  Cyberpunk Meme Marketplace built with React, Node.js, Tailwind, and Gemini AI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-brightgreen" />
  <img src="https://img.shields.io/badge/frontend-react-blue" />
  <img src="https://img.shields.io/badge/backend-nodejs-green" />
  <img src="https://img.shields.io/badge/AI-gemini-purple" />
</p>

---

## 🔥 Overview

**MemeHustle** is a futuristic meme-sharing app where users can:

- Upload memes
- Upvote 🔺 the best content
- Bid 💰 for digital meme dominance
- Generate AI-based captions using Google Gemini
- Compete on a real-time leaderboard

---

## 🧠 Tech Stack

- ⚛️ React + Vite (Frontend)
- 🎨 Tailwind CSS for styling
- 🔌 Axios for API calls
- 🚀 Node.js + Express (Backend)
- 💬 Socket.IO (for real-time)
- 🧠 Gemini API (AI captions)
- 🗃️ Supabase (optional DB)

---

## 📁 Folder Structure

```
MemeHustle/
├── memehustle_client/    # React frontend
└── memehustle_server/    # Express backend
```

---

## 🚀 Getting Started

### 🔧 Backend Setup

```bash
cd memehustle_server
npm install
node index.js
```

> Server runs at: http://localhost:5000

Make sure to enable CORS:

```js
app.use(cors({ origin: "http://localhost:5173" }));
```

---

### 🎨 Frontend Setup

```bash
cd memehustle_client
npm install
npm run dev
```

> App runs at: http://localhost:5173

Add this to `.env`:

```bash
VITE_API_BASE=http://localhost:5000
```

---

## 📦 API Endpoints

| Endpoint                  | Description             |
|--------------------------|-------------------------|
| `GET /memes`             | Fetch all memes         |
| `POST /memes`            | Submit a new meme       |
| `POST /memes/:id/vote`   | Upvote/downvote a meme  |
| `POST /memes/:id/bid`    | Place a bid             |
| `POST /memes/:id/caption`| AI caption via Gemini   |
| `GET /memes/leaderboard` | Get top memes           |

---

## 🧪 Features

- 🎨 Neon Cyberpunk UI with glitch effects
- 🧠 AI-powered captions
- 🗳 Meme voting system
- 💰 Bid tracking
- 🏆 Leaderboard (Supabase-ready)
- ⚡ Real-time updates (Socket.IO)

---

## 🛠 Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)
- [Google Gemini API](https://aistudio.google.com/)
- [Supabase](https://supabase.com/)
- [Render](https://render.com/) or [Vercel](https://vercel.com/) for deployment

---

## 👨‍💻 Author

Developed by VISHNU V – 💻 Open to contributions!

---
