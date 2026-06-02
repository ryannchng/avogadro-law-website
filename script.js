const slider = document.querySelector("#molesSlider");
const molesOutput = document.querySelector("#molesOutput");
const currentMoles = document.querySelector("#currentMoles");
const currentVolume = document.querySelector("#currentVolume");
const gasFill = document.querySelector("#gasFill");
const particles = document.querySelector("#particles");
const flaskScene = document.querySelector("#flaskScene");
const flask = document.querySelector("#flask");
const flaskInterior = document.querySelector("#flaskInterior");
const graphLine = document.querySelector("#graphLine");
const graphPoints = document.querySelector("#graphPoints");
const graphTicks = document.querySelector("#graphTicks");
const currentGraphPoint = document.querySelector("#currentGraphPoint");
const guideLineX = document.querySelector("#guideLineX");
const guideLineY = document.querySelector("#guideLineY");
const quizTrack = document.querySelector("#quizTrack");
const quizProgress = document.querySelector("#quizProgress");
const quizProgressBar = document.querySelector("#quizProgressBar");
const scoreText = document.querySelector("#scoreText");
const resetQuiz = document.querySelector("#resetQuiz");
const resetResults = document.querySelector("#resetResults");
const prevQuestion = document.querySelector("#prevQuestion");
const nextQuestion = document.querySelector("#nextQuestion");
const resultsScreen = document.querySelector("#resultsScreen");
const finalScore = document.querySelector("#finalScore");
const finalPercent = document.querySelector("#finalPercent");
const resultsList = document.querySelector("#resultsList");

const molarVolume = 24.5;
const particlesPerMole = 12;
const fillPercentPerMole = 16.8;
const graphData = [
  { moles: 0.5, volume: 12.25 },
  { moles: 1.0, volume: 24.5 },
  { moles: 2.0, volume: 49.0 },
  { moles: 3.0, volume: 73.5 },
  { moles: 4.0, volume: 98.0 },
  { moles: 5.0, volume: 122.5 },
];

const quizQuestions = [
  {
    question: "Avogadro's Law describes the relationship between which two variables?",
    answers: [
      "Pressure and volume",
      "Volume and moles",
      "Temperature and pressure",
      "Mass and density",
    ],
    correctIndex: 1,
    explanation:
      "Avogadro's Law relates volume and moles when temperature and pressure are constant.",
  },
  {
    question: "What does Gay-Lussac's Law of Combining Volumes say about reacting gases?",
    answers: [
      "Their masses are always equal",
      "Their volumes react in simple whole-number ratios",
      "Their temperatures must always double",
      "Their pressures do not affect any gas reaction",
    ],
    correctIndex: 1,
    explanation:
      "At constant temperature and pressure, reacting gas volumes follow simple whole-number ratios.",
  },
  {
    question:
      "If the number of moles of gas doubles, what happens to volume, assuming temperature and pressure stay constant?",
    answers: ["It halves", "It doubles", "It stays the same", "It becomes zero"],
    correctIndex: 1,
    explanation:
      "Volume is directly proportional to moles, so doubling moles doubles volume.",
  },
  {
    question:
      "A balloon contains 2.0 mol of gas and has a volume of 49.0 L. If the gas increases to 4.0 mol, what is the new volume?",
    answers: ["24.5 L", "49.0 L", "98.0 L", "196.0 L"],
    correctIndex: 2,
    explanation:
      "Using V1/n1 = V2/n2, doubling the moles from 2.0 mol to 4.0 mol doubles the volume from 49.0 L to 98.0 L.",
  },
  {
    question: "Which conditions must stay constant for Avogadro's Law?",
    answers: [
      "Temperature and pressure",
      "Volume and pressure",
      "Moles and temperature",
      "Mass and density",
    ],
    correctIndex: 0,
    explanation:
      "Temperature and pressure must stay constant so volume changes can be linked only to the number of moles.",
  },
  {
    question: "At STP, what volume does 1 mole of an ideal gas occupy?",
    answers: [
      "Approximately 22.4 L",
      "Exactly 1.0 L for every gas",
      "Approximately 24.5 L at 0°C",
      "It depends only on the gas color",
    ],
    correctIndex: 0,
    explanation:
      "At STP, 0°C and 1 atm, 1 mole of an ideal gas takes up approximately 22.4 L.",
  },
  {
    question: "Why does adding gas to a balloon make it expand?",
    answers: [
      "The gas particles become heavier",
      "The gas particles disappear",
      "More gas particles occupy more space",
      "The temperature must always decrease",
    ],
    correctIndex: 2,
    explanation:
      "Adding gas increases the number of particles, so the gas occupies more volume if temperature and pressure are roughly constant.",
  },
  {
    question:
      "For 2 H2 (g) + O2 (g) → 2 H2O (g), how much O2 is needed for 4 L of H2 at the same temperature and pressure?",
    answers: ["1 L O2", "2 L O2", "4 L O2", "8 L O2"],
    correctIndex: 1,
    explanation:
      "The volume ratio is 2:1:2, so 4 L of H2 needs 2 L of O2 and produces 4 L of water vapor.",
  },
  {
    question:
      "Challenge: A gas sample has 1.5 mol and a volume of 36.75 L. What volume would it have at 3.0 mol, assuming temperature and pressure stay constant?",
    answers: ["18.375 L", "36.75 L", "73.5 L", "110.25 L"],
    correctIndex: 2,
    explanation:
      "3.0 mol is double 1.5 mol, so the volume doubles from 36.75 L to 73.5 L.",
  },
];

