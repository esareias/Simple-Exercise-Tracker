// Data stays the same as before
const defaultData = {
  // ... (keep your detailed exercises here exactly as before) ...
};
const backPainSubs = {
  // ... (keep any substitutions) ...
};

let round = 1, rounds = 3, appData = {};
const $exs = document.getElementById("exercises"),
      $sel = document.getElementById("day-select"),
      $next = document.getElementById("next-round"),
      $reset = document.getElementById("reset-btn"),
      $backpain = document.getElementById("backpain-toggle"),
      $roundInfo = document.getElementById("round-info");
const timerAudio = document.getElementById("timerAudio");

// Save/load as before
function save() { window.localStorage.setItem("workoutState", JSON.stringify({appData, round, rounds})); }
function load() {
  const old = window.localStorage.getItem("workoutState");
  if (old) {
    let state = JSON.parse(old);
    appData = state.appData || {};
    round = state.round || 1;
    rounds = state.rounds || 3;
  } else {
    appData = {}; round = 1; rounds = 3;
  }
}
function fillOptions() {
  let days = Object.keys(defaultData);
  $sel.innerHTML = days.map(d=>`<option>${d}</option>`).join('');
}
function fillExercises() {
  let day = $sel.value;
  let bp = $backpain.checked && backPainSubs[day];
  const exList = bp ? backPainSubs[day] : defaultData[day];
  $exs.innerHTML = "";
  $roundInfo.textContent = `Round ${round} of ${rounds}`;
  exList.forEach((ex, i) => {
    const checked = appData[day]?.[round]?.[i] || false;
    let card = document.createElement("div");
    card.className = "exercise-card";
    card.innerHTML = `
      <div class="exercise-main">
        <input type="checkbox" class="checkbox" id="ex${i}" ${checked ? "checked" : ""}>
        <span class="name">${ex.name}</span>
        <span class="tag">${ex.weight}, ${ex.reps}</span>
        <button class="timer-btn" data-secs="${ex.time}">⏰ ${ex.time}s</button>
      </div>
      <div class="desc-bar">
        <button class="desc-toggle" data-index="${i}">▶ Show Instructions</button>
        <div class="desc" id="desc${i}" style="display: none;">${ex.desc}</div>
      </div>
    `;
    $exs.appendChild(card);

    document.getElementById(`ex${i}`).addEventListener("change", function() {
      if (!appData[day]) appData[day] = {};
      if (!appData[day][round]) appData[day][round] = {};
      appData[day][round][i] = this.checked;
      save();
    });

    card.querySelector(".timer-btn").onclick = function() {
      startTimer(ex.name, this, ex.time);
    };

    card.querySelector(".desc-toggle").onclick = function() {
      const descEl = document.getElementById(`desc${i}`);
      const isHidden = descEl.style.display === "none";
      descEl.style.display = isHidden ? "block" : "none";
      this.textContent = isHidden ? "▼ Hide Instructions" : "▶ Show Instructions";
    };
  });
}
function nextRound() { round = (round % rounds) + 1; fillExercises(); save(); }
function reset() { appData = {}; round = 1; save(); fillExercises(); }
function startTimer(name, btn, secs) {
  btn.disabled = true; btn.classList.add("active-timer");
  let left = secs;
  btn.textContent = `⏳ ${left}s`;
  let interval = setInterval(()=>{
    left--; btn.textContent = `⏳ ${left}s`;
    if (left <= 0) {
      clearInterval(interval);
      btn.textContent = "NEXT!";
      timerAudio.play();
      setTimeout(()=>{
        btn.textContent = `⏰ ${secs}s`; btn.disabled = false; btn.classList.remove("active-timer");
      }, 1400);
    }
  }, 1000);
}
$sel.onchange = fillExercises;
$backpain.onchange = fillExercises;
$next.onclick = nextRound;
$reset.onclick = reset;
window.onload = ()=>{ fillOptions(); load(); fillExercises(); }
