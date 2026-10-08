// You shouldn't need to edit this file — add content in recipes.js instead.
(function () {
  const $ = (s) => document.querySelector(s);
  const state = { query: "", tags: new Set() };

  const clockIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  const ICONS = {
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.75 15V9l5.2 3-5.2 3Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.1a6.3 6.3 0 1 0 5.4 6.3V8.6a8 8 0 0 0 4.7 1.5V6.7a4.7 4.7 0 0 1-4.7-4.7Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/></svg>'
  };

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function formatTime(min) {
    min = Number(min) || 0;
    if (min < 60) return `${min} min`;
    const h = Math.floor(min / 60), m = min % 60;
    if (h >= 24 && m === 0 && h % 24 === 0) return `${h / 24} day${h / 24 > 1 ? "s" : ""}`;
    return m ? `${h} hr ${m} min` : `${h} hr`;
  }

  function youtubeId(url) {
    if (!url) return "";
    const m = String(url).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : "";
  }

  // ---------- Profile ----------
  function renderProfile() {
    document.title = PROFILE.name;
    $("#intro-name").textContent = PROFILE.name;
    $("#intro-bio").textContent = PROFILE.bio || "";
    const img = $("#intro-photo");
    img.src = PROFILE.photo; img.alt = "Photo of " + PROFILE.name;
    let links = "";
    if (PROFILE.youtube) links += `<a class="btn btn-primary" href="${esc(PROFILE.youtube)}" target="_blank" rel="noopener">${ICONS.youtube}My YouTube channel</a>`;
    if (PROFILE.tiktok) links += `<a class="btn" href="${esc(PROFILE.tiktok)}" target="_blank" rel="noopener">${ICONS.tiktok}TikTok</a>`;
    if (PROFILE.instagram) links += `<a class="btn" href="${esc(PROFILE.instagram)}" target="_blank" rel="noopener">${ICONS.instagram}Instagram</a>`;
    $("#intro-links").innerHTML = links;
  }

  // ---------- Tags ----------
  function allTags() {
    const counts = new Map();
    RECIPES.forEach((r) => (r.tags || []).forEach((t) => counts.set(t, (counts.get(t) || 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([t]) => t);
  }

  function renderTagFilter() {
    $("#tag-filter").innerHTML = allTags()
      .map((t) => `<button class="chip" type="button" data-tag="${esc(t)}" aria-pressed="${state.tags.has(t)}">${esc(t)}</button>`)
      .join("");
  }

  // ---------- List ----------
  function matches(r) {
    const tags = r.tags || [];
    for (const t of state.tags) if (!tags.includes(t)) return false;
    const q = state.query.trim().toLowerCase();
    if (!q) return true;
    const hay = [r.title, r.description, ...(tags), ...(r.ingredients || [])].join(" ").toLowerCase();
    return q.split(/\s+/).every((w) => hay.includes(w));
  }

  function renderList() {
    const list = RECIPES.filter(matches);
    $("#recipe-list").innerHTML = list
      .map((r) => `
        <li>
          <a class="bar" href="#/recipe/${encodeURIComponent(r.id)}">
            <img src="${esc(r.image)}" alt="" loading="lazy" width="76" height="76">
            <div class="bar-body">
              <h3 class="bar-title">${esc(r.title)}</h3>
              <div class="bar-tags">${(r.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
            </div>
            <span class="time">${clockIcon}${formatTime(r.time)}</span>
          </a>
        </li>`)
      .join("");
    $("#empty").hidden = list.length > 0;
    $("#count").textContent = `${list.length} recipe${list.length === 1 ? "" : "s"}`;
    $("#clear").hidden = !(state.query || state.tags.size);
  }

  // ---------- Single recipe ----------
  function renderRecipe(id) {
    const r = RECIPES.find((x) => x.id === id);
    const view = $("#recipe-view");
    if (!r) { location.hash = "#/"; return; }
    const v = r.videos || {};
    const vid = youtubeId(v.youtube || r.youtube);
    const platforms = [["youtube", "YouTube"], ["tiktok", "TikTok"], ["instagram", "Instagram"]];
    const watch = platforms.filter(([k]) => v[k] || (k === "youtube" && r.youtube))
      .map(([k, label]) => `<a class="btn${k === "youtube" ? " btn-primary" : ""}" href="${esc(v[k] || r.youtube)}" target="_blank" rel="noopener">${ICONS[k]}Watch on ${label}</a>`).join("");
    view.innerHTML = `
      <a class="back" href="#/">&larr; All recipes</a>
      <img class="recipe-hero" src="${esc(r.image)}" alt="${esc(r.title)}">
      <h1>${esc(r.title)}</h1>
      ${r.description ? `<p class="recipe-desc">${esc(r.description)}</p>` : ""}
      <div class="recipe-meta">
        <span class="time">${clockIcon}${formatTime(r.time)}</span>
        ${r.servings ? `<span class="plain">Serves ${esc(r.servings)}</span>` : ""}
        ${(r.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
      </div>
      <div class="recipe-cols">
        ${(r.ingredients || []).length ? `<section><h2>Ingredients</h2><ul class="ingredients">${r.ingredients.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></section>` : ""}
        ${(r.steps || []).length ? `<section><h2>Method</h2><ol class="steps">${r.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol></section>` : ""}
      </div>
      ${notesHtml(r.notes)}
      ${watch ? `<section class="watch"><h2>Watch me make it</h2><div class="watch-links">${watch}</div></section>` : ""}
      ${vid ? `<section class="video"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${vid}" title="${esc(r.title)} video" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div></section>` : ""}
    `;
    document.title = r.title + " · " + PROFILE.name;
  }

  function notesHtml(notes) {
    if (!notes || (Array.isArray(notes) && !notes.length)) return "";
    const body = Array.isArray(notes)
      ? `<ul>${notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>`
      : `<p>${esc(notes)}</p>`;
    return `<section class="notes"><h2>Notes</h2>${body}</section>`;
  }

  // ---------- Router ----------
  let homeScroll = 0;
  function route() {
    const m = location.hash.match(/^#\/recipe\/(.+)$/);
    if (m) {
      if (!$("#home-view").hidden) homeScroll = window.scrollY;
      $("#home-view").hidden = true;
      $("#recipe-view").hidden = false;
      renderRecipe(decodeURIComponent(m[1]));
      window.scrollTo(0, 0);
    } else {
      $("#recipe-view").hidden = true;
      $("#home-view").hidden = false;
      document.title = PROFILE.name;
      window.scrollTo(0, homeScroll);
    }
  }

  // ---------- Events ----------
  $("#search").addEventListener("input", (e) => { state.query = e.target.value; renderList(); });
  $("#tag-filter").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    const t = b.dataset.tag;
    state.tags.has(t) ? state.tags.delete(t) : state.tags.add(t);
    b.setAttribute("aria-pressed", state.tags.has(t));
    renderList();
  });
  $("#clear").addEventListener("click", () => {
    state.query = ""; state.tags.clear(); $("#search").value = "";
    renderTagFilter(); renderList();
  });
  window.addEventListener("hashchange", route);

  renderProfile();
  renderTagFilter();
  renderList();
  route();
})();
