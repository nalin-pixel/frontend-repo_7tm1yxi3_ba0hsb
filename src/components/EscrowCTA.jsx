import React, { useState } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

export default function EscrowCTA() {
  const [username, setUsername] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const link = `mailto:contact@berlins.store?subject=Escrow%20Request%20from%20${encodeURIComponent(
      username || 'Guest'
    )}&body=Hi%20BERLIN'S%20STORE%20team,%0D%0A%0D%0AI'd%20like%20to%20start%20an%20escrow.%20Details:%0D%0A-%20Platform:%20Roblox/Other%0D%0A-%20Amount/Items:%20...%0D%0A-%20Buyer/Seller%20Usernames:%20...%0D%0A%0D%0AThank%20you!`;
    window.location.href = link;
  };

  return (
    <section id="escrow" className="relative mx-auto max-w-5xl px-6 pb-20">
      <div className="rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-500/10 via-black to-black p-8 text-white shadow-[0_0_50px_rgba(239,68,68,0.15)]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-300">
              <Shield className="h-3.5 w-3.5" /> Escrow Protection
            </div>
            <h3 className="mt-3 text-2xl font-bold">Start a Protected Escrow</h3>
            <p className="mt-1 text-sm text-gray-300">
              We act as a trusted third party. Funds/items are released only when both sides confirm.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-red-500/60 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Start Now <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
