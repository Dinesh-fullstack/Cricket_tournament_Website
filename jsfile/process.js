
// ---------- storage keys & helpers ----------
const TEAMS_KEY = "kycc_teams_v2";
const MATCHES_KEY = "kycc_matches_v2";

function loadTeams(){ return JSON.parse(localStorage.getItem(TEAMS_KEY) || "[]"); }
function saveTeams(t){ localStorage.setItem(TEAMS_KEY, JSON.stringify(t)); }
function loadMatches(){ return JSON.parse(localStorage.getItem(MATCHES_KEY) || "[]"); }
function saveMatches(m){ localStorage.setItem(MATCHES_KEY, JSON.stringify(m)); }
function uid(prefix='id'){ return prefix+'_'+Math.random().toString(36).slice(2,9); }
function escapeHtml(s){ return String(s).replace(/[&<>"]/g,c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])) }

// ---------- Common utilities ----------
function showAlert(msg){ alert(msg) }

// ---------- TEAM REGISTRATION PAGE ----------
if (document.querySelector('#teamForm')) {
  const teamForm = document.querySelector('#teamForm');
  const teamListEl = document.querySelector('#teamList');

  function renderTeamsList(){
    const teams = loadTeams();
    teamListEl.innerHTML = '';
    if (!teams.length) teamListEl.innerHTML = '<li class="card">No teams registered yet.</li>';
    teams.forEach((t, i) => {
      const li = document.createElement('li');
      li.className='card';
      li.innerHTML = `<div><strong>${i+1}. ${escapeHtml(t.team)}</strong><div style="color:var(--muted);font-size:13px">Captain: ${escapeHtml(t.captain)} • ${escapeHtml(t.phone||'')}</div></div>
      <div style="display:flex;gap:8px">
        <button class="btn-alt small" data-edit="${t.id}">Edit</button>
        <button class="btn small" data-delete="${t.id}">Delete</button>
      </div>`;
      teamListEl.appendChild(li);
    });
  }

  // initialize sample element handlers (edit/delete via event delegation)
  teamListEl.addEventListener('click', (e) => {
    const idEdit = e.target.getAttribute('data-edit');
    if (idEdit) {
      const teams = loadTeams();
      const t = teams.find(x => x.id === idEdit);
      if (!t) return showAlert('Team not found');
      // simple prompt-based edit
      const newName = prompt('Team name', t.team);
      if (!newName) return;
      t.team = newName;
      t.captain = prompt('Captain name', t.captain) || t.captain;
      saveTeams(teams);
      renderTeamsList();
      return;
    }
    const idDel = e.target.getAttribute('data-delete');
    if (idDel) {
      if (!confirm('Delete team?')) return;
      let teams = loadTeams();
      teams = teams.filter(x=>x.id !== idDel);
      saveTeams(teams);
      renderTeamsList();
      return;
    }
  });

  teamForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = teamForm.teamName.value.trim();
    const captain = teamForm.captainName.value.trim();
    const phone = teamForm.phone.value.trim();
    if (!name) return showAlert('Enter team name');
    const teams = loadTeams();
    const newTeam = { id: uid('t'), team: name, captain, phone };
    teams.push(newTeam);
    saveTeams(teams);
    teamForm.reset();
    renderTeamsList();
  });

  // on load
  renderTeamsList();
}

// ---------- FIXTURES PAGE (fixtures.html) ----------
if (document.querySelector('#generateRR') || document.querySelector('#generateKO')) {
  // Elements
  const rrBtn = document.querySelector('#generateRR');
  const koBtn = document.querySelector('#generateKO');
  const scheduleTableBody = document.querySelector('#scheduleTable tbody');
  const exportCSVBtn = document.querySelector('#exportCSV');
  const printBtn = document.querySelector('#printSchedule');
  const startDateInput = document.querySelector('#startDate');
  const firstSlotInput = document.querySelector('#firstSlot');
  const secondSlotInput = document.querySelector('#secondSlot');
  const intervalDaysInput = document.querySelector('#intervalDays');
  const groundsInput = document.querySelector('#grounds');
  const bracketContainer = document.querySelector('#bracketContainer');

  function initDefaults(){
    const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate()+1);
    startDateInput.value = startDateInput.value || tomorrow.toISOString().slice(0,10);
    if (!groundsInput.value) groundsInput.value = "Main Ground, Secondary Ground";
  }
  initDefaults();

  function parseGrounds(){ return (groundsInput.value||'').split(',').map(s=>s.trim()).filter(Boolean) || ['Main Ground']; }
  function getSlots(){ const s=[]; if(firstSlotInput.value) s.push(firstSlotInput.value); if(secondSlotInput.value) s.push(secondSlotInput.value); return s.length? s: ['17:00']; }

  function assignSlots(fixtures){
    const grounds = parseGrounds(); const slots = getSlots(); const intervalDays = Math.max(0, parseInt(intervalDaysInput.value||0));
    const startDate = new Date(startDateInput.value + 'T00:00:00');
    const assigned = [];
    let matchCount = 0;
    for (let i=0;i<fixtures.length;i++){
      const slotIndex = matchCount % slots.length;
      const cycles = Math.floor(matchCount / slots.length);
      const date = new Date(startDate);
      date.setDate(date.getDate() + cycles + (intervalDays * cycles));
      const [hh,mm] = slots[slotIndex].split(':').map(Number);
      date.setHours(hh,mm,0,0);
      assigned.push({
        id: uid('m'),
        index: i+1,
        dateISO: date.toISOString(),
        dateDisplay: date.toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'}),
        time: slots[slotIndex],
        teamA: fixtures[i].teamA,
        teamB: fixtures[i].teamB,
        ground: grounds[matchCount % grounds.length],
        result: null, // {winner: 'teamA'|'teamB'|'tie', scoreA, scoreB, oversA, oversB}
      });
      matchCount++;
    }
    return assigned;
  }

  function generateRoundRobin(){
    const teams = loadTeams().map(t=>t.team);
    if (teams.length < 2) return showAlert('Need minimum 2 teams');
    let list = [...teams];
    const odd = list.length %2 ===1;
    if (odd) list.push('BYE');
    const rounds = list.length -1;
    const half = list.length/2;
    const fixtures = [];
    for (let r=0;r<rounds;r++){
      for (let i=0;i<half;i++){
        const t1 = list[i], t2=list[list.length-1-i];
        if (t1!=='BYE' && t2!=='BYE') fixtures.push({teamA:t1, teamB:t2});
      }
      // rotate
      list = [list[0], ...list.slice(-1), ...list.slice(1,-1)];
    }
    const assigned = assignSlots(fixtures);
    saveMatches(assigned);
    showSchedule();
    bracketContainer.innerHTML='';
    showAlert('Round-robin generated');
  }

  function generateKnockout(){
    const teamsArr = loadTeams().map(t=>t.team);
    if (teamsArr.length < 2) return showAlert('Need minimum 2 teams');
    const nextPow2 = Math.pow(2, Math.ceil(Math.log2(teamsArr.length)));
    const byes = nextPow2 - teamsArr.length;
    const seeds = [...teamsArr];
    for (let i=0;i<byes;i++) seeds.push('BYE');
    const n = seeds.length;
    const fixtures = [];
    for (let i=0;i<n/2;i++){
      const a=seeds[i], b=seeds[n-1-i];
      if (a!=='BYE' && b!=='BYE') fixtures.push({teamA:a,teamB:b});
      else if (a!=='BYE' && b==='BYE') {
        // auto advance - represent as no match: but add placeholder (optional)
        fixtures.push({teamA:a,teamB:'BYE', autoAdvance:true});
      } else if (a==='BYE' && b!=='BYE') {
        fixtures.push({teamA:b,teamB:'BYE', autoAdvance:true});
      }
    }
    const assigned = assignSlots(fixtures.filter(f=>!f.autoAdvance));
    saveMatches(assigned);
    showSchedule();
    renderKnockoutBracket(seeds);
    showAlert('Knockout generated (first round)');
  }

  function showSchedule(){
    const schedule = loadMatches();
    scheduleTableBody.innerHTML = '';
    if (!schedule.length) {
      scheduleTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center">No matches scheduled.</td></tr>';
      return;
    }
    schedule.forEach(s=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${s.index}</td><td>${escapeHtml(s.dateDisplay)}</td><td>${escapeHtml(s.time)}</td>
      <td>${escapeHtml(s.teamA)}</td><td>${escapeHtml(s.teamB)}</td><td>${escapeHtml(s.ground)}</td>`;
      scheduleTableBody.appendChild(tr);
    });
  }

  function renderKnockoutBracket(seeds){
    bracketContainer.innerHTML='';
    const n = seeds.length;
    const rounds = Math.log2(n);
    let current = [];
    for (let i=0;i<n/2;i++) current.push([seeds[i], seeds[n-1-i]]);
    const wrapper = document.createElement('div'); wrapper.className='bracket';
    for (let r=0;r<rounds;r++){
      const rd = document.createElement('div'); rd.className='bracket-round';
      const title = document.createElement('div'); title.style.fontWeight=800; title.style.marginBottom='8px'; title.innerText = `Round ${r+1}`;
      rd.appendChild(title);
      current.forEach(p=>{
        const m = document.createElement('div'); m.className='bracket-match';
        m.innerHTML = `<div style="font-weight:700">${escapeHtml(p[0])}</div><div style="text-align:center;color:var(--muted)">vs</div><div style="font-weight:700">${escapeHtml(p[1])}</div>`;
        rd.appendChild(m);
      });
      wrapper.appendChild(rd);
      // build next pairs (winners placeholder)
      const nxt=[];
      for (let i=0;i<current.length;i+=2){
        const a = current[i] ? current[i][0] : 'TBD';
        const b = current[i+1] ? current[i+1][0] : 'TBD';
        nxt.push([a,b]);
      }
      current = nxt;
    }
    bracketContainer.appendChild(wrapper);
  }

  rrBtn.addEventListener('click', generateRoundRobin);
  koBtn.addEventListener('click', generateKnockout);
  exportCSVBtn.addEventListener('click', ()=>{
    const schedule = loadMatches();
    if (!schedule.length) return showAlert('No schedule');
    const rows = [['#','Date','Time','Team A','Team B','Ground']];
    schedule.forEach(s=>rows.push([s.index, s.dateDisplay, s.time, s.teamA, s.teamB, s.ground]));
    const csv = rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='schedule.csv'; a.click(); URL.revokeObjectURL(url);
  });

  printBtn.addEventListener('click', ()=>{
    const schedule = loadMatches();
    if (!schedule.length) return showAlert('No matches');
    const w = window.open('', '_blank');
    let html = `<html><head><title>Schedule</title></head><body><h1>Schedule</h1><table border="1" cellpadding="8" style="border-collapse:collapse">`;
    html += '<tr><th>#</th><th>Date</th><th>Time</th><th>Team A</th><th>Team B</th><th>Ground</th></tr>';
    schedule.forEach(s=> html += `<tr><td>${s.index}</td><td>${s.dateDisplay}</td><td>${s.time}</td><td>${escapeHtml(s.teamA)}</td><td>${escapeHtml(s.teamB)}</td><td>${escapeHtml(s.ground)}</td></tr>`);
    html += '</table></body></html>';
    w.document.write(html); w.document.close();
  });

  // initial render (if any)
  showSchedule();
}

// ---------- TOURNAMENT PAGE: Points table, Live Score, Admin actions (tournament.html) ----------
if (document.querySelector('#pointsTable') || document.querySelector('#fixturePlayList')) {
  // Elements
  const pointsTableBody = document.querySelector('#pointsBody');
  const fixturePlayList = document.querySelector('#fixturePlayList');
  const generateTableBtn = document.querySelector('#computeTable');
  const playControls = document.querySelector('#liveControls');

  // compute points table from matches and teams
  function computePointsTable(){
    const teams = loadTeams().map(t=>t.team);
    const matches = loadMatches();
    const table = {};
    teams.forEach(name => table[name] = { team:name, played:0, won:0, lost:0, tied:0, points:0, runsFor:0, runsAgainst:0 });
    matches.forEach(m => {
      if (!table[m.teamA] || !table[m.teamB]) return;
      table[m.teamA].played++; table[m.teamB].played++;
      if (!m.result) { /* no result */ return; }
      const r = m.result;
      // treat tie
      if (r.scoreA == r.scoreB) {
        table[m.teamA].tied++; table[m.teamB].tied++;
        table[m.teamA].points += 1; table[m.teamB].points += 1;
      } else {
        const winner = r.scoreA > r.scoreB ? m.teamA : m.teamB;
        const loser = winner === m.teamA ? m.teamB : m.teamA;
        table[winner].won++; table[loser].lost++;
        table[winner].points += 2;
      }
      table[m.teamA].runsFor += (r.scoreA||0); table[m.teamA].runsAgainst += (r.scoreB||0);
      table[m.teamB].runsFor += (r.scoreB||0); table[m.teamB].runsAgainst += (r.scoreA||0);
    });
    // compute NRR (simple runsFor - runsAgainst, not overs-based)
    const arr = Object.values(table).map(t=>({ ...t, nrr: (t.runsFor - t.runsAgainst) }));
    // sort (points desc, nrr desc)
    arr.sort((a,b)=> b.points - a.points || b.nrr - a.nrr);
    // render
    pointsTableBody.innerHTML = '';
    if (!arr.length) pointsTableBody.innerHTML = '<tr><td colspan="7">No teams</td></tr>';
    arr.forEach((r,i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${i+1}</td><td>${escapeHtml(r.team)}</td><td>${r.played}</td><td>${r.won}</td><td>${r.lost}</td><td>${r.points}</td><td>${r.nrr}</td>`;
      pointsTableBody.appendChild(tr);
    });
  }

  // live fixture list to pick a match to update scores
  function renderPlayableFixtures(){
    const schedule = loadMatches();
    fixturePlayList.innerHTML = '';
    if (!schedule.length) fixturePlayList.innerHTML = '<li class="card">No scheduled matches</li>';
    schedule.forEach(m=>{
      const li = document.createElement('li'); li.className='card';
      const resText = m.result ? `Result: ${m.result.scoreA}-${m.result.scoreB} (${m.result.winner||'TBD'})` : 'No result';
      li.innerHTML = `<div><strong>${escapeHtml(m.teamA)} vs ${escapeHtml(m.teamB)}</strong><div style="color:var(--muted);font-size:13px">${escapeHtml(m.dateDisplay)} ${escapeHtml(m.time)} • ${escapeHtml(m.ground)}</div></div>
      <div style="display:flex;gap:8px">
        <button class="btn small" data-play="${m.id}">Play</button>
        <button class="btn-alt small" data-edit="${m.id}">Edit</button>
      </div>`;
      fixturePlayList.appendChild(li);
    });
  }

  // event delegation for play/edit
  fixturePlayList.addEventListener('click', (e)=>{
    const idPlay = e.target.getAttribute('data-play');
    if (idPlay) {
      openLiveMatch(idPlay);
      return;
    }
    const idEdit = e.target.getAttribute('data-edit');
    if (idEdit) {
      // simple edit: allow updating date/time/ground via prompt
      const matches = loadMatches();
      const m = matches.find(x=>x.id===idEdit);
      if (!m) return showAlert('Match not found');
      const newDate = prompt('Date (YYYY-MM-DD)', m.dateISO.slice(0,10));
      const newTime = prompt('Time (HH:mm)', m.time);
      const newGround = prompt('Ground', m.ground);
      if (newDate) { m.dateISO = new Date(newDate+'T00:00:00').toISOString(); m.dateDisplay = new Date(m.dateISO).toLocaleDateString(); }
      if (newTime) m.time=newTime;
      if (newGround) m.ground=newGround;
      saveMatches(matches);
      renderPlayableFixtures();
      return;
    }
  });

  // Live match UI with ball-by-ball scoring
  function openLiveMatch(matchId){
    const matches = loadMatches();
    const m = matches.find(x=>x.id===matchId);
    if (!m) return showAlert('Match not found');

    // Show overs selection first
    showOversSelection(matchId, m, matches);
  }

  function showOversSelection(matchId, m, matches){
    const oversModal = document.querySelector('#oversSelectionModal');
    const customOversInput = document.querySelector('#customOvers');
    const confirmBtn = document.querySelector('#confirmOversBtn');
    const cancelBtn = document.querySelector('#cancelOversBtn');
    const closeBtn = document.querySelector('#closeOversModal');
    const oversButtons = oversModal.querySelectorAll('.overs-btn');
    
    let selectedOvers = null;

    oversButtons.forEach(btn=>{
      btn.addEventListener('click', function(){
        oversButtons.forEach(b=>b.classList.remove('selected'));
        this.classList.add('selected');
        if (this.getAttribute('data-overs') === 'Custom') {
          customOversInput.style.display = 'block';
          selectedOvers = null;
        } else {
          selectedOvers = parseInt(this.getAttribute('data-overs'));
          customOversInput.style.display = 'none';
        }
      });
    });

    customOversInput.addEventListener('input', function(){
      selectedOvers = parseInt(this.value) || null;
    });

    confirmBtn.onclick = ()=>{
      if (!selectedOvers) {
        selectedOvers = parseInt(customOversInput.value);
        if (!selectedOvers || selectedOvers < 1) return showAlert('Please select or enter valid overs');
      }
      oversModal.style.display = 'none';
      startTeamScoring(matchId, m, matches, selectedOvers, 'A');
    };

    cancelBtn.onclick = closeBtn.onclick = ()=>{
      oversModal.style.display = 'none';
    };

    oversModal.style.display = 'flex';
    customOversInput.style.display = 'none';
    customOversInput.value = '';
  }

  function startTeamScoring(matchId, m, matches, totalOvers, team){
    const modal = document.querySelector('#scoringModal');
    const ballsList = document.querySelector('#ballsList');
    const oversHistory = document.querySelector('#oversHistory');
    const totalRunsEl = document.querySelector('#totalRuns');
    const oversDisplayEl = document.querySelector('#oversDisplay');
    const wicketsEl = document.querySelector('#wickets');
    const modalTeamNameEl = document.querySelector('#modalTeamName');
    
    const teamName = team === 'A' ? m.teamA : m.teamB;
    let balls = []; // all balls
    let totalRuns = 0;
    let wickets = 0;
    let overs = []; // array of overs, each over is array of balls

    // Load existing data if available
    const resultKey = team === 'A' ? 'ballsA' : 'ballsB';
    const scoreKey = team === 'A' ? 'scoreA' : 'scoreB';
    const wicketsKey = team === 'A' ? 'wicketsA' : 'wicketsB';
    
    if (m.result && m.result[resultKey]) {
      balls = [...m.result[resultKey]];
      totalRuns = m.result[scoreKey] || 0;
      wickets = m.result[wicketsKey] || 0;
      // reconstruct overs
      let currentOver = [];
      balls.forEach(b=>{
        if (b.type === 'run' || b.type === 'wicket') {
          currentOver.push(b);
          if (currentOver.length === 6) {
            overs.push([...currentOver]);
            currentOver = [];
          }
        } else {
          currentOver.push(b); // extras don't count as balls
        }
      });
      if (currentOver.length > 0) overs.push(currentOver);
    }

    function updateDisplay(){
      totalRunsEl.innerText = totalRuns;
      const ballCount = balls.filter(b=>b.type==='run' || b.type==='wicket').length;
      const currentOvers = Math.floor(ballCount / 6);
      const ballsInOvers = ballCount % 6;
      oversDisplayEl.innerText = `${currentOvers}.${ballsInOvers}`;
      wicketsEl.innerText = wickets;

      // render current over balls only
      const currentOver = overs[overs.length - 1] || [];
      ballsList.innerHTML = '';
      if (currentOver.length === 0) {
        ballsList.innerHTML = '<span style="color:rgba(255,255,255,0.5)">Start entering balls...</span>';
      } else {
        currentOver.forEach(b=>{
          const chip = document.createElement('div');
          chip.className = `ball-chip${b.type==='wicket'?' wicket':''}`;
          let display = '';
          if (b.type === 'run') display = b.runs;
          else if (b.type === 'wicket') display = 'W';
          else if (b.type === 'wide') display = 'Wd';
          else if (b.type === 'noball') display = 'Nb';
          else if (b.type === 'bye') display = 'B';
          else if (b.type === 'legbye') display = 'Lb';
          chip.innerText = display;
          ballsList.appendChild(chip);
        });
      }

      // render previous overs
      oversHistory.innerHTML = '';
      overs.slice(0, -1).forEach((over, idx)=>{
        const item = document.createElement('div');
        item.className = 'over-item collapsed';
        let overRuns = 0;
        over.forEach(b=>{ if (b.type === 'run' || b.type === 'wide' || b.type === 'noball' || b.type === 'bye' || b.type === 'legbye') overRuns += b.runs; });
        item.innerHTML = `
          <div class="over-item-header">
            <span>Over ${idx + 1}</span>
            <span>${overRuns} runs</span>
          </div>
          <div class="over-item-balls">
            ${over.map(b=>{
              let d = '';
              if (b.type === 'run') d = b.runs;
              else if (b.type === 'wicket') d = 'W';
              else if (b.type === 'wide') d = 'Wd';
              else if (b.type === 'noball') d = 'Nb';
              else if (b.type === 'bye') d = 'B';
              else if (b.type === 'legbye') d = 'Lb';
              return d;
            }).join(', ')}
          </div>
        `;
        item.addEventListener('click', function(){
          this.classList.toggle('collapsed');
        });
        oversHistory.appendChild(item);
      });
    }

    // Button handlers
    const ballButtons = modal.querySelectorAll('.ball-btn[data-runs]');
    ballButtons.forEach(btn=>{
      btn.removeEventListener('click', ballButtonClick);
      btn.addEventListener('click', ballButtonClick);
    });

    function ballButtonClick(e){
      const runs = parseInt(e.target.getAttribute('data-runs'));
      balls.push({ type: 'run', runs });
      totalRuns += runs;
      
      const ballCount = balls.filter(b=>b.type==='run' || b.type==='wicket').length;
      if (ballCount % 6 === 1 && ballCount > 1) {
        // New over started, push previous to overs array
        overs.push([]);
      }
      if (overs.length === 0) overs.push([]);
      overs[overs.length - 1].push({ type: 'run', runs });
      
      updateDisplay();
    }

    const extrasButtons = modal.querySelectorAll('.ball-btn.extras');
    extrasButtons.forEach(btn=>{
      btn.removeEventListener('click', extraButtonClick);
      btn.addEventListener('click', extraButtonClick);
    });

    function extraButtonClick(e){
      const type = e.target.getAttribute('data-type');
      let runsValue = 1;
      balls.push({ type, runs: runsValue });
      totalRuns += runsValue;
      if (overs.length === 0) overs.push([]);
      overs[overs.length - 1].push({ type, runs: runsValue });
      updateDisplay();
    }

    const wicketBtn = modal.querySelector('.ball-btn.wicket');
    wicketBtn.removeEventListener('click', wicketButtonClick);
    wicketBtn.addEventListener('click', wicketButtonClick);

    function wicketButtonClick(e){
      balls.push({ type: 'wicket', runs: 0 });
      wickets++;
      
      const ballCount = balls.filter(b=>b.type==='run' || b.type==='wicket').length;
      if (ballCount % 6 === 1 && ballCount > 1) {
        overs.push([]);
      }
      if (overs.length === 0) overs.push([]);
      overs[overs.length - 1].push({ type: 'wicket', runs: 0 });
      
      updateDisplay();
    }

    const undoBtn = document.querySelector('#undoBtn');
    undoBtn.removeEventListener('click', undoClick);
    undoBtn.addEventListener('click', undoClick);

    function undoClick(){
      if (!balls.length) return;
      const last = balls.pop();
      if (last.type === 'wicket') wickets--;
      else totalRuns -= last.runs;
      
      // Also remove from current over
      if (overs.length > 0 && overs[overs.length - 1].length > 0) {
        overs[overs.length - 1].pop();
        // If over is now empty and it's the last one, remove it
        if (overs[overs.length - 1].length === 0 && overs.length > 1) {
          overs.pop();
        }
      }
      updateDisplay();
    }

    // Save handler
    const saveBtn = document.querySelector('#saveScoringBtn');
    saveBtn.removeEventListener('click', saveScore);
    saveBtn.addEventListener('click', saveScore);

    function saveScore(){
      if (!m.result) m.result = {};
      
      const scoreKey = team === 'A' ? 'scoreA' : 'scoreB';
      const wicketsKey = team === 'A' ? 'wicketsA' : 'wicketsB';
      const ballsKey = team === 'A' ? 'ballsA' : 'ballsB';
      const oversKey = team === 'A' ? 'oversA' : 'oversB';

      m.result[scoreKey] = totalRuns;
      m.result[wicketsKey] = wickets;
      m.result[ballsKey] = balls;
      
      const ballCount = balls.filter(b=>b.type==='run' || b.type==='wicket').length;
      m.result[oversKey] = Math.floor(ballCount / 6) + '.' + (ballCount % 6);

      if (team === 'A') {
        // Move to Team B
        saveMatches(matches);
        modal.style.display = 'none';
        startTeamScoring(matchId, m, matches, totalOvers, 'B');
      } else {
        // Both teams done
        if (m.result.scoreA > m.result.scoreB) m.result.winner = m.teamA;
        else if (m.result.scoreB > m.result.scoreA) m.result.winner = m.teamB;
        else m.result.winner = 'Tie';

        saveMatches(matches);
        modal.style.display = 'none';
        showAlert('Match result saved!');
        computePointsTable();
        renderPlayableFixtures();
      }
    }

    const cancelBtn = document.querySelector('#cancelScoringBtn');
    cancelBtn.removeEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    function closeModal(){
      modal.style.display = 'none';
    }

    const closeBtn = document.querySelector('#closeModal');
    closeBtn.removeEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    // Show modal
    modalTeamNameEl.innerText = `Scoring - ${teamName}`;
    modal.style.display = 'flex';
    updateDisplay();
  }

  // wire compute button
  if (generateTableBtn) generateTableBtn.addEventListener('click', computePointsTable);

  // initial render
  renderPlayableFixtures();
  computePointsTable();
}

