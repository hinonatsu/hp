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
                              ‹
                            </button>
                          </div>
                          <div className="n2-ss-slider-controls n2-ss-slider-controls-absolute-right-center">
                            <button type="button" aria-label="next arrow">
                              ›
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
                      <div className="col2-8" id="container-63">
                        <div className="box1">
                          <div className="containerInner">
                            <div id="unit-50" className="hsNarrow">
                              <div className="bTtlBg color09">
                                <h1>次代を支える精密なものづくり</h1>
                              </div>
                            </div>
                            <div id="unit-51" className="hsNarrow">
                              <div className="bTxt">
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
                                <p>
                                  安定した品質で一点ずつ形にする体制を整えています。
                                </p>
                                <p>&nbsp;</p>
                                <p>■ものづくりは、現場を理解することから</p>
                                <p>
                                  図面だけでは読み取りきれない使用環境や整備手順を確認し、
                                </p>
                                <p>
                                  加工しやすさ、扱いやすさ、長く使えることを大切にしています。
                                </p>
                                <p>&nbsp;</p>
                                <p>■品質確認と環境配慮を日常の工程へ</p>
                                <p>
                                  寸法、外観、材料記録を工程内で確認し、無駄な再加工を減らすことで、
                                </p>
                                <p>
                                  安心して相談できる工房型の製造体制を目指しています。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <aside className="box2">
                          <div className="containerInner">
                            <div id="unit-276" className="hsNarrow">
                              <div className="bTtlBg color09">
                                <h3>お問い合わせ</h3>
                              </div>
                            </div>
                            <div id="unit-323" className="hsNormal">
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
                                  <a href="mailto:info@example.invalid">
                                    info@example.invalid
                                  </a>
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
                            <div id="unit-325" className="hsNarrow">
                              <div className="bTtlBg color09">
                                <h3>アクセス</h3>
                              </div>
                            </div>
                            <div id="unit-328" className="hsNormal">
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
                        <br className="clr" />
                      </div>

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
                            <div id="unit-331" className="hsNormal">
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
