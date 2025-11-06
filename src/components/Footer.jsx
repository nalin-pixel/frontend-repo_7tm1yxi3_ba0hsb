import React from 'react';

export default function Footer() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-7xl px-6 pb-10 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} BERLIN'S STORE · Futuristic digital marketing and escrow for Roblox trades.
      </p>
      <p className="mt-1">
        Built with a dark, neon-red aesthetic. Stay safe. Trade smart.
      </p>
    </footer>
  );
}
