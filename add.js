const weeks = [
  {
    week: "Week 1",
    title: "Initial Sketches + Persona",
    date: "Feb 26, 2026",
    tags: ["Sketch", "Persona", "Ideation"],
    description:
      "Each team member uploads initial sketches and a persona grounded in small-kitchen renter context.",
    sections: [
      { heading: "Sketches", bullets: ["3 individual initial sketches", "Key idea notes", "Constraints + assumptions"] },
      { heading: "Persona", bullets: ["Urban renter persona", "Pain points & goals", "Human factors notes"] }
    ]
  },
  {
    week: "Week 2",
    title: "Low-fidelity Scale Model",
    date: "Mar 5, 2026",
    tags: ["Scale model", "Testing"],
    description:
      "Low-fi model to test sliding stability, footprint, and storage access. (Placeholder)",
    sections: []
  },
  {
    week: "Week 3",
    title: "1:1 Medium-fidelity Prototype",
    date: "Mar 19, 2026",
    tags: ["1:1", "Laser cut", "3D print"],
    description:
      "Full-size prototype with rail + wood top + soft pocket. (Placeholder)",
    sections: []
  }
];

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function makeDetail(w, id){
  const sections = (w.sections || []).map(sec => {
    const bullets = (sec.bullets || []).map(b => `<li>${escapeHtml(b)}</li>`).join("");
    return `
      <div style="margin-top:12px; padding:12px; border:1px solid #0000001A; border-radius:18px; background:#00000005;">
        <div style="font-weight:900; margin-bottom:6px;">${escapeHtml(sec.heading)}</div>
        <ul style="margin:0; padding-left:18px; font-weight:650; color:#6a665c;">
          ${bullets}
        </ul>
      </div>
    `;
  }).join("");

  return `
    <div id="${escapeHtml(id)}" style="display:none; margin-top:14px;">
      ${sections || `<p class="muted" style="margin:10px 0 0;">(Details will be added this week.)</p>`}
    </div>
  `;
}

function makeWeekCard(w){
  const tags = (w.tags || []).map(t => `<span class="weekPill">${escapeHtml(t)}</span>`).join("");
  const detailId = `detail-${w.week.replace(/\s+/g,"-").toLowerCase()}`;

  return `
  <article class="weekCard">
    <div class="weekCard__media">${escapeHtml(w.week)}</div>

    <div class="weekCard__body">
      <div class="weekCard__meta">
        <span class="weekPill">${escapeHtml(w.week)}</span>
        <span class="weekPill">${escapeHtml(w.date)}</span>
      </div>

      <div class="weekCard__title">${escapeHtml(w.title)}</div>
      <p class="weekCard__desc">${escapeHtml(w.description)}</p>

      <div class="weekCard__btnRow">
        <button class="btn btn--dark" data-open="${detailId}">Open</button>
        <a class="btn" href="#team">Team</a>
      </div>

      <div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;">
        ${tags}
      </div>

      ${makeDetail(w, detailId)}
    </div>
  </article>
  `;
}

function renderWeeks(){
  const grid = document.getElementById("weeksGrid");
  grid.innerHTML = weeks.map(makeWeekCard).join("");

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if(!btn) return;
    const id = btn.getAttribute("data-open");
    const panel = document.getElementById(id);
    const isOpen = panel.style.display === "block";
    panel.style.display = isOpen ? "none" : "block";
    btn.textContent = isOpen ? "Open" : "Close";
  });
}

renderWeeks();