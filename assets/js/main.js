/* =============================================================================
   Eazdan Mostafa Rafin — site behaviour
   Renders every section from window.SITE_DATA, then wires up navigation,
   theming, filtering and the certificate lightbox.
============================================================================= */

(function () {
  'use strict';

  var D = window.SITE_DATA;
  if (!D) { console.error('site-data.js did not load.'); return; }

  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ------------------------------------------------------------- icons -- */

  var ICON = {
    github:   '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    kaggle:   '<path d="M7 3v18M7 14l7-7M11 10l6 11"/>',
    mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    doc:      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/>',
    link:     '<path d="M7 17 17 7M9 7h8v8"/>',
    star:     '<path d="m12 2 2.9 6.3 6.6.8-4.9 4.6 1.3 6.8L12 17.2 6.1 20.5l1.3-6.8L2.5 9.1l6.6-.8z" fill="currentColor" stroke="none"/>',
    check:    '<path d="M20 6 9 17l-5-5"/>',
    /* research-interest glyphs */
    network:  '<circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M12 7.4v4.2M12 11.6 6.4 16M12 11.6 17.6 16"/>',
    scan:     '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3.4"/>',
    eye:      '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    chip:     '<rect x="7" y="7" width="10" height="10" rx="1.6"/><path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3"/>',
    layers:   '<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
    chat:     '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.3 9.3 0 0 1-3.7-.8L3 21l1.9-5A8.2 8.2 0 0 1 4 11.5 8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z"/>'
  };

  function svg(name, size) {
    var s = size || 16;
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" ' +
           'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
           (ICON[name] || '') + '</svg>';
  }

  function tags(list, cls) {
    return '<div class="tag-row">' + list.map(function (t) {
      return '<span class="tag ' + (cls || '') + '">' + t + '</span>';
    }).join('') + '</div>';
  }

  function ext(href) {
    return /^https?:/.test(href) ? ' target="_blank" rel="noopener noreferrer"' : '';
  }

  function setHTML(sel, html) {
    var el = $(sel);
    if (el) el.innerHTML = html;
  }

  /* Every enlargeable image on the page, in the order it was rendered.
     Thumbnails reference their entry by index via data-lb. */
  var LIGHTBOX = [];
  function lbRegister(item) { return LIGHTBOX.push(item) - 1; }

  function strip(html) {
    return String(html).replace(/<[^>]*>/g, '')
      .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      .replace(/&times;/g, '\u00D7').replace(/&nbsp;/g, ' ');
  }
  function attr(text) { return strip(text).replace(/"/g, ''); }

  /* ------------------------------------------------------------- meta -- */

  function renderMeta() {
    var m = D.meta;
    setHTML('#heroStatus', m.status);
    setHTML('#heroName', m.name);
    setHTML('#heroRole', m.role);
    setHTML('#heroTagline', m.tagline);
    setHTML('#brandCrest', m.initials);
    setHTML('#brandName', m.name);

    var cv = $('#navCvLink');
    if (cv) cv.href = m.cvPath;

    var photo = $('#heroPhoto');
    if (photo) { photo.src = m.photo; photo.alt = m.name; }

    document.title = m.name + ' — Federated Learning & Medical Image Analysis';

    setHTML('#year', String(new Date().getFullYear()));
    setHTML('#lastUpdated', 'Last updated ' + m.lastUpdated);

    /* hero call-to-action buttons */
    var gh = D.links.filter(function (l) { return l.icon === 'github'; })[0];
    var actions =
      '<a class="btn btn-primary" href="' + m.cvPath + '" target="_blank" rel="noopener">' + svg('doc', 15) + 'Download CV</a>' +
      '<a class="btn btn-outline" href="mailto:' + m.email + '">' + svg('mail', 15) + 'Email me</a>' +
      (gh ? '<a class="btn btn-ghost" href="' + gh.href + '" target="_blank" rel="noopener">' + svg('github', 15) + 'GitHub</a>' : '');
    setHTML('#heroActions', actions);
  }

  /* ------------------------------------------------------------ about -- */

  function renderAbout() {
    var a = D.about;
    setHTML('#aboutLede', a.lede.map(function (p) { return '<p>' + p + '</p>'; }).join(''));

    setHTML('#lookingForCard',
      '<p class="card-label">' + a.lookingFor.title + '</p>' +
      '<ul class="looking-list">' +
        a.lookingFor.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') +
      '</ul>'
    );
  }

  /* --------------------------------------------------------- research -- */

  function renderResearch() {
    setHTML('#interestGrid', D.researchInterests.map(function (r) {
      return '<article class="interest-card' + (r.primary ? ' is-primary' : '') + '">' +
               (r.primary ? '<span class="interest-flag">Core</span>' : '') +
               '<div class="interest-icon">' + svg(r.icon, 19) + '</div>' +
               '<h3>' + r.title + '</h3>' +
               '<p>' + r.body + '</p>' +
             '</article>';
    }).join(''));
  }

  /* ---------------------------------------------------------- skills -- */

  function renderSkills() {
    setHTML('#skillsGroups', D.skills.map(function (g) {
      return '<div class="skill-group"><h4>' + g.group + '</h4>' + tags(g.items) + '</div>';
    }).join(''));
  }

  /* ----------------------------------------------------------- thesis -- */

  function renderThesis() {
    var t = D.thesis;

    var head =
      '<div class="thesis-head">' +
        '<p class="thesis-eyebrow"><span class="live"></span>' + t.eyebrow + '</p>' +
        '<h3>' + t.title + '</h3>' +
        '<p class="thesis-summary">' + t.summary + '</p>' +
        (t.metrics ? '<div class="thesis-metrics">' + t.metrics.map(function (m) {
            return '<div class="thesis-metric">' +
                     '<div class="thesis-metric-v">' + m.value + '</div>' +
                     '<div class="thesis-metric-l">' + m.label + '</div>' +
                   '</div>';
          }).join('') + '</div>' : '') +
        '<dl class="thesis-meta">' +
          '<div><dt>Supervisor</dt><dd>' + t.supervisor + '</dd></div>' +
          '<div><dt>Period</dt><dd>' + t.period + '</dd></div>' +
          '<div><dt>Status</dt><dd>' + t.status + '</dd></div>' +
        '</dl>' +
      '</div>';

    var body = '<div class="thesis-body">' + t.blocks.map(function (b) {
      return '<div class="thesis-block"><h4>' + b.heading + '</h4><p>' + b.body + '</p></div>';
    }).join('') + '</div>';

    var limits = t.limitations
      ? '<div class="thesis-block thesis-block-wide"><h4>Limits, and what comes next</h4>' +
        '<p>' + t.limitations + '</p></div>'
      : '';

    var foot =
      '<div class="thesis-foot">' +
        '<div class="thesis-methods">' +
          '<h4 class="sub-head">Methods &amp; materials</h4>' +
          tags(t.methods) +
        '</div>' +
        (t.repo && t.repo.note ? '<div class="thesis-repo">' +
                    '<p class="thesis-repo-note">' + t.repo.note + '</p>' +
                  '</div>' : '') +
      '</div>';

    setHTML('#thesisCard', head + body + limits + foot);
  }

  /* ------------------------------------------------------ manuscripts -- */

  function renderManuscripts() {
    setHTML('#manuscriptsNote', D.manuscriptsNote);

    setHTML('#manuscriptList', D.manuscripts.map(function (m) {
      return '<article class="manuscript-item">' +
               '<div class="manuscript-year">' + m.year + '</div>' +
               '<div>' +
                 '<p class="manuscript-authors">' + m.authors + '</p>' +
                 '<h3 class="manuscript-title">&ldquo;' + m.title + '.&rdquo;</h3>' +
                 '<p class="manuscript-body">' + m.body + '</p>' +
                 '<p class="manuscript-target">' + m.target + '</p>' +
               '</div>' +
             '</article>';
    }).join(''));
  }

  /* ---------------------------------------------------------- journey -- */

  function renderJourney() {
    setHTML('#educationTimeline', D.education.map(function (e) {
      return '<div class="timeline-item">' +
               '<p class="tl-period">' + e.period + '</p>' +
               '<h4 class="tl-title">' + e.degree + '</h4>' +
               '<p class="tl-org">' + e.org + '</p>' +
               '<p class="tl-place">' + e.place + '</p>' +
               (e.score ? '<span class="tl-score">' + e.score + '</span>' : '') +
               (e.score2 ? '<span class="tl-score tl-score-alt">' + e.score2 + '</span>' : '') +
               (e.detail ? '<p class="tl-detail">' + e.detail + '</p>' : '') +
             '</div>';
    }).join(''));

    setHTML('#experienceTimeline', D.experience.map(function (x) {
      return '<div class="timeline-item">' +
               '<p class="tl-period">' + x.period + '</p>' +
               '<h4 class="tl-title">' + x.role + '</h4>' +
               '<p class="tl-org">' + x.org + '</p>' +
               '<p class="tl-place">' + x.place + '</p>' +
               '<ul class="tl-bullets">' +
                 x.bullets.map(function (b) { return '<li>' + b + '</li>'; }).join('') +
               '</ul>' +
               (x.href ? '<a class="tl-link" href="' + x.href + '" target="_blank" rel="noopener">' +
                         svg('github', 12) + 'Repository</a>' : '') +
             '</div>';
    }).join(''));
  }

  /* --------------------------------------------------------- projects -- */

  function renderProjects() {
    setHTML('#projectFilters', D.projectFilters.map(function (f, i) {
      return '<button type="button" class="filter-btn' + (i === 0 ? ' is-active' : '') +
             '" data-filter="' + f + '" aria-pressed="' + (i === 0) + '">' + f + '</button>';
    }).join(''));

    setHTML('#projectGrid', D.projects.map(function (p) {
      return '<article class="project-card' + (p.featured ? ' is-featured' : '') + '" data-cat="' + p.category + '">' +
               '<div class="project-top">' +
                 '<span class="project-cat">' + p.category + '</span>' +
                 (p.featured ? '<span class="project-star" title="Featured">' + svg('star', 14) + '</span>' : '') +
               '</div>' +
               '<h3>' + p.title + '</h3>' +
               '<p class="project-body">' + p.body + '</p>' +
               (p.metrics ? '<div class="project-metrics">' + p.metrics.map(function (m) {
                   return '<div class="metric"><div class="metric-v">' + m.value + '</div>' +
                          '<div class="metric-l">' + m.label + '</div></div>';
                 }).join('') + '</div>' : '') +
               '<div class="project-tags">' + tags(p.tags) + '</div>' +
               '<div class="project-links">' +
                 p.links.map(function (l) {
                   return '<a href="' + l.href + '"' + ext(l.href) + '>' + svg('link', 12) + l.label + '</a>';
                 }).join('') +
               '</div>' +
             '</article>';
    }).join(''));

    var grid = $('#projectGrid');
    $('#projectFilters').addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      var want = btn.dataset.filter;

      $$('.filter-btn').forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });

      $$('.project-card', grid).forEach(function (card) {
        card.classList.toggle('is-hidden', want !== 'All' && card.dataset.cat !== want);
      });
    });
  }

  /* ----------------------------------------------------- achievements -- */

  function renderAchievements() {
    setHTML('#awardList', D.achievements.map(function (a) {
      return '<article class="award-item">' +
               '<div class="award-year">' + a.year + '</div>' +
               '<div>' +
                 '<h3>' + a.title + '</h3>' +
                 '<p class="award-body">' + a.body + '</p>' +
                 (a.href ? '<a class="award-link" href="' + a.href + '" target="_blank" rel="noopener">' +
                           svg('link', 11) + 'View</a>' : '') +
               '</div>' +
               (a.rank ? '<div class="award-rank">' +
                           '<span class="rank-v">' + a.rank + '</span>' +
                           (a.note ? '<span class="rank-n">' + a.note + '</span>' : '') +
                         '</div>' : '<div></div>') +
             '</article>';
    }).join(''));

    setHTML('#certGrid', D.certifications.map(function (c) {
      var i = lbRegister({ img: c.img, title: c.title, caption: c.issuer });
      return '<article class="cert-card">' +
               '<button class="cert-thumb" data-lb="' + i + '" aria-label="Enlarge certificate: ' + attr(c.title) + '">' +
                 '<img src="' + c.img + '" alt="' + attr(c.title) + ' certificate" loading="lazy">' +
               '</button>' +
               '<div class="cert-info">' +
                 '<h4>' + c.title + '</h4>' +
                 '<p class="cert-issuer">' + c.issuer + '</p>' +
                 '<p class="cert-date">' + c.date + '</p>' +
                 '<a class="cert-verify" href="' + c.href + '" target="_blank" rel="noopener">' +
                   svg('check', 11) + 'Verify</a>' +
               '</div>' +
             '</article>';
    }).join(''));
  }

  /* ---------------------------------------------------------- moments -- */

  function renderGallery() {
    var items = D.gallery || [];
    var block = $('#momentsBlock');
    if (!items.length) return;          /* section stays hidden when empty */
    if (block) block.hidden = false;

    setHTML('#galleryGrid', items.map(function (g) {
      var i = lbRegister({ img: g.img, title: g.title, caption: g.caption });
      return '<figure class="gallery-card">' +
               '<button class="gallery-thumb" data-lb="' + i + '" aria-label="Enlarge photo: ' + attr(g.title) + '">' +
                 '<img src="' + g.img + '" alt="' + attr(g.caption) + '" loading="lazy">' +
               '</button>' +
               '<figcaption class="gallery-info">' +
                 '<h4>' + g.title + '</h4>' +
                 (g.date ? '<p class="gallery-date">' + g.date + '</p>' : '') +
                 '<p class="gallery-caption">' + g.caption + '</p>' +
               '</figcaption>' +
             '</figure>';
    }).join(''));
  }

  /* --------------------------------------------------- news & contact -- */

  function renderNews() {
    setHTML('#newsList', D.news.map(function (n) {
      return '<li class="news-item">' +
               '<span class="news-date">' + n.date + '</span>' +
               '<p class="news-body">' + n.body + '</p>' +
             '</li>';
    }).join(''));
  }

  function renderContact() {
    var m = D.meta;

    setHTML('#contactActions',
      '<a class="btn btn-primary" href="mailto:' + m.email + '">' + svg('mail', 15) + m.email + '</a>' +
      '<a class="btn btn-outline" href="' + m.cvPath + '" target="_blank" rel="noopener">' + svg('doc', 15) + 'Curriculum vitae</a>'
    );

    setHTML('#contactMeta',
      '<div class="meta-row"><span class="meta-k">Email</span>' +
        '<span class="meta-v"><a href="mailto:' + m.email + '">' + m.email + '</a></span></div>' +
      '<div class="meta-row"><span class="meta-k">Elsewhere</span><span class="meta-v">' +
        D.links.filter(function (l) { return l.icon !== 'mail'; }).map(function (l) {
          return '<a href="' + l.href + '" target="_blank" rel="noopener">' + l.label + '</a>';
        }).join(' · ') +
      '</span></div>'
    );
  }

  /* ------------------------------------------------------------ theme -- */

  function initTheme() {
    var btn = $('#themeToggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      if (!current) {
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        current = prefersDark ? 'dark' : 'light';
      }
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* -------------------------------------------------------------- nav -- */

  function initNav() {
    var nav    = $('#siteNav');
    var links  = $('#navLinks');
    var toggle = $('#navToggle');

    function closeMenu() {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }

    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    /* scroll state, progress bar, back-to-top, scrollspy */
    var progress = $('#scrollProgress');
    var toTop    = $('#backToTop');
    var sections = $$('main section[id], header[id]');
    var navMap   = {};
    $$('#navLinks a[href^="#"]').forEach(function (a) {
      navMap[a.getAttribute('href').slice(1)] = a;
    });

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y   = window.scrollY || window.pageYOffset;
        var max = document.documentElement.scrollHeight - window.innerHeight;

        nav.classList.toggle('is-scrolled', y > 8);
        if (progress) progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
        if (toTop) toTop.classList.toggle('is-visible', y > 600);

        var probe   = y + window.innerHeight * 0.28;
        var current = null;
        sections.forEach(function (s) {
          if (s.offsetTop <= probe) current = s.id;
        });
        Object.keys(navMap).forEach(function (id) {
          navMap[id].classList.toggle('is-active', id === current);
        });

        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ----------------------------------------------------------- reveal -- */

  function initReveal() {
    var items = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* -------------------------------------------------------- lightbox -- */

  function initLightbox() {
    var box     = $('#lightbox');
    var img     = $('#lightboxImg');
    var caption = $('#lightboxCaption');
    var closeBtn = $('#lightboxClose');
    var lastFocus = null;

    function open(item) {
      lastFocus = document.activeElement;
      img.src = item.img;
      img.alt = strip(item.title);
      caption.innerHTML = item.title + (item.caption ? ' — ' + item.caption : '');
      box.hidden = false;
      requestAnimationFrame(function () { box.classList.add('is-open'); });
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function close() {
      box.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(function () { box.hidden = true; img.src = ''; }, 220);
      if (lastFocus) lastFocus.focus();
    }

    document.addEventListener('click', function (e) {
      var thumb = e.target.closest('[data-lb]');
      if (thumb) { open(LIGHTBOX[Number(thumb.dataset.lb)]); return; }
      if (e.target === box) close();
    });

    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !box.hidden) close();
    });
  }

  /* -------------------------------------------------------------- go -- */

  renderMeta();
  renderAbout();
  renderResearch();
  renderThesis();
  renderManuscripts();
  renderJourney();
  renderProjects();
  renderSkills();
  renderAchievements();
  renderGallery();
  renderNews();
  renderContact();

  initTheme();
  initNav();
  initReveal();
  initLightbox();
})();
