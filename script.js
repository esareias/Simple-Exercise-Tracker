const defaultData = {
  "Tuesday": [
    { name: "Dumbbell Floor Press", weight: 35, reps: "12-15", time: 45, desc: "Lie on floor, knees bent, feet flat. Hold DBs at chest. Press up until arms are straight. Lower slowly until elbows tap the floor. Don't let elbows flare out wide; keep them tucked 45-degrees." },
    { name: "Standing DB Overhead Press", weight: 20, reps: "10-12", time: 40, desc: "Stand tall, core tight. DBs at shoulder height, palms facing forward or neutral (facing ears). Press straight up. Don't arch your lower back. If back hurts, sit down." },
    { name: "Lateral Raises", weight: 10, reps: "15", time: 45, desc: "Stand tall. DBs at sides. Lift arms out to the side until they reach shoulder height. Pour the pitcher at the top (pinky slightly up). Control the drop. Do not swing." },
    { name: "Overhead Tricep Extension", weight: 30, reps: "12-15", time: 45, desc: "Hold one heavy DB with both hands straight over your head. Bend elbows to lower weight behind your head. Keep elbows pointing forward, not flaring out. Extend back up." },
    { name: "Pushups", weight: 0, reps: "AMRAP", time: 60, isAMRAP: true, desc: "Hands shoulder-width. Body in straight line. Lower chest to floor, press back up. AMRAP = As Many Reps As Possible. If form breaks, drop to knees and keep going." }
  ],
  "Wednesday": [
    { name: "Bodyweight Box Squats", weight: 0, reps: "15-20", time: 60, desc: "Stand in front of a chair/couch. Sit back (hips first) until butt barely taps the seat. Stand back up immediately. Keep chest up. Do not actually sit and relax." },
    { name: "Static Lunges", weight: 10, reps: "10/leg", time: 30, desc: "Split stance (one foot forward, one back). Drop back knee straight down toward floor. Front knee stays over ankle. Push through front heel to stand. Switch legs after 10." },
    { name: "Glute Bridges", weight: 0, reps: "15", time: 45, desc: "Lie on back, knees bent, feet flat. Drive hips to ceiling. Squeeze glutes hard at the top for 1 second. Lower slowly. Do not arch lower back; drive from the hips." },
    { name: "Lying Dumbbell Hamstring Curls", weight: 10, reps: "15", time: 50, desc: "Lie on your stomach on a mat. Place a light dumbbell between your feet, gripping the handle with your arches. Curl your heels toward your butt, squeezing your hamstrings hard at the top. Lower slowly to the floor. If the dumbbell feels unstable, do 'Slider Curls' on your back: socks or plates under your feet, hips up, slide feet in/out." },
    { name: "Dead Bug", weight: 0, reps: "20", time: 60, desc: "Lie on back, arms up, legs in tabletop (90 degrees). Lower opposite arm and opposite leg toward floor slowly. Keep lower back GLUED to the floor. Return to center. Switch sides." }
  ],
  "Thursday": [
    { name: "Exercise Bike", weight: 0, reps: "N/A", time: 2700, desc: "45 Minutes. Zone 2/3. You should be sweating, but able to speak in short sentences. Keep a steady pace throughout." }
  ],
  "Friday": [
    { name: "Dumbbell Rows", weight: 35, reps: "12/arm", time: 40, desc: "Hand on chair/bench for support. Flat back. Pull DB to your hip pocket (not your armpit). Squeeze the lat muscle. Lower all the way down for a stretch." },
    { name: "Standing DB Curls", weight: 20, reps: "12", time: 40, desc: "Palms facing forward. Elbows glued to ribs. Curl up, squeeze bicep, lower slowly. No swinging the body!" },
    { name: "Reverse Flys", weight: 10, reps: "15", time: 45, desc: "Bend over at hips, flat back (chest parallel to floor). Slight bend in elbows. Open arms wide like wings. Squeeze shoulder blades together." },
    { name: "Hammer Curls", weight: 20, reps: "12", time: 40, desc: "Same as regular curls, but palms face each other (neutral grip). Hits the forearm and thickens the arm." },
    { name: "Band Pull-Aparts", weight: 0, reps: "20", time: 50, desc: "Stand tall, hold band at chest height with both hands shoulder-width apart. Keep elbows straight (not locked). Pull hands apart until the band touches your chest, squeezing your shoulder blades together. Control the movement on the way back in." }
  ],
  "Saturday": [
    { name: "Dumbbell Thrusters", weight: 15, reps: "10", time: 45, desc: "DBs at shoulders. Squat down. Explode up and press DBs overhead in one motion. Use your legs to launch the weight." },
    { name: "Renegade Rows", weight: 15, reps: "10", time: 50, desc: "Pushup position holding DBs. Feet wide for balance. Row one DB to hip, place it down. Row the other. Keep hips square to floor (don't twist)." },
    { name: "Step-Ups", weight: 0, reps: "10/leg", time: 45, desc: "Use a sturdy chair or stair. Step up with one foot, bring other foot to meet it. Step down. Alternate or do all 10 on one side then switch." },
    { name: "Russian Twists", weight: 10, reps: "20", time: 45, desc: "Sit on floor, lean back 45 degrees. Hold one DB with both hands. Twist torso touch weight to floor on right, then left. Feet off ground makes it harder." },
    { name: "Bicycle Crunches", weight: 0, reps: "30 sec", time: 30, desc: "Hands behind head. Opposite elbow to opposite knee. Extend other leg straight. Move fast but controlled." }
  ]
};

