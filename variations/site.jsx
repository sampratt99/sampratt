// Shared multi-page site harness used by all three variations.
// Each variation supplies a `theme` object (colors, fonts) + a `tokens`
// object (page-specific class hooks) and the `MakeSite(theme)` factory
// renders the chrome and switches pages via internal state.

window.makeSite = function makeSite(theme) {
  const D = window.SamData;
  const T = theme;

  const PAGES = [
  { id: 'home', label: 'Home' },
  { id: 'publications', label: 'Publications' },
  { id: 'writing', label: 'Writing' },
  { id: 'press', label: 'Press' },
  { id: 'cv', label: 'CV' }];


  function FadeIn({ children, delay = 0, k }) {
    const ref = React.useRef(null);
    const [vis, setVis] = React.useState(false);
    React.useEffect(() => {
      setVis(false);
      const t = setTimeout(() => setVis(true), 30 + delay);
      return () => clearTimeout(t);
    }, [k]);
    return (
      <div ref={ref} style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : 'translateY(8px)',
        transition: `opacity .55s cubic-bezier(.2,.7,.3,1), transform .55s cubic-bezier(.2,.7,.3,1)`
      }}>{children}</div>);

  }

  // Scroll-triggered reveal — fades in once when the element first enters
  // the viewport. `from` controls the entrance direction (up, left, right).
  function Reveal({ children, delay = 0, from = 'up', style }) {
    const ref = React.useRef(null);
    const [vis, setVis] = React.useState(false);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVis(true);
            io.disconnect();
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
      io.observe(el);
      const fallback = setTimeout(() => setVis(true), 600);
      return () => {io.disconnect();clearTimeout(fallback);};
    }, []);
    const offset = from === 'left' ? 'translateX(-32px)' :
    from === 'right' ? 'translateX(32px)' :
    'translateY(28px)';
    return (
      <div ref={ref} style={{
        ...(style || {}),
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : offset,
        transition: `opacity .8s cubic-bezier(.2,.7,.3,1) ${delay}ms, transform .8s cubic-bezier(.2,.7,.3,1) ${delay}ms`
      }}>{children}</div>);

  }

  function Nav({ active, setActive }) {
    return (
      <header style={T.headerStyle}>
        <div style={T.headerInner}>
        <a onClick={() => setActive('home')} style={T.brandStyle}>
          <span style={T.brandPrimary}>Sam Pratt</span>
          <span style={T.brandSecondary}>UCLA Psychology</span>
        </a>
        <nav style={T.navStyle}>
          {PAGES.map((p) => {
              const isActive = active === p.id;
              return (
                <a key={p.id} onClick={() => setActive(p.id)}
                style={isActive ? T.navItemActive : T.navItem}
                onMouseEnter={(e) => {if (!isActive) Object.assign(e.currentTarget.style, T.navItemHover);}}
                onMouseLeave={(e) => {if (!isActive) Object.assign(e.currentTarget.style, T.navItem);}}>
                {p.label}</a>);

            })}
          <a href={D.links.wchs} target="_blank" rel="noopener" className="btn-primary" style={T.navExternal}>
            Words Can Harm Scale <span style={{ marginLeft: 4 }}>↗</span>
          </a>
          <a href={D.links.newsletter} target="_blank" rel="noopener" className="btn-primary" style={T.navExternal}>
            Newsletter <span style={{ marginLeft: 4 }}>↗</span>
          </a>
        </nav>
        </div>
      </header>);

  }

  function PageHome({ setActive }) {
    const [hoverChapter, setHoverChapter] = React.useState(null);
    return (
      <FadeIn k="home">
        {/* ── 01 · Hero — static, top of page ───────────────────────────── */}
        <div style={{ position: 'relative', ...T.heroWrap }}>
          <div className="home-grid" style={{ ...T.homeGrid, position: 'relative', zIndex: 1 }}>
            <div style={T.homePhotoWrap}>
              <div style={T.homePhoto}>
                <img src="assets/pratt_headshot.png" alt="Sam Pratt" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
            <div style={T.homeText}>
              <div style={T.homeEyebrow}>{D.role} · {D.affiliation}</div>
              <h1 className="home-name" style={T.homeName}>Sam Pratt</h1>
              <p className="prose home-bio" style={T.homeBio} dangerouslySetInnerHTML={{ __html: D.bio }} />
              <div style={T.homeLinkRow}>
                <button type="button" onClick={(e) => {
                  navigator.clipboard?.writeText(D.email);
                  const el = e.currentTarget;
                  const lbl = el.querySelector('.email-label');
                  if (!lbl) return;
                  const orig = lbl.textContent;
                  lbl.textContent = 'Copied!';
                  clearTimeout(el._t);
                  el._t = setTimeout(() => {lbl.textContent = orig;}, 1400);
                }} style={T.socialBtnPrimary}
                onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-1px)';e.currentTarget.style.boxShadow = '0 6px 18px rgba(20,28,54,0.22)';}}
                onMouseLeave={(e) => {e.currentTarget.style.transform = 'none';e.currentTarget.style.boxShadow = '0 1px 0 rgba(21,25,42,0.06)';}}
                aria-label={`Copy email ${D.email}`} title="Click to copy">
                  <svg style={T.socialBtnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="m3 7 9 6 9-6"></path>
                  </svg>
                  <span className="email-label">{D.email}</span>
                </button>
                <a href={D.links.scholar} target="_blank" rel="noopener" style={T.socialBtn}
                onMouseEnter={(e) => {e.currentTarget.style.background = 'rgba(31,42,74,0.06)';e.currentTarget.style.borderColor = 'rgba(21,25,42,0.32)';}}
                onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent';e.currentTarget.style.borderColor = 'rgba(21,25,42,0.18)';}}>
                  <svg style={T.socialBtnIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2 1 9l4 2.18v6L12 21l7-3.82v-6L21 10v7h2V9z"></path>
                    <circle cx="12" cy="14.5" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.4"></circle>
                  </svg>
                  <span>Scholar</span>
                </a>
                <a href={D.links.twitter} target="_blank" rel="noopener" style={T.socialBtn}
                onMouseEnter={(e) => {e.currentTarget.style.background = 'rgba(31,42,74,0.06)';e.currentTarget.style.borderColor = 'rgba(21,25,42,0.32)';}}
                onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent';e.currentTarget.style.borderColor = 'rgba(21,25,42,0.18)';}}>
                  <svg style={T.socialBtnIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  <span>Twitter</span>
                </a>
                <a href={D.links.linkedin} target="_blank" rel="noopener" style={T.socialBtn}
                onMouseEnter={(e) => {e.currentTarget.style.background = 'rgba(31,42,74,0.06)';e.currentTarget.style.borderColor = 'rgba(21,25,42,0.32)';}}
                onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent';e.currentTarget.style.borderColor = 'rgba(21,25,42,0.18)';}}>
                  <svg style={T.socialBtnIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0"></path>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section divider — solid navy band, full bleed ─────────────── */}
        <div style={T.sectionBreak} />

        {/* ── 02 · Research — full-bleed image bg with content card ──────── */}
        <div className="research-band" style={T.researchBand}>
          <div style={T.researchBandOverlay} />
          <Reveal>
            <section className="research-card" style={T.researchCard}>
              <div style={T.aboutHeader}>
                <h2 className="about-title" style={T.aboutTitle}>Research</h2>
              </div>
              <div style={T.aboutBody}>
                {(D.researchAbout || []).map((para, i) =>
                <Reveal key={i} delay={120 + i * 140}>
                    <p className="prose" style={T.aboutPara} dangerouslySetInnerHTML={{ __html: para }} />
                  </Reveal>)}
                <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
                  <button type="button" className="btn-primary" onClick={(e) => {e.currentTarget.blur();setActive('publications');}} style={T.buttonPrimary}>See publications →</button>
                </div>
              </div>
            </section>
          </Reveal>
        </div>

        {/* ── Section divider — solid navy band, full bleed ─────────────── */}
        <div style={T.sectionBreak} />

        {/* ── 03 · Science communication — narrative arc, three chapters ── */}
        <div className="sci-comm-band" style={T.sciCommBand}>
          <Reveal>
            <section style={T.sciCommSection}>
              <div style={T.aboutHeader}>
                <h2 className="about-title" style={T.aboutTitle}>Science Communication</h2>
              </div>
            </section>
          </Reveal>

          {/* The book */}
          <Reveal from="left" delay={80}>
            <section
              onMouseEnter={() => setHoverChapter(0)} onMouseLeave={() => setHoverChapter(null)}
              className="chapter-card" style={{ ...T.chapterCard, ...(hoverChapter === 0 ? T.chapterCardHover : null) }}>
              <div style={T.chapterEyebrow}>
                <span style={T.chapterEyebrowDot}></span>
                <span>The book</span>
                <span style={T.chapterEyebrowRule}></span>
              </div>
              <div style={T.bookCard}>
                <div style={T.bookText}>
                  <h3 style={T.bookTitle}>Outraged</h3>
                  <div style={T.bookSubtitle}>Why We Fight About Morality and Politics &amp; How to Find Common Ground</div>
                  <p style={T.bookAuthor}>by Kurt Gray</p>
                  <p className="prose" style={T.bookBlurb}>
                    I was a research and writing assistant for 
                    <em> Outraged</em>, Kurt Gray's book on the psychology of moral disagreement.
                    A Next Big Idea Club must-read, it explores why morality divides us and how we can
                    bridge these conflicts.
                  </p>
                  <div style={T.bookLinkRow}>
                    <a href="https://outragedbook.com/" target="_blank" rel="noopener" className="btn-primary" style={T.buttonPrimary}>Buy the book ↗</a>
                    <a href="https://www.moralunderstandingnewsletter.com/" target="_blank" rel="noopener" style={T.linkMuted}>Companion newsletter ↗</a>
                  </div>
                </div>
                <a href="https://outragedbook.com/" target="_blank" rel="noopener" style={T.bookCover}>
                  <img src="assets/outraged-book.png" alt="Outraged: Why We Fight About Morality and Politics — by Kurt Gray" style={T.bookCoverImg} />
                </a>
              </div>
            </section>
          </Reveal>

          <div style={T.chapterDivider}></div>

          {/* The podcast */}
          <Reveal from="right" delay={80}>
            <section
              onMouseEnter={() => setHoverChapter(1)} onMouseLeave={() => setHoverChapter(null)}
              className="chapter-card" style={{ ...T.chapterCard, ...(hoverChapter === 1 ? T.chapterCardHover : null) }}>
              <div style={T.chapterEyebrow}>
                <span style={T.chapterEyebrowDot}></span>
                <span>In conversation</span>
                <span style={T.chapterEyebrowRule}></span>
              </div>
              <p className="prose" style={T.chapterNarrative}>
                In the podcast episode below,
                
                <em></em> I discuss how we make moral judgments and why liberals and conservatives disagree.
              </p>
              <h3 style={T.podcastTitle}>Outrage Overload</h3>
              <div style={T.podcastShow}>Episode · April 2025</div>
              <iframe style={T.spotifyEmbed} src="https://open.spotify.com/embed/episode/0ikl2MaBihAWR9uInkB2YR?utm_source=generator" width="100%" height="232" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Outrage Overload Podcast — Sam Pratt"></iframe>
            </section>
          </Reveal>

          <div style={T.chapterDivider}></div>

          {/* The newsletter */}
          <Reveal from="left" delay={80}>
            <section
              onMouseEnter={() => setHoverChapter(2)} onMouseLeave={() => setHoverChapter(null)}
              className="chapter-card" style={{ ...T.chapterCard, ...(hoverChapter === 2 ? T.chapterCardHover : null) }}>
              <div style={T.chapterEyebrow}>
                <span style={T.chapterEyebrowDot}></span>
                <span>The newsletter</span>
                <span style={T.chapterEyebrowRule}></span>
              </div>
              <p className="prose" style={T.chapterNarrative}>I recently started my own Substack newsletter, where I write about psychology, science and ethics, and grad school. You can subscribe for free or check it out below.



              </p>
              <iframe src="https://sampratt.substack.com/embed" width="100%" height="320" style={{ border: '1px solid #EEE', background: 'white', width: '100%', borderRadius: 12, marginTop: 8, display: 'block' }} frameBorder="0" scrolling="no" title="Subscribe to Train of Thought"></iframe>
            </section>
          </Reveal>
        </div>
      </FadeIn>);

  }

  function PageHeading({ title, action }) {
    return (
      <div style={{ ...T.pageHeading, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <h1 className="page-title" style={T.pageTitle}>{title}</h1>
        {action && <div style={{ paddingBottom: 8 }}>{action}</div>}
      </div>);

  }

  function PageResearch() {
    return (
      <FadeIn k="research">
        <PageHeading title="Research" />
        <div style={T.listOuter}>
          {D.research.map((r, i) =>
          <div key={i} style={T.researchRow}>
              <div style={T.researchIdx}>0{i + 1}</div>
              <div style={T.researchTitle}>{r.title}</div>
              <div style={T.researchTag}>{r.tag}</div>
              <div style={T.researchLinkCell}>
                {r.link ? <a href={r.link} target="_blank" rel="noopener" style={T.linkPrimary}>{r.linkLabel}</a> : <span style={T.researchTagFaint}>—</span>}
              </div>
            </div>
          )}
        </div>
      </FadeIn>);

  }

  // Render a citation with the user's name bolded and a DOI link appended.
  function renderCitation(text, doi, accent) {
    const parts = [];
    const re = /(Pratt,\s*S(?:amuel)?\.?)/g;
    let last = 0,m,k = 0;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) parts.push(text.slice(last, m.index));
      parts.push(<strong key={'b' + k++} style={{ fontWeight: 700, color: '#000' }}>{m[0]}</strong>);
      last = m.index + m[0].length;
    }
    if (last < text.length) parts.push(text.slice(last));
    if (doi) {
      parts.push(' ');
      parts.push(
        <a key="doi" href={'https://doi.org/' + doi} target="_blank" rel="noopener"
        style={{ color: accent, textDecoration: 'none', borderBottom: '1px solid currentColor' }}>
          {'https://doi.org/' + doi}
        </a>
      );
    }
    return parts;
  }

  function PagePublications() {
    const [openKey, setOpenKey] = React.useState(null);
    const [hoverKey, setHoverKey] = React.useState(null);
    const [podHoverKey, setPodHoverKey] = React.useState(null);
    const accent = T.accent && T.accent.color || '#b85a3c';
    const accentHex = encodeURIComponent(accent);
    const scholarBtn =
    <a href={D.links.scholar} target="_blank" rel="noopener" className="btn-primary" style={T.scholarBtn}>
        <svg viewBox="0 0 512 512" width="18" height="18" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
          <path fill="#4285F4" d="M256 411.12L0 202.667 256 0z" />
          <path fill="#356AC3" d="M256 411.12l256-208.453L256 0z" />
          <circle fill="#A0C3FF" cx="256" cy="362.667" r="149.333" />
          <path fill="#76A7FA" d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z" />
        </svg>
        <span>Google Scholar Profile</span>
        <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
      </a>;

    return (
      <FadeIn k="publications">
        <PageHeading title="Publications" action={scholarBtn} />
        {D.publicationGroups.map((group, gi) =>
        <section key={gi} style={T.pubGroup}>
            <h3 style={T.pubGroupHeading}>{group.type}</h3>
            <div style={T.listOuter}>
              {group.items.map((p, i) => {
              const key = gi + '-' + i;
              const isOpen = openKey === key;
              const isHover = hoverKey === key;
              const isPodHover = podHoverKey === key;
              const RowTag = p.pdf ? 'a' : 'article';
              const rowProps = p.pdf ? { href: p.pdf, target: '_blank', rel: 'noopener' } : {};
              const showRowHover = isHover && !isPodHover;
              return (
                <React.Fragment key={i}>
                    <RowTag {...rowProps}
                  onMouseEnter={() => setHoverKey(key)} onMouseLeave={() => setHoverKey(null)}
                  className="pub-row" style={{ ...T.pubRow, ...(showRowHover ? T.pubRowHover : null), ...(p.pdf ? null : { cursor: 'default' }) }}>
                      <div style={T.pubYear}>{p.year}</div>
                      <div style={T.pubBody}>
                        <div style={T.pubTitle}>{p.title}</div>
                        <div style={T.pubCitation}>{renderCitation(p.citation, p.doi, accent)}</div>
                        {p.podcast && (
                      p.podcastTrack ?
                      <button
                        type="button"
                        className={"pod-pill" + (isOpen ? " is-open" : "")}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={(e) => {e.preventDefault();e.stopPropagation();e.currentTarget.blur();setOpenKey(isOpen ? null : key);}}
                        onMouseEnter={() => setPodHoverKey(key)}
                        onMouseLeave={() => setPodHoverKey(null)}
                        style={{ fontFamily: 'inherit', fontSize: 12, fontWeight: 600, padding: '5px 12px', letterSpacing: 0.4, borderRadius: 999, cursor: 'pointer', marginTop: 10, outline: 'none', appearance: 'none', WebkitAppearance: 'none' }}>
                              {isOpen ? '▾ Hide podcast' : '▸ 5-min podcast'}
                            </button> :

                      <a href={p.podcast} target="_blank" rel="noopener"
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={() => setPodHoverKey(key)}
                      onMouseLeave={() => setPodHoverKey(null)}
                      style={{ ...T.pillLink, marginTop: 10, display: 'inline-block', transition: 'background 0.18s ease, color 0.18s ease, border-color 0.18s ease', ...(isPodHover ? { background: accent, color: '#fff', borderColor: accent } : null) }}>5-min podcast ↗</a>)

                      }
                      </div>
                      <div style={{ ...T.pubArrow, ...(showRowHover && p.pdf ? T.pubArrowHover : null), visibility: p.pdf ? 'visible' : 'hidden' }}>↗</div>
                    </RowTag>
                    {isOpen && p.podcastTrack &&
                  <div style={{ margin: '0 -24px', padding: '14px 24px 18px', borderBottom: `1px solid ${'rgba(0,0,0,0.08)'}` }}>
                        <iframe
                      title={'5-minute podcast: ' + p.title}
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + p.podcastTrack + '&color=' + accentHex + '&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false'}
                      style={{ display: 'block', border: 0, borderRadius: 4 }}>
                        </iframe>
                      </div>
                  }
                  </React.Fragment>);

            })}
            </div>
          </section>
        )}
      </FadeIn>);

  }

  function PageWriting() {
    const [hoverIdx, setHoverIdx] = React.useState(null);
    return (
      <FadeIn k="writing">
        <PageHeading title="Science Writing" />
        <div style={T.listOuter}>
          {D.writing.map((w, i) => {
            const isHover = hoverIdx === i;
            return (
              <a key={i} href={w.href} target="_blank" rel="noopener"
              onMouseEnter={() => setHoverIdx(i)} onMouseLeave={() => setHoverIdx(null)}
              className="writing-row" style={{ ...T.writingRow, ...(isHover ? T.writingRowHover : null) }}>
                <div style={T.writingDate}>{w.date}</div>
                <div style={T.writingOutlet}>{w.outlet}</div>
                <div style={T.writingTitle}>{w.title}</div>
                <div style={{ ...T.writingArrow, ...(isHover ? T.writingArrowHover : null) }}>↗</div>
              </a>);
          })}
        </div>
      </FadeIn>);

  }

  function FeaturedPressCard() {
    const wsj = D.press.find((p) => p.outlet === 'Wall Street Journal');
    const [hover, setHover] = React.useState(false);
    if (!wsj) return null;
    return (
      <a href={wsj.href} target="_blank" rel="noopener"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className="featured-press" style={{ ...T.featuredPress, ...(hover ? T.featuredPressHover : null) }}>
        <div className="featured-press-grid" style={T.featuredPressGrid}>
          <div className="featured-press-image" style={T.featuredPressImageWrap}>
            <img src="assets/press/wsj-cover.png" alt="" style={T.featuredPressImage} />
          </div>
          <div style={T.featuredPressContent}>
            <div style={T.featuredPressLogoWrap}>
              <img src="assets/press/wsj-logo.png" alt="The Wall Street Journal" style={T.featuredPressLogoImg} />
            </div>
            <div style={T.featuredPressEyebrow}>
              <span>Opinion · Free Expression</span>
              <span style={T.featuredPressMetaDot}>·</span>
              <span>{wsj.date}</span>
            </div>
            <p style={T.featuredPressLede}>
              My paper on the <strong>Words Can Harm Scale</strong> was featured in <em>The Wall Street Journal</em>.
            </p>
            <div style={T.featuredPressTitle}>“{wsj.title}”</div>
            <div style={T.featuredPressByline}>By <strong>{wsj.author}</strong></div>
            <span style={T.featuredPressCta}>Read the article&nbsp;↗</span>
          </div>
        </div>
      </a>);
  }

  function PagePress() {
    const [hoverIdx, setHoverIdx] = React.useState(null);
    const [hoverIvIdx, setHoverIvIdx] = React.useState(null);
    const [tab, setTab] = React.useState('mentions');
    return (
      <FadeIn k="press">
        <PageHeading title="Press & Interviews" />
        <div style={T.pressTabsRow} role="tablist">
          {[
          { id: 'mentions', label: 'Media mentions', count: D.press.length },
          { id: 'interviews', label: 'Interviews', count: D.interviews.length }].
          map((t) => {
            const active = tab === t.id;
            return (
              <button key={t.id} type="button" role="tab" aria-selected={active}
              onMouseDown={(e) => e.preventDefault()}
              onClick={(e) => {e.currentTarget.blur();setTab(t.id);}}
              style={{ ...T.pressTab, ...(active ? T.pressTabActive : null) }}>
                {t.label}
                <span style={{ ...T.pressTabCount, ...(active ? T.pressTabCountActive : null) }}>{t.count}</span>
              </button>);
          })}
        </div>
        {tab === 'mentions' ?
        <React.Fragment>
            <FeaturedPressCard />
            <div style={T.listOuter}>
              <div className="press-header-row" style={T.pressHeaderRow}>
                <div style={T.pressColHead}>Date</div>
                <div style={T.pressColHead}>Outlet</div>
                <div style={T.pressColHead}>Title</div>
                <div></div>
              </div>
              {D.press.map((p, i) => {
              const isHover = hoverIdx === i;
              return (
                <a key={p.href + i} href={p.href} target="_blank" rel="noopener"
                onMouseEnter={() => setHoverIdx(i)} onMouseLeave={() => setHoverIdx(null)}
                className="press-row" style={{ ...T.pressRow, ...(isHover ? T.pressRowHover : null) }}>
                    <div style={T.pressDate}>{p.date}</div>
                    <div style={T.pressOutletCell}>
                      <div style={T.pressOutlet}>{p.outlet}</div>
                      {p.author && <div style={T.pressAuthor}>{p.author}</div>}
                    </div>
                    <div style={T.pressTitleCell}>
                      <div style={T.pressTitle}>{p.title}</div>
                    </div>
                    <div style={{ ...T.pressArrow, ...(isHover ? T.pressArrowHover : null) }}>↗</div>
                  </a>);
            })}
            </div>
          </React.Fragment> :

        <div>
            {D.interviews.map((iv, i) => {
            const isPodcast = iv.kind === 'podcast';
            const isHover = hoverIvIdx === i;
            return (
              <article key={i}
              onMouseEnter={() => setHoverIvIdx(i)} onMouseLeave={() => setHoverIvIdx(null)}
              className="interview-card" style={{ ...T.interviewCard, ...(isHover ? T.interviewCardHover : null) }}>
                  {isPodcast ?
                <div style={T.interviewMediaSpotify}>
                      <iframe src={iv.embed} style={T.interviewIframeSpotify}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy" title={iv.show + ' — ' + iv.title}></iframe>
                    </div> :

                <div style={T.interviewMedia}>
                      <iframe src={iv.embed} style={T.interviewIframe16x9}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen loading="lazy" title={iv.show + ' — ' + iv.title}></iframe>
                    </div>
                }
                  <div style={T.interviewBody}>
                    <div style={T.interviewEyebrow}>
                      <span style={T.interviewKindBadge}>{isPodcast ? 'Podcast' : 'TV'}</span>
                      <span>{iv.outlet}</span>
                      <span style={T.interviewMetaDot}>·</span>
                      <span>{iv.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                      <h2 style={{ ...T.interviewShow, margin: 0 }}>{iv.show}</h2>
                      {iv.logo && <img src={iv.logo} alt={iv.outlet} style={{ ...T.interviewLogo, height: 28, flexShrink: 0 }} />}
                    </div>
                    {iv.title && <p style={T.interviewTitle}>“{iv.title}”</p>}
                    <p style={T.interviewDesc}>{iv.description}</p>
                    {iv.host && <p style={{ ...T.interviewDesc, fontStyle: 'italic', marginTop: -4, fontSize: 13, color: 'rgba(21, 25, 42, 0.6)' }}>Hosted by {iv.host}</p>}
                    <a href={iv.href} target="_blank" rel="noopener" style={T.interviewCta}>
                      {isPodcast ? 'Listen on Spotify' : 'Watch on YouTube'} ↗
                    </a>
                  </div>
                </article>);
          })}
          </div>
        }
      </FadeIn>);

  }

  function PageCV() {
    return (
      <FadeIn k="cv">
        <PageHeading title="Curriculum Vitae" />
        <div style={T.cvTopRow}>
          <a href="assets/Pratt-CV.pdf" target="_blank" rel="noopener" className="btn-primary" style={T.buttonPrimary}>Download full CV ↓</a>
        </div>
        <div style={T.cvEmbedWrap}>
          <iframe className="cv-embed" src="assets/Pratt-CV.pdf#view=FitH" style={T.cvEmbed} title="Sam Pratt CV"></iframe>
        </div>
      </FadeIn>);

  }

  function PageContact() {
    return (
      <FadeIn k="contact">
        <PageHeading title="Get in touch" />
        <div style={T.contactGrid}>
          <div style={T.contactBlock}>
            <div style={T.contactLabel}>Email</div>
            <a href={`mailto:${D.email}`} style={T.contactValue}>{D.email}</a>
          </div>
          <div style={T.contactBlock}>
            <div style={T.contactLabel}>Office</div>
            <div style={T.contactValueStatic}>Franz Hall<br />UCLA, Los Angeles, CA</div>
          </div>
          <div style={T.contactBlock}>
            <div style={T.contactLabel}>Elsewhere</div>
            <div style={T.contactSocialList}>
              <a href={D.links.scholar} target="_blank" rel="noopener" style={T.contactValue}>Google Scholar ↗</a>
              <a href={D.links.twitter} target="_blank" rel="noopener" style={T.contactValue}>Twitter / X ↗</a>
              <a href={D.links.linkedin} target="_blank" rel="noopener" style={T.contactValue}>LinkedIn ↗</a>
              <a href={D.links.wchs} target="_blank" rel="noopener" style={T.contactValue}>Words Can Harm Scale ↗</a>
            </div>
          </div>
          <div style={T.contactBlock}>
            <div style={T.contactLabel}>Newsletter</div>
            <form onSubmit={(e) => e.preventDefault()} style={T.newsletterForm}>
              <input placeholder="your@email.com" style={T.newsletterInput} />
              <button style={T.newsletterButton}>Subscribe</button>
            </form>
          </div>
        </div>
      </FadeIn>);

  }

  function Footer() {
    return (
      <footer style={T.footer}>
        <div style={T.footerInner}>
        <div>© 2026 Sam Pratt</div>
        <div style={T.footerLinks}>
          <a href={D.links.scholar} target="_blank" rel="noopener" style={T.footerLink}>Scholar</a>
          <a href={D.links.twitter} target="_blank" rel="noopener" style={T.footerLink}>Twitter</a>
          <a href={D.links.linkedin} target="_blank" rel="noopener" style={T.footerLink}>LinkedIn</a>
          <a href={`mailto:${D.email}`} style={T.footerLink}>{D.email}</a>
        </div>
        </div>
      </footer>);

  }

  function Site() {
    const [active, setActive] = React.useState('home');
    React.useEffect(() => {window.scrollTo(0, 0);}, [active]);
    const Page = {
      home: PageHome, research: PageResearch, publications: PagePublications,
      writing: PageWriting, press: PagePress, cv: PageCV
    }[active];
    return (
      <div style={T.shell}>
        <Nav active={active} setActive={setActive} />
        <main style={T.main}><Page setActive={setActive} /></main>
        <Footer />
      </div>);

  }

  return Site;
};