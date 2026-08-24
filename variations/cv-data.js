// ═════════════════════════════════════════════════════════════════════════
// CV content — plain JavaScript (no JSX) so BOTH the website and the
// printable cv-print.html can load it directly. Single source of truth for
// the Curriculum Vitae; edit here and both surfaces update.
//
// Three item shapes cover the whole document:
//   entries — year range + bold heading + supporting lines (Education, Research)
//   refs    — hanging-indent citation paragraphs (Publications, Science Writing)
//   rows    — year + one line, optionally with a smaller note (Grants, Awards)
//
// `html` fields hold inline markup only (<strong>, <em>, <a>) so citations keep
// APA formatting.
// ═════════════════════════════════════════════════════════════════════════

window.SamCV = {
  updated: 'August 2026',
  pdf: 'assets/Pratt-CV.pdf',

  sections: [
  {
    title: 'Education',
    kind: 'entries',
    items: [
    { years: '2025 –', heading: 'University of California, Los Angeles', lines: ['PhD in Psychology'], soft: 'Advisor: Dr. Matthew Lieberman' },
    { years: '2019 – 2023', heading: 'Harvard University', lines: ['B.A. in Psychology, Magna Cum Laude with Highest Honors'], soft: 'GPA: 3.97' }]

  },

  {
    title: 'Peer-Reviewed Publications',
    kind: 'refs',
    items: [
    { html: `<strong>Pratt, S.</strong>, Jones, P. J., Bellet, B. W., McNally, R. J., &amp; Gray, K. (2026). The words can harm scale: Measuring beliefs about harmful speech. <em>Personality and Individual Differences, 257.</em> <a target="_blank" rel="noopener" href="https://doi.org/10.1016/j.paid.2026.113785">https://doi.org/10.1016/j.paid.2026.113785</a>` },
    { html: `Womick, J., Kubin, E., Goya-Tocchetto, D., Ochoa, N. R., Rebollar, C., Kapsaskis, K., <strong>Pratt, S.</strong>, Devine, H., Payne, B. K., Vaisey, S., &amp; Gray, K. (2026). Liberals and conservatives see different victims: Moral disagreement is explained by different assumptions of vulnerability. <em>Personality and Social Psychology Bulletin.</em> <a target="_blank" rel="noopener" href="https://doi.org/10.1177/01461672261422957">https://doi.org/10.1177/01461672261422957</a>` },
    { html: `<strong>Pratt, S.</strong>, Rosenfeld, D. L., Goranson, A., Tomiyama, A. J., Sheeran, P., &amp; Gray, K. (2025). Health behaviors are moralized when perceived to cause harm. <em>Personality and Social Psychology Bulletin.</em> <a target="_blank" rel="noopener" href="https://doi.org/10.1177/01461672251372823">https://doi.org/10.1177/01461672251372823</a>` },
    { html: `<strong>Pratt, S.</strong>*, Jones, P. J.*, Bridgland, V. M. E., Bellet, B. W., &amp; McNally, R. J. (2025). Sending signals: Trigger warnings and safe space notifications. <em>Journal of Experimental Psychology: Applied.</em> Advance online publication. <a target="_blank" rel="noopener" href="https://doi.org/10.1037/xap0000541">https://doi.org/10.1037/xap0000541</a> †` },
    { html: `Gray, K., &amp; <strong>Pratt, S.</strong> (2025). Morality in our mind and across cultures and politics. <em>Annual Review of Psychology, 76,</em> 663–691. <a target="_blank" rel="noopener" href="https://doi.org/10.1146/annurev-psych-020924-124236">https://doi.org/10.1146/annurev-psych-020924-124236</a>` },
    { html: `Worsnip, A., Lane, D., <strong>Pratt, S.</strong>, Napolitano, G. M., Gray, K., &amp; Greene, J. A. (2025). Authority or autonomy? Philosophical and psychological perspectives on deference to experts. <em>Philosophical Psychology,</em> 1–36. <a target="_blank" rel="noopener" href="https://doi.org/10.1080/09515089.2025.2475138">https://doi.org/10.1080/09515089.2025.2475138</a>` },
    { html: `Rodriguez, M., <strong>Pratt, S.</strong>, Bellet, B. W., &amp; McNally, R. J. (2023). Solitude can be good—if you see it as such: Reappraisal helps lonely people experience solitude more positively. <em>Journal of Personality, 93</em>(1), 118–135. <a target="_blank" rel="noopener" href="https://doi.org/10.1111/jopy.12887">https://doi.org/10.1111/jopy.12887</a> ‡` }],

    notes: [
    `* These authors contributed equally to this work.`,
    `† Selected as an Editor’s Choice paper in <em>JEP: Applied</em>.`,
    `‡ Recognized as a top 10 Most Cited and top 10% Most Viewed article of 2023 by the <em>Journal of Personality</em>.`]

  },

  {
    title: 'Manuscripts Under Review and Preprints',
    kind: 'refs',
    items: [
    { html: `Bridgland, V. M. E., Jones, P. J., Bellet, B. W., <strong>Pratt, S.</strong>, &amp; McNally, R. J. (2026). The art of harm reduction: The effect of trigger warnings and framing statements on reactions to artwork.` },
    { html: `<strong>Pratt, S.</strong>, Bellet, B. W., Jones, P. J., &amp; McNally, R. J. (2024). Testing the coddling hypothesis: Campus safetyism and student resilience. <em>PsyArXiv.</em> <a target="_blank" rel="noopener" href="https://doi.org/10.31234/osf.io/zav5g">https://doi.org/10.31234/osf.io/zav5g</a>` },
    { html: `Sarkar, A., Sella, F., Rebollar, C., Ibata, N. G. O., <strong>Pratt, S.</strong>, Kahane, G., Gray, K., Savulescu, J., Elliot, A. J., &amp; Thompson, J. M. (2025). Social impressions shape moral decisions.` }]

  },

  {
    title: 'Manuscripts in Preparation',
    kind: 'refs',
    items: [
    { html: `Bai, F., Chan, S., Dong, Y., Tierney, W., Celniker, J., <strong>Pratt, S.</strong>, Gray, K., Clark, C. J., … &amp; Uhlmann, E. L. (2024). Person-centered moral judgments: Replicability, cross-cultural generalizability, and theoretical integration. Ongoing large-scale project.` }]

  },

  {
    title: 'Fellowships and Grants',
    kind: 'rows',
    items: [
    { year: '2026', html: `<strong>NSF Graduate Research Fellowship Program</strong> (GRFP) awardee` },
    { year: '2026', html: `<strong>UCLA Graduate Research Mentorship Award</strong> ($30,000)` },
    { year: '2026', html: `<strong>UCLA Graduate Summer Research Mentorship Award</strong> ($6,000)` },
    { year: '2025', html: `<strong>Edwin W. Pauley Award</strong> ($30,000), awarded to two incoming Psychology PhD students at UCLA` },
    { year: '2024', html: `<strong>Harvard Institute for Quantitative Social Science Grant</strong> ($16,000)` },
    { year: '2022', html: `<strong>Harvard College Research Program Grant</strong> ($5,000) for senior honors thesis` },
    { year: '2022', html: `<strong>Harvard College Research Program Grant</strong> ($1,000) for senior honors thesis` },
    { year: '2021', html: `<strong>Harvard College Research Program Grant</strong> ($1,000) for independent research` }]

  },

  {
    title: 'Honors and Awards',
    kind: 'rows',
    items: [
    { year: '2026', html: `<strong>2025 Early Career Award</strong>, Society for Experimental Psychology and Cognitive Science (APA Division 3)`,
      note: `Awarded unanimously by the editors of the <em>Journal of Experimental Psychology</em> for one of the year’s most outstanding empirical papers by a new scholar: <em>Sending Signals: Trigger Warnings and Safe Space Notifications.</em>` },
    { year: '2025', html: `<strong>Editor’s Choice Award</strong>, <em>Journal of Experimental Psychology: Applied</em>`,
      note: `For <em>Sending Signals: Trigger Warnings and Safe Space Notifications.</em>` },
    { year: '2025', html: `<strong>NSF Graduate Research Fellowship Program</strong>, Honorable Mention` },
    { year: '2023', html: `<strong>Phi Beta Kappa</strong>, awarded to top 10% of graduating class, Harvard University` },
    { year: '2023', html: `<strong>Summa Cum Laude</strong>, Senior Honors Thesis in Psychology, Harvard University` },
    { year: '2023', html: `<strong>Psychology Faculty Prize</strong> for outstanding senior honors thesis, Harvard University` },
    { year: '2023', html: `<strong>Highest Honors</strong> in the field of Psychology, Harvard University` },
    { year: '2023', html: `<strong>Seamus P. Malin Award</strong>, for outstanding teamwork and dedication to Harvard Men’s Soccer` },
    { year: '2022', html: `<strong>John Harvard Scholar</strong>, awarded to the top 5% of junior class, Harvard University` },
    { year: '2021', html: `<strong>John Harvard Scholar</strong>, awarded to the top 5% of sophomore class, Harvard University` },
    { year: '2020', html: `<strong>Academic All-Ivy League</strong>, awarded to one member of each varsity sports team, Harvard University` }]

  },

  {
    title: 'Invited Talks',
    kind: 'rows',
    spacious: true,
    items: [
    { year: 'Jul 2026', html: `<strong>Pratt, S.</strong> <em>Becoming a psychological scientist.</em> Invited talk presented in person to the Advanced Studies Program at St. Paul’s School, Concord, New Hampshire.` },
    { year: 'Jun 2025', html: `<strong>Pratt, S.</strong> <em>How camp shapes us: The psychology of belonging.</em> Invited talk presented in person at YMCA Camp Belknap, Wolfeboro, New Hampshire.` },
    { year: 'Apr 2025', html: `<strong>Pratt, S.</strong> &amp; Kubin, E. <em>Testing true victimhood beliefs across cultures and contexts.</em> Invited talk presented in person at the Templeton World Charity Foundation grant cohort meeting, Listening and Learning in a Polarized World, Marrakesh, Morocco.` },
    { year: 'Oct 2024', html: `<strong>Pratt, S.</strong> &amp; Gray, K. <em>The roots of moral disagreement and how to find common ground.</em> Invited talk presented virtually at St. Paul’s School, Concord, New Hampshire.` }]

  },

  {
    title: 'Conference Posters',
    kind: 'rows',
    spacious: true,
    items: [
    { year: 'May 2026', html: `<strong>Pratt, S.</strong>, Rosenfeld, D. L., Goranson, A., Tomiyama, A. J., Sheeran, P., &amp; Gray, K. <em>Health behaviors are moralized when perceived to cause harm.</em> Poster presented by S. Pratt at the annual convention for the Association for Psychological Science (Barcelona, Spain).` },
    { year: 'Feb 2024', html: `<strong>Pratt, S.</strong> &amp; Gray, K. <em>Harm denial: A source of political animosity and a potential solution.</em> Poster presented by S. Pratt at the annual convention for the Society of Personality and Social Psychology (San Diego, CA).` },
    { year: 'Aug 2023', html: `<strong>Pratt, S.</strong>, Rodriguez, M., Bellet, B. W., &amp; McNally, R. J. <em>Alone but not lonely: Brief cognitive interventions for lonely individuals.</em> Poster presented by S. Pratt at the annual convention for the American Psychological Association (Washington, D.C.).` },
    { year: 'Feb 2023', html: `<strong>Pratt, S.</strong>, Rodriguez, M., Bellet, B. W., &amp; McNally, R. J. <em>Alone but not lonely: Cognitive reappraisal helps lonely individuals experience time alone more positively.</em> Poster presented by S. Pratt at the annual convention for the Society of Personality and Social Psychology (Atlanta, GA).` }]

  },

  {
    title: 'Public Scholarship',
    subsections: [
    {
      title: 'Edited Books',
      kind: 'refs',
      items: [
      { html: `Gray, K. (2025, January 14). <em>Outraged: Why we fight about morality and politics and how to find common ground.</em> Pantheon. Assisted with research, writing, and editing.` }]

    },
    {
      title: 'Podcasts',
      kind: 'refs',
      items: [
      { html: `Guest, <em>Outrage Overload Podcast.</em> Episode 63: Moral psychology and the harm-based roots of political polarization. Interviewed by David Beckemeyer. April 30, 2025. <a target="_blank" rel="noopener" href="https://outrageoverload.net/outrage-63-how-perceptions-of-harm-drive-moral-outrage-and-political-conflict-samuel-pratt/">Listen</a>` }]

    },
    {
      title: 'Science Writing',
      kind: 'refs',
      items: [
      { html: `<strong>Pratt, S.</strong> (2026, May). <a target="_blank" rel="noopener" href="https://sampratt.substack.com/p/if-were-so-smart-why-arent-we-rich">If we’re so smart, why aren’t we rich?</a> <em>Train of Thought.</em>` },
      { html: `<strong>Pratt, S.</strong> (2026, April). <a target="_blank" rel="noopener" href="https://thesciencematters.org/most-students-want-trigger-warnings-they-dont-actually-help/">Most students want trigger warnings: They don’t actually help.</a> <em>The Science Matters.</em>` },
      { html: `<strong>Pratt, S.</strong> (2026, March). <a target="_blank" rel="noopener" href="https://sampratt.substack.com/p/can-words-harm">Can words harm? My new measure that sparked Twitter outrage.</a> <em>Train of Thought.</em>` },
      { html: `<strong>Pratt, S.</strong>, Jones, P., &amp; Bridgland, V. (2025, September). <a target="_blank" rel="noopener" href="https://spsp.org/news/character-and-context-blog/pratt-jones-bridgland-supportive-classroom-safe-space-messages-trigger-warnings">Want a more supportive classroom? Skip the trigger warning.</a> <em>SPSP Character &amp; Context Blog.</em>` },
      { html: `Gray, K., Devine, H., &amp; <strong>Pratt, S.</strong> (2025, April). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/strip-club-physics">Strip club physics: Serious decisions need serious settings.</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K., <strong>Pratt, S.</strong>, &amp; Devine, H. (2025, February). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/ai-is-more-moral-than-you">AI is more moral than you (and the NYTimes’ best ethicist).</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K., &amp; <strong>Pratt, S.</strong> (2025, January). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/why-grandmas-cookies-taste-so-good">Why grandma’s cookies taste so good (or: When I gave electric shocks to Harvard undergraduates).</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K., <strong>Pratt, S.</strong>, &amp; Devine, H. (2024, December). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/how-the-dmv-saved-christmas">How the DMV saved Christmas: Shared irritation brings us together.</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K., Devine, H., &amp; <strong>Pratt, S.</strong> (2024, December). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/the-assassination-of-a-ceo">The assassination of a CEO: Why some celebrate the pain of the powerful.</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K., <strong>Pratt, S.</strong>, &amp; Devine, H. (2024, November). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/in-defense-of-flat-earthers">In defense of flat earthers: Conspiracy theorists are more logical than you think.</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K., Devine, H., &amp; <strong>Pratt, S.</strong> (2024, November). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/moving-forward">Moving forward: The 2024 election and the curse of knowledge.</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K., Devine, H., &amp; <strong>Pratt, S.</strong> (2024, October). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/the-psychology-of-petty">The psychology of pettiness: Why (some) people get so angry at line-cutting and grape-stealing.</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K. &amp; <strong>Pratt, S.</strong> (2024, September). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/the-problem-with-moral-psychology">The problem with moral psychology: What science says about moral truths and romancing your sibling.</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K., <strong>Pratt, S.</strong>, &amp; Puryear, C. (2024, April). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/danger-why-moral-panics-are-irresistible">Danger! Why moral panics are irresistible to your brain.</a> <em>The Moral Understanding Substack.</em>` },
      { html: `<strong>Pratt, S.</strong> &amp; Gray, K. (2024, February). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/being-alone-doesnt-make-you-a-killer">Being alone doesn’t make you a killer (or: Would Henry David Thoreau be a mass shooter in 2024?).</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K., &amp; <strong>Pratt, S.</strong> (2024, January). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/hidden-brain-and-evil-explain">Hidden brain and evil explain: Lessons from death threats.</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Rodriguez, M., <strong>Pratt, S.</strong>, &amp; Bellet, B. (2023, November). <a target="_blank" rel="noopener" href="https://spsp.org/news/character-and-context-blog/rodriguez-pratt-bellet-benefits-perceptions-solitude-loneliness">Improving our relationship to being alone.</a> <em>SPSP Character &amp; Context Blog.</em>` },
      { html: `Gray, K., <strong>Pratt, S.</strong>, &amp; Blakey, W. (2023, October). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/the-myopia-of-heroism">The myopia of heroism: Hamas, Israel, and the quest to save victims.</a> <em>The Moral Understanding Substack.</em>` },
      { html: `Gray, K., Blakey, W., &amp; <strong>Pratt, S.</strong> (2023, August). <a target="_blank" rel="noopener" href="https://www.moralunderstandingnewsletter.com/p/charitable-condescension">Charitable condescension: You’re not a saint for thinking “they” are stupid.</a> <em>The Moral Understanding Substack.</em>` }]

    }]

  },

  {
    title: 'Teaching Experience',
    kind: 'rows',
    items: [
    { year: '2026 Spring', html: `Teaching Assistant, PSYCH 10: Introductory Psychology, UCLA` },
    { year: '2023 Fall', html: `Teaching Assistant, The Science of Moral Understanding, UNC Chapel Hill` },
    { year: '2023 Summer', html: `Teaching Assistant, Becoming a Brain Scientist: Neuroscience and Psychology Research, Harvard Summer School` }]

  },

  {
    title: 'Research Experience',
    kind: 'entries',
    items: [
    { years: '2023 – 2025', heading: 'Lab Manager, Deepest Beliefs Lab', lines: ['University of North Carolina at Chapel Hill'], soft: 'PI: Kurt Gray, PhD' },
    { years: '2021 – 2023', heading: 'Research Assistant, Laboratory for Anxiety & Related Disorders', lines: ['Harvard University'], soft: 'PI: Richard J. McNally, PhD — conducted senior honors thesis' },
    { years: '2021 Winter; 2023 Spring', heading: 'Research Assistant, Laboratory on Complex Thought and Cooperation', lines: ['Harvard University'], soft: 'PI: Joshua Greene, PhD' },
    { years: '2020 Summer', heading: 'Research Assistant, Laboratory for Youth Mental Health', lines: ['Harvard University'], soft: 'PI: John Weisz, PhD' }]

  },

  {
    title: 'Affiliations and Service',
    kind: 'rows',
    items: [
    { year: '2025 –', html: `Psychology in Action, University of California, Los Angeles` },
    { year: '2024 –', html: `Advisory committee member, Institute for Multipartisan Education` },
    { year: '2023 –', html: `Society for Personality and Social Psychology (SPSP)` },
    { year: '2022 – 2023', html: `Psychology Undergraduate Planning Committee, Harvard University` }]

  }]

};
