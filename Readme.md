<div align="center">

# ✏️ Figlite

### A real-time collaborative design canvas — built for the web.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Liveblocks](https://img.shields.io/badge/Liveblocks-1.9-ff4154?style=for-the-badge)](https://liveblocks.io/)
[![Fabric.js](https://img.shields.io/badge/Fabric.js-5-orange?style=for-the-badge)](http://fabricjs.com/)

</div>

---

## 🌟 Overview

**Figlite** is a lightweight, multiplayer design tool inspired by Figma. It runs entirely in the browser, letting multiple users draw shapes, add text, drop comments, and react — all in real time. No installs, no accounts beyond Liveblocks — just open and collaborate.

---

## ✨ Features

### 🎨 Canvas & Drawing Tools
- **Shapes** — Rectangle, Circle, Triangle, and Line
- **Free Drawing** — Smooth freeform pencil tool
- **Text** — Add and edit text with configurable font family & size
- **Select & Transform** — Move, resize, and reorder objects
- **Bring to Front / Send to Back** — Full z-index control

### 🤝 Real-Time Collaboration (powered by Liveblocks)
- **Live Cursors** — See every collaborator's cursor move in real time
- **Cursor Chat** — Send quick in-canvas messages by pressing `/`
- **Flying Reactions** — Express yourself with emoji reactions (`E` key)
- **Active Users Bar** — See who's in the room at a glance
- **Persistent Canvas State** — Objects are synced and stored via `LiveMap`

### 💬 Comments & Threads
- **Pin Comments** — Click anywhere on the canvas to attach a threaded comment
- **Resolve Threads** — Mark comment threads as resolved when done

### 🛠 Editing & Customisation
- **Color Picker** — Change fill color of any selected shape
- **Dimension Controls** — Set precise width and height from the right sidebar
- **Font Controls** — Choose font family and size for text objects
- **Undo / Redo** — Full history support (`Ctrl+Z` / `Ctrl+Y`)

### 📤 Export
- **Export to PDF** — Download your canvas as a PDF with one click

### ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + Z` | Undo |
| `Ctrl + Y` / `Ctrl + Shift + Z` | Redo |
| `/` | Open cursor chat |
| `E` | Open reaction picker |
| `Escape` | Dismiss chat / reaction |
| `Delete` | Delete selected object |
| `Ctrl + C` / `Ctrl + V` | Copy / Paste |
| `Ctrl + X` | Cut |
| `Ctrl + =` / `Ctrl + -` | Scale up / Scale down |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Canvas | [Fabric.js 5](http://fabricjs.com/) |
| Multiplayer | [Liveblocks](https://liveblocks.io/) |
| UI Primitives | [Radix UI](https://www.radix-ui.com/) |
| PDF Export | [jsPDF](https://github.com/parallax/jsPDF) |
| Icons | [Lucide React](https://lucide.dev/) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- A free [Liveblocks](https://liveblocks.io/) account (for the API key)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/figlite.git
cd figlite
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key_here
```

> Get your public key from the [Liveblocks dashboard](https://liveblocks.io/dashboard).

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Open a second tab or share the URL to see live collaboration in action.

---

## 📁 Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── App.tsx           # Root canvas application
│   ├── Room.tsx          # Liveblocks RoomProvider wrapper
│   └── layout.tsx        # Global layout
├── components/
│   ├── Navbar.tsx        # Top toolbar (tools, active users)
│   ├── LeftSidebar.tsx   # Layer / object list
│   ├── RightSidebar.tsx  # Properties panel (color, size, text)
│   ├── Live.tsx          # Main canvas + collaboration layer
│   ├── comments/         # Threaded comments & pinned threads
│   ├── cursor/           # Live cursors & cursor chat
│   ├── reaction/         # Emoji flying reactions
│   ├── settings/         # Right-panel control components
│   └── ui/               # Radix-based UI primitives
├── constants/            # Shape definitions, shortcuts, nav items
├── hooks/                # Custom React hooks
├── lib/                  # Canvas utilities, shape helpers, key events
├── types/                # TypeScript type definitions
└── public/assets/        # SVG icons & cursor artwork
```

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ using Next.js & Liveblocks

</div>
