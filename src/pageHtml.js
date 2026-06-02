import combiningVolumesImg from "../assets/combining-volumes.png";

const moleculeToken = ({ label, name, formula, molarMass, composition }) =>
  `<button class="chem-token molecule-token" type="button" data-name="${name}" data-formula="${formula}" data-molar-mass="${molarMass}" data-composition="${composition}" aria-label="${name}, formula ${formula}, molar mass ${molarMass}, composition ${composition}">${label}</button>`;

const h2 = moleculeToken({
  label: "H<sub>2</sub>",
  name: "Hydrogen gas",
  formula: "H\u2082",
  molarMass: "2.016 g/mol",
  composition: "2 hydrogen atoms",
});

const o2 = moleculeToken({
  label: "O<sub>2</sub>",
  name: "Oxygen gas",
  formula: "O\u2082",
  molarMass: "31.998 g/mol",
  composition: "2 oxygen atoms",
});

const h2o = moleculeToken({
  label: "H<sub>2</sub>O",
  name: "Water / water vapor",
  formula: "H\u2082O",
  molarMass: "18.015 g/mol",
  composition: "2 hydrogen atoms and 1 oxygen atom",
});

const co2 = moleculeToken({
  label: "CO<sub>2</sub>",
  name: "Carbon dioxide",
  formula: "CO\u2082",
  molarMass: "44.01 g/mol",
  composition: "1 carbon atom and 2 oxygen atoms",
});

