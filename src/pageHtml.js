export const pageHtml = String.raw`
<main class="page-shell">
      <section id="core" class="section formula-section" aria-labelledby="formula-title">
        <div>
          <p class="eyebrow">Core Relationship</p>
          <h2 id="formula-title">What changes, what stays controlled</h2>
          <p>
            Avogadro's Law compares volume, <strong>V</strong>, and amount of
            gas, <strong>n</strong>. Temperature and pressure must be held
            constant so the relationship stays scientifically meaningful.
          </p>
          <p class="plain-callout">
            Core idea: <strong>more moles = more volume</strong>.
            <strong>Fewer moles = less volume</strong>.
          </p>
        </div>
        <div class="formula-card" aria-label="Avogadro's Law formulas">
          <span>V &prop; n</span>
          <span>V / n = k</span>
          <span>V<sub>1</sub> / n<sub>1</sub> = V<sub>2</sub> / n<sub>2</sub></span>
        </div>
      </section>

      <section id="laws" class="section laws-section" aria-labelledby="laws-title">
        <div class="section-heading">
          <p class="eyebrow">Historical Context &amp; Theory</p>
          <h2 id="laws-title">The Laws Behind the Law</h2>
          <p>Gay-Lussac's empirical discovery in 1808, and how Avogadro's molecular model explained it.</p>
        </div>

        <div class="laws-grid">
          <div class="card law-card">
            <div class="law-badge">1808</div>
            <h3>Gay-Lussac's Law of Combining Volumes</h3>
            <p class="law-statement">When gases react at constant temperature and pressure, their volumes are always in simple whole-number ratios.</p>

            <div class="example-box">
              <p class="eyebrow">Example</p>
              <div class="reaction-display" aria-label="2 volumes hydrogen plus 1 volume oxygen yields 2 volumes water vapour">
                <div class="reaction-vol">
                  <strong>2</strong>
                  <span>volumes</span>
                  <small>H<sub>2</sub></small>
                </div>
                <span class="reaction-op" aria-hidden="true">+</span>
                <div class="reaction-vol">
                  <strong>1</strong>
                  <span>volume</span>
                  <small>O<sub>2</sub></small>
                </div>
                <span class="reaction-op" aria-hidden="true">&rarr;</span>
                <div class="reaction-vol reaction-product">
                  <strong>2</strong>
                  <span>volumes</span>
                  <small>H<sub>2</sub>O vapor</small>
                </div>
              </div>
              <p class="ratio-note">Ratio&nbsp;&nbsp;2 : 1 : 2</p>
            </div>
          </div>

          <div class="card law-card">
            <h3>Avogadro's Law</h3>
            <p class="law-statement">The volume of a gas is directly proportional to the number of molecules at constant temperature and pressure. This directly explains Gay-Lussac's observation — if equal volumes always contain equal numbers of molecules, then gases reacting in whole-number molecule ratios will naturally also react in whole-number volume ratios.</p>

            <ul class="key-points">
              <li>Doubling the moles doubles the volume; halving the moles halves the volume</li>
              <li>A "molecule" here means one gas particle — whether a single atom (like argon), a diatomic molecule (like H<sub>2</sub>), or larger. Only the count of particles matters, not how many atoms are inside each one</li>
              <li>The type of gas is irrelevant, as long as it behaves ideally</li>
            </ul>

            <div class="consequence-box">
              <p class="eyebrow">Practical Consequence — Molar Volume</p>
              <p class="consequence-text">Since equal volumes always contain equal numbers of molecules, one mole of any ideal gas at STP (0&thinsp;°C, 1&thinsp;atm) always occupies the same volume:</p>
              <div class="molar-volume-display">22.4 L <span>/ mol</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="ratios" class="section combine-section" aria-labelledby="combine-title">
        <div class="section-heading">
          <p class="eyebrow">How They Combine</p>
          <h2 id="combine-title">Volume Ratios = Mole Ratios</h2>
          <p>Because equal volumes contain equal numbers of molecules, the whole-number volume ratios in Gay-Lussac's Law directly reflect the stoichiometric mole ratios in a balanced chemical equation.</p>
        </div>

        <div class="card combine-main">
          <p class="eyebrow">Gas Reaction</p>
          <div class="chem-equation">2H<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2H<sub>2</sub>O(g)</div>
          <p class="combine-lead">Those coefficients apply directly to volumes. If you have 4 litres of H<sub>2</sub>, you need only 2 litres of O<sub>2</sub> and you produce 4 litres of water vapor — the 2&thinsp;:&thinsp;1&thinsp;:&thinsp;2 ratio holds exactly.</p>
          <div class="vol-example" aria-label="4 litres H2 plus 2 litres O2 yields 4 litres water vapor">
            <div class="vol-box">
              <strong>4 L</strong>
              <span>H<sub>2</sub></span>
            </div>
            <span class="reaction-op" aria-hidden="true">+</span>
            <div class="vol-box">
              <strong>2 L</strong>
              <span>O<sub>2</sub></span>
            </div>
            <span class="reaction-op" aria-hidden="true">&rarr;</span>
            <div class="vol-box vol-box--product">
              <strong>4 L</strong>
              <span>H<sub>2</sub>O vapor</span>
            </div>
          </div>
        </div>

        <div class="combine-footer-grid">
          <div class="card">
            <p class="eyebrow">Extending to Mass</p>
            <p>Those same whole numbers also represent mole ratios, so they can be extended to mass calculations using the molar mass of each gas. That requires an extra step, however, since different gases have different masses per mole.</p>
          </div>
          <div class="card combine-legacy-card">
            <p class="eyebrow">Historical Legacy</p>
            <p>Together, these two laws laid critical groundwork for modern chemistry and the development of the ideal gas law:</p>
            <div class="ideal-gas-display">PV = nRT</div>
          </div>
        </div>
      </section>

      <section id="variables" class="section content-grid" aria-labelledby="variables-title">
        <div class="card variable-card">
          <p class="eyebrow">Gas Variables</p>
          <h2 id="variables-title">The four gas variables</h2>
          <div class="variable-grid" aria-label="Four gas variables">
            <div><strong>P</strong><span>pressure</span></div>
            <div><strong>V</strong><span>volume</span></div>
            <div><strong>T</strong><span>temperature</span></div>
            <div><strong>n</strong><span>amount of gas in moles</span></div>
          </div>
        </div>
        <div class="card explanation-card compact-card">
          <h3>Why lowercase n matters</h3>
          <p>
            In gas laws, <strong>n</strong> is the standard symbol for moles.
            Avogadro's Law focuses on the V-n relationship while P and T stay
            constant. Combining gas volumes also assumes constant temperature
            and pressure.
          </p>
        </div>
      </section>

      <section id="gay-lussac" class="section law-section" aria-labelledby="gay-lussac-title">
        <div class="section-heading">
          <p class="eyebrow">Gay-Lussac's Law</p>
          <h2 id="gay-lussac-title">Gases combine in simple volume ratios</h2>
          <p>
            When gases react at constant temperature and pressure, their volumes
            react in simple whole-number ratios.
          </p>
        </div>

        <div class="card reaction-card">
          <div class="reaction-diagram" aria-label="Two volumes hydrogen plus one volume oxygen makes two volumes water vapor">
            <div class="reaction-block hydrogen">
              <span>H<sub>2</sub></span>
              <strong>2 volumes</strong>
            </div>
            <div class="reaction-symbol">+</div>
            <div class="reaction-block oxygen">
              <span>O<sub>2</sub></span>
              <strong>1 volume</strong>
            </div>
            <div class="reaction-symbol arrow">&rarr;</div>
            <div class="reaction-product">
              <div class="reaction-block water">
                <span>H<sub>2</sub>O</span>
                <strong>1 volume</strong>
              </div>
              <div class="reaction-block water">
                <span>H<sub>2</sub>O</span>
                <strong>1 volume</strong>
              </div>
            </div>
          </div>
          <div class="equation-strip">
            <strong>2H<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2H<sub>2</sub>O(g)</strong>
            <span>Ratio: 2 : 1 : 2</span>
          </div>
        </div>
      </section>

      <section id="connection" class="section content-grid" aria-labelledby="connection-title">
        <div class="card explanation-card">
          <p class="eyebrow">How They Connect</p>
          <h2 id="connection-title">Avogadro explains Gay-Lussac</h2>
          <p>
            Avogadro's Law says equal gas volumes contain equal numbers of
            particles at the same temperature and pressure. That explains why
            gas volume ratios match the mole ratios in balanced chemical
            equations.
          </p>
          <p>
            For the water vapor reaction, the 2:1:2 ratio works for particles,
            moles, and gas volumes.
          </p>
        </div>
        <div class="card example-card">
          <h3>Scale the ratio</h3>
          <dl>
            <div>
              <dt>Start with</dt>
              <dd>4 L H<sub>2</sub></dd>
            </div>
            <div>
              <dt>You need</dt>
              <dd>2 L O<sub>2</sub></dd>
            </div>
            <div>
              <dt>You produce</dt>
              <dd>4 L H<sub>2</sub>O vapor</dd>
            </div>
          </dl>
          <p>The ratio still stays <strong>2 : 1 : 2</strong>.</p>
        </div>
      </section>

      <section id="stp" class="section stp-section" aria-labelledby="stp-title">
        <div class="section-heading">
          <p class="eyebrow">Molar Volume at STP</p>
          <h2 id="stp-title">One mole takes about 22.4 L at STP</h2>
          <p>
            At STP, which means <strong>0&deg;C and 1 atm</strong>, 1 mole of
            an ideal gas takes up <strong>approximately 22.4 L</strong>. Real
            gases can deviate slightly from ideal behavior, so 22.4 L is a very
            useful approximation, not an exact rule for every situation.
          </p>
        </div>

        <div class="stp-grid">
          <div class="card equal-volume-card">
            <h3>Equal volume = equal number of particles</h3>
            <div class="balloon-row" aria-label="Equal volume gas balloons at STP">
              <div class="balloon">
                <span>H<sub>2</sub></span>
                <small>1 mol<br />22.4 L</small>
              </div>
              <div class="balloon">
                <span>O<sub>2</sub></span>
                <small>1 mol<br />22.4 L</small>
              </div>
              <div class="balloon">
                <span>CO<sub>2</sub></span>
                <small>1 mol<br />22.4 L</small>
              </div>
            </div>
            <p>
              The gas type does not matter as long as the gas behaves ideally.
              A "molecule" here means one gas particle: a single atom like
              argon, a diatomic molecule like H<sub>2</sub> or O<sub>2</sub>,
              or a larger molecule like CO<sub>2</sub>.
            </p>
          </div>
          <div class="card jug-card">
            <div class="jug-visual" aria-hidden="true">
              <div class="jug-cap"></div>
              <div class="jug-body">
                <span>22.4 L</span>
              </div>
            </div>
            <h3>How big is 22.4 L?</h3>
            <p>
              It is around the size of a large water jug or an inflated beach
              ball. That much space holds about 1 mole of an ideal gas at STP.
            </p>
          </div>
        </div>
      </section>

      <section id="demo" class="section simulation-section" aria-labelledby="simulation-title">
        <div class="card simulation-card">
          <div class="sim-header">
            <div>
              <p class="eyebrow">Interactive Simulation</p>
              <h2 id="simulation-title">Interactive Avogadro's Law Demo</h2>
              <p class="sim-subtitle">
                Change the amount of gas and watch volume increase while
                temperature and pressure stay constant.
              </p>
            </div>
            <span class="law-chip">V = n &times; 24.5 L at 298 K</span>
          </div>

          <div class="simulation-panel">
            <div class="simulation-visual">
              <div class="container-stage" aria-hidden="true">
                <div class="flask-scene" id="flaskScene">
                  <div class="flask" id="flask">
                    <div class="flask-interior" id="flaskInterior">
                      <div class="gas-fill" id="gasFill"></div>
                      <div class="particles" id="particles"></div>
                    </div>
                    <svg class="flask-glass" viewBox="0 0 260 320" focusable="false">
                      <path
                        class="flask-body"
                        d="M105 24 H155 V112 L224 279 C231 297 219 307 199 307 H61 C41 307 29 297 36 279 L105 112 Z"
                      />
                      <path class="flask-mouth" d="M96 24 H164" />
                      <path class="flask-neck" d="M105 112 H155" />
                      <path class="flask-shine" d="M86 153 C64 204 51 252 56 276" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="graph-card">
              <h3>Moles vs. Volume</h3>
              <div class="graph-wrap">
                <svg
                  id="avogadroGraph"
                  viewBox="0 0 520 360"
                  role="img"
                  aria-labelledby="graphTitle graphDesc"
                >
                  <title id="graphTitle">Avogadro's Law direct relationship graph</title>
                  <desc id="graphDesc">
                    A straight-line graph showing volume increasing as moles increase.
                  </desc>
                  <line class="axis" x1="70" y1="300" x2="470" y2="300"></line>
                  <line class="axis" x1="70" y1="300" x2="70" y2="45"></line>
                  <text class="axis-label" x="270" y="345">moles of gas, n</text>
                  <text class="axis-label y-label" x="18" y="180">volume, V (L)</text>
                  <g id="graphTicks"></g>
                  <polyline id="graphLine" class="graph-line" points=""></polyline>
                  <g id="graphPoints"></g>
                  <circle id="currentGraphPoint" class="current-point" r="9"></circle>
                </svg>
              </div>
              <p class="graph-caption">
                A straight line shows that V and n increase together.
              </p>
            </div>
          </div>

          <div class="demo-control-panel">
            <div class="control-row">
              <label for="molesSlider">Moles of gas, n</label>
              <output id="molesOutput" for="molesSlider">1.0 mol</output>
            </div>
            <input
              type="range"
              id="molesSlider"
              min="0.5"
              max="5"
              step="0.5"
              value="1"
            />
          </div>

          <div class="metric-grid" aria-live="polite">
            <div class="metric">
              <span>n = current moles</span>
              <strong id="currentMoles">1.0 mol</strong>
            </div>
            <div class="metric">
              <span>V = current volume</span>
              <strong id="currentVolume">24.5 L</strong>
            </div>
            <div class="metric">
              <span>T = temperature</span>
              <strong>298 K</strong>
              <small>constant</small>
            </div>
            <div class="metric">
              <span>P = pressure</span>
              <strong>1 atm</strong>
              <small>constant</small>
            </div>
          </div>

          <div class="demo-takeaway">
            <p>
              At constant temperature and pressure, volume is directly
              proportional to the amount of gas.
            </p>
            <strong>More moles &rarr; more particles &rarr; more volume.</strong>
          </div>
        </div>
      </section>

      <section id="uses" class="section uses-section" aria-labelledby="uses-title">
        <div class="section-heading">
          <p class="eyebrow">Real-World Uses</p>
          <h2 id="uses-title">Why this matters</h2>
          <p>
            Gas volume and mole relationships help people design systems that
            need gases to behave predictably and safely.
          </p>
        </div>

        <div class="uses-grid">
          <article class="card use-card">
            <span class="use-icon">01</span>
            <h3>Airbags</h3>
            <p>
              When sodium azide decomposes during a crash, it rapidly produces
              nitrogen gas. Engineers calculate the amount of gas needed to
              inflate the airbag safely.
            </p>
          </article>
          <article class="card use-card">
            <span class="use-icon">02</span>
            <h3>Anesthesia</h3>
            <p>
              Hospitals use gas volume and mole relationships to deliver
              controlled gas mixtures and doses.
            </p>
          </article>
          <article class="card use-card">
            <span class="use-icon">03</span>
            <h3>Scuba tanks</h3>
            <p>
              Tank pressure relates to how many moles of gas are stored, which
              helps divers estimate how much breathing gas they have.
            </p>
          </article>
        </div>
      </section>

      <section id="history" class="section history-section" aria-labelledby="history-title">
        <div class="card history-card">
          <p class="eyebrow">Cool Facts</p>
          <h2 id="history-title">Avogadro's idea took time to catch on</h2>
          <div class="fact-list">
            <p>
              Avogadro's ideas helped explain why gases combine in
              whole-number volume ratios.
            </p>
            <p>
              His work supported the idea that gases like hydrogen and oxygen
              exist as diatomic molecules, H<sub>2</sub> and O<sub>2</sub>.
            </p>
            <p>
              His work was not widely recognized during his lifetime, but it
              became very important later.
            </p>
          </div>
        </div>
      </section>

      <section id="quiz" class="section quiz-section" aria-labelledby="quiz-title">
        <div class="section-heading">
          <p class="eyebrow">Self-Quiz</p>
          <h2 id="quiz-title">Check your gas laws knowledge</h2>
        </div>

        <div class="quiz-shell card">
          <div class="quiz-toolbar">
            <div>
              <span class="score-label" id="quizProgress">Question 1 of 9</span>
              <strong id="scoreText">0 answered</strong>
            </div>
            <button class="button ghost-button" id="resetQuiz" type="button">Restart</button>
          </div>

          <div class="quiz-progress" aria-hidden="true">
            <span id="quizProgressBar"></span>
          </div>

          <div class="quiz-carousel" aria-live="polite">
            <div class="quiz-track" id="quizTrack"></div>
          </div>

          <div class="quiz-nav">
            <button class="button" id="prevQuestion" type="button">Previous</button>
            <button class="button" id="nextQuestion" type="button">Next</button>
          </div>
        </div>

        <div class="results-screen card" id="resultsScreen" hidden>
          <div>
            <p class="eyebrow">Results</p>
            <h3 id="finalScore">Final Score</h3>
            <p id="finalPercent"></p>
          </div>
          <div class="results-list" id="resultsList"></div>
          <button class="button" id="resetResults" type="button">Restart</button>
        </div>
      </section>
    </main>
`;
