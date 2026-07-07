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
    <section id="contact" className="section-anchor bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 border-t border-brand-ink pt-6 lg:grid-cols-[220px_1fr]">
          <p className="text-xs font-semibold text-brand-muted">Contact</p>
          <div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-brand-ink md:text-5xl">
              まずは無料診断からご相談ください。
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-brand-muted">
              現在のHP・採用ページ・求人票を拝見し、理系若手目線での改善ポイントを簡単にお送りします。
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[340px_1fr]">
          <div className="border-y border-brand-line py-6">
            <p className="text-sm font-semibold text-brand-navy">TechBridge Studio</p>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              技術系中小企業向け 採用LP制作サービス
              <br />
              メールアドレス：{siteConfig.email}
            </p>
            <p className="mt-6 border-t border-brand-line pt-5 text-xs leading-6 text-brand-muted">
              {siteConfig.universityNote}
            </p>
          </div>

          <form className="border-y border-brand-line py-6" onSubmit={handleSubmit}>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.id} className="border-b border-brand-line py-4">
                  <label htmlFor={field.id} className="text-sm font-semibold text-brand-navy">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    className="mt-3 min-h-12 w-full border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-blue"
                  />
                </div>
              ))}
            </div>

            <div className="border-b border-brand-line py-4">
              <label htmlFor="details" className="text-sm font-semibold text-brand-navy">
                相談内容
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                className="mt-3 w-full border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-blue"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center border border-brand-blue bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-navy sm:w-auto"
            >
              無料診断を依頼する
            </button>

            {message ? (
              <p className="mt-5 border-y border-brand-line py-3 text-sm leading-6 text-brand-ink" role="status">
                {message}
              </p>
            ) : null}
          </form>
        </div>

        <footer className="mt-16 border-t border-brand-line pt-8">
          <div className="flex flex-col gap-5 text-sm text-brand-muted md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-brand-navy">{siteConfig.name}</p>
              <p className="mt-2">技術系中小企業向け 採用LP制作サービス</p>
              <p className="mt-2">メールアドレス：{siteConfig.email}</p>
              <p className="mt-2">Copyright © {new Date().getFullYear()} TechBridge Studio</p>
              <p className="mt-3 max-w-2xl text-xs leading-6">{siteConfig.universityNote}</p>
            </div>
            <div className="flex gap-4">
              {siteConfig.footerLinks.map((link) => (
                <a key={link} href="#contact" className="transition hover:text-brand-ink">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
