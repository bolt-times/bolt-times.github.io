(() => {
  'use strict';
  const D = window.TT_CONTENT;
  const $ = (selector, root = document) => root.querySelector(selector);
  const params = new URLSearchParams(location.search);
  const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const date = s => new Date(`${s}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const category = id => D.categories.find(c => c.id === id);
  const issue = id => D.issues.find(i => i.id === id);
  const link = (page, search = {}) => `${page}.html${Object.keys(search).length ? '?' + new URLSearchParams(search).toString() : ''}`;
  const articleUrl = a => link('article', { slug: a.slug });
  const categoryUrl = c => link('section', { category: c });
  const renderEmpty = (title, desc) => `<div class="empty"><span class="empty-bolt">⚡</span><h3>${esc(title)}</h3><p>${esc(desc)}</p><a class="btn btn-primary" href="index.html">Back to homepage →</a></div>`;
  const bolt = `<svg viewBox="0 0 64 84" aria-hidden="true"><path d="M37 1 5 46h25L20 82l40-49H34z" fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="2"/></svg>`;
  function header() {
    const nav = D.categories.map(c => `<a href="${categoryUrl(c.id)}">${esc(c.title)}</a>`).join('');
    $('#site-header').innerHTML = `<div class="masthead"><div class="mast-inner"><a class="brand" href="index.html" aria-label="Thunderbolt Times homepage"><span class="brand-bolt">${bolt}</span><span><strong>THUNDERBOLT <em>TIMES</em></strong><small>THE OFFICIAL STUDENT NEWSPAPER FOR ${esc(D.site.school)}</small></span></a><div class="mast-tag">STUDENT STORIES.<br>STUDENT VOICES.</div></div></div><div class="nav-wrap"><nav class="navigation" aria-label="Main navigation"><a class="nav-home" href="index.html">Home</a><div class="nav-links" id="nav-links">${nav}<a href="archive.html">Past Issues</a><a href="about.html">About</a></div><button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle navigation"><span>☰</span> Menu</button></nav></div>`;
    const menu = $('#menu-toggle');
    menu.addEventListener('click', () => {
      const open = $('#nav-links').classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.querySelector('span').textContent = open ? '✕' : '☰';
    });
  }
  function footer() {
    $('#site-footer').innerHTML = `<div class="footer-inside"><a class="footer-brand" href="index.html"><span>⚡</span> THUNDERBOLT TIMES</a><p>${esc(D.site.footerText)}<br><small>© ${new Date().getFullYear()} ${esc(D.site.school)} Newspaper Club</small></p><div><a href="about.html">About</a><a href="archive.html">Archives</a><a href="submit.html">Suggest a Story</a></div></div>`;
  }
  function banner(text, tag = 'THE STUDENT EDITION') { return `<div class="page-banner"><span class="eyebrow">⚡ ${esc(tag)}</span><h1>${esc(text)}</h1><span class="underline"></span></div>`; }
  function card(a) {
    const cat = category(a.category);
    const image = a.image ? `<img loading="lazy" src="${esc(a.image)}" alt="${esc(a.title)}"/>` : `<div class="art-placeholder theme-${esc(a.theme || 'electric')}"><span aria-hidden="true">${esc(a.emoji || '⚡')}</span><div class="art-scribble"></div></div>`;
    return `<article class="story-card"><a href="${articleUrl(a)}" class="card-image" aria-label="Read ${esc(a.title)}">${image}</a><div class="story-content"><span class="story-label">${esc(cat?.title || 'Story')}</span><h3><a href="${articleUrl(a)}">${esc(a.title)}</a></h3><p>${esc(a.excerpt)}</p><div class="story-meta">${date(a.date)} <span>·</span> ${esc(a.minutes)} min read</div><a class="text-link" href="${articleUrl(a)}">Read story <span aria-hidden="true">↗</span></a></div></article>`;
  }
  function tiles() { return D.categories.map(c => `<a class="category-tile" href="${categoryUrl(c.id)}"><span class="tile-icon" aria-hidden="true">${esc(c.icon)}</span><span>${esc(c.title)}</span><span class="tile-arrow" aria-hidden="true">↗</span></a>`).join(''); }
  function breadcrumbs(crumbs) { return `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a>${crumbs.map(c => `<span aria-hidden="true">/</span>${c.href ? `<a href="${c.href}">${esc(c.name)}</a>` : `<span aria-current="page">${esc(c.name)}</span>`}`).join('')}</nav>`; }
  function issueCard(i) {
    const count = D.articles.filter(a => a.issue === i.id).length;
    return `<a class="issue-card" href="${link('issue', { id: i.id })}"><div class="issue-number">${esc(i.label)}</div><div class="issue-icon">⚡</div><h3>${esc(i.title)}</h3><p>${esc(i.note)}</p><div class="issue-bottom">${date(i.date)} <span>${count} stories →</span></div></a>`;
  }
  function home() {
    const latest = D.issues[0];
    const lead = D.articles.find(a => a.feature) || D.articles[0];
    const recent = [...D.articles].sort((a,b) => b.date.localeCompare(a.date)).slice(0, 6);
    $('#app').innerHTML = `<section class="hero-grid"><div class="hero-left"><div class="paper-mark">ISSUE DROP <span>✳</span> NEW STORIES</div><span class="hero-kicker">${esc(latest.label)} · ${date(latest.date)}</span><h1>BIG IDEAS.<br><em>BOLD VOICES.</em></h1><p>${esc(D.site.tagline)} A fresh issue every two weeks.</p><div class="hero-actions"><a class="btn btn-primary" href="${link('issue', { id: latest.id })}">Explore latest issue <span>↗</span></a><a class="btn btn-outline" href="archive.html">Past issues</a></div><div class="hero-doodles" aria-hidden="true">✳ &nbsp; ↗ &nbsp; ✦</div></div><div class="hero-paper"><div class="paper-punches" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div><div class="note-intro">A NOTE FROM THE EDITORS</div><h2>What's the buzz?</h2><p>Welcome to the <strong>Thunderbolt Times!</strong> We're bringing together stories, creativity, curiosity and school spirit—all from the voices that matter most: <u>yours</u>.</p><p>Pick a section below, discover something new, and help shape our next edition.</p><span class="handwritten">Made by students ✎</span><div class="note-bolt">⚡</div></div></section>
    <section class="homepage-section"><div class="section-title"><div><span class="eyebrow">FIND YOUR THING</span><h2>Explore the Times <span class="accent-star">✳</span></h2></div><p>Click a category to dive in.</p></div><div class="category-grid">${tiles()}</div></section>
    <section class="homepage-section featured-block"><div class="section-title"><div><span class="eyebrow">HOT OFF THE PRESS</span><h2>Featured story</h2></div></div><a href="${articleUrl(lead)}" class="featured-story"><div class="feature-art"><div class="feature-bolt">${bolt}</div><span>FEATURED READ ✦</span></div><div class="feature-text"><span class="pill">${esc(category(lead.category).title)} · ${date(lead.date)}</span><h3>${esc(lead.title)}</h3><p>${esc(lead.excerpt)}</p><span class="btn btn-primary">Read the story ↗</span></div></a></section>
    <section class="homepage-section"><div class="section-title"><div><span class="eyebrow">TAKE A PEEK</span><h2>Latest stories</h2></div><a class="view-all" href="archive.html">View all issues →</a></div><div class="stories-grid">${recent.map(card).join('')}</div></section>
    <section class="callout-grid"><div class="callout callout-yellow"><span class="callout-icon">✉</span><div><span class="eyebrow">YOUR VOICE MATTERS</span><h2>Got a story idea?</h2><p>Send us a suggestion for an upcoming edition.</p><a class="btn btn-dark" href="submit.html">Suggestion box ↗</a></div></div><div class="callout callout-paper"><span class="callout-icon">✎</span><div><span class="eyebrow">JOIN THE CREW</span><h2>Help make the news.</h2><p>${esc(D.site.clubMeetingText)}</p><a class="text-link" href="about.html">Meet the newspaper club →</a></div></div></section>`;
  }
  function section() {
    const id = params.get('category'); const c = category(id);
    if (!c) { $('#app').innerHTML = renderEmpty('Section not found', 'Choose a category from the homepage.'); return; }
    const topic = params.get('topic');
    const articles = D.articles.filter(a => a.category === id && (!topic || a.topic === topic)).sort((a,b) => b.date.localeCompare(a.date));
    document.title = `${c.title} | ${D.site.title}`;
    $('#app').innerHTML = `${breadcrumbs([{ name: c.title }])}${banner(topic || c.title, 'EXPLORE THE TIMES')}<div class="section-description">${esc(c.description)}</div><div class="topic-tabs"><a class="topic-tab ${!topic ? 'active' : ''}" href="${categoryUrl(id)}">All ${esc(c.title)}</a>${c.topics.map(t => `<a class="topic-tab ${topic === t ? 'active' : ''}" href="${link('section', { category: id, topic: t })}">${esc(t)}</a>`).join('')}</div><div class="section-title"><div><span class="eyebrow">${articles.length} ${articles.length === 1 ? 'STORY' : 'STORIES'}</span><h2>${topic ? esc(topic) : `Latest in ${esc(c.title)}`}</h2></div></div>${articles.length ? `<div class="stories-grid">${articles.map(card).join('')}</div>` : `<div class="empty"><div class="empty-bolt">✎</div><h3>Coming soon!</h3><p>Student stories for this section will appear here as they are published.</p><a class="btn btn-primary" href="submit.html">Suggest a story ↗</a></div>`}`;
  }
  function renderBody(blocks) {
    return blocks.map(b => {
      switch(b.type) {
        case 'h2': return `<h2>${esc(b.text)}</h2>`;
        case 'h3': return `<h3>${esc(b.text)}</h3>`;
        case 'quote': return `<blockquote>${esc(b.text)}</blockquote>`;
        case 'list': return `<ul>${(b.items || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
        case 'image': return `<figure><img src="${esc(b.src || '')}" alt="${esc(b.alt || '')}" loading="lazy"/><figcaption>${esc(b.caption || '')}</figcaption></figure>`;
        default: return `<p>${esc(b.text || '')}</p>`;
      }
    }).join('');
  }
  function article() {
    const a = D.articles.find(x => x.slug === params.get('slug'));
    if (!a) { $('#app').innerHTML = renderEmpty('Story not found', 'This story may have moved or may not be published yet.'); return; }
    document.title = `${a.title} | ${D.site.title}`;
    const c = category(a.category), i = issue(a.issue);
    const related = D.articles.filter(x => x.slug !== a.slug && (x.category === a.category || x.issue === a.issue)).slice(0, 3);
    $('#app').innerHTML = `${breadcrumbs([{ name: c.title, href: categoryUrl(c.id) }, { name: a.title }])}<div class="article-layout"><article class="full-article"><div class="article-heading"><span class="pill">${esc(c.title)} / ${esc(a.topic)}</span><h1>${esc(a.title)}</h1><p class="article-deck">${esc(a.excerpt)}</p><div class="article-byline">By <strong>${esc(a.author)}</strong> <span>·</span> ${date(a.date)} <span>·</span> ${esc(a.minutes)} min read</div></div>${a.image ? `<div class="article-hero-image"><img src="${esc(a.image)}" alt="${esc(a.title)}"/></div>` : `<div class="article-art theme-${esc(a.theme || 'electric')}"><span>${esc(a.emoji || '⚡')}</span><div class="art-caption">THUNDERBOLT TIMES ✳ STUDENT VOICES</div></div>`}<div class="article-body">${renderBody(a.body)}</div><div class="article-end"><span>⚡ Thanks for reading!</span><button type="button" id="copy-link" class="btn btn-outline">Copy story link</button></div><nav class="article-back"><a class="text-link" href="${categoryUrl(c.id)}">← More ${esc(c.title)}</a></nav></article><aside class="article-sidebar"><div class="sidebar-box"><h3>IN THIS ISSUE <span>⚡</span></h3><p>${esc(i?.label || '')} · ${i ? date(i.date) : ''}</p>${i ? `<a class="sidebar-link" href="${link('issue', { id: i.id })}">See full issue →</a>` : ''}</div><div class="sidebar-box"><h3>KEEP READING</h3>${related.length ? related.map(r => `<a class="related-link" href="${articleUrl(r)}"><span class="related-emoji">${esc(r.emoji || '⚡')}</span><span>${esc(r.title)}<small>${esc(category(r.category).title)}</small></span></a>`).join('') : '<p>More stories are on the way.</p>'}</div><div class="sidebar-box sidebar-suggest"><span>✎</span><h3>Have something to say?</h3><p>Share an idea for the next issue.</p><a class="btn btn-primary" href="submit.html">Suggestion box ↗</a></div></aside></div>`;
    $('#copy-link')?.addEventListener('click', async e => {
      const button = e.currentTarget;
      try { await navigator.clipboard.writeText(location.href); button.textContent = 'Link copied!'; }
      catch { button.textContent = 'Copy the URL from your address bar'; }
    });
  }
  function archive() {
    document.title = `Past Issues | ${D.site.title}`;
    $('#app').innerHTML = `${breadcrumbs([{name:'Past Issues'}])}${banner('The Issue Archive', 'EVERY TWO WEEKS, A NEW CHAPTER')}<p class="section-description">Missed a story? Catch up on earlier editions of Thunderbolt Times.</p><div class="issues-grid">${D.issues.map(issueCard).join('')}</div>`;
  }
  function issuePage() {
    const i = issue(params.get('id'));
    if (!i) { $('#app').innerHTML = renderEmpty('Issue not found', 'Browse the archive to find a published issue.'); return; }
    const articles = D.articles.filter(a => a.issue === i.id);
    document.title = `${i.label}: ${i.title} | ${D.site.title}`;
    $('#app').innerHTML = `${breadcrumbs([{name: 'Past Issues',href:'archive.html'}, {name: i.label}])}${banner(i.title, `${i.label.toUpperCase()} · ${date(i.date).toUpperCase()}`)}<p class="section-description">${esc(i.note)}</p><div class="section-title"><div><span class="eyebrow">THIS EDITION</span><h2>${articles.length} student ${articles.length === 1 ? 'story' : 'stories'}</h2></div><a class="view-all" href="archive.html">← All issues</a></div><div class="stories-grid">${articles.map(card).join('')}</div>`;
  }
  function about() {
    document.title = `About | ${D.site.title}`;
    $('#app').innerHTML = `${breadcrumbs([{name:'About'}])}${banner('Made by Students. For Students.', 'GET TO KNOW THE TEAM')}<div class="info-grid"><div class="notebook-info"><span class="eyebrow">OUR MISSION</span><h2>Student stories told by student voices.</h2><p>Thunderbolt Times is an online school newspaper celebrating creative work, school events, opinions, and interesting ideas from the TMS community.</p><p>Our newspaper is published once every two weeks. Writers, editors, artists, photographers, puzzle-makers and curious students all have a place here.</p><div class="quote-line">“Your voice belongs here.”</div></div><div class="info-aside"><div class="info-card"><span class="large-emoji">✎</span><h3>Join Newspaper Club</h3><p>${esc(D.site.clubMeetingText)}</p><p>Meeting information may change; please confirm with your school's adviser.</p></div><div class="info-card"><span class="large-emoji">⚡</span><h3>What we publish</h3><p>Articles, reviews, interviews, comic strips, games, and stories looking back at the school year.</p></div></div></div>`;
  }
  function submit() {
    document.title = `Suggestion Box | ${D.site.title}`;
    const formUrl = D.site.suggestionFormUrl;
    $('#app').innerHTML = `${breadcrumbs([{name:'Suggestion Box'}])}${banner('Your Story Starts Here', 'THE SUGGESTION BOX')}<div class="submit-layout"><div class="submit-paper"><span class="eyebrow">DEAR THUNDERBOLT TIMES...</span><h2>Got an idea?</h2><p>Tell our newspaper team what you would like to read in a future issue. Ideas can include school events, student achievements, reviews, interviews, comics, games, or something entirely new!</p>${formUrl ? `<a class="btn btn-primary" href="${esc(formUrl)}" target="_blank" rel="noopener noreferrer">Open suggestion form ↗</a>` : `<div class="form-not-configured"><strong>Suggestion form coming soon.</strong><p>The school newspaper team will enable this feature after approving a submission form.</p></div>`}<p class="privacy-note">Please do not include passwords, personal contact information, or other private details. Submission guidelines and privacy rules are set by the school.</p></div><div class="submit-decoration"><span>✎</span><div>IDEAS<br>MAKE<br>NEWS.</div><span>⚡</span></div></div>`;
  }
  const routes = {home, section, article, archive, issue:issuePage, about, submit};
  function init() {
    header(); footer();
    const page = document.body.dataset.page || 'home';
    (routes[page] || home)();
    if (page === 'home') document.title = D.site.title + ' | Student Stories. Student Voices.';
  }
  document.addEventListener('DOMContentLoaded', init);
})();