const backPainSubs = {
  "Wednesday": [
    { name: "Chair Squats (Safe)", weight: 0, reps: "15", time: 60, desc: "Sit and stand from a chair slowly. Keep chest up. Controlled movement protects your back. Don't drop into the chair." },
    { name: "Reverse Lunges (Safe)", weight: 0, reps: "10/leg", time: 30, desc: "Step back instead of forward. Drop back knee down gently. Front knee stays over ankle. Much gentler on spine than forward lunges." },
    { name: "Glute Bridges", weight: 0, reps: "15", time: 45, desc: "Lie on back, knees bent, feet flat. Drive hips to ceiling. Squeeze glutes hard at the top for 1 second. Lower slowly. Do not arch lower back; drive from the hips." },
    { name: "Clamshells", weight: 0, reps: "20/side", time: 40, desc: "Lie on side, knees bent at 90 degrees, feet together. Open top knee like a clamshell. Keep hips stacked. Strengthens hip stabilizers without loading spine." },
    { name: "Dead Bug", weight: 0, reps: "20", time: 60, desc: "Lie on back, arms up, legs in tabletop (90 degrees). Lower opposite arm and opposite leg toward floor slowly. Keep lower back GLUED to the floor. Return to center. Switch sides." }
  ]
};

const AVAILABLE_WEIGHTS = [0, 5, 10, 15, 20, 25, 30, 35];

let round = 1, rounds = 3, appData = {};
let workoutHistory = [];
let workoutTimer = 0;
let timerInterval = null;
let timerRunning = false;
let currentWorkoutStart = null;
let transitionTimer = null;
let transitionActive = false;

const $exs = document.getElementById("exercises"),
      $sel = document.getElementById("day-select"),
      $next = document.getElementById("next-round"),
      $reset = document.getElementById("reset-btn"),
      $backpain = document.getElementById("backpain-toggle"),
      $roundInfo = document.getElementById("round-info"),
      $startBtn = document.getElementById("start-btn"),
      $pauseBtn = document.getElementById("pause-btn"),
      $finishBtn = document.getElementById("finish-btn"),
      $timerDisplay = document.getElementById("timer-display"),
      $streakValue = document.getElementById("streak-value"),
      $volumeValue = document.getElementById("volume-value"),
      $workoutsValue = document.getElementById("workouts-value"),
      $progressFill = document.getElementById("progress-fill"),
      $progressText = document.getElementById("progress-text");
