import React from 'react';
import { ShieldCheck, Wallet, ShoppingBag, Rocket } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Secure Middleman',
    desc: 'Hold payments safely until both sides are satisfied. Zero-stress trades with transparent steps.',
  },
  {
    icon: Wallet,
    title: 'Flexible Payments',
    desc: 'Multiple payment methods supported with clear, upfront fees for peace of mind.',
  },
  {
    icon: ShoppingBag,
    title: 'Roblox Items',
    desc: 'Curated premium items and assets. Verified listings to protect your inventory value.',
  },
  {
    icon: Rocket,
    title: 'Fast Turnaround',
    desc: 'Lightning-fast confirmations and responsive support so deals never stall.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Explore Services
        </h2>
        <p className="mt-3 text-gray-300">
          Built for gamers, creators, and communities that value safety and speed.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur transition hover:from-red-500/10 hover:border-red-500/40"
          >
            <div className="mb-4 inline-flex rounded-xl bg-red-500/10 p-3 text-red-400 ring-1 ring-inset ring-red-500/20">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
