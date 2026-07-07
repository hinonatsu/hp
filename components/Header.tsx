"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/90 text-brand-ink backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a
          href="#top"
          className="shrink-0"
          aria-label="TechBridge Studio トップへ"
          onClick={() => setOpen(false)}
        >
          <span className="block text-base font-semibold tracking-normal text-brand-navy">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 block text-[11px] font-semibold text-brand-muted">
            {siteConfig.subLabel}
          </span>
        </a>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label="メインナビゲーション">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold text-brand-muted transition hover:text-brand-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-brand-blue bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
          >
            無料診断を相談する
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-brand-line bg-white lg:hidden"
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
                className="border-b border-brand-line py-4 text-sm font-semibold text-brand-muted transition hover:text-brand-blue"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 border border-brand-blue bg-brand-blue px-4 py-3 text-center text-sm font-semibold text-white"
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
