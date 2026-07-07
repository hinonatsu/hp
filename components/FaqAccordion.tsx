"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-anchor border-b border-brand-line bg-brand-soft px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 border-t border-brand-ink pt-6 lg:grid-cols-[220px_1fr]">
          <p className="text-xs font-semibold text-brand-muted">FAQ</p>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-brand-ink md:text-5xl">
            よくある質問
          </h2>
        </div>

        <div className="border-b border-brand-line">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <article key={faq.question} className="border-t border-brand-line">
                <h3>
                  <button
                    type="button"
                    className="grid w-full gap-4 py-6 text-left md:grid-cols-[90px_1fr_40px] md:items-center"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-sm text-brand-muted">Q{index + 1}</span>
                    <span className="text-base font-semibold leading-7 text-brand-ink">{faq.question}</span>
                    <span className="text-right text-xl font-light text-brand-ink" aria-hidden="true">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <div id={panelId} className="pb-7 md:ml-[90px] md:max-w-3xl">
                    <p className="text-sm leading-8 text-brand-muted">{faq.answer}</p>
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