const timerAudio = document.getElementById("timerAudio");

function save() {
  window.localStorage.setItem("workoutState", JSON.stringify({appData, round, rounds, workoutHistory, workoutTimer}));
}

function load() {
  const old = window.localStorage.getItem("workoutState");
  if (old) {
    let state = JSON.parse(old);
    appData = state.appData || {};
    round = state.round || 1;
    rounds = state.rounds || 3;
    workoutHistory = state.workoutHistory || [];
    workoutTimer = state.workoutTimer || 0;
  } else {
    appData = {}; round = 1; rounds = 3; workoutHistory = []; workoutTimer = 0;
  }
  updateStats();
}

function fillOptions() {
  let days = Object.keys(defaultData);
  $sel.innerHTML = days.map(d=>`<option>${d}</option>`).join('');
}

function showBackPainToggle(day) {
  document.getElementById("backpain-wrap").style.display = (day === "Wednesday") ? "" : "none";
  if (day !== "Wednesday") $backpain.checked = false;
}

function parseReps(repsStr) {
  const match = repsStr.match(/\d+/);
  return match ? parseInt(match[0]) : 10;
}

function getNextWeight(current, direction) {
  const currentIndex = AVAILABLE_WEIGHTS.indexOf(current);
  if (currentIndex === -1) {
    const closest = AVAILABLE_WEIGHTS.reduce((prev, curr) => 
      Math.abs(curr - current) < Math.abs(prev - current) ? curr : prev
    );
    return closest;
  }

  if (direction === "increase") {
    return currentIndex < AVAILABLE_WEIGHTS.length - 1 
      ? AVAILABLE_WEIGHTS[currentIndex + 1] 
      : current;
  } else {
    return currentIndex > 0 
      ? AVAILABLE_WEIGHTS[currentIndex - 1] 
      : current;
  }
}

function showTransitionTimer(seconds, message) {
  transitionActive = true;

  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "transition-overlay";
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.92);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const messageEl = document.createElement("div");
  messageEl.style.cssText = `
    font-size: 1.8em;
    font-weight: 700;
    color: #30ffe1;
    margin-bottom: 20px;
    text-align: center;
    padding: 0 20px;
  `;
  messageEl.textContent = message;

  const timerEl = document.createElement("div");
  timerEl.id = "transition-timer";
  timerEl.style.cssText = `
    font-size: 6em;
    font-weight: 700;
    color: #fff;
    text-align: center;
  `;
  timerEl.textContent = seconds;

  const skipBtn = document.createElement("button");
  skipBtn.textContent = "Skip Rest";
  skipBtn.style.cssText = `
    margin-top: 30px;
    background: linear-gradient(90deg,#30a7ff 30%,#35f6e4 100%);
    color: #181a1b;
    border: none;
    border-radius: 12px;
    padding: 12px 28px;
    font-size: 1.2em;
    font-weight: 600;
    cursor: pointer;
  `;
  skipBtn.onclick = () => {
    clearInterval(transitionTimer);
    document.body.removeChild(overlay);
    transitionActive = false;
  };

  overlay.appendChild(messageEl);
  overlay.appendChild(timerEl);
  overlay.appendChild(skipBtn);
  document.body.appendChild(overlay);

  let timeLeft = seconds;
  transitionTimer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 3 && timeLeft > 0) {
      timerAudio.play();
    }

    if (timeLeft <= 0) {
      clearInterval(transitionTimer);
      timerAudio.play();
      document.body.removeChild(overlay);
      transitionActive = false;
    }
  }, 1000);
}

