const weeks = [
  {
    week: "Week 1",
    title: "Initial Sketches + Persona",
    date: "Feb 26, 2026",
    tags: ["Sketch", "Persona", "Ideation"],
    description:
      "Week 1 includes three initial sketches and our shared persona for a small-kitchen renter context.",

    // Week 1 배너 이미지
    banner: "assets/Mia.png",

    images: [
      { src: "assets/Terry.png", caption: "Terry — initial sketch" },
      { src: "assets/Tristan.jpg", caption: "Tristan — initial sketch" },
      { src: "assets/Mia.png", caption: "Mia — initial sketch" }
    ],

    // Persona bullet
    persona: [
      "26-year-old graduate student living in Vancouver",
      "Lives in a small one-bedroom rental apartment",
      "Compact kitchen with limited counter space + a 2-coil induction stove",
      "Cooks at home 5+ times/week to save money and eat healthy",
      "Pain points: not enough prep space, cluttered counters, limited storage for tools",
      "Cannot modify the rental unit (needs a removable/reversible solution)",
      "Needs a space-efficient surface that expands for prep and retracts for cooking",
      "Values safety, organization, smooth transitions, one-hand operation, and stability"
    ],

    sections: [
      {
        heading: "What we uploaded",
        bullets: ["3 initial sketches", "1 persona paragraph", "Key constraints + assumptions"]
      }
    ]
  },
  {
    week: "Week 2",
    title: "Low-fidelity Scale Model",
    date: "Mar 5, 2026",
    tags: ["Scale model", "Testing"],
    description: "Placeholder (images will be added later).",
    images: [],
    sections: []
  },
  {
    week: "Week 3",
    title: "1:1 Medium-fidelity Prototype",
    date: "Mar 19, 2026",
    tags: ["1:1", "Laser cut", "3D print"],
    description: "Placeholder (images will be added later).",
    images: [],
    sections: []
  }
];

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* Gallery */
function makeGallery(images) {
  if (!images || images.length === 0) return "";
  const items = images
    .map(
      (img) => `
    <div class="weekGallery__item">
      <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption || "Week image")}" />
      <div class="weekGallery__cap">${escapeHtml(img.caption || "")}</div>
    </div>
  `
    )
    .join("");
  return `<div class="weekGallery">${items}</div>`;
}

/* Persona box */
function makePersona(persona, id) {
  if (!persona || persona.length === 0) return "";
  const li = persona.map((p) => `<li>${escapeHtml(p)}</li>`).join("");
  return `
    <div id="${escapeHtml(id)}" style="display:none; margin-top:12px;">
      <div style="padding:14px; border:1px solid #0000001A; border-radius:18px; background:#00000005;">
        <div style="font-weight:900; margin-bottom:8px;">Persona — Jisoo Kim</div>
        <ul style="margin:0; padding-left:18px; color:#6a665c; font-weight:650; line-height:1.7;">
          ${li}
        </ul>
      </div>
    </div>
  `;
}

function makeDetail(w, id) {
  const gallery = makeGallery(w.images);

  // persona 영역 id
  const personaId = `persona-${id}`;
  const personaBox = makePersona(w.persona, personaId);

  const sections = (w.sections || [])
    .map((sec) => {
      const bullets = (sec.bullets || [])
        .map((b) => `<li>${escapeHtml(b)}</li>`)
        .join("");
      return `
      <div style="margin-top:12px; padding:12px; border:1px solid #0000001A; border-radius:18px; background:#00000005;">
        <div style="font-weight:900; margin-bottom:6px;">${escapeHtml(sec.heading)}</div>
        <ul style="margin:0; padding-left:18px; font-weight:650; color:#6a665c;">
          ${bullets}
        </ul>
      </div>
    `;
    })
    .join("");

  return `
    <div id="${escapeHtml(id)}" style="display:none; margin-top:14px;">
      ${gallery}
      ${personaBox}
      ${sections || `<p class="muted" style="margin:10px 0 0;">(Details will be added.)</p>`}
    </div>
  `;
}

function makeWeekCard(w) {
  const detailId = `detail-${w.week.replace(/\s+/g, "-").toLowerCase()}`;
  const personaToggleId = `persona-${detailId}`;

  // Week 1 배너: banner가 있으면 이미지로, 없으면 텍스트
  const media = w.banner
    ? `<img src="${escapeHtml(w.banner)}" alt="${escapeHtml(w.week)} banner"
         style="width:100%; height:100%; object-fit:cover; display:block;">`
    : `<div style="font-weight:900;">${escapeHtml(w.week)}</div>`;

  // tags를 버튼/텍스트로 (Persona만 토글 버튼)
  const tagButtons = (w.tags || [])
    .map((t) => {
      if (t === "Persona") {
        return `<button class="weekPill" type="button" data-persona="${personaToggleId}">Persona</button>`;
      }
      return `<span class="weekPill">${escapeHtml(t)}</span>`;
    })
    .join("");

  return `
  <article class="weekCard">
    <div class="weekCard__media">
      ${media}
    </div>

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
        ${tagButtons}
      </div>

      ${makeDetail(w, detailId)}
    </div>
  </article>
  `;
}

function renderWeeks() {
  const grid = document.getElementById("weeksGrid");
  grid.innerHTML = weeks.map(makeWeekCard).join("");

  grid.addEventListener("click", (e) => {
    // Open/Close
    const btn = e.target.closest("[data-open]");
    if (btn) {
      const id = btn.getAttribute("data-open");
      const panel = document.getElementById(id);
      const isOpen = panel.style.display === "block";
      panel.style.display = isOpen ? "none" : "block";
      btn.textContent = isOpen ? "Open" : "Close";
      return;
    }

    // Persona toggle
    const pbtn = e.target.closest("[data-persona]");
    if (pbtn) {
      const pid = pbtn.getAttribute("data-persona");
      const personaPanel = document.getElementById(pid);

      // detail이 닫혀있으면 먼저 열기
      const detailPanel = pbtn.closest(".weekCard__body")?.querySelector('[id^="detail-"]');
      if (detailPanel && detailPanel.style.display !== "block") {
        detailPanel.style.display = "block";
        const openBtn = pbtn.closest(".weekCard__body")?.querySelector("[data-open]");
        if (openBtn) openBtn.textContent = "Close";
      }

      const isOpen = personaPanel.style.display === "block";
      personaPanel.style.display = isOpen ? "none" : "block";
      return;
    }

    // Image focus (click to enlarge, hide others)
    const imgItem = e.target.closest(".weekGallery__item");
    if (imgItem) {
      const gallery = imgItem.closest(".weekGallery");
      if (!gallery) return;

      const isFocused = imgItem.classList.contains("is-focused");

      // reset
      gallery.querySelectorAll(".weekGallery__item").forEach((item) => {
        item.classList.remove("is-focused");
        item.classList.remove("is-hidden");
      });

      // toggle close
      if (isFocused) return;

      // focus
      imgItem.classList.add("is-focused");
      gallery.querySelectorAll(".weekGallery__item").forEach((item) => {
        if (item !== imgItem) item.classList.add("is-hidden");
      });

      imgItem.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
  });
}

renderWeeks();