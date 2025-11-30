const defaultData = {
  "Tuesday": [
    { name: "Dumbbell Floor Press", weight: "35 lbs", reps: "12-15", time: 45, desc: "Lie on floor, knees bent..." },
    { name: "Standing DB Overhead Press", weight: "20-25 lbs", reps: "10-12", time: 40, desc: "Stand tall, core tight..." },
    { name: "Lateral Raises", weight: "10-15 lbs", reps: "15", time: 45, desc: "Stand tall. DBs at sides..." },
    { name: "Overhead Tricep Extension", weight: "25-35 lbs", reps: "12-15", time: 45, desc: "Hold one heavy DB with both hands..." },
    { name: "Pushups", weight: "Bodyweight", reps: "AMRAP*", time: 60, desc: "Hands shoulder-width. Body straight..." }
  ],
  "Wednesday": [
    { name: "Bodyweight Box Squats", weight: "Bodyweight", reps: "15-20", time: 60, desc: "Stand in front of a chair/couch..." },
    { name: "Static Lunges", weight: "Bodyweight (or 10s)", reps: "10/leg", time: 30, desc: "Split stance..." },
    { name: "Glute Bridges", weight: "Bodyweight", reps: "15", time: 45, desc: "Lie on back, knees bent..." },
    { name: "Band Pull-Throughs", weight: "Med/Heavy Band", reps: "15-20", time: 50, desc: "Anchor band low. Straddle band..." },
    { name: "Dead Bug", weight: "Bodyweight", reps: "20", time: 60, desc: "Lie on back, arms up..." }
  ],
  "Thursday": [
    { name: "Exercise Bike", weight: "Bodyweight", reps: "N/A", time: 2700, desc: "45 Minutes. Zone 2/3. Stay moving!" }
  ],
  "Friday": [
    { name: "Dumbbell Rows", weight: "35 lbs", reps: "12/arm", time: 40, desc: "Hand on chair, flat back, pull DB..." },
    { name: "Standing DB Curls", weight: "20-25 lbs", reps: "12", time: 40, desc: "Palms forward. Elbows glued to ribs..." },
    { name: "Reverse Flys", weight: "5-10 lbs", reps: "15", time: 45, desc: "Bend at hips. Open arms wide..." },
    { name: "Hammer Curls", weight: "20-25 lbs", reps: "12", time: 40, desc: "Palms face each other (neutral grip)..." },
    { name: "Band Face Pulls", weight: "Light/Med Band", reps: "20", time: 50, desc: "Anchor band high. Pull handles..." }
  ],
  "Saturday": [
    { name: "Dumbbell Thrusters", weight: "15-20 lbs", reps: "10", time: 45, desc: "DBs at shoulders, squat, press..." },
    { name: "Renegade Rows", weight: "15-20 lbs", reps: "10", time: 50, desc: "Pushup position, row one DB at a time..." },
    { name: "Step-Ups", weight: "Bodyweight", reps: "10/leg", time: 45, desc: "Sturdy chair/stair..." },
    { name: "Russian Twists", weight: "10-15 lbs", reps: "20", time: 45, desc: "Sit on floor, lean back, twist torso..." },
    { name: "Bicycle Crunches", weight: "Bodyweight", reps: "30 sec", time: 30, desc: "Hands behind head, knees up..." }
  ]
};

// Simple back pain logic
const backPainSubs = {
  "Wednesday": [
    { name: "Chair Squats (Safe)", weight: "Bodyweight", reps: "15", time: 60, desc: "Sit and stand, slow, safe for back." },
    { name: "Reverse Lunges (Safe)", weight: "Bodyweight", reps: "10/leg", time: 30, desc: "Step back, gentle on spine." },
    { name: "Glute Bridges", weight: "Bodyweight", reps: "15", time: 45, desc: "Lie on back, gentle glute activation." },
    { name: "Clamshells", weight: "Bodyweight", reps: "20/side", time: 40, desc: "Lie on side, knees bent, open/close leg." },
    { name: "Dead Bug", weight: "Bodyweight", reps: "20", time: 60, desc: "Lie on back, arms up..." }
  ]
};

let round = 1, rounds = 3, appData = {};
const $exs = document.getElementById("exercises"),
      $sel = document.getElementById("day-select"),
      $next = document.getElementById("next-round"),
      $reset = document.getElementById("reset-btn"),
      $backpain = document.getElementById("backpain-toggle"),
      $roundInfo = document.getElementById("round-info");
const timerAudio = document.getElementById("timerAudio");

function save() {
  window.localStorage.setItem("workoutState", JSON.stringify({appData, round, rounds}));
}
function load() {
  const old = window.localStorage.getItem("workoutState");
  if (old) {
    let state = JSON.parse(old);
    appData = state.appData || {};
    round = state.round || 1;
    rounds = state.rounds || 3;
  } else {
    appData = {};
    round = 1; rounds = 3;
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
    let t = document.createElement("div");
    t.className = "exercise";
    t.innerHTML = `
      <input type="checkbox" class="checkbox" id="ex${i}" ${checked ? "checked" : ""}>
      <span>${ex.name} (${ex.weight}, ${ex.reps})</span>
      <button class="timer-btn" data-secs="${ex.time}">&#x23F1; ${ex.time}s</button>
    `;
    $exs.appendChild(t);
    let desc = document.createElement("div");
    desc.className = "desc";
    desc.innerText = ex.desc;
    $exs.appendChild(desc);
    document.getElementById(`ex${i}`).addEventListener("change", function() {
      if (!appData[day]) appData[day] = {};
      if (!appData[day][round]) appData[day][round] = {};
      appData[day][round][i] = this.checked;
      save();
    });
    t.querySelector(".timer-btn").onclick = function() {
      startTimer(ex.name, this, ex.time);
    };
  });
}
function nextRound() {
  round = (round % rounds) + 1;
  fillExercises();
  save();
}
function reset() {
  appData = {};
  round = 1;
  save();
  fillExercises();
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

window.onload = ()=>{
  fillOptions();
  load();
  fillExercises();
}
