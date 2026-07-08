import { useState } from 'react';
import {
  company,
  consultationItems,
  demoNotice,
  featureCards,
  processSteps,
  qualityItems,
  recruitCards,
  trustChips,
} from '../data/company';

type ModernWebsiteFrameProps = {
  compact?: boolean;
};

function ModernWebsiteFrame({ compact = false }: ModernWebsiteFrameProps) {
  const [contactMessageVisible, setContactMessageVisible] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (compact) {
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleContactClick = () => {
    if (compact) {
      return;
    }

    setContactMessageVisible(true);
  };

  return (
    <article className={`modern-site ${compact ? 'modern-site--compact' : ''}`}>
      <section className="modern-hero">
        <div className="modern-hero__copy">
          <p className="modern-eyebrow">{company.name}</p>
          <h1>試作から量産まで対応する、茨城県のゴム成形パートナー</h1>
          <p>
            合成ゴム・シリコーンゴム・加硫接着品まで。
            50t〜200tの成形設備と品質管理体制で、小ロット試作から量産まで支えます。
          </p>
          <div className="modern-hero__actions">
            <button type="button" className="modern-cta" onClick={() => scrollToSection('contact')}>
              加工相談をする
            </button>
            <button
              type="button"
              className="modern-cta modern-cta--light"
              onClick={() => scrollToSection('equipment')}
            >
              設備・対応範囲を見る
            </button>
          </div>
        </div>
        <div className="industrial-visual" aria-hidden="true">
          <div className="machine-block machine-block--top" />
          <div className="machine-block machine-block--base" />
          <div className="press-line" />
          <div className="rubber-part rubber-part--ring" />
          <div className="rubber-part rubber-part--seal" />
          <div className="quality-check" />
        </div>
      </section>

      <section className="trust-strip" aria-label="対応領域">
        {trustChips.map((chip) => (
          <span className="trust-chip" key={chip}>
            {chip}
          </span>
        ))}
      </section>

      <section className="modern-section" id="strengths">
        <div className="section-heading">
          <p className="modern-eyebrow">Strength</p>
          <h2>相談しやすさが伝わる3つの強み</h2>
        </div>
        <div className="card-grid card-grid--three">
          {featureCards.map((feature, index) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-number">0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="modern-section muted-section" id="consultation">
        <div className="section-heading">
          <p className="modern-eyebrow">Consultation</p>
          <h2>対応できる相談</h2>
        </div>
        <div className="consultation-grid">
          {consultationItems.map((item) => (
            <div className="consultation-card" key={item}>
              <span className="mini-part" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="modern-section" id="equipment">
        <div className="section-heading section-heading--split">
          <div>
            <p className="modern-eyebrow">Equipment</p>
            <h2>小ロット試作から量産まで支える設備体制</h2>
          </div>
          <p>
            設備名を並べるだけでなく、「どんな相談に対応できるか」が伝わるように整理します。
          </p>
        </div>
        <div className="equipment-grid">
          {company.equipment.map((item, index) => (
            <article className="equipment-card" key={item}>
              <div className={`equipment-icon equipment-icon--${(index % 3) + 1}`} aria-hidden="true" />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="modern-section quality-section" id="quality">
        <div className="quality-copy">
          <p className="modern-eyebrow">Quality</p>
          <h2>取引前に安心してもらうための品質情報を見える化</h2>
          <p>
            品質管理の考え方、検査体制、製造時の確認項目をWeb上で整理することで、
            初回相談前の不安を減らします。
          </p>
        </div>
        <div className="quality-list">
          {qualityItems.map((item) => (
            <div className="quality-card" key={item}>
              <span className="check-shape" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="modern-section process-section">
        <div className="section-heading">
          <p className="modern-eyebrow">Flow</p>
          <h2>相談から量産までの流れ</h2>
        </div>
        <ol className="process">
          {processSteps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="modern-section recruit-section">
        <div className="section-heading">
          <p className="modern-eyebrow">Recruit</p>
          <h2>若い人にも、ものづくりの仕事が伝わる採用ページへ</h2>
          <p>
            製造業の仕事は、外から見ると仕事内容や職場の雰囲気が伝わりにくいことがあります。
            仕事内容・育成方針・1日の流れを整理することで、未経験者や若手が応募前に安心できる情報を届けます。
          </p>
        </div>
        <div className="card-grid card-grid--three">
          {recruitCards.map((card) => (
            <article className="recruit-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="modern-section company-section">
        <div className="section-heading">
          <p className="modern-eyebrow">Company</p>
          <h2>会社概要</h2>
        </div>
        <dl className="modern-company-list">
          <div>
            <dt>会社名</dt>
            <dd>{company.name}</dd>
          </div>
          <div>
            <dt>所在地</dt>
            <dd>{company.address}</dd>
          </div>
          <div>
            <dt>事業内容</dt>
            <dd>工業用ゴム製品・シリコーンゴム製品・加硫接着品の製造</dd>
          </div>
          <div>
            <dt>営業時間</dt>
            <dd>{company.hours}</dd>
          </div>
          <div>
            <dt>営業日</dt>
            <dd>{company.businessDays}</dd>
          </div>
          <div>
            <dt>電話</dt>
            <dd>{company.tel}</dd>
          </div>
          <div>
            <dt>メール</dt>
            <dd>{company.email}</dd>
          </div>
        </dl>
      </section>

      <section className="final-cta" id="contact">
        <div>
          <p className="modern-eyebrow">Contact</p>
          <h2>図面が固まる前の相談も歓迎します</h2>
          <p>
            用途、数量、材質、納期が未確定の段階でもご相談ください。
            試作から量産まで、必要な情報を整理しながら進めます。
          </p>
        </div>
        <button type="button" className="modern-cta modern-cta--white" onClick={handleContactClick}>
          相談内容を整理して問い合わせる
        </button>
        {contactMessageVisible && (
          <p className="form-note" role="status">
            このデモではフォーム送信は行いません。実際の制作では、電話・メール・問い合わせフォームの導線を設置します。
          </p>
        )}
      </section>

      <footer className="modern-footer">{demoNotice}</footer>
    </article>
  );
}

export default ModernWebsiteFrame;