let currentQuestionIndex = 0;
let selectedAnswers = Array(quizQuestions.length).fill(null);
let showingResults = false;
let gasParticles = [];
let particleAnimationId;
let lastParticleFrame = performance.now();
let gasParticlesVisible = true;
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let prefersReducedMotion = reducedMotionQuery.matches;
let flaskOffset = { x: 0, y: 0 };
let flaskVelocity = { x: 0, y: 0 };
let dragState = {
  active: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  baseX: 0,
  baseY: 0,
  lastX: 0,
  lastY: 0,
  lastTime: 0,
};

function formatMoles(value) {
  return `${Number(value).toFixed(1)} mol`;
}

function formatVolume(value) {
  const decimals = Number.isInteger(value * 10) ? 1 : 2;
  return `${Number(value).toFixed(decimals)} L`;
}

function getGraphPosition(moles, volume) {
  const xMin = 0.5;
  const xMax = 5;
  const yMin = 0;
  const yMax = 125;
  const left = 70;
  const right = 470;
  const top = 45;
  const bottom = 300;

  return {
    x: left + ((moles - xMin) / (xMax - xMin)) * (right - left),
    y: bottom - ((volume - yMin) / (yMax - yMin)) * (bottom - top),
  };
}

function drawGraph() {
  const linePoints = graphData
    .map((point) => {
      const position = getGraphPosition(point.moles, point.volume);
      return `${position.x},${position.y}`;
    })
    .join(" ");

  graphLine.setAttribute("points", linePoints);

  const xTicks = [0.5, 1, 2, 3, 4, 5];
  const yTicks = [0, 25, 50, 75, 100, 125];

  graphTicks.innerHTML = [
    ...xTicks.map((tick) => {
      const position = getGraphPosition(tick, 0);
      return `
        <line class="tick-line" x1="${position.x}" y1="300" x2="${position.x}" y2="45"></line>
        <text class="tick-label" x="${position.x}" y="324" text-anchor="middle">${tick}</text>
      `;
    }),
    ...yTicks.map((tick) => {
      const position = getGraphPosition(0.5, tick);
      return `
        <line class="tick-line" x1="70" y1="${position.y}" x2="470" y2="${position.y}"></line>
        <text class="tick-label" x="56" y="${position.y + 5}" text-anchor="end">${tick}</text>
      `;
    }),
  ].join("");

  graphPoints.innerHTML = graphData
    .map((point) => {
      const position = getGraphPosition(point.moles, point.volume);
      return `<circle class="graph-point" cx="${position.x}" cy="${position.y}" r="6"></circle>`;
    })
    .join("");
}

