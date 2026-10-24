(function () {
  'use strict';

  var PAGE = document.body.getAttribute('data-page') || '';
  var params = new URLSearchParams(location.search);
  var lang = 'en';
  try { lang = localStorage.getItem('hodan-lang') || 'en'; } catch (e) {}
  var defaults = {};

  /* ---------- helpers ---------- */
  function t(key, en) { return (lang === 'so' && T_SO[key]) || en || defaults[key] || key; }
  function L(obj) { return (lang === 'so' && obj.so) || obj.en; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function slug(s) { return s.toLowerCase().replace(/^(prof|dr)\.\s*/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function icon(id, color, size) { size = size || 26; return '<svg width="' + size + '" height="' + size + '" fill="none" stroke="' + (color || 'currentColor') + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><use href="#' + id + '"/></svg>'; }
  function specById(id) { for (var i = 0; i < SPECS.length; i++) if (SPECS[i].id === id) return SPECS[i]; return null; }
  function docById(id) { for (var i = 0; i < DOCTORS.length; i++) if (slug(DOCTORS[i].name) === id) return DOCTORS[i]; return null; }
  function specName(s) { return lang === 'so' ? s.so : s.en; }
  function specDesc(s) { return lang === 'so' ? s.dso : s.den; }
  function initials(name) { var p = name.replace(/^(Prof\.|Dr\.)\s*/, '').split(' '); return (p[0][0] + (p[1] ? p[1][0] : '')).toUpperCase(); }
  function $(id) { return document.getElementById(id); }
  var TINT = ['#eef0f2', '#fdf1dc', '#fde8e9', '#e7f7ee', '#eee8fb', '#e6f2fb'];
  var INK = ['#3a4349', '#c47a08', '#e8262d', '#1f8a4c', '#6b46c1', '#1d6fb0'];

  /* ---------- header / footer ---------- */
  function header() {
    var groups = GROUPS.map(function (g) {
      return '<div><b style="display:block;padding:6px 12px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--muted)">' + esc(L(g)) + '</b>' +
        SPECS.filter(function (s) { return s.group === g.id; }).map(function (s) {
          return '<a href="speciality.html?id=' + s.id + '"><span class="dot"></span>' + esc(specName(s)) + '</a>';
        }).join('') + '</div>';
    }).join('');
    var act = function (p) { return PAGE === p ? ' active' : ''; };
    return '' +
      '<div class="topbar"><div class="container"><div class="topbar-left">' +
        '<a href="tel:' + HH.tel + '" class="emer"><span data-i18n="emergency24">24/7 Emergency</span>: ' + HH.phone + '</a>' +
        '<a href="mailto:' + HH.email + '" class="hide-sm">' + HH.email + '</a>' +
        '<span class="hide-sm">' + esc(L(HH.address)) + '</span>' +
      '</div><div class="topbar-right"><div class="lang-switch" role="group" aria-label="Language">' +
        '<button type="button" data-lang="en">EN</button><button type="button" data-lang="so">SO</button></div></div></div></div>' +
      '<header class="main" id="header"><div class="container">' +
        '<a href="index.html" class="logo" aria-label="Hodan Hospital home"><img src="assets/logo.png" alt="Hodan Hospital" width="551" height="181" /></a>' +
        '<nav class="menu" aria-label="Main">' +
          '<a href="index.html" class="' + act('home') + '" data-i18n="navHome">Home</a>' +
          '<div class="dropdown' + act('about') + '"><button type="button"><span data-i18n="navAbout">About Us</span>' + icon('i-chev', null, 16) + '</button>' +
            '<div class="dropdown-panel small"><a href="about.html"><span class="dot"></span><span data-i18n="navWho">Who We Are</span></a>' +
            '<a href="about.html#management"><span class="dot"></span><span data-i18n="navMgmt">Management</span></a>' +
            '<a href="about.html#news"><span class="dot"></span><span data-i18n="navNews">News</span></a></div></div>' +
          '<div class="dropdown' + act('specialities') + act('speciality') + '"><button type="button"><span data-i18n="navSpec">Specialities</span>' + icon('i-chev', null, 16) + '</button>' +
            '<div class="dropdown-panel mega">' + groups + '<a class="all" href="specialities.html" data-i18n="navAllSpecs">All specialities →</a></div></div>' +
          '<a href="doctors.html" class="' + act('doctors') + act('doctor') + '" data-i18n="navDoctors">Doctors</a>' +
          '<a href="health-checkups.html" class="' + act('checkups') + '" data-i18n="navChecks">Health Checkups</a>' +
          '<div class="dropdown' + act('services') + act('intl') + '"><button type="button"><span data-i18n="navPatients">Patients &amp; Visitors</span>' + icon('i-chev', null, 16) + '</button>' +
            '<div class="dropdown-panel small"><a href="services.html"><span class="dot"></span><span data-i18n="navServices">Medical Services</span></a>' +
            '<a href="international-patients.html"><span class="dot"></span><span data-i18n="navIntl">Diaspora Patients</span></a>' +
            '<a href="book-appointment.html"><span class="dot"></span><span data-i18n="bookAppt">Book Appointment</span></a>' +
            '<a href="tel:' + HH.tel + '"><span class="dot" style="background:var(--danger)"></span><span data-i18n="emergency24">24/7 Emergency</span></a></div></div>' +
          '<a href="contact.html" class="' + act('contact') + '" data-i18n="navContact">Contact</a>' +
        '</nav>' +
        '<div class="header-cta"><a href="tel:' + HH.tel + '" class="btn btn-ghost">' + icon('i-phone', null, 18) + ' <span data-i18n="callUs">Call Us</span></a>' +
          '<a href="book-appointment.html" class="btn btn-red" data-i18n="bookAppt">Book Appointment</a>' +
          '<button class="burger" type="button" aria-label="Open menu" id="burger">' + icon('i-menu', '#3a4349', 26) + '</button></div>' +
      '</div></header>' +
      '<div class="drawer" id="drawer" aria-hidden="true"><div class="shade" data-close></div><div class="panel">' +
        '<button class="close" type="button" aria-label="Close menu" data-close>&times;</button><div style="clear:both;height:10px"></div>' +
        '<a href="index.html" data-i18n="navHome">Home</a><a href="about.html" data-i18n="navAbout">About Us</a>' +
        '<a href="specialities.html" data-i18n="navSpec">Specialities</a>' +
        '<a href="doctors.html" data-i18n="navDoctors">Doctors</a><a href="health-checkups.html" data-i18n="navChecks">Health Checkups</a>' +
        '<a href="services.html" data-i18n="navServices">Medical Services</a><a href="international-patients.html" data-i18n="navIntl">Diaspora Patients</a>' +
        '<a href="book-appointment.html" data-i18n="bookAppt">Book Appointment</a><a href="contact.html" data-i18n="navContact">Contact</a>' +
        '<a href="tel:' + HH.tel + '" class="btn btn-red" style="margin-top:20px;border:0">' + HH.phone + '</a>' +
      '</div></div>';
  }

  function footer() {
    var so = HH.social;
    return '<footer><div class="container"><div class="foot-grid"><div>' +
      '<a href="index.html" class="logo"><img src="assets/logo-white.png" alt="Hodan Hospital" width="551" height="181" /></a>' +
      '<p class="about-txt" data-i18n="footAbout">A premier private healthcare institution in Mogadishu, dedicated to excellence in medical care and innovation.</p>' +
      '<div class="socials">' +
        '<a href="' + so.facebook + '" target="_blank" rel="noopener" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z"/></svg></a>' +
        '<a href="' + so.x + '" target="_blank" rel="noopener" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.9 22H3l7-8L2.5 2h6.1l4.2 5.6zm-1 18h1.6L7 3.9H5.3z"/></svg></a>' +
        '<a href="' + so.instagram + '" target="_blank" rel="noopener" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg></a>' +
        '<a href="' + so.youtube + '" target="_blank" rel="noopener" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M22 8.2a3 3 0 0 0-2-2C18.2 5.7 12 5.7 12 5.7s-6.2 0-8 .5a3 3 0 0 0-2 2A31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2 2c1.8.5 8 .5 8 .5s6.2 0 8-.5a3 3 0 0 0 2-2 31 31 0 0 0 .3-3.8 31 31 0 0 0-.3-3.8zM10 15V9l5.2 3z"/></svg></a>' +
      '</div></div>' +
      '<div><h4 data-i18n="quickLinks">Quick Links</h4><ul>' +
        '<li><a href="about.html" data-i18n="navAbout">About Us</a></li><li><a href="doctors.html" data-i18n="findDoctor">Find a Doctor</a></li>' +
        '<li><a href="health-checkups.html" data-i18n="navChecks">Health Checkups</a></li><li><a href="services.html" data-i18n="navServices">Medical Services</a></li>' +
        '<li><a href="international-patients.html" data-i18n="navIntl">Diaspora Patients</a></li><li><a href="book-appointment.html" data-i18n="bookAppt">Book Appointment</a></li>' +
      '</ul></div>' +
      '<div><h4 data-i18n="navSpec">Specialities</h4><ul>' + SPECS.slice(0, 7).map(function (s) {
        return '<li><a href="speciality.html?id=' + s.id + '">' + esc(specName(s)) + '</a></li>';
      }).join('') + '</ul></div>' +
      '<div><h4 data-i18n="contactEyebrow">Contact Us</h4><ul><li>' + esc(L(HH.address)) + '</li>' +
        '<li><a href="tel:' + HH.tel + '">' + HH.phone + '</a></li><li><a href="mailto:' + HH.email + '">' + HH.email + '</a></li>' +
        '<li data-i18n="hoursVal">Open 24 hours, 7 days</li></ul></div>' +
      '</div><div class="foot-bottom"><span>© ' + new Date().getFullYear() + ' Hodan Hospital. <span data-i18n="rights">All rights reserved.</span></span>' +
      '<span data-i18n="disclaimer">Doctor schedules may change. Please call to confirm availability.</span></div></div></footer>' +
      '<div class="float-call"><a class="wa" href="https://wa.me/' + HH.wa + '" target="_blank" rel="noopener" aria-label="WhatsApp"><svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .2-3.3-.7a11.6 11.6 0 0 1-4.6-4c-.4-.5-1-1.8-1-3.3s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.4.9 1.5 2 2.4 1.3 1.2 2.4 1.5 2.8 1.7.3.1.5.1.7-.1l.9-1.1c.2-.3.5-.3.8-.2l2 1c.3.1.5.2.6.3.1.2.1.7-.1 1.3z"/></svg></a>' +
      '<a class="ph" href="tel:' + HH.tel + '" aria-label="Call emergency">' + icon('i-phone', '#fff', 26) + '</a></div>';
  }

  /* ---------- cards ---------- */
  function docCard(d) {
    var s = specById(d.spec), i = SPECS.indexOf(s) % TINT.length, url = 'doctor.html?id=' + slug(d.name);
    var photo = d.photo ? '<img src="' + esc(d.photo) + '" alt="' + esc(d.name) + '" loading="lazy" />' : '<div class="avatar" style="color:' + INK[i] + '">' + initials(d.name) + '</div>';
    return '<article class="doc"><a href="' + url + '" class="doc-photo" style="background:linear-gradient(150deg,' + TINT[i] + ',#fff)"><span class="badge">' + esc(specName(s)) + '</span>' + photo + '</a>' +
      '<div class="doc-body"><h3><a href="' + url + '">' + esc(d.name) + '</a></h3><span class="sp">' + esc(d.role || specName(s)) + '</span>' +
      '<p>' + esc(d.exp ? d.exp + ' experience' : 'Hodan Hospital, Mogadishu') + '</p>' +
      '<a href="book-appointment.html?spec=' + d.spec + '&doc=' + encodeURIComponent(d.name) + '" class="btn btn-blue">' + t('bookAppt', 'Book Appointment') + '</a></div></article>';
  }
  function specCard(s) {
    return '<a href="speciality.html?id=' + s.id + '" class="spec"><div class="ic">' + icon(s.icon, '#3a4349', 28) + '</div><h3>' + esc(specName(s)) +
      '</h3><p>' + esc(specDesc(s)) + '</p><span class="more">' + t('learnMore', 'Learn more') + ' →</span></a>';
  }
  function pkgCard(p) {
    return '<div class="pkg"><div class="top"><span class="ic">' + icon(p.icon, '#c47a08', 26) + '</span><div><h3>' + esc(L(p)) + '</h3><span class="count">' + p.tests.length + ' ' + t('testsIncl', 'tests included') + '</span></div></div>' +
      '<ul>' + p.tests.map(function (x) { return '<li>' + icon('i-check', '#1f8a4c', 15) + esc(x) + '</li>'; }).join('') + '</ul>' +
      '<div class="price">' + t('priceCall', 'Price: call for details') + '</div>' +
      '<a href="book-appointment.html?pkg=' + p.id + '" class="btn btn-red">' + t('bookCheck', 'Book this Check-up') + '</a></div>';
  }
  function facCard(f) { var x = f[lang] || f.en; return '<div class="fac"><div class="ic">' + icon(f.icon, '#fff', 24) + '</div><h3>' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></div>'; }
  function newsCard(n) {
    return '<article class="news"><div class="thumb">' + icon('i-news', '#fff', 46) + '</div><div class="body"><small>' + esc(n.date) + '</small><h3>' + esc(L(n)) + '</h3><p>' + esc(n.pen) +
      '</p><a class="more" href="' + n.url + '" target="_blank" rel="noopener">' + t('readMore', 'Read the story →') + '</a></div></article>';
  }

  /* ---------- section renderers (run when their container exists) ---------- */
  var specGroup = '';
  function renderSpecGrid() {
    var grid = $('specGrid'); if (!grid) return;
    var tabs = $('specTabs');
    if (tabs) {
      tabs.innerHTML = '<button type="button" data-group="" class="' + (specGroup ? '' : 'active') + '">' + t('all', 'All') + '</button>' + GROUPS.map(function (g) {
        return '<button type="button" data-group="' + g.id + '" class="' + (specGroup === g.id ? 'active' : '') + '">' + esc(L(g)) + '</button>';
      }).join('');
    }
    grid.innerHTML = SPECS.filter(function (s) { return !specGroup || s.group === specGroup; }).map(specCard).join('');
  }
  function renderDocTrack() { var el = $('docTrack'); if (el) el.innerHTML = DOCTORS.map(docCard).join(''); }
  function renderPkgs() {
    var el = $('pkgGrid'); if (!el) return;
    var n = +el.getAttribute('data-limit') || PACKAGES.length;
    el.innerHTML = PACKAGES.slice(0, n).map(pkgCard).join('');
  }
  function renderFac() { var el = $('facGrid'); if (el) el.innerHTML = FACILITIES.map(facCard).join(''); }
  function renderNews() { var el = $('newsGrid'); if (el) el.innerHTML = NEWS.map(newsCard).join(''); }
  function renderMgmt() {
    var el = $('mgmtGrid'); if (!el) return;
    el.innerHTML = MANAGEMENT.map(function (m) {
      return '<div class="card"><div class="avatar">' + initials(m.name) + '</div><div><b>' + esc(m.name) + '</b><span>' + esc(L(m)) + '</span></div></div>';
    }).join('');
  }
  function specOptions(sel, firstLabel, onlyWithDocs) {
    if (!sel) return;
    var cur = sel.value;
    sel.innerHTML = '<option value="">' + firstLabel + '</option>' + SPECS.filter(function (s) {
      return !onlyWithDocs || DOCTORS.some(function (d) { return d.spec === s.id; });
    }).map(function (s) { return '<option value="' + s.id + '">' + esc(specName(s)) + '</option>'; }).join('');
    sel.value = cur;
  }
  function docOptions(sel, spec) {
    if (!sel) return;
    var cur = sel.value;
    sel.innerHTML = '<option value="">' + t('anyDoctor', 'Any doctor') + '</option>' + DOCTORS.filter(function (d) { return !spec || d.spec === spec; })
      .map(function (d) { return '<option>' + esc(d.name) + '</option>'; }).join('');
    sel.value = cur;
  }

  /* home finder */
  function renderFinder() {
    if (!$('finder')) return;
    specOptions($('finderSpec'), t('fSpec', 'Select speciality'));
    docOptions($('finderDoc'), $('finderSpec').value);
  }

  /* doctors list page */
  function renderDoctorList() {
    var grid = $('docGrid'); if (!grid) return;
    specOptions($('docFilter'), t('allSpecs', 'All specialities'), true);
    var q = $('docSearch').value.trim().toLowerCase(), f = $('docFilter').value;
    var list = DOCTORS.filter(function (d) {
      var s = specById(d.spec), hay = (d.name + ' ' + s.en + ' ' + s.so + ' ' + (d.role || '')).toLowerCase();
      return (!f || d.spec === f) && (!q || hay.indexOf(q) > -1);
    });
    $('docCount').textContent = list.length + ' ' + t('docsFound', 'doctors found');
    grid.innerHTML = list.length ? list.map(docCard).join('') : '<div class="empty">' + t('noDocs', 'No doctor found. Please try another search.') + '</div>';
  }

  /* speciality detail */
  function renderSpeciality() {
    var root = $('specDetail'); if (!root) return;
    var s = specById(params.get('id')) || SPECS[0];
    document.title = s.en + ' | Hodan Hospital Mogadishu';
    $('pageTitle').textContent = specName(s);
    $('pageSub').textContent = specDesc(s);
    $('crumbName').textContent = specName(s);
    var docs = DOCTORS.filter(function (d) { return d.spec === s.id; });
    root.innerHTML =
      '<h2>' + t('overview', 'Overview') + '</h2><p>' + esc(lang === 'so' ? s.dso : s.oen) + '</p>' +
      '<h2>' + t('treatments', 'Treatments & Services') + '</h2><div class="treat">' + s.items.map(function (x) {
        return '<div>' + icon('i-check', '#c47a08', 18) + esc(x) + '</div>';
      }).join('') + '</div>' +
      '<h2>' + t('ourSpecialists', 'Our Specialists') + '</h2>' + (docs.length ? '<div class="doc-grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">' + docs.map(docCard).join('') + '</div>'
        : '<p>' + t('noDocsDept', 'Please call our call center to find out which doctors are available in this department.') + '</p>') +
      '<h2>' + t('faq', 'Frequently Asked Questions') + '</h2><div class="faq">' +
        '<details><summary>How do I book an appointment in ' + esc(s.en) + '?</summary><p>Call ' + HH.phone + ', send us a WhatsApp message, or use the online appointment form. Our call center will confirm the date and doctor.</p></details>' +
        '<details><summary>What should I bring to my first visit?</summary><p>Bring an ID, any previous medical reports, test results or scans, and a list of the medicines you take.</p></details>' +
        '<details><summary>What if it is an emergency?</summary><p>Our emergency room is open 24 hours a day. Call ' + HH.phone + ' or come straight to the hospital on Abdikassim Road.</p></details>' +
      '</div>';
    $('otherSpecs').innerHTML = SPECS.map(function (x) {
      return '<li><a href="speciality.html?id=' + x.id + '" class="' + (x.id === s.id ? 'on' : '') + '">' + esc(specName(x)) + '</a></li>';
    }).join('');
    $('specBook').href = 'book-appointment.html?spec=' + s.id;
  }

  /* doctor profile */
  function renderDoctor() {
    var root = $('docProfile'); if (!root) return;
    var d = docById(params.get('id')) || DOCTORS[0], s = specById(d.spec), i = SPECS.indexOf(s) % TINT.length;
    document.title = d.name + ' | ' + s.en + ' | Hodan Hospital';
    $('pageTitle').textContent = d.name;
    $('pageSub').textContent = (d.role || s.en) + ', Hodan Hospital Mogadishu';
    $('crumbName').textContent = d.name;
    var photo = d.photo ? '<img src="' + esc(d.photo) + '" alt="' + esc(d.name) + '" />' : '<div class="avatar" style="color:' + INK[i] + '">' + initials(d.name) + '</div>';
    var book = 'book-appointment.html?spec=' + d.spec + '&doc=' + encodeURIComponent(d.name);
    root.innerHTML =
      '<div class="profile-card"><div class="doc-photo" style="background:linear-gradient(150deg,' + TINT[i] + ',#fff)">' + photo + '</div>' +
        '<div class="in"><a class="btn btn-red" href="' + book + '">' + t('bookAppt', 'Book Appointment') + '</a>' +
        '<a class="btn btn-ghost" href="tel:' + HH.tel + '">' + icon('i-phone', null, 18) + ' ' + HH.phone + '</a></div></div>' +
      '<div><h2 style="font-size:26px;color:var(--primary-dark)">' + esc(d.name) + '</h2><p style="color:var(--accent);font-weight:600">' + esc(d.role || specName(s)) + '</p>' +
        '<dl class="kv"><dt>' + t('speciality', 'Speciality') + '</dt><dd><a href="speciality.html?id=' + s.id + '">' + esc(specName(s)) + '</a></dd>' +
        (d.exp ? '<dt>' + t('experience', 'Experience') + '</dt><dd>' + esc(d.exp) + '</dd>' : '') +
        '<dt>' + t('hospital', 'Hospital') + '</dt><dd>Hodan Hospital</dd><dt>' + t('location', 'Location') + '</dt><dd>' + esc(L(HH.address)) + '</dd></dl>' +
        '<h3 style="color:var(--primary-dark);margin-bottom:8px">' + t('aboutDoc', 'About') + '</h3><p style="color:var(--muted)">' +
          esc(d.note || (d.name + ' is part of the ' + s.en + ' department at Hodan Hospital. ' + s.den)) + '</p>' +
        '<h3 style="color:var(--primary-dark);margin:24px 0 10px">' + t('treatments', 'Treatments & Services') + '</h3><div class="treat">' +
          s.items.slice(0, 6).map(function (x) { return '<div>' + icon('i-check', '#c47a08', 18) + esc(x) + '</div>'; }).join('') + '</div>' +
        '<p class="note">' + t('disclaimer', 'Doctor schedules may change. Please call to confirm availability.') + '</p></div>';
    var others = DOCTORS.filter(function (x) { return x.spec === d.spec && x !== d; });
    $('relatedWrap').style.display = others.length ? '' : 'none';
    $('related').innerHTML = others.map(docCard).join('');
  }

  /* appointment form */
  function renderForm() {
    var form = $('apptForm'); if (!form) return;
    specOptions($('fDept'), t('optSelect', 'Select'));
    docOptions($('fDoc'), $('fDept').value);
    var pk = $('fPkg');
    if (pk) {
      var cur = pk.value;
      pk.innerHTML = '<option value="">-</option>' + PACKAGES.map(function (p) { return '<option value="' + p.id + '">' + esc(L(p)) + '</option>'; }).join('');
      pk.value = cur;
    }
  }

  function renderAll() {
    document.documentElement.lang = lang;
    $('site-header').innerHTML = header();
    $('site-footer').innerHTML = footer();
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in defaults)) defaults[k] = el.innerHTML;
      el.innerHTML = t(k);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (!(k in defaults)) defaults[k] = el.placeholder;
      el.placeholder = t(k);
    });
    document.querySelectorAll('.lang-switch button').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-lang') === lang); });
    $('burger').addEventListener('click', function () { toggleDrawer(true); });
    renderSpecGrid(); renderDocTrack(); renderPkgs(); renderFac(); renderNews(); renderMgmt();
    renderFinder(); renderDoctorList(); renderSpeciality(); renderDoctor(); renderForm();
  }

  function toggleDrawer(open) { var d = $('drawer'); d.classList.toggle('open', open); d.setAttribute('aria-hidden', String(!open)); }

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    var el;
    if ((el = e.target.closest('[data-lang]'))) {
      lang = el.getAttribute('data-lang');
      try { localStorage.setItem('hodan-lang', lang); } catch (err) {}
      renderAll(); return;
    }
    if ((el = e.target.closest('#specTabs [data-group]'))) { specGroup = el.getAttribute('data-group'); renderSpecGrid(); return; }
    if ((el = e.target.closest('.finder-tabs [data-tab]'))) {
      document.querySelectorAll('.finder-tabs button').forEach(function (b) { b.classList.toggle('active', b === el); });
      var tab = el.getAttribute('data-tab');
      if (tab === 'appt') location.href = 'book-appointment.html';
      if (tab === 'check') location.href = 'health-checkups.html';
      return;
    }
    if ((el = e.target.closest('[data-car]'))) {
      var tr = $(el.getAttribute('data-car'));
      tr.scrollBy({ left: (el.getAttribute('data-dir') === 'next' ? 1 : -1) * tr.clientWidth * 0.8, behavior: 'smooth' });
      return;
    }
    if (e.target.closest('[data-close]')) toggleDrawer(false);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggleDrawer(false); });
  window.addEventListener('scroll', function () { var h = $('header'); if (h) h.classList.toggle('scrolled', window.scrollY > 10); }, { passive: true });

  /* ---------- page setup ---------- */
  renderAll();

  if ($('finder')) {
    $('finderSpec').addEventListener('change', function () { docOptions($('finderDoc'), this.value); });
    $('finder').addEventListener('submit', function (e) {
      e.preventDefault();
      var doc = $('finderDoc').value;
      if (doc) { location.href = 'doctor.html?id=' + slug(doc); return; }
      location.href = 'doctors.html' + ($('finderSpec').value ? '?spec=' + $('finderSpec').value : '');
    });
  }

  if ($('docGrid')) {
    if (params.get('spec')) $('docFilter').value = params.get('spec');
    if (params.get('q')) $('docSearch').value = params.get('q');
    renderDoctorList();
    $('docSearch').addEventListener('input', renderDoctorList);
    $('docFilter').addEventListener('change', renderDoctorList);
  }

  var form = $('apptForm');
  if (form) {
    var msg = $('formMsg');
    if (params.get('spec')) { $('fDept').value = params.get('spec'); docOptions($('fDoc'), params.get('spec')); }
    if (params.get('doc')) $('fDoc').value = params.get('doc');
    if (params.get('pkg') && $('fPkg')) $('fPkg').value = params.get('pkg');
    $('fDept').addEventListener('change', function () { docOptions($('fDoc'), this.value); });
    var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    $('fDate').min = today.toISOString().slice(0, 10);
    var buildText = function () {
      var f = form.elements, s = specById(f.dept.value), p = null;
      if (f.pkg) PACKAGES.forEach(function (x) { if (x.id === f.pkg.value) p = x; });
      if (!f.name.value.trim() || !f.phone.value.trim()) {
        msg.style.display = 'block'; msg.style.background = '#fde8e9'; msg.style.color = '#a3141a'; msg.textContent = t('formErr', 'Please enter your name and phone number.');
        return null;
      }
      msg.style.display = 'block'; msg.style.background = '#e7f7ee'; msg.style.color = '#146c3c';
      msg.textContent = t('formOk', 'Thank you! Your request is ready, please press send to complete it.');
      return 'Appointment request - Hodan Hospital\nName: ' + f.name.value.trim() + '\nPhone: ' + f.phone.value.trim() +
        '\nDepartment: ' + (s ? s.en : '-') + '\nDoctor: ' + (f.doctor.value || 'Any') + (p ? '\nHealth check-up: ' + p.en : '') +
        '\nPreferred date: ' + (f.date.value || '-') + '\nGender: ' + (f.gender.value || '-') + '\nReason: ' + (f.message.value.trim() || '-');
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var txt = buildText(); if (!txt) return;
      location.href = 'mailto:' + HH.email + '?subject=' + encodeURIComponent('Appointment Request') + '&body=' + encodeURIComponent(txt);
    });
    $('sendWa').addEventListener('click', function () {
      var txt = buildText(); if (!txt) return;
      window.open('https://wa.me/' + HH.wa + '?text=' + encodeURIComponent(txt), '_blank', 'noopener');
    });
  }

  /* hero slider */
  var slides = document.querySelectorAll('.slide');
  if (slides.length) {
    var dots = $('dots'), idx = 0, timer;
    var go = function (i) {
      idx = (i + slides.length) % slides.length;
      slides.forEach(function (s, j) { s.classList.toggle('active', j === idx); });
      dots.querySelectorAll('button').forEach(function (b, j) { b.classList.toggle('active', j === idx); });
      clearInterval(timer); timer = setInterval(function () { go(idx + 1); }, 6000);
    };
    slides.forEach(function (_, i) {
      var b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', 'Slide ' + (i + 1));
      b.addEventListener('click', function () { go(i); }); dots.appendChild(b);
    });
    document.querySelector('.hero-arrow.prev').addEventListener('click', function () { go(idx - 1); });
    document.querySelector('.hero-arrow.next').addEventListener('click', function () { go(idx + 1); });
    go(0);
  }

  /* reveal + counters */
  function countUp(el) {
    var end = +el.getAttribute('data-count'), pre = el.getAttribute('data-prefix') || '', suf = el.getAttribute('data-suffix') || '', start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / 1400, 1);
      el.textContent = pre + Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        en.target.querySelectorAll('[data-count]').forEach(countUp);
        io.unobserve(en.target);
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('[data-count]').forEach(countUp);
  }
})();
