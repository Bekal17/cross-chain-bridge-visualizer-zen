# 🌉 Cross-Chain Bridge Visualizer

![GitHub Repo stars](https://img.shields.io/github/stars/Bekal17/cross-chain-bridge-visualizer-zen?style=social)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.4-blue?logo=vite)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)

> 🚀 Interactive visualization of cross-chain bridge routes, volumes, and protocols — built with React + D3 + TailwindCSS.

---

## 🧠 Overview

**Cross-Chain Bridge Visualizer** helps developers, researchers, and DeFi enthusiasts understand how assets move between chains.  
It visualizes **nodes** (blockchains) and **edges** (bridges/protocols) with **volume, tx count, and routes**.

🧩 Powered by **React**, **D3.js**, and **Tailwind**, this project provides a clean and extendable architecture for:
- Adding live data (e.g. from [The Graph](https://thegraph.com/) or [Covalent](https://www.covalenthq.com/))
- Filtering bridges by token or protocol
- Inspecting chain relationships visually

---

## ✨ Features

- 🔍 **Interactive Graph** — explore bridges between chains  
- 📊 **Volume-weighted edges** — thicker lines = more traffic  
- ⚡ **React + D3.js** — dynamic rendering and animation  
- 🎨 **TailwindCSS** — clean, modern UI  
- 🧠 **Mock data** — easily replaceable with live API  

---

## 🚀 Quick Start

### 1️⃣ Clone this repository

bash
git clone https://github.com/Bekal17/cross-chain-bridge-visualizer-zen.git
cd cross-chain-bridge-visualizer

---

### 2️⃣ Install dependencies
npm install

---

### 3️⃣ Run development server
npm run dev

---

### Now open 👉 http://localhost:5173

---

## 🧩 Folder Structure
cross-chain-bridge-visualizer/
├── src/
│   ├── components/       # GraphCanvas, ControlsPanel, DetailsPane
│   ├── data/             # Mock bridges data
│   ├── hooks/            # useBridgeData custom hook
│   ├── styles/           # TailwindCSS index
│   ├── App.jsx           # Root app layout
│   └── main.jsx          # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md

---

## 🧠 Tech Stack
Layer	Technology
Frontend	React 18 + Vite
Visualization	D3.js
Styling	TailwindCSS
Data	Static JSON (mock), extendable via API
Tooling	npm, Git, Vite

---

## 🛠️ Extend with Live Data

Replace src/data/mock-bridges.json with a live API call from:

## 🧭 The Graph (Subgraphs for bridge metrics)

---

## 📊 Covalent API (on-chain volume & transactions)

🪄 Custom Indexer (REST/GraphQL)

You can update useBridgeData.js to fetch data dynamically.

---

## 📜 License

MIT License © 2025 — Built with ❤️ for the open-source community.

---

## ⭐ Contribute

Want to improve this project?

Fork the repo

Create a feature branch (git checkout -b feature/new-feature)

Commit changes (git commit -m "Add feature")

Push to branch (git push origin feature/new-feature)

Create a Pull Request 🚀