function getFlaskBounds(y, width, height, radius = 5) {
  const normalizedY = y / height;
  const edgeInset = 4;
  let leftRatio;
  let rightRatio;

  if (normalizedY <= 0.35) {
    leftRatio = 0.42;
    rightRatio = 0.58;
  } else if (normalizedY <= 0.87) {
    const t = (normalizedY - 0.35) / 0.52;
    leftRatio = 0.42 + (0.14 - 0.42) * t;
    rightRatio = 0.58 + (0.86 - 0.58) * t;
  } else {
    const t = Math.min((normalizedY - 0.87) / 0.088, 1);
    leftRatio = 0.14 + (0.235 - 0.14) * t;
    rightRatio = 0.86 + (0.765 - 0.86) * t;
  }

  return {
    left: leftRatio * width + radius + edgeInset,
    right: rightRatio * width - radius - edgeInset,
    top: 0.085 * height + radius + edgeInset,
    bottom: 0.958 * height - radius - edgeInset,
  };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function createGasParticle(index) {
  const rect = flaskInterior.getBoundingClientRect();
  const width = rect.width || 260;
  const height = rect.height || 320;
  const size = 9 + (index % 4);
  const radius = size / 2;
  const y = height * (0.14 + Math.random() * 0.75);
  const bounds = getFlaskBounds(y, width, height, radius);
  const x = bounds.left + Math.random() * Math.max(bounds.right - bounds.left, 1);
  const element = document.createElement("span");

  element.className = "particle";
  element.style.width = `${size}px`;
  element.style.height = `${size}px`;
  particles.appendChild(element);

  return {
    element,
    x,
    y,
    radius,
    idleAngle: Math.random() * Math.PI * 2,
    idleRadius: 2 + Math.random() * 7,
    idleSpeed: 0.6 + Math.random() * 0.8,
    homeX: x,
    homeY: y,
    vx: (Math.random() - 0.5) * 32,
    vy: (Math.random() - 0.5) * 32,
  };
}

function updateParticleCount(moles) {
  // Particles represent gas molecules, so the count is directly proportional to
  // moles (no offset) — doubling moles doubles the particles, like the law states.
  const targetCount = Math.round(moles * particlesPerMole);

  while (gasParticles.length < targetCount) {
    gasParticles.push(createGasParticle(gasParticles.length));
  }

  while (gasParticles.length > targetCount) {
    const particle = gasParticles.pop();
    particle.element.remove();
  }
}

function renderParticlePositions() {
  gasParticles.forEach((particle) => {
    particle.element.style.setProperty("--particle-x", `${particle.x - particle.radius}px`);
    particle.element.style.setProperty("--particle-y", `${particle.y - particle.radius}px`);
  });
}

function nudgeParticles(velocityX, velocityY) {
  const impulseX = clamp(velocityX * 0.018, -18, 18);
  const impulseY = clamp(velocityY * 0.018, -18, 18);

  gasParticles.forEach((particle) => {
    particle.vx += impulseX;
    particle.vy += impulseY;
  });
}

function animateGasParticles(time = performance.now()) {
  if (!gasParticlesVisible) {
    particleAnimationId = null;
    return;
  }

  const rect = flaskInterior.getBoundingClientRect();
  const width = rect.width || 260;
  const height = rect.height || 320;
  const dt = Math.min((time - lastParticleFrame) / 1000, 0.034);

  lastParticleFrame = time;
  flaskVelocity.x *= 0.93;
  flaskVelocity.y *= 0.93;

  gasParticles.forEach((particle) => {
    const isIdle = !dragState.active && Math.abs(flaskVelocity.x) < 18 && Math.abs(flaskVelocity.y) < 18;
    const jitter = dragState.active ? 14 : isIdle ? 2.5 : 6;
    const idlePhase = time * 0.001 * particle.idleSpeed + particle.idleAngle;

    particle.vx += (Math.random() - 0.5) * jitter * dt;
    particle.vy += (Math.random() - 0.5) * jitter * dt;
    particle.vx += flaskVelocity.x * 0.015 * dt;
    particle.vy += flaskVelocity.y * 0.015 * dt;

    if (isIdle) {
      const idleTargetX = particle.homeX + Math.cos(idlePhase) * particle.idleRadius;
      const idleTargetY = particle.homeY + Math.sin(idlePhase * 0.9) * particle.idleRadius;
      particle.vx += (idleTargetX - particle.x) * 1.8 * dt;
      particle.vy += (idleTargetY - particle.y) * 1.8 * dt;
    } else {
      particle.homeX = particle.x;
      particle.homeY = particle.y;
    }

    particle.vx *= 0.998;
    particle.vy *= 0.998;
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;

    const verticalBounds = getFlaskBounds(particle.y, width, height, particle.radius);
    particle.y = clamp(particle.y, verticalBounds.top, verticalBounds.bottom);
    const bounds = getFlaskBounds(particle.y, width, height, particle.radius);

    if (particle.x < bounds.left) {
      particle.x = bounds.left;
      particle.vx = Math.abs(particle.vx) * 0.9;
    } else if (particle.x > bounds.right) {
      particle.x = bounds.right;
      particle.vx = -Math.abs(particle.vx) * 0.9;
    }

    if (particle.y <= bounds.top) {
      particle.y = bounds.top;
      particle.vy = Math.abs(particle.vy) * 0.9;
    } else if (particle.y >= bounds.bottom) {
      particle.y = bounds.bottom;
      particle.vy = -Math.abs(particle.vy) * 0.9;
    }

    particle.element.style.setProperty("--particle-x", `${particle.x - particle.radius}px`);
    particle.element.style.setProperty("--particle-y", `${particle.y - particle.radius}px`);
  });

  particleAnimationId = window.requestAnimationFrame(animateGasParticles);
}

function startGasParticleAnimation() {
  if (prefersReducedMotion) {
    renderParticlePositions();
    return;
  }

  if (particleAnimationId) return;

  gasParticlesVisible = true;
  lastParticleFrame = performance.now();
  particleAnimationId = window.requestAnimationFrame(animateGasParticles);
}

function stopGasParticleAnimation() {
  gasParticlesVisible = false;

  if (particleAnimationId) {
    window.cancelAnimationFrame(particleAnimationId);
    particleAnimationId = null;
  }
}

function setupParticleVisibility() {
  const simulationSection = document.querySelector(".simulation-section");

  if (!simulationSection || !("IntersectionObserver" in window)) {
    startGasParticleAnimation();
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startGasParticleAnimation();
      } else {
        stopGasParticleAnimation();
      }
    },
    { rootMargin: "160px 0px", threshold: 0.01 },
  );

  observer.observe(simulationSection);
}

