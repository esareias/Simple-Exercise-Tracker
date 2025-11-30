const defaultData = {
  "Tuesday": [
    { name: "Dumbbell Floor Press", weight: "35 lbs", reps: "12-15", time: 45, desc: "Lie on floor, knees bent, feet flat. Hold DBs at chest. Press up until arms are straight. Lower slowly until elbows tap the floor. Don't let elbows flare out wide; keep them tucked 45-degrees." },
    { name: "Standing DB Overhead Press", weight: "20-25 lbs", reps: "10-12", time: 40, desc: "Stand tall, core tight. DBs at shoulder height, palms facing forward or neutral (facing ears). Press straight up. Don't arch your lower back. If back hurts, sit down." },
    { name: "Lateral Raises", weight: "10-15 lbs", reps: "15", time: 45, desc: "Stand tall. DBs at sides. Lift arms out to the side until they reach shoulder height. Pour the pitcher at the top (pinky slightly up). Control the drop. Do not swing." },
    { name: "Overhead Tricep Extension", weight: "25-35 lbs", reps: "12-15", time: 45, desc: "Hold one heavy DB with both hands straight over your head. Bend elbows to lower weight behind your head. Keep elbows pointing forward, not flaring out. Extend back up." },
    { name: "Pushups", weight: "Bodyweight", reps: "AMRAP*", time: 60, desc: "Hands shoulder-width. Body in straight line. Lower chest to floor, press back up. AMRAP = As Many Reps As Possible. If form breaks, drop to knees and keep going." }
  ],
  "Wednesday": [
    { name: "Bodyweight Box Squats", weight: "Bodyweight", reps: "15-20", time: 60, desc: "Stand in front of a chair/couch. Sit back (hips first) until butt barely taps the seat. Stand back up immediately. Keep chest up. Do not actually sit and relax." },
    { name: "Static Lunges", weight: "Bodyweight (or 10s)", reps: "10/leg", time: 30, desc: "Split stance (one foot forward, one back). Drop back knee straight down toward floor. Front knee stays over ankle. Push through front heel to stand. Switch legs after 10." },
    { name: "Glute Bridges", weight: "Bodyweight", reps: "15", time: 45, desc: "Lie on back, knees bent, feet flat. Drive hips to ceiling. Squeeze glutes hard at the top for 1 second. Lower slowly. Do not arch lower back; drive from the hips." },
    { name: "Band Pull-Throughs", weight: "Med/Heavy Band", reps: "15-20", time: 50, desc: "Anchor band low. Straddle band facing away from anchor. Hold band between legs. Walk forward to get tension. Hinge hips back (bow down), knees soft. Snap hips forward and squeeze glutes to stand." },
    { name: "Dead Bug", weight: "Bodyweight", reps: "20", time: 60, desc: "Lie on back, arms up, legs in tabletop (90 degrees). Lower opposite arm and opposite leg toward floor slowly. Keep lower back GLUED to the floor. Return to center. Switch sides." }
  ],
  "Thursday": [
    { name: "Exercise Bike", weight: "Bodyweight", reps: "N/A", time: 2700, desc: "45 Minutes. Zone 2/3. You should be sweating, but able to speak in short sentences. Keep a steady pace throughout." }
  ],
  "Friday": [
    { name: "Dumbbell Rows", weight: "35 lbs", reps: "12/arm", time: 40, desc: "Hand on chair/bench for support. Flat back. Pull DB to your hip pocket (not your armpit). Squeeze the lat muscle. Lower all the way down for a stretch." },
    { name: "Standing DB Curls", weight: "20-25 lbs", reps: "12", time: 40, desc: "Palms facing forward. Elbows glued to ribs. Curl up, squeeze bicep, lower slowly. No swinging the body!" },
    { name: "Reverse Flys", weight: "5-10 lbs", reps: "15", time: 45, desc: "Bend over at hips, flat back (chest parallel to floor). Slight bend in elbows. Open arms wide like wings. Squeeze shoulder blades together." },
    { name: "Hammer Curls", weight: "20-25 lbs", reps: "12", time: 40, desc: "Same as regular curls, but palms face each other (neutral grip). Hits the forearm and thickens the arm." },
    { name: "Band Face Pulls", weight: "Light/Med Band", reps: "20", time: 50, desc: "Anchor band high. Pull handles towards your forehead. Pull hands apart and elbows back. Squeeze upper back. Great for posture." }
  ],
  "Saturday": [
    { name: "Dumbbell Thrusters", weight: "15-20 lbs", reps: "10", time: 45, desc: "DBs at shoulders. Squat down. Explode up and press DBs overhead in one motion. Use your legs to launch the weight." },
    { name: "Renegade Rows", weight: "15-20 lbs", reps: "10", time: 50, desc: "Pushup position holding DBs. Feet wide for balance. Row one DB to hip, place it down. Row the other. Keep hips square to floor (don't twist)." },
    { name: "Step-Ups", weight: "Bodyweight", reps: "10/leg", time: 45, desc: "Use a sturdy chair or stair. Step up with one foot, bring other foot to meet it. Step down. Alternate or do all 10 on one side then switch." },
    { name: "Russian Twists", weight: "10-15 lbs", reps: "20", time: 45, desc: "Sit on floor, lean back 45 degrees. Hold one DB with both hands. Twist torso touch weight to floor on right, then left. Feet off ground makes it harder." },
    { name: "Bicycle Crunches", weight: "Bodyweight", reps: "30 sec", time: 30, desc: "Hands behind head. Opposite elbow to opposite knee. Extend other leg straight. Move fast but controlled." }
  ]
};