function fillExercises() {
  let day = $sel.value;
  showBackPainToggle(day);
  let bp = $backpain.checked && day === "Wednesday";
  const exList = bp ? backPainSubs[day] : defaultData[day];
  $exs.innerHTML = "";
  $roundInfo.textContent = `Round ${round} of ${rounds}`;

  exList.forEach((ex, i) => {
    const savedEx = appData[day]?.[round]?.[i];
    const checked = savedEx?.checked || false;
    const currentWeight = savedEx?.weight !== undefined ? savedEx.weight : ex.weight;
    const amrapReps = savedEx?.amrapReps || "";

    const isPR = checkForPR(day, ex.name, currentWeight);

    let prevRoundsHTML = '';
    if (ex.isAMRAP && round > 1) {
      let prevRounds = [];
      for (let r = 1; r < round; r++) {
        const prevData = appData[day]?.[r]?.[i];
        if (prevData?.amrapReps) {
          prevRounds.push(`R${r}: ${prevData.amrapReps}`);
        }
      }
      if (prevRounds.length > 0) {
        prevRoundsHTML = `<div style="font-size:0.9em;color:#b8c7d0;margin-top:4px;">${prevRounds.join(' | ')}</div>`;
      }
    }

    let card = document.createElement("div");
    card.className = "exercise-card";
    if (isPR) card.classList.add("pr-highlight");

    let weightPickerHTML = '';
    if (ex.weight > 0) {
      weightPickerHTML = `
        <div class="weight-picker">
          <button class="weight-btn" data-action="decrease" data-index="${i}">−</button>
          <div class="weight-display" id="weight-${i}">${currentWeight} lbs</div>
          <button class="weight-btn" data-action="increase" data-index="${i}">+</button>
        </div>
      `;
    }

    let amrapHTML = '';
    if (ex.isAMRAP) {
      amrapHTML = `
        <div class="amrap-tracker">
          <label style="color:#b8c7d0;font-size:0.95em;">Reps completed:</label>
          <input type="number" class="amrap-input" id="amrap-${i}" value="${amrapReps}" placeholder="0" min="0">
        </div>
        ${prevRoundsHTML}
      `;
    }

    const isLastExercise = i === exList.length - 1;

    card.innerHTML = `
      <div class="exercise-main">
        <input type="checkbox" class="checkbox" id="ex${i}" ${checked ? "checked" : ""}>
        <span class="name">${ex.name}</span>
        ${isPR ? '<span class="pr-badge">PR! 🏆</span>' : ''}
        <span class="tag">${ex.reps}</span>
        <button class="timer-btn" data-secs="${ex.time}">⏰ ${ex.time}s</button>
      </div>
      ${weightPickerHTML}
      ${amrapHTML}
      <div class="desc-bar">
        <button class="desc-toggle" data-index="${i}">▶ Show Instructions</button>
        <div class="desc" id="desc${i}" style="display: none;">${ex.desc}</div>
      </div>
    `;
    $exs.appendChild(card);

    document.getElementById(`ex${i}`).addEventListener("change", function() {
      if (!appData[day]) appData[day] = {};
      if (!appData[day][round]) appData[day][round] = {};

      const weightDisplay = document.getElementById(`weight-${i}`);
      const displayedWeight = weightDisplay ? parseInt(weightDisplay.textContent) : currentWeight;

      appData[day][round][i] = {
        checked: this.checked,
        weight: displayedWeight,
        reps: parseReps(ex.reps),
        amrapReps: ex.isAMRAP ? (document.getElementById(`amrap-${i}`)?.value || "") : undefined
      };
      save();
      updateProgress();
      updateVolume();

      // Start 15-second transition timer after checking (except last exercise)
      if (this.checked && !isLastExercise) {
        setTimeout(() => {
          showTransitionTimer(15, "Next Exercise Starting In...");
        }, 500);
      }
    });

    if (ex.weight > 0) {
      card.querySelectorAll(".weight-btn").forEach(btn => {
        btn.onclick = function() {
          const action = this.dataset.action;
          const idx = this.dataset.index;

          const displayEl = document.getElementById(`weight-${idx}`);
          const displayedWeight = parseInt(displayEl.textContent);

          let newWeight = getNextWeight(displayedWeight, action);

          displayEl.textContent = newWeight + " lbs";

          if (!appData[day]) appData[day] = {};
          if (!appData[day][round]) appData[day][round] = {};
          if (!appData[day][round][idx]) {
            appData[day][round][idx] = { checked: false, weight: newWeight, reps: parseReps(ex.reps) };
          } else {
            appData[day][round][idx].weight = newWeight;
          }

          save();
          updateVolume();
        };
      });
    }

    if (ex.isAMRAP) {
      const amrapInput = document.getElementById(`amrap-${i}`);
      amrapInput.addEventListener("input", function() {
        if (!appData[day]) appData[day] = {};
        if (!appData[day][round]) appData[day][round] = {};
        if (!appData[day][round][i]) appData[day][round][i] = { checked: false, weight: 0, reps: 0 };
        appData[day][round][i].amrapReps = this.value;
        save();
      });
    }

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

  updateProgress();
  updateVolume();
}

function checkForPR(day, exerciseName, currentWeight) {
  if (currentWeight === 0) return false;

  for (let workout of workoutHistory) {
    if (workout.day === day) {
      for (let ex of workout.exercises) {
        if (ex.name === exerciseName && ex.weight > 0) {
          return currentWeight > ex.weight;
        }
      }
    }
  }
  return false;
}

function updateProgress() {
  const day = $sel.value;
  const bp = $backpain.checked && day === "Wednesday";
  const exList = bp ? backPainSubs[day] : defaultData[day];

  let completed = 0;
  const total = exList.length;

  if (appData[day]?.[round]) {
    completed = Object.values(appData[day][round]).filter(ex => ex.checked).length;
  }

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  $progressFill.style.width = percentage + "%";
  $progressText.textContent = `${percentage}% Complete (${completed}/${total})`;
}

function updateVolume() {
  const day = $sel.value;
  let totalVolume = 0;

  if (appData[day]) {
    for (let r = 1; r <= rounds; r++) {
      if (appData[day][r]) {
        Object.values(appData[day][r]).forEach(ex => {
          if (ex.checked && ex.weight > 0) {
            totalVolume += ex.weight * ex.reps;
          }
        });
      }
    }
  }

  $volumeValue.textContent = totalVolume.toLocaleString();
}

function updateStats() {
  const streak = calculateStreak();
  $streakValue.textContent = streak > 0 ? streak + "🔥" : "0";

  const weekWorkouts = getWorkoutsThisWeek();
  $workoutsValue.textContent = weekWorkouts;
}

function calculateStreak() {
  if (workoutHistory.length === 0) return 0;

  const today = new Date();
  today.setHours(0,0,0,0);

  const sortedDates = workoutHistory
    .map(w => new Date(w.date))
    .sort((a,b) => b - a);

  let streak = 0;
  let checkDate = new Date(today);

  for (let workoutDate of sortedDates) {
    workoutDate.setHours(0,0,0,0);
    const dayDiff = Math.floor((checkDate - workoutDate) / (1000 * 60 * 60 * 24));

    if (dayDiff === 0 || dayDiff === 1) {
      streak++;
      checkDate = new Date(workoutDate);
    } else {
      break;
    }
  }

  return streak;
}

function getWorkoutsThisWeek() {
  const today = new Date();
  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  return workoutHistory.filter(w => new Date(w.date) >= weekAgo).length;
}

function nextRound() {
  const oldRound = round;
  round = (round % rounds) + 1;

  // Show 90-second rest timer when starting round 2 or 3
  if (oldRound < rounds) {
    showTransitionTimer(90, `Round ${round} Starting In...`);
  }

  fillExercises();
  save();
}

function reset() {
  if (confirm("Reset all progress for this workout? (History will be preserved)")) {
    appData = {};
    round = 1;
    workoutTimer = 0;
    stopTimer();
    save();
    fillExercises();
    updateVolume();
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function startWorkoutTimer() {
  if (timerRunning) return;
  timerRunning = true;
  currentWorkoutStart = new Date();

  $startBtn.style.display = "none";
  $pauseBtn.style.display = "inline-block";
  $finishBtn.style.display = "inline-block";

  timerInterval = setInterval(() => {
    workoutTimer++;
    $timerDisplay.textContent = formatTime(workoutTimer);
    save();
  }, 1000);
}

function pauseTimer() {
  if (!timerRunning) return;
  timerRunning = false;
  clearInterval(timerInterval);

  $pauseBtn.textContent = "▶ Resume";
  $pauseBtn.onclick = resumeTimer;
}

function resumeTimer() {
  if (timerRunning) return;
  timerRunning = true;

  $pauseBtn.textContent = "⏸ Pause";
  $pauseBtn.onclick = pauseTimer;

  timerInterval = setInterval(() => {
    workoutTimer++;
    $timerDisplay.textContent = formatTime(workoutTimer);
    save();
  }, 1000);
}

function stopTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
  workoutTimer = 0;
  $timerDisplay.textContent = "00:00";

  $startBtn.style.display = "inline-block";
  $pauseBtn.style.display = "none";
  $finishBtn.style.display = "none";
  $pauseBtn.textContent = "⏸ Pause";
  $pauseBtn.onclick = pauseTimer;
}

function finishWorkout() {
  if (!timerRunning && workoutTimer === 0) {
    alert("Start the workout first!");
    return;
  }

  stopTimer();

  const day = $sel.value;
  const bp = $backpain.checked && day === "Wednesday";
  const exList = bp ? backPainSubs[day] : defaultData[day];

  let exercises = [];
  let totalVolume = 0;

  exList.forEach((ex, i) => {
    const savedEx = appData[day]?.[round]?.[i];
    if (savedEx?.checked) {
      exercises.push({
        name: ex.name,
        weight: savedEx.weight,
        reps: savedEx.reps
      });
      totalVolume += savedEx.weight * savedEx.reps * rounds;
    }
  });

  workoutHistory.push({
    date: new Date().toISOString(),
    day: day,
    duration: workoutTimer,
    exercises: exercises,
    totalVolume: totalVolume
  });

  save();
  updateStats();

  showCelebration();

  setTimeout(() => {
    alert(`Workout Complete! 🎉\n\nTime: ${formatTime(workoutTimer)}\nVolume: ${totalVolume.toLocaleString()} lbs\nExercises: ${exercises.length}`);
  }, 500);
}

function showCelebration() {
  const celebration = document.createElement("div");
  celebration.className = "celebration";
  celebration.textContent = "🎉 💪 🏆";
  document.body.appendChild(celebration);

  setTimeout(() => {
    celebration.remove();
  }, 1000);
}

function startTimer(name, btn, secs) {
  btn.disabled = true;
  btn.classList.add("active-timer");
  let left = secs;
  btn.textContent = `⏳ ${left}s`;
  let interval = setInterval(()=>{
    left--;
    btn.textContent = `⏳ ${left}s`;
    if (left <= 0) {
      clearInterval(interval);
      btn.textContent = "NEXT!";
      timerAudio.play();
      setTimeout(()=>{
        btn.textContent = `⏰ ${secs}s`;
        btn.disabled = false;
        btn.classList.remove("active-timer");
      }, 1400);
    }
  }, 1000);
}

$sel.onchange = fillExercises;
$backpain.onchange = fillExercises;
$next.onclick = nextRound;
$reset.onclick = reset;
$startBtn.onclick = startWorkoutTimer;
$pauseBtn.onclick = pauseTimer;
$finishBtn.onclick = finishWorkout;

window.onload = ()=>{
  fillOptions();
  load();
  fillExercises();
  $timerDisplay.textContent = formatTime(workoutTimer);
}
