import React from 'react';
import Spline from '@splinetool/react-spline';
import { Instagram, Facebook, Discord } from 'lucide-react';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene as full background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Atmospheric rain overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(0,0,0,0.6))]" />
        <div className="absolute inset-0 mix-blend-screen opacity-30">
          <div className="rain-layer" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-extrabold tracking-tighter text-4xl sm:text-6xl md:text-7xl">
          <span className="text-white">BERLIN'S </span>
          <span className="text-red-500">STORE</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
          Futuristic middleman escrow for safer trades and premium Roblox items. Trusted, fast, and secure.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollToId('services')}
            className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_0_30px_rgba(239,68,68,0.45)] transition hover:scale-[1.02] hover:bg-red-500"
          >
            Explore Services
          </button>
          <button
            onClick={() => scrollToId('escrow')}
            className="rounded-full border border-red-500/60 bg-black/40 px-6 py-3 text-sm font-semibold tracking-wide text-red-400 backdrop-blur transition hover:scale-[1.02] hover:border-red-400 hover:text-red-300"
          >
            Start an Escrow
          </button>
        </div>

        {/* Social links under CTAs */}
        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://www.instagram.com/berlins_idn/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-red-500/60 hover:bg-red-500/10"
          >
            <Instagram className="h-4 w-4 text-pink-400 transition group-hover:text-pink-300" />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/groups/853473660350076/?ref=share&mibextid=NSMWBT"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-red-500/60 hover:bg-red-500/10"
          >
            <Facebook className="h-4 w-4 text-blue-400 transition group-hover:text-blue-300" />
            Facebook
          </a>
          <a
            href="https://discord.com/channels/970944887035924480/1431855293024964659/1431935183971422271"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-red-500/60 hover:bg-red-500/10"
          >
            <Discord className="h-4 w-4 text-indigo-400 transition group-hover:text-indigo-300" />
            Discord
          </a>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-red-600/30 via-red-500/10 to-transparent" />

      {/* Scoped styles for rain effect */}
      <style>{`
        .rain-layer {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
            to bottom,
            rgba(255,255,255,0.18) 0%,
            rgba(255,255,255,0.02) 60%
          );
          background-size: 2px 12px;
          mask-image: radial-gradient(circle at 50% 40%, rgba(0,0,0,0.8), transparent 70%);
          -webkit-mask-image: radial-gradient(circle at 50% 40%, rgba(0,0,0,0.8), transparent 70%);
          animation: rainFall 600ms linear infinite;
        }
        @keyframes rainFall {
          from { transform: translateY(-12px); }
          to { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