// Simple back pain logic
const backPainSubs = {
  "Wednesday": [
    { name: "Chair Squats (Safe)", weight: "Bodyweight", reps: "15", time: 60, desc: "Sit and stand from a chair slowly. Keep chest up. Controlled movement protects your back. Don't drop into the chair." },
    { name: "Reverse Lunges (Safe)", weight: "Bodyweight", reps: "10/leg", time: 30, desc: "Step back instead of forward. Drop back knee down gently. Front knee stays over ankle. Much gentler on spine than forward lunges." },
    { name: "Glute Bridges", weight: "Bodyweight", reps: "15", time: 45, desc: "Lie on back, knees bent, feet flat. Drive hips to ceiling. Squeeze glutes hard at the top for 1 second. Lower slowly. Do not arch lower back; drive from the hips." },
    { name: "Clamshells", weight: "Bodyweight", reps: "20/side", time: 40, desc: "Lie on side, knees bent at 90 degrees, feet together. Open top knee like a clamshell. Keep hips stacked. Strengthens hip stabilizers without loading spine." },
    { name: "Dead Bug", weight: "Bodyweight", reps: "20", time: 60, desc: "Lie on back, arms up, legs in tabletop (90 degrees). Lower opposite arm and opposite leg toward floor slowly. Keep lower back GLUED to the floor. Return to center. Switch sides." }
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
      <div style="flex: 1;">
        <div style="display: flex; align-items: center;">
          <span style="flex: 1;">${ex.name} (${ex.weight}, ${ex.reps})</span>
          <button class="timer-btn" data-secs="${ex.time}">&#x23F1; ${ex.time}s</button>
        </div>
        <div class="desc-container" style="margin-top: 5px;">
          <button class="desc-toggle" data-index="${i}">▶ Show Instructions</button>
          <div class="desc" id="desc${i}" style="display: none; margin-top: 5px;">${ex.desc}</div>
        </div>
      </div>
    `;
    $exs.appendChild(t);

    document.getElementById(`ex${i}`).addEventListener("change", function() {
      if (!appData[day]) appData[day] = {};
      if (!appData[day][round]) appData[day][round] = {};
      appData[day][round][i] = this.checked;
      save();
    });

    t.querySelector(".timer-btn").onclick = function() {
      startTimer(ex.name, this, ex.time);
    };

    t.querySelector(".desc-toggle").onclick = function() {
      const descEl = document.getElementById(`desc${i}`);
      const isHidden = descEl.style.display === "none";
      descEl.style.display = isHidden ? "block" : "none";
      this.textContent = isHidden ? "▼ Hide Instructions" : "▶ Show Instructions";
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