function updateFlaskTransform(rotation = 0) {
  flask.style.setProperty("--flask-x", `${flaskOffset.x}px`);
  flask.style.setProperty("--flask-y", `${flaskOffset.y}px`);
  flask.style.setProperty("--flask-rotate", `${rotation}deg`);
}

function setupFlaskDrag() {
  flask.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    dragState.active = true;
    dragState.pointerId = event.pointerId;
    dragState.startX = event.clientX;
    dragState.startY = event.clientY;
    dragState.baseX = flaskOffset.x;
    dragState.baseY = flaskOffset.y;
    dragState.lastX = event.clientX;
    dragState.lastY = event.clientY;
    dragState.lastTime = performance.now();
    flask.classList.add("dragging");
    flask.setPointerCapture(event.pointerId);
  });

  flask.addEventListener("pointermove", (event) => {
    if (!dragState.active || event.pointerId !== dragState.pointerId) return;

    const now = performance.now();
    const elapsed = Math.max((now - dragState.lastTime) / 1000, 0.016);
    const frameVelocityX = (event.clientX - dragState.lastX) / elapsed;
    const frameVelocityY = (event.clientY - dragState.lastY) / elapsed;

    flaskOffset.x = clamp(dragState.baseX + event.clientX - dragState.startX, -70, 70);
    flaskOffset.y = clamp(dragState.baseY + event.clientY - dragState.startY, -42, 42);
    flaskVelocity.x = frameVelocityX;
    flaskVelocity.y = frameVelocityY;
    updateFlaskTransform(clamp(frameVelocityX * 0.012, -7, 7));
    nudgeParticles(frameVelocityX, frameVelocityY);

    dragState.lastX = event.clientX;
    dragState.lastY = event.clientY;
    dragState.lastTime = now;
  });

  function endDrag(event) {
    if (!dragState.active || event.pointerId !== dragState.pointerId) return;

    dragState.active = false;
    dragState.pointerId = null;
    flask.classList.remove("dragging");
    updateFlaskTransform(0);
  }

  flask.addEventListener("pointerup", endDrag);
  flask.addEventListener("pointercancel", endDrag);
}

