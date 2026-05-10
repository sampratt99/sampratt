// Final direction: A2 in navy. Solid navy banner header (taller) +
// solid navy footer. Cream paper bg, deep navy accent.

(function () {
  const SANS = '"Helvetica Neue", Helvetica, Arial, sans-serif';
  const alpha = (hex, a) => {
    const h = hex.replace('#', '');
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${a})`;
  };

  const PAL = {
    bg: '#f4efe3',
    surface: '#ebe4d2',
    ink: '#15192a',
    accent: '#1f2a4a',     // deep navy — primary accent
    accentDeep: '#141c36',
    onAccent: '#f4efe3',
    accent2: '#b85a3c',    // rust / terracotta — secondary accent (eyebrows, indices, hover)
  };
  const inkSoft = alpha(PAL.ink, 0.62);
  const inkFaint = alpha(PAL.ink, 0.3);
  const rule = alpha(PAL.ink, 0.14);
  const accentSoft = alpha(PAL.accent, 0.10);
  const onAccentSoft = alpha('#ffffff', 0.7);
  const onAccentDim = alpha('#ffffff', 0.85);

  const theme = {
    shell: { background: PAL.bg, color: PAL.ink, fontFamily: SANS, minHeight: '100%', display: 'flex', flexDirection: 'column' },

    // ── Header — bigger banner since it's the primary nav ───────────────
    headerStyle: { padding: '32px 56px', background: PAL.accent, borderBottom: 'none', position: 'sticky', top: 0, zIndex: 100 },
    headerInner: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1240, margin: '0 auto', width: '100%' },
    brandStyle: { display: 'flex', flexDirection: 'column', textDecoration: 'none', cursor: 'pointer', gap: 4 },
    brandPrimary: { fontFamily: SANS, fontWeight: 700, fontSize: 26, color: PAL.onAccent, letterSpacing: -0.5 },
    brandSecondary: { fontFamily: SANS, fontSize: 12, color: onAccentSoft, letterSpacing: 1.2, textTransform: 'uppercase' },
    navStyle: { display: 'flex', gap: 4, alignItems: 'center' },
    navItem: { fontFamily: SANS, fontWeight: 500, fontSize: 15, color: onAccentDim, textDecoration: 'none', padding: '11px 18px', cursor: 'pointer', background: 'transparent', borderRadius: 999, transition: 'background .15s, color .15s' },
    navItemHover: { fontFamily: SANS, fontWeight: 500, fontSize: 15, color: '#fff', textDecoration: 'none', padding: '11px 18px', cursor: 'pointer', background: alpha('#ffffff', 0.12), borderRadius: 999 },
    navItemActive: { fontFamily: SANS, fontWeight: 600, fontSize: 15, color: PAL.accent, textDecoration: 'none', padding: '11px 18px', cursor: 'pointer', background: PAL.bg, borderRadius: 999 },
    navExternal: { fontFamily: SANS, fontWeight: 600, fontSize: 13, color: PAL.onAccent, background: 'transparent', border: `1px solid ${alpha('#ffffff', 0.5)}`, padding: '9px 14px', textDecoration: 'none', marginLeft: 14, letterSpacing: 0.2, borderRadius: 999, transition: 'transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease' },

    main: { padding: '64px 56px', flex: 1, maxWidth: 1352, margin: '0 auto', width: '100%', boxSizing: 'border-box' },

    // ── Home hero ───────────────────────────────────────────────────────
    homeGrid: { display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'center', minHeight: 520 },
    heroWrap: { paddingBottom: 80 },
    homePhotoWrap: { position: 'relative' },
    homePhoto: { aspectRatio: '4 / 5', background: PAL.surface, border: `1px solid ${rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, boxShadow: `18px 18px 0 0 ${PAL.accent}` },
    homePhotoLabel: { fontFamily: SANS, fontSize: 12, color: inkSoft, padding: '6px 12px', letterSpacing: 0.3, textTransform: 'uppercase', background: alpha(PAL.ink, 0.04) },

    homeText: {},
    homeEyebrow: { fontFamily: SANS, fontSize: 12, color: PAL.accent2, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700, marginBottom: 22 },
    homeName: { fontFamily: SANS, fontWeight: 700, fontSize: 92, lineHeight: 0.95, color: PAL.ink, margin: '0 0 28px', letterSpacing: -3 },
    homeBio: { fontFamily: SANS, fontSize: 20, lineHeight: 1.55, color: PAL.ink, margin: 0, fontWeight: 400, maxWidth: 620 },
    homeLinkRow: { display: 'flex', gap: 8, marginTop: 40, flexWrap: 'nowrap', alignItems: 'center' },
    socialBtnPrimary: { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: SANS, fontSize: 14, color: PAL.onAccent, background: PAL.accent, textDecoration: 'none', fontWeight: 600, padding: '10px 14px', borderRadius: 999, border: `1.5px solid ${PAL.accent}`, transition: 'transform .15s ease, background .15s ease, box-shadow .15s ease', boxShadow: `0 1px 0 ${alpha(PAL.ink, 0.06)}`, letterSpacing: -0.1, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 },
    socialBtn: { display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: SANS, fontSize: 14, color: PAL.ink, background: 'transparent', textDecoration: 'none', fontWeight: 600, padding: '10px 14px', borderRadius: 999, border: `1.5px solid ${alpha(PAL.ink, 0.18)}`, transition: 'transform .15s ease, background .15s ease, border-color .15s ease', letterSpacing: -0.1, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 },
    socialBtnIcon: { width: 16, height: 16, display: 'block', flexShrink: 0 },
    linkPrimary: { fontFamily: SANS, fontSize: 15, color: PAL.accent, textDecoration: 'none', fontWeight: 600, borderBottom: `1.5px solid ${PAL.accent}`, paddingBottom: 1 },
    linkMuted: { fontFamily: SANS, fontSize: 15, color: inkSoft, textDecoration: 'none', borderBottom: `1px solid ${rule}`, paddingBottom: 1 },

    // ── About me (under the hero) ───────────────────────────────────────
    aboutSection: { paddingTop: 8, paddingBottom: 8 },
    aboutHeader: { textAlign: 'center', marginBottom: 40 },
    aboutTitle: { fontFamily: SANS, fontWeight: 700, fontSize: 56, lineHeight: 1.05, color: PAL.ink, margin: 0, letterSpacing: -1.8 },
    aboutBody: { display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' },
    aboutPara: { fontFamily: SANS, fontSize: 18, lineHeight: 1.65, color: PAL.ink, margin: 0, fontWeight: 400 },
    spotifyEmbed: { border: 0, borderRadius: 12, marginTop: 8, width: '100%', display: 'block' },

    // ── Section break — full-bleed solid navy band ─────────────────────
    // Strong horizontal rule between the hero and subsequent sections.
    sectionBreak: { height: 12, position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw', background: PAL.accent },

    // ── Research band — full-bleed photo bg with content card ─────────
    researchBand: { position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw', paddingLeft: 56, paddingRight: 56, paddingTop: 120, paddingBottom: 120, backgroundImage: `url("assets/research-bg.png")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' },
    researchBandOverlay: { position: 'absolute', inset: 0, background: alpha(PAL.accent, 0.35), pointerEvents: 'none' },
    researchCard: { position: 'relative', maxWidth: 820, margin: '0 auto', background: PAL.bg, padding: '64px 72px', borderRadius: 4, boxShadow: `0 30px 80px -20px ${alpha(PAL.ink, 0.45)}, 0 0 0 1px ${alpha(PAL.ink, 0.06)}` },
    researchCtaRow: { display: 'flex', justifyContent: 'center', marginTop: 40, paddingTop: 32, borderTop: `1px solid ${rule}` },

    // ── Science communication band ─────────────────────────────────────
    sciCommBand: { position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw', marginBottom: -64, paddingLeft: 56, paddingRight: 56, paddingTop: 96, paddingBottom: 120, background: PAL.bg },
    sciCommSection: { marginBottom: 56 },

    // Scroll hint at end of hero
    scrollHint: { display: 'flex', alignItems: 'center', gap: 10, marginTop: 56, fontFamily: SANS, fontSize: 12, color: inkSoft, textTransform: 'uppercase', letterSpacing: 1.4, fontWeight: 600 },
    scrollHintArrow: { fontSize: 16, color: PAL.accent, animation: 'bounce 1.6s ease-in-out infinite' },

    // ── Sci-comm chapter cards (shared style across all three) ───────
    chapterCard: { maxWidth: 980, margin: '0 auto 16px', padding: '48px 56px', background: PAL.surface, borderRadius: 16, boxShadow: `0 1px 0 ${rule}, 0 18px 40px -28px ${alpha(PAL.ink, 0.18)}`, transition: 'transform 0.25s ease, box-shadow 0.25s ease' },
    chapterCardHover: { transform: 'translateY(-3px)', boxShadow: `0 1px 0 ${rule}, 0 32px 64px -28px ${alpha(PAL.ink, 0.28)}` },
    chapterEyebrow: { fontFamily: SANS, fontSize: 11, fontWeight: 700, color: PAL.accent2, textTransform: 'uppercase', letterSpacing: 1.8, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 14 },
    chapterEyebrowDot: { width: 6, height: 6, borderRadius: '50%', background: PAL.accent2, display: 'inline-block' },
    chapterEyebrowRule: { flex: 1, height: 1, background: alpha(PAL.accent2, 0.3) },
    chapterNarrative: { fontFamily: SANS, fontSize: 17, lineHeight: 1.65, color: PAL.ink, margin: '0 0 28px' },
    chapterDivider: { width: 1, height: 32, background: alpha(PAL.accent, 0.3), margin: '0 auto 16px' },

    // ── Outraged book card ─────────────────────────────────────────────
    bookCard: { display: 'grid', gridTemplateColumns: '1fr 280px', gap: 48, alignItems: 'center' },
    bookCover: { display: 'block', overflow: 'hidden', borderRadius: 6, transition: 'transform .25s', transform: 'rotate(2deg)' },
    bookCoverImg: { display: 'block', width: '100%', height: 'auto' },
    bookText: {},
    bookTitle: { fontFamily: SANS, fontWeight: 700, fontSize: 36, lineHeight: 1, color: PAL.ink, margin: '0 0 8px', letterSpacing: -1.2 },
    bookSubtitle: { fontFamily: SANS, fontSize: 16, fontWeight: 500, color: PAL.ink, margin: '0 0 14px', lineHeight: 1.35 },
    bookAuthor: { fontFamily: SANS, fontSize: 13, color: inkSoft, margin: '0 0 18px', fontStyle: 'italic' },
    bookBlurb: { fontFamily: SANS, fontSize: 16, lineHeight: 1.55, color: PAL.ink, margin: '0 0 24px' },
    bookLinkRow: { display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center' },

    // ── Newsletter inside chapter card (cohesive with book card) ──────
    newsletterTitle: { fontFamily: SANS, fontWeight: 700, fontSize: 36, lineHeight: 1, color: PAL.ink, margin: '0 0 8px', letterSpacing: -1.2 },
    newsletterSubtitle: { fontFamily: SANS, fontSize: 15, fontWeight: 500, color: inkSoft, margin: '0 0 20px', fontStyle: 'italic' },
    newsletterFormBig: { display: 'flex', gap: 8, maxWidth: 460, marginTop: 8 },
    newsletterInputBig: { flex: 1, fontFamily: SANS, fontSize: 15, padding: '13px 18px', border: `1px solid ${rule}`, outline: 'none', background: PAL.bg, color: PAL.ink, borderRadius: 999 },
    newsletterButtonBig: { fontFamily: SANS, fontWeight: 600, fontSize: 14, padding: '13px 22px', background: PAL.accent, color: PAL.onAccent, border: 'none', cursor: 'pointer', borderRadius: 999, letterSpacing: 0.3 },
    newsletterReadMore: { fontFamily: SANS, fontSize: 13, color: inkSoft, textDecoration: 'none', borderBottom: `1px solid ${rule}`, paddingBottom: 1, marginTop: 16, display: 'inline-block' },

    // ── Podcast (inside chapter card) ──────────────────────────────────
    podcastTitle: { fontFamily: SANS, fontWeight: 700, fontSize: 36, lineHeight: 1, color: PAL.ink, margin: '0 0 8px', letterSpacing: -1.2 },
    podcastShow: { fontFamily: SANS, fontSize: 15, fontWeight: 500, color: inkSoft, margin: '0 0 20px', fontStyle: 'italic' },

    // ── Page heading shared ─────────────────────────────────────────────
    pageHeading: { paddingBottom: 32, marginBottom: 28, borderBottom: `1px solid ${rule}` },
    pageTitle: { fontFamily: SANS, fontWeight: 700, fontSize: 58, lineHeight: 1, color: PAL.ink, margin: 0, letterSpacing: -2 },

    listOuter: { borderTop: `1px solid ${rule}` },

    // (Research kept in theme map but unused now — page is removed from nav)
    researchRow: { display: 'grid', gridTemplateColumns: '60px 1fr 240px 200px', gap: 24, alignItems: 'baseline', padding: '22px 0', borderBottom: `1px solid ${rule}` },
    researchIdx: { fontFamily: SANS, fontWeight: 700, fontSize: 14, color: PAL.accent2, letterSpacing: 0.5 },
    researchTitle: { fontFamily: SANS, fontWeight: 600, fontSize: 22, color: PAL.ink, letterSpacing: -0.4 },
    researchTag: { fontFamily: SANS, fontSize: 12, color: PAL.accent, textTransform: 'uppercase', letterSpacing: 1, background: accentSoft, padding: '4px 10px', borderRadius: 999, justifySelf: 'start', fontWeight: 600 },
    researchTagFaint: { fontFamily: SANS, fontSize: 13, color: inkFaint },
    researchLinkCell: { textAlign: 'right' },

    publicationsTopRow: { display: 'flex', justifyContent: 'flex-end', marginBottom: 14 },
    pubRow: { display: 'grid', gridTemplateColumns: '90px 1fr 28px', gap: 24, alignItems: 'baseline', padding: '22px 24px', borderBottom: `1px solid ${rule}`, textDecoration: 'none', color: 'inherit', borderRadius: 8, transition: 'background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease', marginLeft: -24, marginRight: -24, position: 'relative', background: 'transparent', cursor: 'pointer' },
    pubRowHover: { background: PAL.surface, transform: 'translateY(-2px) scale(1.01)', boxShadow: `0 14px 36px -16px ${alpha(PAL.ink, 0.28)}`, zIndex: 2 },
    pubArrow: { fontFamily: SANS, fontSize: 16, color: PAL.accent2, textAlign: 'right', fontWeight: 600, alignSelf: 'baseline', transition: 'transform 0.22s ease, color 0.22s ease' },
    pubArrowHover: { transform: 'translate(4px, -4px)', color: PAL.accent },
    pubYear: { fontFamily: SANS, fontWeight: 700, fontSize: 22, color: PAL.accent2 },
    pubBody: {},
    pubTitle: { fontFamily: SANS, fontWeight: 600, fontSize: 19, lineHeight: 1.35, color: PAL.ink, marginBottom: 8, letterSpacing: -0.3 },
    pubCitation: { fontFamily: SANS, fontSize: 13.5, lineHeight: 1.55, color: inkSoft },
    pubGroup: { marginTop: 36 },
    pubGroupHeading: { fontFamily: SANS, fontSize: 15, fontWeight: 700, color: PAL.accent2, textTransform: 'uppercase', letterSpacing: 1.6, marginBottom: 6, paddingBottom: 12, borderBottom: `2px solid ${PAL.accent2}` },
    scholarBtn: { fontFamily: SANS, fontSize: 13, fontWeight: 600, color: PAL.ink, textDecoration: 'none', border: `1px solid ${rule}`, padding: '9px 16px 9px 12px', letterSpacing: 0.2, borderRadius: 999, background: PAL.paper, display: 'inline-flex', alignItems: 'center', gap: 9, transition: 'all 0.15s ease', boxShadow: '0 1px 0 rgba(0,0,0,0.02)' },
    pubLinks: { display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'flex-end' },
    pillLink: { fontFamily: SANS, fontSize: 12, fontWeight: 600, color: PAL.ink, textDecoration: 'none', border: `1px solid ${rule}`, padding: '5px 12px', letterSpacing: 0.4, borderRadius: 999, background: PAL.bg },

    writingRow: { display: 'grid', gridTemplateColumns: '120px 200px 1fr 24px', gap: 24, alignItems: 'baseline', padding: '20px 24px', borderBottom: `1px solid ${rule}`, textDecoration: 'none', color: 'inherit', borderRadius: 8, transition: 'background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease', marginLeft: -24, marginRight: -24, position: 'relative', background: 'transparent' },
    writingRowHover: { background: PAL.surface, transform: 'translateY(-2px) scale(1.01)', boxShadow: `0 14px 36px -16px ${alpha(PAL.ink, 0.28)}`, zIndex: 2 },
    writingArrowHover: { transform: 'translate(4px, -4px)', color: PAL.accent },
    writingDate: { fontFamily: SANS, fontSize: 13, color: inkSoft, fontWeight: 500 },
    writingOutlet: { fontFamily: SANS, fontSize: 14, fontWeight: 700, color: PAL.accent2, textTransform: 'uppercase', letterSpacing: 0.8 },
    writingTitle: { fontFamily: SANS, fontSize: 19, fontWeight: 500, color: PAL.ink, letterSpacing: -0.2 },
    writingArrow: { fontFamily: SANS, fontSize: 16, color: PAL.accent2, textAlign: 'right', fontWeight: 600, transition: 'transform 0.22s ease, color 0.22s ease' },

    pressHeaderRow: { display: 'grid', gridTemplateColumns: '90px 220px 1fr 24px', gap: 28, alignItems: 'baseline', padding: '0 0 18px', borderBottom: `2px solid ${PAL.ink}` },
    pressColHead: { fontFamily: SANS, fontSize: 13, fontWeight: 700, color: PAL.ink, textTransform: 'uppercase', letterSpacing: 1.6 },
    pressRow: { display: 'grid', gridTemplateColumns: '90px 220px 1fr 24px', gap: 28, alignItems: 'baseline', padding: '22px 24px', borderBottom: `1px solid ${rule}`, textDecoration: 'none', borderRadius: 8, transition: 'background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease', marginLeft: -24, marginRight: -24, position: 'relative', background: 'transparent' },
    pressRowHover: { background: PAL.surface, transform: 'translateY(-2px) scale(1.015)', boxShadow: `0 14px 36px -16px ${alpha(PAL.ink, 0.28)}`, zIndex: 2 },
    pressDate: { fontFamily: SANS, fontWeight: 700, fontSize: 15, color: PAL.accent2, letterSpacing: 0.2 },
    pressOutletCell: { display: 'flex', flexDirection: 'column', gap: 4 },
    pressOutlet: { fontFamily: SANS, fontSize: 17, fontWeight: 700, color: PAL.ink, letterSpacing: -0.2, lineHeight: 1.25 },
    pressAuthor: { fontFamily: SANS, fontSize: 12.5, color: inkSoft, fontStyle: 'italic' },
    pressTitleCell: { display: 'flex', flexDirection: 'column', gap: 4 },
    pressTitle: { fontFamily: SANS, fontSize: 17, color: PAL.ink, lineHeight: 1.35 },
    pressPaper: { fontFamily: SANS, fontSize: 12.5, color: inkSoft, lineHeight: 1.4 },
    pressArrow: { fontFamily: SANS, fontSize: 14, color: PAL.accent2, textAlign: 'right', fontWeight: 600, alignSelf: 'baseline', transition: 'transform 0.22s ease, color 0.22s ease' },
    pressArrowHover: { transform: 'translate(4px, -4px)', color: PAL.accent },

    // ── Press tabs (Media mentions / Interviews) ─────────────────────────
    pressTabsRow: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, padding: 4, background: alpha(PAL.ink, 0.04), borderRadius: 999, width: 'fit-content' },
    pressTab: { fontFamily: SANS, fontSize: 13, fontWeight: 600, color: inkSoft, padding: '9px 18px', border: 'none', background: 'transparent', borderRadius: 999, cursor: 'pointer', letterSpacing: 0.2, transition: 'background 0.2s ease, color 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: 8 },
    pressTabActive: { background: PAL.ink, color: '#fff' },
    pressTabCount: { fontFamily: SANS, fontSize: 11, fontWeight: 700, padding: '2px 7px', borderRadius: 999, background: alpha(PAL.ink, 0.08), color: inkSoft, letterSpacing: 0.4 },
    pressTabCountActive: { background: alpha('#ffffff', 0.18), color: '#fff' },

    // ── Interview cards ──────────────────────────────────────────────────
    interviewCard: { display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 0, alignItems: 'stretch', background: PAL.surface, border: `1px solid ${rule}`, borderRadius: 8, overflow: 'hidden', boxShadow: `0 1px 0 ${rule}, 0 24px 48px -32px ${alpha(PAL.ink, 0.22)}`, marginBottom: 28, transition: 'transform 0.25s ease, box-shadow 0.25s ease' },
    interviewCardHover: { transform: 'translateY(-3px)', boxShadow: `0 1px 0 ${rule}, 0 32px 64px -28px ${alpha(PAL.ink, 0.32)}` },
    interviewMedia: { position: 'relative', background: '#000', minHeight: 320 },
    interviewLogoStrip: { display: 'flex', alignItems: 'center', marginBottom: 4 },
    interviewLogo: { height: 32, width: 'auto', display: 'block', maxWidth: 160 },
    interviewIframe16x9: { position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, display: 'block' },
    interviewMediaSpotify: { padding: 24, background: alpha(PAL.ink, 0.04), display: 'flex', alignItems: 'center', justifyContent: 'center' },
    interviewIframeSpotify: { width: '100%', height: 232, border: 0, borderRadius: 12, display: 'block' },
    interviewBody: { padding: '32px 36px 30px', display: 'flex', flexDirection: 'column', gap: 12 },
    interviewEyebrow: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontFamily: SANS, fontSize: 11, fontWeight: 700, color: inkSoft, textTransform: 'uppercase', letterSpacing: 1.4 },
    interviewKindBadge: { fontFamily: SANS, fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4, background: PAL.accent2, color: '#fff', letterSpacing: 0.6 },
    interviewMetaDot: { fontFamily: SANS, fontSize: 11, color: alpha(PAL.ink, 0.3) },
    interviewShow: { fontFamily: SANS, fontSize: 24, fontWeight: 700, color: PAL.ink, letterSpacing: -0.4, lineHeight: 1.2, margin: 0 },
    interviewTitle: { fontFamily: SANS, fontSize: 16, color: PAL.ink, lineHeight: 1.4, margin: 0, fontStyle: 'italic' },
    interviewDesc: { fontFamily: SANS, fontSize: 15, lineHeight: 1.55, color: PAL.ink, margin: '4px 0 0', textWrap: 'pretty' },
    interviewCta: { fontFamily: SANS, fontSize: 13, fontWeight: 700, color: PAL.accent, textTransform: 'uppercase', letterSpacing: 1.4, marginTop: 8, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 },

    // ── Featured WSJ press card ──────────────────────────────────────────
    featuredPress: { display: 'block', textDecoration: 'none', color: PAL.ink, background: PAL.surface, border: `1px solid ${rule}`, marginBottom: 48, boxShadow: `0 1px 0 ${rule}, 0 24px 48px -32px ${alpha(PAL.ink, 0.22)}`, borderRadius: 8, overflow: 'hidden', transition: 'transform 0.25s ease, box-shadow 0.25s ease' },
    featuredPressHover: { transform: 'translateY(-3px)', boxShadow: `0 1px 0 ${rule}, 0 32px 64px -28px ${alpha(PAL.ink, 0.28)}` },
    featuredPressGrid: { display: 'grid', gridTemplateColumns: 'minmax(280px, 360px) 1fr', gap: 0, alignItems: 'stretch' },
    featuredPressImageWrap: { position: 'relative', overflow: 'hidden', background: alpha(PAL.ink, 0.06), minHeight: 280 },
    featuredPressImage: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 },
    featuredPressContent: { padding: '36px 40px 32px', display: 'flex', flexDirection: 'column', gap: 14 },
    featuredPressLogoWrap: { display: 'block', marginBottom: 6 },
    featuredPressLogoImg: { height: 30, width: 'auto', display: 'block', maxWidth: '100%' },
    featuredPressEyebrow: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontFamily: SANS, fontSize: 11, fontWeight: 700, color: inkSoft, textTransform: 'uppercase', letterSpacing: 1.4, paddingBottom: 4 },
    featuredPressMetaDot: { fontFamily: SANS, fontSize: 11, color: alpha(PAL.ink, 0.3) },
    featuredPressLede: { fontFamily: SANS, fontSize: 18, lineHeight: 1.5, color: PAL.ink, margin: '0 0 4px', fontWeight: 400, textWrap: 'pretty' },
    featuredPressTitle: { fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 22, fontWeight: 700, color: PAL.ink, margin: 0, letterSpacing: -0.3, lineHeight: 1.25 },
    featuredPressByline: { fontFamily: SANS, fontSize: 13.5, color: inkSoft, lineHeight: 1.5 },
    featuredPressCta: { fontFamily: SANS, fontSize: 14, fontWeight: 600, color: PAL.accent, letterSpacing: 0.2, marginTop: 'auto', alignSelf: 'flex-start', borderBottom: `1.5px solid ${PAL.accent}`, paddingBottom: 2 },

    cvTopRow: { display: 'flex', justifyContent: 'flex-end', marginBottom: 14 },
    buttonPrimary: { background: PAL.accent, color: PAL.onAccent, fontFamily: SANS, fontWeight: 600, fontSize: 14, padding: '10px 18px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, letterSpacing: 0.3, borderRadius: 999, border: 'none', cursor: 'pointer', transition: 'transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease' },
    cvEmbedWrap: { width: '100%', border: `1px solid ${rule}`, borderRadius: 8, overflow: 'hidden', background: PAL.surface },
    cvEmbed: { width: '100%', height: 900, border: 'none', display: 'block' },
    cvBlocks: { display: 'flex', flexDirection: 'column', gap: 32 },
    cvBlock: { display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, paddingTop: 20, borderTop: `1px solid ${rule}` },
    cvSectionLabel: { fontFamily: SANS, fontSize: 12, color: PAL.accent2, textTransform: 'uppercase', letterSpacing: 1.4, fontWeight: 700 },
    cvBlockList: {},
    cvRow: { display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, padding: '10px 0' },
    cvYear: { fontFamily: SANS, fontSize: 13, color: inkSoft, fontWeight: 500 },
    cvText: { fontFamily: SANS, fontSize: 16, color: PAL.ink, lineHeight: 1.45 },

    contactGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
    contactBlock: { padding: '28px 24px', background: PAL.surface, borderRadius: 12 },
    contactLabel: { fontFamily: SANS, fontSize: 12, color: PAL.accent, textTransform: 'uppercase', letterSpacing: 1.4, fontWeight: 700, marginBottom: 14 },
    contactValue: { fontFamily: SANS, fontSize: 17, color: PAL.ink, textDecoration: 'none', fontWeight: 500, display: 'inline-block', marginBottom: 4, borderBottom: `1px solid ${rule}` },
    contactValueStatic: { fontFamily: SANS, fontSize: 17, color: PAL.ink, fontWeight: 400, lineHeight: 1.5 },
    contactSocialList: { display: 'flex', flexDirection: 'column', gap: 6 },
    newsletterForm: { display: 'flex', gap: 8 },
    newsletterInput: { flex: 1, fontFamily: SANS, fontSize: 15, padding: '10px 14px', border: `1px solid ${rule}`, outline: 'none', background: PAL.bg, borderRadius: 999 },
    newsletterButton: { fontFamily: SANS, fontWeight: 600, fontSize: 14, padding: '10px 18px', background: PAL.accent, color: PAL.onAccent, border: 'none', cursor: 'pointer', borderRadius: 999 },

    // ── Footer ──────────────────────────────────────────────────────────
    footer: { padding: '28px 56px', background: PAL.accent, color: onAccentSoft, borderTop: 'none', fontFamily: SANS, fontSize: 13 },
    footerInner: { display: 'flex', justifyContent: 'space-between', maxWidth: 1240, margin: '0 auto', width: '100%' },
    footerLinks: { display: 'flex', gap: 18 },
    footerLink: { color: alpha('#ffffff', 0.9), textDecoration: 'none' },
  };

  window.SamSite = window.makeSite(theme);
})();
