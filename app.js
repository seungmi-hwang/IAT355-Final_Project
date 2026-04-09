const weeks = [
  {
    week: "Week 1",
    title: "Initial Sketches + Persona",
    date: "Feb 26, 2026",
    tags: ["Sketch", "Persona", "Ideation"],
    description:
      "Week 1 presents three early concept directions for a removable induction cover designed for renters with limited counter space.",

    banner: "assets/Mia_1.jpg",

    images: [
      {
        src: "assets/Terry_1.jpeg",
        caption: "Concept 1 — expandable prep surface with folding legs"
      },
      {
        src: "assets/Tristan_1.jpg",
        caption: "Concept 2 — removable cover with storage and silicone trim"
      },
      {
        src: "assets/Mia_1.jpg",
        caption: "Concept 3 — sliding cutting board interaction"
      }
    ],

    persona: [
      "26-year-old graduate student living in Vancouver",
      "Lives in a small one-bedroom rental apartment",
      "Compact kitchen with limited counter space and a 2-coil induction stove",
      "Cooks at home 5+ times per week to save money and eat healthy",
      "Pain points: not enough prep space, cluttered counters, limited storage for kitchen tools",
      "Cannot modify the rental unit, so the solution must be removable and reversible",
      "Needs a space-efficient surface that expands for prep and retracts for cooking",
      "Values safety, organization, smooth transitions, one-hand operation, and stability"
    ],

    sections: [
      {
        heading: "What we explored",
        bullets: [
          "Removable induction cover for a rental-friendly kitchen setup",
          "Sliding extension to create a larger preparation surface",
          "Silicone trim for heat resistance, grip, and stability",
          "Compact interaction ideas that do not require permanent installation"
        ]
      }
    ]
  },
  {
    week: "Week 2",
    title: "Refined Sketches After Feedback",
    date: "Mar 5, 2026",
    tags: ["Refinement", "Feedback", "Sketch"],
    description:
      "Week 2 shows revised concept sketches developed after receiving feedback on the initial ideas. The updated concepts focus more clearly on removable interaction, compact storage, and improved usability for small rental kitchens.",

    banner: "assets/Terry.png",

    images: [
      {
        src: "assets/Terry.png",
        caption: "Terry — refined concept after feedback, improving structure stability and simplifying the overall form"
      },
      {
        src: "assets/Mia.png",
        caption: "Mia — refined concept after feedback, focusing on clearer sliding interaction and improved usability"
      },
      {
        src:"assets/Tristan.jpg",
        caption:"Tristan — refined concept after feedback, improving spatial layout and enhancing sliding mechanism"
      }
    ],

    sections: [
      {
        heading: "How the concepts changed",
        bullets: [
          "Revised the original ideas based on Week 1 feedback",
          "Explored more compact and integrated forms",
          "Focused on removable and renter-friendly interaction",
          "Considered how the prep surface can be stored when not in use"
        ]
      }
    ]
  },
  {
    week: "Week 3",
    title: "Design Iteration & Refinement",
    date: "Mar 12, 2026",
    tags: ["Iteration", "Sketch", "Development"],
    description: "Week 3 continues the design iteration process, refining the concept based on feedback and exploring more feasible interaction and structure.",
    banner: "assets/Mia_Week2.png",
    images: [
      {
         src:"assets/Terry_week2.png",
         description:"Terry — refined concept exploring a roll-out wooden cover integrated with the induction unit",

      },
      {
        src:"assets/Mia_Week2.png",
        description:"Mia — refined concept showing a detachable roll-up prep surface with compact storage",
      }
    ],
    sections: []
  },

  {
    //first propotype
    week: "Week 4",
    title: "1:1 low-fidelity Prototype",
    data: "Mar 19, 2026",
    tag: ["Low-fi", "Mechanism", "Prototype"],
    description:
     "Week 4 introduces low-fidelity prototyping to test structural ideas. We explored mechanisms such as preventing sideways movement and integrating silicone for stability and protection.",
    images: [
      {
        src:"assets/Week4.png",
        caption:"Refined mechanism sketch - preventing sideways movement and improving structural stability"
      }
    ],
    sections:[
      {
        heading: "Key Improvements",
        bullets: [
          "Introduced structure to prevent sideways movement",
          "Explored attachment mechanism between parts",
          "Added silicone layer for protection and grip",
          "Refined material combination (wood + silicone)"
        ]
      }
    ]
  },
  {
    // refelect feedback - a second propotype
    week: "Week 5",
    title: "Concept Development & Mechanism Refinement",
    date: "Mar 26",
    tag: ["Mechanism", "low-Fidelity"],
    description:
    "Week 5 focuses on refining the mechanism of the design. We explored structural details such as preventing sideways movement, integrating silicone protection, and improving attachment between components.",
    image: [
      {
        src:"assets/Week4.png",
        caption:"Refined mechanism sketch - preventing sideways movement and improving structural stability"
      }
    ],
    sections: [
      {
        heading: "Key Improvements",
        bullets: [
          "Introduced structure to prevent sideways movement",
          "Explored attachment mechanism between parts",
          "Added silicone layer for protection and grip",
          "Refined material combination (wood + silicone)"
        ]
      }
    ]
  },
  {
    week:"Week 6",
    title:"CAD Modeling & Fabrication",
    date: "April 2",
    tags:["CAD", "OnShape", "Laser Cutting", "Medium-fi"],
    description:
    "Week 6 focuses on translating the final concept into a medium-fidelity prototype. The design is modeled in Onshape and prepared for laser cutting fabrication.",
    images: [
      {
        src: "assets/Week6.png",
        caption: "CAD model created in Onshape and final concept design"
      }
    ],
    sections: [
      {
        heading: "What we implemented",
      }
    ]
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

function makeGallery(images) {
  if (!images || images.length === 0) return "";

  const items = images.map((img) => `
    <div class="weekGallery__item">
      <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption || "Week image")}" />
      <div class="weekGallery__cap">${escapeHtml(img.caption || "")}</div>
    </div>
  `).join("");

  return `<div class="weekGallery">${items}</div>`;
}

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
  const personaId = `persona-${id}`;
  const personaBox = makePersona(w.persona, personaId);

  const sections = (w.sections || []).map((sec) => {
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
  }).join("");

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

  const media = w.banner
    ? `<img src="${escapeHtml(w.banner)}" alt="${escapeHtml(w.week)} banner">`
    : `<div style="font-weight:900;">${escapeHtml(w.week)}</div>`;

  const tagButtons = (w.tags || []).map((t) => {
    if (t === "Persona") {
      return `<button class="weekPill" type="button" data-persona="${personaToggleId}">Persona</button>`;
    }
    return `<span class="weekPill">${escapeHtml(t)}</span>`;
  }).join("");

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
    const btn = e.target.closest("[data-open]");
    if (btn) {
      const id = btn.getAttribute("data-open");
      const panel = document.getElementById(id);
      const isOpen = panel.style.display === "block";
      panel.style.display = isOpen ? "none" : "block";
      btn.textContent = isOpen ? "Open" : "Close";
      return;
    }

    const pbtn = e.target.closest("[data-persona]");
    if (pbtn) {
      const pid = pbtn.getAttribute("data-persona");
      const personaPanel = document.getElementById(pid);

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

    const imgItem = e.target.closest(".weekGallery__item");
    if (imgItem) {
      const gallery = imgItem.closest(".weekGallery");
      if (!gallery) return;

      const isFocused = imgItem.classList.contains("is-focused");

      gallery.querySelectorAll(".weekGallery__item").forEach((item) => {
        item.classList.remove("is-focused");
        item.classList.remove("is-hidden");
      });

      if (isFocused) return;

      imgItem.classList.add("is-focused");
      gallery.querySelectorAll(".weekGallery__item").forEach((item) => {
        if (item !== imgItem) item.classList.add("is-hidden");
      });

      imgItem.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

renderWeeks();