function updateSimulation() {
  const moles = Number(slider.value);
  const volume = moles * molarVolume;
  // Fill level tracks volume, which is proportional to moles, so it also passes
  // through the origin (0 mol = empty) rather than starting at a fixed offset.
  const fillPercent = moles * fillPercentPerMole;
  const graphPosition = getGraphPosition(moles, volume);

  molesOutput.textContent = formatMoles(moles);
  currentMoles.textContent = formatMoles(moles);
  currentVolume.textContent = formatVolume(volume);
  gasFill.style.height = `${fillPercent}%`;
  currentGraphPoint.setAttribute("cx", graphPosition.x);
  currentGraphPoint.setAttribute("cy", graphPosition.y);

  guideLineX.setAttribute("x1", graphPosition.x);
  guideLineX.setAttribute("y1", graphPosition.y);
  guideLineX.setAttribute("x2", graphPosition.x);
  guideLineX.setAttribute("y2", 300);
  guideLineY.setAttribute("x1", 70);
  guideLineY.setAttribute("y1", graphPosition.y);
  guideLineY.setAttribute("x2", graphPosition.x);
  guideLineY.setAttribute("y2", graphPosition.y);

  updateParticleCount(moles);

  if (prefersReducedMotion) {
    renderParticlePositions();
  }
}

function getScore() {
  return selectedAnswers.reduce((total, selectedIndex, questionIndex) => {
    return total + (selectedIndex === quizQuestions[questionIndex].correctIndex ? 1 : 0);
  }, 0);
}

function getAnsweredCount() {
  return selectedAnswers.filter((answer) => answer !== null).length;
}

function isCurrentQuestionAnswered() {
  return selectedAnswers[currentQuestionIndex] !== null;
}

function allQuestionsAnswered() {
  return getAnsweredCount() === quizQuestions.length;
}

function getAnswerLabel(answerIndex) {
  return `${String.fromCharCode(65 + answerIndex)}.`;
}

function renderQuiz() {
  quizTrack.innerHTML = quizQuestions
    .map((item, questionIndex) => {
      const selectedIndex = selectedAnswers[questionIndex];
      const answered = selectedIndex !== null;
      const isCorrect = selectedIndex === item.correctIndex;
      const feedbackLead = isCorrect ? "Correct." : "Not quite.";

      const answers = item.answers
        .map((answer, answerIndex) => {
          let stateClass = "";

          if (answered && answerIndex === item.correctIndex) {
            stateClass = "correct";
          } else if (answered && answerIndex === selectedIndex) {
            stateClass = "incorrect";
          }

          return `
            <button
              class="answer-button ${stateClass}"
              type="button"
              data-question="${questionIndex}"
              data-answer="${answerIndex}"
              aria-pressed="${selectedIndex === answerIndex}"
            >
              <span>${getAnswerLabel(answerIndex)}</span> ${answer}
            </button>
          `;
        })
        .join("");

      return `
        <article class="question-card" aria-label="Question ${questionIndex + 1} of ${quizQuestions.length}">
          <div class="question-kicker">Question ${questionIndex + 1} of ${quizQuestions.length}</div>
          <h3>${item.question}</h3>
          <div class="answers">${answers}</div>
          <p class="feedback ${answered ? "visible" : ""}">
            <strong>${feedbackLead}</strong> ${item.explanation}
          </p>
        </article>
      `;
    })
    .join("");

  updateQuizView();
}

