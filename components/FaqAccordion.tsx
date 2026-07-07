"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-anchor bg-brand-ice px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-brand-blue">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-ink md:text-5xl">
            よくある質問
          </h2>
        </div>

        <div className="grid gap-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <article key={faq.question} className="rounded-lg border border-brand-line bg-white shadow-card">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-base font-bold leading-7 text-brand-ink">{faq.question}</span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-ice text-xl font-semibold text-brand-blue"
                      aria-hidden="true"
                    >
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <div id={panelId} className="border-t border-brand-line px-5 py-5 md:px-6">
                    <p className="text-sm leading-7 text-gray-600">{faq.answer}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
