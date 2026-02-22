<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AI Influencers on X

An interactive 3D map of the top AI influencers on X (Twitter) — explore who they are, what they do, and how they're connected.

## 🌐 Live Site

**[x.mitbunny.ai](https://x.mitbunny.ai)**

---

## 💡 Why I Built This

There are millions of pieces of AI news and information generated every second on X — and for new users, it can get really overwhelming. To figure out which accounts were actually worth following, and to visualize what the AI community on X actually looks like, I built this 3D interactive platform. It's a tool for anyone trying to navigate the AI space and find their footing in it.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| 3D visualization | Three.js + react-force-graph-3d |
| AI (network expansion) | Google Gemini API |
| Styling | Tailwind CSS (CDN) |
| Icons | Lucide React |
| Analytics | Vercel Analytics |
| Data pipeline | Node.js + RapidAPI (X/Twitter) |

---

## 🎬 Demo Videos

- **English version** — [Watch on TikTok](https://www.tiktok.com/@mitbunny.ai/video/7606164884962807071)
- **Chinese version** — [Watch on Xiaohongshu](https://www.xiaohongshu.com/discovery/item/698e9e0f000000001a02d1f9?source=webshare&xhsshare=pc_web&xsec_token=ABEMTSPrR3raZeWJ1ZpU8ZV9JgqDTymrLuKnon8v590rg=&xsec_source=pc_share)

---

## 🚀 Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app: `npm run dev`