function updateQuizView() {
  const answeredCount = getAnsweredCount();
  const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  quizTrack.style.transform = `translateX(-${currentQuestionIndex * 100}%)`;
  quizProgress.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  scoreText.textContent = `${answeredCount} answered`;
  quizProgressBar.style.width = `${progressPercent}%`;
  prevQuestion.disabled = currentQuestionIndex === 0 || showingResults;
  nextQuestion.disabled = !isCurrentQuestionAnswered() || showingResults;
  nextQuestion.textContent = currentQuestionIndex === quizQuestions.length - 1 ? "Results" : "Next";
}

function renderResults() {
  const score = getScore();
  const percentage = Math.round((score / quizQuestions.length) * 100);

  finalScore.textContent = `Final Score: ${score} / ${quizQuestions.length}`;
  finalPercent.textContent = `${percentage}% correct`;

  resultsList.innerHTML = quizQuestions
    .map((item, questionIndex) => {
      const selectedIndex = selectedAnswers[questionIndex];
      const isCorrect = selectedIndex === item.correctIndex;
      const selectedAnswer = item.answers[selectedIndex];
      const correctAnswer = item.answers[item.correctIndex];

      return `
        <article class="result-item ${isCorrect ? "correct-result" : "incorrect-result"}">
          <div class="result-heading">
            <strong>Question ${questionIndex + 1}</strong>
            <span>${isCorrect ? "Correct" : "Incorrect"}</span>
          </div>
          <p>${item.question}</p>
          <dl>
            <div>
              <dt>Your answer</dt>
              <dd>${getAnswerLabel(selectedIndex)} ${selectedAnswer}</dd>
            </div>
            <div>
              <dt>Correct answer</dt>
              <dd>${getAnswerLabel(item.correctIndex)} ${correctAnswer}</dd>
            </div>
          </dl>
          <p class="result-explanation">${item.explanation}</p>
        </article>
      `;
    })
    .join("");
}

function showResults() {
  if (!allQuestionsAnswered()) return;

  showingResults = true;
  document.querySelector(".quiz-shell").hidden = true;
  resultsScreen.hidden = false;
  renderResults();
}

function resetQuizState() {
  currentQuestionIndex = 0;
  selectedAnswers = Array(quizQuestions.length).fill(null);
  showingResults = false;
  document.querySelector(".quiz-shell").hidden = false;
  resultsScreen.hidden = true;
  renderQuiz();
}

slider.addEventListener("input", updateSimulation);

quizTrack.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-button");

  if (!button) return;

  const questionIndex = Number(button.dataset.question);
  const answerIndex = Number(button.dataset.answer);
  selectedAnswers[questionIndex] = answerIndex;
  renderQuiz();
});

prevQuestion.addEventListener("click", () => {
  if (currentQuestionIndex === 0) return;

  currentQuestionIndex -= 1;
  updateQuizView();
});

nextQuestion.addEventListener("click", () => {
  if (!isCurrentQuestionAnswered()) return;

  if (currentQuestionIndex === quizQuestions.length - 1) {
    showResults();
    return;
  }

  currentQuestionIndex += 1;
  updateQuizView();
});

resetQuiz.addEventListener("click", resetQuizState);
resetResults.addEventListener("click", resetQuizState);

reducedMotionQuery.addEventListener("change", (event) => {
  prefersReducedMotion = event.matches;

  if (prefersReducedMotion) {
    stopGasParticleAnimation();
    renderParticlePositions();
  } else {
    startGasParticleAnimation();
  }
});

drawGraph();
setupFlaskDrag();
updateSimulation();
renderQuiz();
setupParticleVisibility();
