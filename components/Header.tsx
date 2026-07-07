"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 text-brand-ink backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <a
          href="#top"
          className="text-base font-semibold"
          aria-label="TechBridge Studio トップへ"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="メインナビゲーション">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-brand-muted transition hover:text-brand-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center border border-brand-ink bg-brand-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-ink"
          >
            無料診断を相談する
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-brand-line lg:hidden"
          aria-label="メニューを開閉する"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-brand-ink transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-brand-ink transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-brand-ink transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-navigation" className="border-t border-brand-line bg-white lg:hidden">
          <nav className="mx-auto grid max-w-7xl px-5 py-4" aria-label="モバイルナビゲーション">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-brand-line py-4 text-sm text-brand-muted transition hover:text-brand-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 border border-brand-ink bg-brand-ink px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              無料診断を相談する
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
