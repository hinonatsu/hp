"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

const fields = [
  { id: "company", label: "会社名", type: "text", autoComplete: "organization" },
  { id: "name", label: "お名前", type: "text", autoComplete: "name" },
  { id: "email", label: "メールアドレス", type: "email", autoComplete: "email" },
  { id: "url", label: "現在のHP URL", type: "url", autoComplete: "url" },
  { id: "role", label: "募集したい職種", type: "text", autoComplete: "off" }
];

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("送信デモです。実運用時にフォーム連携を設定してください。");
  }

  return (
    <section id="contact" className="section-anchor bg-brand-navy px-5 py-20 text-white md:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold text-brand-cyan">Contact</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            まずは無料診断からご相談ください。
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
            現在のHP・採用ページ・求人票を拝見し、若手目線での改善ポイントを簡単にお送りします。
          </p>
          <div className="mt-10 rounded-lg border border-white/20 bg-white/10 p-6">
            <p className="text-sm font-semibold text-white">TechBridge Studio</p>
            <p className="mt-2 text-sm leading-7 text-white/70">
              技術系中小企業向け 採用LP制作サービス
              <br />
              メールアドレス：{siteConfig.email}
            </p>
          </div>
        </div>

        <form className="rounded-lg border border-white/20 bg-white p-6 text-brand-ink shadow-lift md:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.id} className="grid gap-2">
                <label htmlFor={field.id} className="text-sm font-semibold text-gray-800">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  className="min-h-12 rounded-md border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-blue"
                />
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-2">
            <label htmlFor="details" className="text-sm font-semibold text-gray-800">
              相談内容
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              className="rounded-md border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-blue"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
          >
            無料診断を依頼する
          </button>

          {message ? (
            <p className="mt-5 rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-900" role="status">
              {message}
            </p>
          ) : null}
        </form>
      </div>

      <footer className="mx-auto mt-16 max-w-7xl border-t border-white/20 pt-8">
        <div className="flex flex-col gap-5 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-2">技術系中小企業向け 採用LP制作サービス</p>
            <p className="mt-2">Copyright © {new Date().getFullYear()} TechBridge Studio</p>
          </div>
          <div className="flex gap-4">
            {siteConfig.footerLinks.map((link) => (
              <a key={link} href="#contact" className="transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
