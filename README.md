# Boo Social Platform

A Next.js-based social platform for personality-based connections and community discussions.

## Features

- **Multi-language Support**: Indonesian (ID), English (EN), Malay (MS)
- **Dynamic Routing**: Path-based language switching (`/id`, `/en`, `/ms`)
- **Content Feed**: Display posts with personality types, zodiac signs, and interactions
- **Community Questions**: Daily questions and community discussions
- **Universe Categories**: Browse topics by hashtags
- **Related Posts**: Trending questions and discussions
- **Mock APIs**: Content and news endpoints for development

## Tech Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - auto redirects to `/id`

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── components/          # React components
│   ├── Layout.tsx      # Main layout with header & sidebar
│   ├── ContentFeed.tsx # Post feed component
│   ├── NewsFeed.tsx    # Related posts sidebar
│   └── ...
├── pages/
│   ├── [lang]/         # Dynamic language routes
│   │   ├── index.tsx   # Home page
│   │   ├── match.tsx   # Match page
│   │   └── ...
│   └── api/            # API routes
│       ├── content.ts  # Content mock API
│       └── news.ts     # News mock API
├── lang/               # Translation files
│   ├── id.json         # Indonesian
│   ├── en.json         # English
│   └── ms.json         # Malay
└── utils/              # Utility functions

```

## API Endpoints

### GET `/api/content`
Returns content feed with personality types, posts, and interactions.

**Query params**: `type`, `personality_type`, `topic`, `zodiac`

### GET `/api/news`
Returns news/questions feed.

**Query params**: `id` (optional, for single item)

## Multi-language

- Default: Indonesian (`/id`)
- Access root `/` auto-redirects to `/id`
- Switch language via selector in sidebar
- Supported routes: `/[lang]/`, `/[lang]/match`, `/[lang]/message`, etc.
