import type { ReactNode } from 'react';

const navItems = [
  'ホーム',
  '事業概要',
  '設備案内1',
  '設備案内2',
  '採用情報',
  'お問い合わせ',
];

const heroImage = 'images/fictional-workshop-hero.png';

export type Mode = 'compare' | 'before' | 'after';

function ContactSidebar() {
  return (
    <aside className="box2">
      <div className="containerInner">
        <div className="hsNarrow">
          <div className="bTtlBg color09">
            <h3>お問い合わせ</h3>
          </div>
        </div>
        <div className="hsNormal">
          <div className="bTxt">
            <p>
              <strong>お電話でのお問い合わせ</strong>
              <br />
              &nbsp;03-0000-2486
            </p>
            <hr />
            <p>
              <strong>FAXでのお問い合わせ</strong>
              <br />
              &nbsp;03-0000-2487
            </p>
            <hr />
            <p>
              <strong>メールでのお問い合わせ</strong>
            </p>
            <p>
              <a href="mailto:info@example.invalid">info@example.invalid</a>
            </p>
            <hr />
            <p>
              <strong>フォームでのお問い合わせ</strong>
            </p>
            <p>
              <a href="#section-5">こちら</a>
            </p>
          </div>
        </div>
        <div className="hsNarrow">
          <div className="bTtlBg color09">
            <h3>アクセス</h3>
          </div>
        </div>
        <div className="hsNormal">
          <div className="bTxt">
            <p>
              〒100-0000
              <br />
              東京都架空区青澄町1番地
              <br />
              サンプル工業ビル6F
            </p>
            <iframe
              title="架空所在地の地図"
              className="map-frame"
              width="100%"
              height="200"
              srcDoc="<style>body{margin:0;background:#ececec;font-family:sans-serif;color:#666}.map{height:200px;background:linear-gradient(90deg,transparent 24%,#d6d6d6 25%,transparent 26%,transparent 74%,#d6d6d6 75%,transparent 76%),linear-gradient(0deg,transparent 24%,#d6d6d6 25%,transparent 26%,transparent 74%,#d6d6d6 75%,transparent 76%);background-size:64px 64px;display:grid;place-items:center}.pin{padding:7px 11px;border:1px solid #999;background:#fff}</style><div class='map'><div class='pin'>Sample Map</div></div>"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

function PagePanel({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="col2-8 page-panel" id={id}>
      <div className="box1">
        <div className="containerInner">
          <div className="hsNarrow">
            <div className="bTtlBg color09">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="hsNarrow">
            <div className="bTxt">{children}</div>
          </div>
        </div>
      </div>
      <ContactSidebar />
      <br className="clr" />
    </section>
  );
}

function App() {
  return (
    <div id="wrapper">
      <div id="container">
        <div id="headerAreaSection">
          <div id="headerAreaOuter">
            <div id="headerArea">
              <div id="headerAreaImage">
                <h1 id="HdLogo">
                  <a id="hlogo_anc" href="#wrapper" title="青澄ファブリカ株式会社">
                    青澄ファブリカ株式会社
                  </a>
                </h1>
                <h2 id="HdSeo" className="fStyle01 fNormal">
                  未来にのこる精密加工
                </h2>
                <div id="HdBanner" aria-label="架空工場の案内バナー">
                  <span>試作</span>
                  <span>加工</span>
                  <span>保全</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="globalNaviAreaSection">
          <div id="globalNaviAreaOuter">
            <nav id="globalNaviArea" className="color01" aria-label="主要メニュー">
              <ul className="clearfix">
                {navItems.map((item, index) => (
                  <li
                    key={item}
                    className={`menu-item${index === 0 ? ' current_page_item' : ''}`}
                  >
                    <a href={index === 0 ? '#wrapper' : `#section-${index}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div id="coverAreaSection">
          <div id="coverAreaOuter">
            <div id="coverArea">
              <div id="coverAreaInner">
                <div id="main_image">
                  <div className="n2_clear">
                    <div className="n2-section-smartslider">
                      <div id="n2-ss-2" className="n2-ss-slider">
                        <div className="n2-ss-slider-wrapper-inside">
                          <div className="n2-ss-slider-1">
                            <div className="n2-ss-slider-2">
                              <div className="n2-ss-slider-3">
                                <div className="n2-ss-slide-backgrounds">
                                  {[1, 2, 3, 4, 5].map((slide) => (
                                    <div
                                      key={slide}
                                      className="n2-ss-slide-background"
                                      aria-hidden={slide === 1 ? undefined : true}
                                    >
                                      <img
                                        src={heroImage}
                                        alt=""
                                        loading={slide === 1 ? 'eager' : 'lazy'}
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="n2-ss-slider-4">
                                  <svg viewBox="0 0 910 350" aria-hidden="true" />
                                  {[1, 2, 3, 4, 5].map((slide) => (
                                    <div
                                      key={slide}
                                      className="n2-ss-slide"
                                      aria-hidden={slide === 1 ? undefined : true}
                                    >
                                      <div role="note" className="n2-ss-slide--focus">
                                        visual{String(slide).padStart(2, '0')}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="n2-ss-slider-controls n2-ss-slider-controls-absolute-left-center">
                            <button type="button" aria-label="previous arrow">
                              &lsaquo;
                            </button>
                          </div>
                          <div className="n2-ss-slider-controls n2-ss-slider-controls-absolute-right-center">
                            <button type="button" aria-label="next arrow">
                              &rsaquo;
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contentsAreaSection">
          <div id="contentsAreaOuter">
            <div id="contentsArea">
              <div id="contentsAreaInner">
                <main id="mainArea">
                  <div id="user-area">
                    <div className="entry-content">
                      <PagePanel title="次代を支える精密なものづくり">
                        <p>
                          産業設備の安定稼働には、現場ごとの細かな条件に合わせた部品づくりが欠かせません。
                          <br />
                          青澄ファブリカ株式会社は、架空の製造パートナーとして、
                          <br />
                          小ロット試作から保全部品の加工まで、用途に応じた相談を受け付けています。
                        </p>
                        <p>&nbsp;</p>
                        <p>■熟練の手仕事とデジタル計測の組み合わせ</p>
                        <p>
                          経験に基づく段取りと、三次元測定や加工データの管理を組み合わせ、
                        </p>
                        <p>安定した品質で一点ずつ形にする体制を整えています。</p>
                        <p>&nbsp;</p>
                        <p>■ものづくりは、現場を理解することから</p>
                        <p>
                          図面だけでは読み取りきれない使用環境や整備手順を確認し、
                        </p>
                        <p>加工しやすさ、扱いやすさ、長く使えることを大切にしています。</p>
                        <p>&nbsp;</p>
                        <p>■品質確認と環境配慮を日常の工程へ</p>
                        <p>
                          寸法、外観、材料記録を工程内で確認し、無駄な再加工を減らすことで、
                        </p>
                        <p>安心して相談できる工房型の製造体制を目指しています。</p>
                      </PagePanel>

                      <div className="col4" id="container-61">
                        <div className="box1">
                          <div className="containerInner">&nbsp;</div>
                        </div>
                        <div className="box2">
                          <div className="containerInner">&nbsp;</div>
                        </div>
                        <div className="box3">
                          <div className="containerInner">&nbsp;</div>
                        </div>
                        <div className="box4">
                          <div className="containerInner">
                            <div className="hsNormal">
                              <div className="bImg">
                                <span className="cert-badge">
                                  <strong>QC</strong>
                                  <small>PROCESS</small>
                                  <small>2026</small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br className="clr" />
                      </div>

                      <PagePanel id="section-1" title="事業概要">
                        <p>
                          青澄ファブリカ株式会社は、保全用部品、治具、小型機械部品の試作加工を想定した架空企業です。
                          <br />
                          図面作成前の相談から、材料選定、加工、簡易検査までを一連の流れで受け付けています。
                        </p>
                        <p>&nbsp;</p>
                        <p>■対応できるご相談</p>
                        <p>・既存部品の代替製作、改良案の検討</p>
                        <p>・小ロットの金属加工、樹脂加工、組立用治具の製作</p>
                        <p>・現場で使う工具、保持具、保管具の寸法調整</p>
                        <p>&nbsp;</p>
                        <p>■大切にしていること</p>
                        <p>
                          速さだけを優先せず、使用環境、交換頻度、保管方法まで確認しながら、
                          長く扱いやすい形を提案します。
                        </p>
                      </PagePanel>

                      <PagePanel id="section-2" title="設備案内1">
                        <p>
                          切削、穴あけ、面取りなど、基本的な加工を安定して行うための設備を想定しています。
                        </p>
                        <p>&nbsp;</p>
                        <p>■主な設備</p>
                        <p>・小型マシニングセンタ</p>
                        <p>・汎用旋盤、卓上フライス</p>
                        <p>・ボール盤、タップ加工機</p>
                        <p>・バリ取り、研磨、仕上げ用工具</p>
                        <p>&nbsp;</p>
                        <p>■加工対象の例</p>
                        <p>
                          アルミ、ステンレス、一般鋼材、樹脂材などを想定し、試作品や補修部品の形状確認を行います。
                        </p>
                      </PagePanel>

                      <PagePanel id="section-3" title="設備案内2">
                        <p>
                          測定、記録、組立確認を行うための設備も同じ工程内に配置している想定です。
                        </p>
                        <p>&nbsp;</p>
                        <p>■検査・確認設備</p>
                        <p>・三次元測定機、デジタルノギス、ハイトゲージ</p>
                        <p>・外観確認用ライト、拡大鏡</p>
                        <p>・簡易耐久確認用の治具台</p>
                        <p>・加工記録、材料記録の管理端末</p>
                        <p>&nbsp;</p>
                        <p>■記録の扱い</p>
                        <p>
                          作業の再現性を高めるため、寸法値、仕上げ条件、注意点を案件ごとに整理する想定です。
                        </p>
                      </PagePanel>

                      <PagePanel id="section-4" title="採用情報">
                        <p>
                          青澄ファブリカ株式会社では、架空の採用情報として、ものづくりに関わる職種を掲載しています。
                        </p>
                        <p>&nbsp;</p>
                        <p>■募集職種</p>
                        <p>・加工スタッフ</p>
                        <p>・検査、品質記録スタッフ</p>
                        <p>・営業、工程管理サポート</p>
                        <p>&nbsp;</p>
                        <p>■求める姿勢</p>
                        <p>
                          図面や数値を丁寧に扱い、分からない点をそのままにせず確認できる方を歓迎します。
                          未経験でも道具の名前、測定の基本、材料の扱いから少しずつ覚える想定です。
                        </p>
                      </PagePanel>

                      <PagePanel id="section-5" title="お問い合わせ">
                        <p>
                          試作、補修、設備部品の相談は、内容が固まる前の段階でも受け付けている想定です。
                        </p>
                        <p>&nbsp;</p>
                        <p>■お問い合わせ時に分かるとよいこと</p>
                        <p>・部品の用途、使う場所、必要な数量</p>
                        <p>・図面、写真、手書きメモの有無</p>
                        <p>・希望納期、材質、仕上げの条件</p>
                        <p>&nbsp;</p>
                        <p>■連絡先</p>
                        <p>電話：03-0000-2486</p>
                        <p>FAX：03-0000-2487</p>
                        <p>メール：info@example.invalid</p>
                      </PagePanel>
                    </div>
                  </div>
                </main>
                <span className="brClr">
                  <br className="clr" />
                </span>
              </div>
              <div id="pPageTop">
                <p>
                  <a href="#wrapper" title="ページトップへ戻る">
                    ページトップ
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="footerAreaSection">
          <div id="footerAreaOuter">
            <div id="footerFreeArea">
              このデモサイトに記載する会社名、住所、連絡先、事業内容はすべて架空です。
              <p></p>
              Copyright(C) Aozumi Fabrica Demo 2026 All rights reserved.
            </div>
            <footer id="footerArea">
              <div id="footerNaviArea"></div>
              <p id="pCopyright">demo site structure sample</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