export const pageHtml = String.raw`
<main class="page-shell">
      <section id="gay-lussac" class="section law-section" aria-labelledby="gay-lussac-title">
        <div class="section-heading">
          <p class="eyebrow">Gay-Lussac's Law of Combining Gas Volumes</p>
          <h2 id="gay-lussac-title">Gases combine in simple volume ratios</h2>
          <p>
            When gases react at constant temperature and pressure, their volumes
            react in simple whole-number ratios.
          </p>
        </div>

        <div class="card reaction-card">
          <div class="reaction-diagram" aria-label="Two volumes hydrogen plus one volume oxygen makes two volumes water vapor">
            <div class="reaction-block hydrogen">
              <span>${h2}</span>
              <strong>2 volumes</strong>
            </div>
            <div class="reaction-symbol">+</div>
            <div class="reaction-block oxygen">
              <span>${o2}</span>
              <strong>1 volume</strong>
            </div>
            <div class="reaction-symbol arrow">&rarr;</div>
            <div class="reaction-product">
              <div class="reaction-block water">
                <span>${h2o}</span>
                <strong>1 volume</strong>
              </div>
              <div class="reaction-block water">
                <span>${h2o}</span>
                <strong>1 volume</strong>
              </div>
            </div>
          </div>
          <div class="equation-strip">
            <strong>2${h2}(g) + ${o2}(g) &rarr; 2${h2o}(g)</strong>
            <span>Ratio: 2 : 1 : 2</span>
          </div>
        </div>

        <figure class="reaction-figure">
          <img
            src="${combiningVolumesImg}"
            alt="Two volumes (100 mL) of hydrogen gas plus one volume (50 mL) of oxygen gas react to form two volumes (100 mL) of water vapor, a 2:1:2 ratio."
            loading="lazy"
          />
          <figcaption>
            Reacting volumes hold the 2&thinsp;:&thinsp;1&thinsp;:&thinsp;2 ratio at constant
            temperature and pressure: 100&nbsp;mL H<sub>2</sub> + 50&nbsp;mL O<sub>2</sub>
            &rarr; 100&nbsp;mL H<sub>2</sub>O vapor.
          </figcaption>
        </figure>
      </section>

      <section id="core" class="section formula-section" aria-labelledby="formula-title">
        <div>
          <p class="eyebrow">Avogadro's Law</p>
          <h2 id="formula-title">Volume is proportional to the number of molecules</h2>
          <p>
            The volume of a gas is directly proportional to the number of molecules at constant temperature and pressure. This directly explains Gay-Lussac's observation. If equal volumes always contain equal numbers of molecules, then gases reacting in whole-number molecule ratios will naturally also react in whole-number volume ratios.
          </p>
          <ul class="key-points">
            <li>Doubling the moles doubles the volume; halving the moles halves the volume</li>
            <li>A "molecule" here means one gas particle. It could be a single atom (like argon), a diatomic molecule (like ${h2}), or larger. Only the count of particles matters, not how many atoms are inside each one</li>
            <li>The type of gas is irrelevant, as long as it behaves ideally</li>
          </ul>
          <p class="plain-callout">
            Core idea: <strong>more moles = more volume</strong>.
            <strong>Fewer moles = less volume</strong>.
          </p>
        </div>
        <div class="formula-card" aria-label="Avogadro's Law formulas">
          <div class="formula-row" role="group" aria-label="Volume is proportional to moles">
            <button class="formula-token" type="button" data-tooltip="Volume of the gas">V</button>
            <button class="formula-token formula-token--symbol" type="button" data-tooltip="Is proportional to">&prop;</button>
            <button class="formula-token" type="button" data-tooltip="Number of moles of gas">n</button>
          </div>
          <div class="formula-row" role="group" aria-label="Volume divided by moles equals a constant">
            <button class="formula-token" type="button" data-tooltip="Volume of the gas">V</button>
            <button class="formula-token formula-token--symbol" type="button" data-tooltip="Divided by">/</button>
            <button class="formula-token" type="button" data-tooltip="Number of moles of gas">n</button>
            <button class="formula-token formula-token--symbol" type="button" data-tooltip="Shows the relationship stays equal">=</button>
            <button class="formula-token" type="button" data-tooltip="Constant value when temperature and pressure stay the same">k</button>
          </div>
          <div class="formula-row" role="group" aria-label="Initial and final volume to mole ratios stay equal">
            <button class="formula-token" type="button" data-tooltip="Initial volume">V<sub>1</sub></button>
            <button class="formula-token formula-token--symbol" type="button" data-tooltip="Divided by">/</button>
            <button class="formula-token" type="button" data-tooltip="Initial number of moles">n<sub>1</sub></button>
            <button class="formula-token formula-token--symbol" type="button" data-tooltip="The ratio stays constant">=</button>
            <button class="formula-token" type="button" data-tooltip="Final volume">V<sub>2</sub></button>
            <button class="formula-token formula-token--symbol" type="button" data-tooltip="Divided by">/</button>
            <button class="formula-token" type="button" data-tooltip="Final number of moles">n<sub>2</sub></button>
          </div>
        </div>
      </section>

      <section id="logic" class="section" aria-labelledby="logic-title">
        <div class="section-heading">
          <p class="eyebrow">Step-by-Step Logic</p>
          <h2 id="logic-title">How Avogadro's Law Explains Gay-Lussac's Observation</h2>
          <p>Let's build the logic step by step.</p>
        </div>

        <div class="explain-flow">
          <div class="steps-pair">
            <div class="card step-card">
              <div class="step-kicker">Step 1</div>
              <h3>Avogadro's Key Insight</h3>
              <p>At the same temperature and pressure, 1 litre of <em>any</em> gas contains the same number of molecules.</p>
              <p>Let's say 1 litre = 100 molecules (simplified for illustration):</p>
              <div class="table-scroll">
                <table class="data-table">
                  <thead>
                    <tr><th>Gas</th><th>Volume</th><th>Molecules</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>H<sub>2</sub></td><td>1 L</td><td>100</td></tr>
                    <tr><td>O<sub>2</sub></td><td>1 L</td><td>100</td></tr>
                    <tr><td>CO<sub>2</sub></td><td>1 L</td><td>100</td></tr>
                    <tr><td>Ar</td><td>1 L</td><td>100</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="step-conclusion">The type of gas doesn't matter.</p>
            </div>

            <div class="card step-card">
              <div class="step-kicker">Step 2</div>
              <h3>What This Means for Volume vs Molecules</h3>
              <p>Because 1 L = 100 molecules, then:</p>
              <div class="table-scroll">
                <table class="data-table">
                  <thead>
                    <tr><th>Volume</th><th>Molecules</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1 L</td><td>100</td></tr>
                    <tr><td>2 L</td><td>200</td></tr>
                    <tr><td>3 L</td><td>300</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Volume and molecule count scale together perfectly. Double the volume = double the molecules.<strong>V&thinsp;&prop;&thinsp;n</strong>.</p>
            </div>
          </div>

          <div class="card step-card">
            <div class="step-kicker">Step 3</div>
            <h3>Applying This to the H<sub>2</sub> + O<sub>2</sub> Reaction</h3>
            <div class="chem-equation">2H<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2H<sub>2</sub>O(g)</div>
            <p>Chemically, the molecules react in a 2&thinsp;:&thinsp;1&thinsp;:&thinsp;2 ratio:</p>
            <div class="table-scroll">
              <table class="data-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>H<sub>2</sub></th>
                    <th>O<sub>2</sub></th>
                    <th>H<sub>2</sub>O</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="row-label">Molecules</td>
                    <td>200</td><td>100</td><td>200</td>
                  </tr>
                  <tr class="volume-row">
                    <td class="row-label">Therefore volume</td>
                    <td>2 L</td><td>1 L</td><td>2 L</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="step-conclusion">Because 200 molecules = 2&thinsp;L and 100 molecules = 1&thinsp;L, the volume ratio automatically becomes 2&thinsp;:&thinsp;1&thinsp;:&thinsp;2 — the same as the molecule ratio.</p>
          </div>

          <div class="core-logic-card">
            <p class="eyebrow">The Core Logic in One Line</p>
            <p class="core-logic-text">Since equal volumes = equal molecules, whatever ratio molecules react in, volumes must react in that same ratio.</p>
            <div class="ratio-chain">
              <span class="ratio-item">Molecule ratio&ensp;2 : 1 : 2</span>
              <span class="ratio-arrow">&rarr;</span>
              <span class="ratio-item ratio-result">Volume ratio&ensp;2 : 1 : 2 &#10003;</span>
            </div>
          </div>

          <div class="card">
            <h3>Why Gay-Lussac Couldn't Explain His Own Observation</h3>
            <p>Gay-Lussac observed the whole-number volume ratios experimentally, but he couldn't explain <em>why</em> it happened. Avogadro's Law provided the missing explanation — it's because volume and molecule count are directly linked, so one ratio always mirrors the other.</p>
          </div>
        </div>
      </section>

      <section id="ratios" class="section combine-section" aria-labelledby="combine-title">
        <div class="card combine-shell">
          <div class="section-heading combine-heading">
            <p class="eyebrow">Gas Reaction</p>
            <h2 id="combine-title">Gas ratios work like volume ratios</h2>
            <p>
              Because equal volumes contain equal numbers of molecules, the
              whole-number volume ratios in Gay-Lussac's Law directly reflect
              the stoichiometric mole ratios in a balanced chemical equation.
            </p>
          </div>

          <div class="combine-unified">
            <div class="combine-copy">
              <p class="combine-kicker">The coefficients in a balanced gas equation also act as volume ratios when temperature and pressure stay constant.</p>
              <p class="combine-lead">That means the numbers in the equation tell you both how many moles react and how many litres react, as long as everything is measured under the same conditions.</p>
              <div class="combine-mass-note">
                <p class="eyebrow">Extending to Mass</p>
                <p>Those same coefficients also represent mole ratios. To turn that into mass, you still need molar mass, because different gases have different masses per mole even when their mole ratio matches the equation.</p>
              </div>
            </div>

            <div class="combine-reaction-panel">
              <div class="chem-equation">2${h2}(g) + ${o2}(g) &rarr; 2${h2o}(g)</div>
              <p class="combine-equation-note">At constant temperature and pressure, the balanced equation and the gas volumes match directly.</p>
              <div class="vol-example" aria-label="4 litres H2 plus 2 litres O2 yields 4 litres water vapor">
                <div class="vol-box">
                  <strong>4 L</strong>
                  <span>${h2}</span>
                </div>
                <span class="reaction-op" aria-hidden="true">+</span>
                <div class="vol-box">
                  <strong>2 L</strong>
                  <span>${o2}</span>
                </div>
                <span class="reaction-op" aria-hidden="true">&rarr;</span>
                <div class="vol-box vol-box--product">
                  <strong>4 L</strong>
                  <span>${h2o} vapor</span>
                </div>
              </div>
              <p class="combine-ratio-note">The ratio stays locked at <strong>2 : 1 : 2</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="variables" class="section" aria-labelledby="variables-title">
        <div class="card variable-card">
          <p class="eyebrow">Gas Variables</p>
          <h2 id="variables-title">The four gas variables</h2>
          <div class="variable-grid" aria-label="Four gas variables and their acceptable units">
            <div><strong>P</strong><span>pressure</span><span class="var-unit">kPa &middot; atm &middot; mmHg</span></div>
            <div><strong>V</strong><span>volume</span><span class="var-unit">L &middot; mL</span></div>
            <div><strong>T</strong><span>temperature</span><span class="var-unit">K &middot; &deg;C</span></div>
            <div><strong>n</strong><span>amount of gas</span><span class="var-unit">mol</span></div>
          </div>

          <div class="conversions">
            <p class="eyebrow">Conversions</p>
            <ul class="conversion-list">
              <li><span>Pressure</span><strong>1 atm = 101.325 kPa = 760 mmHg</strong></li>
              <li><span>Volume</span><strong>1 L = 1000 mL = 1000 cm<sup>3</sup></strong></li>
              <li><span>Temperature</span><strong>T(K) = T(&deg;C) + 273.15</strong></li>
            </ul>
          </div>
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
                <span>${h2}</span>
                <small>1 mol<br />22.4 L</small>
              </div>
              <div class="balloon">
                <span>${o2}</span>
                <small>1 mol<br />22.4 L</small>
              </div>
              <div class="balloon">
                <span>${co2}</span>
                <small>1 mol<br />22.4 L</small>
              </div>
            </div>
            <p>
              The gas type does not matter as long as the gas behaves ideally.
              A "molecule" here means one gas particle: a single atom like
              argon, a diatomic molecule like ${h2} or ${o2},
              or a larger molecule like ${co2}.
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
            </div>
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
                        d="M105 24 H155 V112 L224 279 L199 307 H61 L36 279 L105 112 Z"
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
              <span class="law-chip">V = n &times; 24.5 L at 298 K</span>
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
                  <line id="guideLineX" class="guide-line" x1="0" y1="0" x2="0" y2="0"></line>
                  <line id="guideLineY" class="guide-line" x1="0" y1="0" x2="0" y2="0"></line>
                  <polyline id="graphLine" class="graph-line" points=""></polyline>
                  <g id="graphPoints"></g>
                  <circle id="currentGraphPoint" class="current-point" r="9"></circle>
                </svg>
              </div>
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
              step="0.1"
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