// ---------- ADMIN PAGE ----------
if (document.querySelector('#adminTeams') || document.querySelector('#adminMatches')) {
  const adminTeamsEl = document.querySelector('#adminTeams');
  const adminMatchesEl = document.querySelector('#adminMatches');
  const seedShuffleBtn = document.querySelector('#seedShuffle');
  const clearAllBtn = document.querySelector('#clearAll');

  function renderAdminTeams(){
    const teams = loadTeams();
    adminTeamsEl.innerHTML = '';
    if (!teams.length) adminTeamsEl.innerHTML = '<li class="card">No teams</li>';
    teams.forEach(t=>{
      const li = document.createElement('li'); li.className='card';
      li.innerHTML = `<div><strong>${escapeHtml(t.team)}</strong><div style="color:var(--muted)">${escapeHtml(t.captain)} • ${escapeHtml(t.phone)}</div></div>
      <div style="display:flex;gap:8px">
        <button class="btn-alt small" data-e="${t.id}">Edit</button>
        <button class="btn small" data-d="${t.id}">Delete</button>
      </div>`;
      adminTeamsEl.appendChild(li);
    });
  }

  adminTeamsEl.addEventListener('click', (e)=>{
    const idE = e.target.getAttribute('data-e');
    if (idE) {
      const teams = loadTeams();
      const t = teams.find(x=>x.id===idE);
      if (!t) return;
      t.team = prompt('Team name', t.team) || t.team;
      t.captain = prompt('Captain', t.captain) || t.captain;
      t.phone = prompt('Phone', t.phone) || t.phone;
      saveTeams(teams); renderAdminTeams();
    }
    const idD = e.target.getAttribute('data-d');
    if (idD) {
      if (!confirm('Delete team?')) return;
      let teams = loadTeams(); teams = teams.filter(x=>x.id!==idD);
      saveTeams(teams); renderAdminTeams();
    }
  });

  function renderAdminMatches(){
    const matches = loadMatches();
    adminMatchesEl.innerHTML = '';
    if (!matches.length) adminMatchesEl.innerHTML = '<li class="card">No matches</li>';
    matches.forEach(m=>{
      const li = document.createElement('li'); li.className='card';
      const res = m.result ? `${m.result.scoreA}-${m.result.scoreB} (${m.result.winner})` : 'No Result';
      li.innerHTML = `<div><strong>${escapeHtml(m.teamA)} vs ${escapeHtml(m.teamB)}</strong><div style="color:var(--muted)">${escapeHtml(m.dateDisplay)} ${escapeHtml(m.time)} • ${escapeHtml(m.ground)}</div></div>
      <div style="display:flex;gap:8px">
        <button class="btn small" data-r="${m.id}">Set Result</button>
        <button class="btn-alt small" data-x="${m.id}">Delete</button>
      </div><div style="margin-top:8px;color:var(--muted)">${res}</div>`;
      adminMatchesEl.appendChild(li);
    });
  }

  adminMatchesEl.addEventListener('click', (e)=>{
    const idR = e.target.getAttribute('data-r');
    if (idR) {
      // reuse same live match prompt flow
      const matches = loadMatches();
      const m = matches.find(x=>x.id===idR); if (!m) return;
      const scoreA = prompt(`Enter ${m.teamA} score (runs)`, m.result ? (m.result.scoreA||'') : '');
      if (scoreA === null) return;
      const oversA = prompt(`Enter ${m.teamA} overs (e.g. 9.3)`, m.result ? (m.result.oversA||'') : '');
      const scoreB = prompt(`Enter ${m.teamB} score (runs)`, m.result ? (m.result.scoreB||'') : '');
      if (scoreB === null) return;
      const oversB = prompt(`Enter ${m.teamB} overs (e.g. 10.0)`, m.result ? (m.result.oversB||'') : '');
      const result = { scoreA:parseInt(scoreA||0), oversA:oversA||'', scoreB:parseInt(scoreB||0), oversB:oversB||''};
      result.winner = result.scoreA > result.scoreB ? m.teamA : (result.scoreB > result.scoreA ? m.teamB : 'Tie');
      m.result = result;
      saveMatches(matches);
      renderAdminMatches();
      showAlert('Result updated');
      return;
    }
    const idX = e.target.getAttribute('data-x');
    if (idX) {
      if (!confirm('Delete match?')) return;
      let matches = loadMatches(); matches = matches.filter(x=>x.id!==idX);
      saveMatches(matches); renderAdminMatches();
    }
  });

  seedShuffleBtn.addEventListener('click', ()=>{
    // randomize team order
    let teams = loadTeams(); teams = teams.sort(()=>0.5-Math.random()); saveTeams(teams); renderAdminTeams();
  });

  clearAllBtn.addEventListener('click', ()=>{
    if (!confirm('Clear all data (teams + matches)?')) return;
    localStorage.removeItem(TEAMS_KEY); localStorage.removeItem(MATCHES_KEY);
    renderAdminTeams(); renderAdminMatches(); showAlert('All cleared');
  });

  // initial render
  renderAdminTeams(); renderAdminMatches();
}

let username =  localStorage.getItem("signupName");
console.log(username);

let dinesh = document.getElementById("user");

dinesh.innerHTML=`${username}`;