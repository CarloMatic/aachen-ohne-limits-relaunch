/* ==========================================================================
   Aachen ohne Limits – Phase 1 Launch Application Engine
   Verbindliche Grundlage: Finales Briefing + Launchkonzept Phase 1
   ========================================================================== */

// ─── I18N Dictionary ─────────────────────────────────────────────────────────
const I18N = {
  DE: {
    nav: {
      stories: 'Stories',
      themen: 'Themen',
      news: 'News',
      initiative: 'Initiative',
      mitglieder: 'Mitglieder',
      mitmachen: 'Mitmachen',
      antrag: 'Antrag starten'
    },
    hero: {
      eyebrow: 'STANDORTGESCHICHTEN AUS DER AACHEN AREA',
      title: 'AACHEN VERSCHIEBT GRENZEN.',
      subline: 'Menschen, Unternehmen und Forschungseinrichtungen der Aachen Area machen möglich, was vorher nicht möglich war. Wir finden diese Entwicklungen, verbinden sie und tragen ihre Geschichten weiter.',
      btnPrimary: 'Stories entdecken',
      btnSecondary: 'Die Idee dahinter'
    },
    directAnswer: {
      title: 'Was ist Aachen ohne Limits?',
      text: '„Aachen ohne Limits" ist die gemeinsame Standortmarke der Aachen Area. Die Plattform macht belegbare Leistungen aus Wirtschaft, Wissenschaft, Technologie und Gesellschaft sichtbar, ordnet sie in größere Zusammenhänge ein und entwickelt daraus schrittweise eigene Standortgeschichten.',
      addendum: 'Herausgeber und Ermöglicher ist der Place Branding Aachen e. V. – getragen von Unternehmen und Institutionen, die Aachens Wahrnehmung gemeinsam stärken wollen.',
      cta: 'Wie die Initiative arbeitet'
    },
    montage: {
      title: 'DAS BEGINNT HIER.',
      intro: 'Manche Entwicklungen sind international relevant, werden aber kaum mit Aachen verbunden. Eine erste Auswahl zeigt, welche technologischen, unternehmerischen und europäischen Geschichten in der Aachen Area entstehen.'
    },
    storyTeaser: {
      title: 'GESCHICHTEN, DIE BEREITS IN AACHEN BEGINNEN.',
      intro: 'Noch sind nicht alle Geschichten auf dieser Plattform ausführlich erzählt. Aber sie existieren bereits. Wir zeigen eine erste kuratierte Auswahl und führen zu den Organisationen und Menschen, die dahinterstehen.',
      cta: 'Alle Stories ansehen'
    },
    themenraeume: {
      title: 'DREI RÄUME, IN DENEN AACHEN GRENZEN VERSCHIEBT.',
      t1Title: 'Technologie wird Wirkung',
      t1Text: 'Wo Forschung, Deep Tech und industrielle Anwendung aufeinandertreffen, werden aus technologischen Möglichkeiten konkrete Lösungen.',
      t1Cta: 'Technologie und Wirkung entdecken',
      t2Title: 'Aus Wissen wird Unternehmen',
      t2Text: 'In der Aachen Area entstehen aus Forschung, Erfahrung und mutigen Entscheidungen neue Unternehmen und Märkte.',
      t2Cta: 'Gründung und Transfer entdecken',
      t3Title: 'Europa wird Praxis',
      t3Text: 'Zwischen Deutschland, Belgien und den Niederlanden wird grenzüberschreitende Zusammenarbeit nicht nur geplant, sondern gelebt.',
      t3Cta: 'Zusammenarbeit über Grenzen entdecken'
    },
    arbeitsweise: {
      title: 'AUS STARKEN EINZELFÄLLEN WIRD EIN GEMEINSAMES BILD.',
      s1Title: 'Finden',
      s1Desc: 'Wir identifizieren Leistungen, Menschen und Zusammenhänge mit Bedeutung für die Aachen Area.',
      s2Title: 'Prüfen',
      s2Desc: 'Wir bewerten Relevanz, Fakten, Quellen, Rechte und internationales Potenzial.',
      s3Title: 'Priorisieren',
      s3Desc: 'Wir ordnen einzelne Themen nach strategischer Bedeutung für den Standort und Story-Potenzial.',
      s4Title: 'Einbinden',
      s4Desc: 'Wir gewinnen Menschen und Quellen, führen Interviews und sichern Rechte und Freigaben.',
      s5Title: 'Produzieren',
      s5Desc: 'Wir entwickeln verständliche, menschliche und belegbare Geschichten – auf Deutsch und Englisch.',
      s6Title: 'Verbreiten',
      s6Desc: 'Mitglieder, Partner, Alumni und Botschafter tragen die Inhalte in ihre Netzwerke.',
      cta: 'Mehr über unsere Arbeitsweise'
    },
    storyGesucht: {
      title: 'WELCHE GESCHICHTE AUS DER AACHEN AREA SOLLTE DIE WELT KENNEN?',
      text: 'Wir suchen belegbare Leistungen, mutige Menschen und Kooperationen, die Grenzen verschieben. Ein Vorschlag ist keine Veröffentlichungsgarantie – aber vielleicht der Anfang einer Geschichte, die Aachen größer sichtbar macht.',
      c1: 'Klarer Bezug zur Aachen Area',
      c2: 'Besondere Leistung oder Wirkung',
      c3: 'Nachvollziehbare Quellen',
      c4: 'Menschen, die die Geschichte erzählen können',
      cta: 'Geschichte vorschlagen'
    },
    newsHome: {
      title: 'WAS SICH GERADE BEWEGT.',
      cta: 'Alle News'
    },
    traeger: {
      title: 'GEMEINSAM WIRD AUS SICHTBARKEIT WIRKUNG.',
      text: 'Diese Unternehmen und Institutionen ermöglichen, dass aus einzelnen Leistungen ein gemeinsames Standortbild entsteht – langfristig, professionell und international anschlussfähig.',
      cta: 'Wer die Initiative trägt'
    },
    beteiligung: {
      title: 'MACHEN SIE AACHENS STÄRKEN GEMEINSAM SICHTBAR.',
      text: 'Tragen Sie eine Geschichte, einen Kontakt, Ihre Reichweite oder Ihre Mitgliedschaft bei. Jede Form der Beteiligung hilft, die Aachen Area klarer, glaubwürdiger und weiter sichtbar zu machen.',
      btnPrimary: 'Mitwirken',
      btnSecondary: 'Mitgliedschaft prüfen'
    },
    stories: {
      h1: 'STORIES AUS DER AACHEN AREA',
      directAnswer: 'Hier kuratiert „Aachen ohne Limits" reale Entwicklungen, Leistungen und Kooperationen aus der Aachen Area. Solange eine eigene Story noch nicht produziert ist, führen wir transparent zu den Originalquellen der verantwortlichen Organisationen.',
      filterAll: 'Alle',
      legendExtern: 'Externe Quelle – führt zur Originalseite einer anderen Organisation.',
      legendVorbereitung: 'Story in Vorbereitung – eigene redaktionelle Produktion ist verbindlich geplant.',
      legendEigen: 'Aachen-ohne-Limits-Story – eigener recherchierter Beitrag.',
      legendSignal: 'Aachen-Signal – belegte Standortentwicklung in Kurzform.',
      legendProjekt: 'Projektverweis – laufendes Vorhaben mit Standortbezug.',
      legendFundstueck: 'Fundstück – bemerkenswerter externer Hinweis mit Einordnung.',
      ctaStory: 'Geschichte vorschlagen'
    },
    themenHub: {
      h1: 'STRATEGISCHE THEMENRÄUME',
      intro: 'Drei Perspektiven auf die Standortstärken der Aachen Area – redaktionell kuratiert und mit realen Signalen belegt.'
    },
    initiative: {
      h1: 'DIE INITIATIVE HINTER AACHEN OHNE LIMITS',
      directAnswer: 'Der Place Branding Aachen e. V. entwickelt und trägt die gemeinsame Standortmarke „Aachen ohne Limits". Der Verein findet, kuratiert, produziert und verbreitet Geschichten aus der Aachen Area und schafft dafür ein langfristiges Netzwerk aus Wirtschaft, Wissenschaft und Institutionen.',
      missionTitle: 'Mission',
      missionText: 'Die Aachen Area verfügt über eine außergewöhnliche Dichte an wissenschaftlicher, wirtschaftlicher und technologischer Kompetenz. Was bisher fehlt, ist eine langfristige gemeinsame Erzählung, die herausragende Einzelfälle verbindet und daraus ein glaubwürdiges Standortbild entstehen lässt. „Aachen ohne Limits" schließt diese Lücke.',
      arbeitTitle: 'Arbeitsweise',
      arbeitText: 'Die Initiative identifiziert außergewöhnliche Leistungen, prüft Fakten und Quellen, ordnet einzelne Entwicklungen in größere Zusammenhänge ein und erzählt die stärksten Geschichten verständlich, menschlich, belegbar und international anschlussfähig.',
      transparenzTitle: 'Transparenz',
      t1: 'Der Verein ist kein gemeinnütziger Verein.',
      t2: 'Mitgliedschaft erzeugt keinen automatischen redaktionellen Anspruch.',
      t3: 'Fremde Leistungen werden nicht als eigene ausgegeben.',
      t4: 'Externe Quellen und Interessenbindungen werden transparent gemacht.',
      organeTitle: 'Organe & Governance',
      organeText: 'Vorstand und Geschäftsführung lenken die strategische und redaktionelle Ausrichtung. Die Governance sichert redaktionelle Unabhängigkeit und transparente Entscheidungswege.'
    },
    mitglieder: {
      h1: 'WER AACHEN OHNE LIMITS MÖGLICH MACHT',
      intro: 'Eine gemeinsame Standortmarke entsteht nicht durch einen einzelnen Absender. Sie wird von Unternehmen und Institutionen getragen, die Verantwortung für die Wahrnehmung und Zukunftsfähigkeit der Aachen Area übernehmen.',
      cta: 'Mitgliedschaft prüfen'
    },
    mitmachen: {
      h1: 'WIE MÖCHTEN SIE AACHEN SICHTBARER MACHEN?',
      r1Title: 'Ich kenne eine Geschichte',
      r1Text: 'Schlagen Sie eine belegbare Leistung, einen Menschen oder eine Kooperation vor.',
      r1Cta: 'Geschichte vorschlagen',
      r2Title: 'Ich kann einen Kontakt oder eine Quelle vermitteln',
      r2Text: 'Öffnen Sie der Redaktion den Zugang zu Wissen, Protagonisten oder Material.',
      r2Cta: 'Kontakt beitragen',
      r3Title: 'Ich möchte Aachen weitertragen',
      r3Text: 'Nutzen Sie Ihre Netzwerke als Alumni, Botschafter oder Multiplikator.',
      r3Cta: 'Botschafter werden',
      r4Title: 'Ich möchte Inhalte nutzen',
      r4Text: 'Verwenden Sie Standortgeschichten für Ihr Recruiting, Ihre Unternehmenskommunikation oder Ihre Standortargumentation.',
      r4Cta: 'Mehr erfahren',
      r5Title: 'Wir möchten kooperieren',
      r5Text: 'Entwickeln Sie mit der Initiative ein Thema, eine Verbreitungspartnerschaft oder ein Format.',
      r5Cta: 'Partnerschaft anfragen',
      r6Title: 'Wir möchten fördern',
      r6Text: 'Unterstützen Sie die gemeinsame Standortkommunikation als außerordentliches Mitglied.',
      r6Cta: 'Außerordentliche Mitgliedschaft prüfen',
      r7Title: 'Wir möchten Mitglied werden',
      r7Text: 'Ermöglichen und gestalten Sie die langfristige Standortkommunikation der Aachen Area.',
      r7Cta: 'Mitgliedschaft prüfen'
    },
    mitgliedschaft: {
      h1: 'GEMEINSAM MEHR WIRKUNG FÜR AACHEN',
      leitgedanke: 'Die Mitgliedschaft ist kein Kauf von Werbefläche. Sie ermöglicht die professionelle Entwicklung, Produktion und Verbreitung einer gemeinsamen Standortkommunikation, von der die Aachen Area und ihre Akteure langfristig profitieren.',
      bronzeTitle: 'Mittragen',
      bronzeSubtitle: 'Bronze',
      silberTitle: 'Mitgestalten',
      silberSubtitle: 'Silber',
      goldTitle: 'Mitprägen',
      goldSubtitle: 'Gold',
      btnApply: 'Mitgliedschaft beantragen',
      btnCheck: 'Beiträge und Leistungen prüfen',
      btnTalk: 'Persönliches Gespräch vereinbaren',
      calcTitle: 'BERECHNEN SIE IHREN BEITRAG',
      calcLabelHeadcount: 'Mitarbeitende in der Aachen Area (Radius 75 km)',
      calcLabelTier: 'Gewünschte Beteiligungsrolle',
      calcPriceTitle: 'Ihr Jahresbeitrag',
      calcPeriod: 'zzgl. USt. / Kalenderjahr',
      faqTitle: 'HÄUFIGE FRAGEN',
      faq1Q: 'Was unterscheidet ordentliche von außerordentlicher Mitgliedschaft?',
      faq1A: 'Ordentliche Mitglieder haben volles Stimmrecht und gestalten die strategische Ausrichtung aktiv mit. Außerordentliche Mitglieder unterstützen die Initiative und profitieren von Netzwerk und Sichtbarkeit, besitzen jedoch kein Stimmrecht.',
      faq2Q: 'Erzeugt eine Mitgliedschaft einen Anspruch auf Veröffentlichung?',
      faq2A: 'Nein. Mitgliedschaft begründet keinen automatischen redaktionellen Anspruch. Die Auswahl der Stories folgt unabhängigen redaktionellen Kriterien.',
      faq3Q: 'Wie läuft der Aufnahmeprozess ab?',
      faq3A: 'Nach Eingang Ihres Antrags prüft der Vorstand die Aufnahme. Sie erhalten innerhalb von 14 Tagen eine Rückmeldung und bei Aufnahme die vollständigen Unterlagen.',
      aufnahmeTitle: 'AUFNAHMEPROZESS',
      aufnahmeSteps: 'Antrag einreichen → Vorstandsprüfung → Rückmeldung innerhalb von 14 Tagen → Beitritt und Onboarding',
      stimmrechteTitle: 'STIMMRECHTE',
      stimmrechteText: 'Stimmrechte richten sich nach der jeweils geltenden Satzung und sind an die Mitgliedschaftsart und die Zahl der in der Aachen Area beschäftigten Mitarbeitenden gebunden.',
      dokumenteTitle: 'DOKUMENTE',
      dokumenteSatzung: 'Satzung',
      dokumenteBeitragsordnung: 'Beitragsordnung',
      dokumenteLeistungen: 'Leistungsübersicht',
      dokumenteMarkenordnung: 'Markenordnung',
      dokumentePlaceholder: '[PLATZHALTER – Dokument wird vor Launch bereitgestellt]',
      ansprechpartnerTitle: 'IHR ANSPRECHPARTNER',
      ansprechpartnerText: 'Für ein persönliches Gespräch zur Mitgliedschaft steht Ihnen unser Team gern zur Verfügung.'
    },
    presse: {
      h1: 'PRESSE UND MEDIEN',
      boilerplate: 'Der Place Branding Aachen e. V. entwickelt und trägt die Standortmarke „Aachen ohne Limits". Gemeinsam mit Unternehmen und Institutionen macht die Initiative belegbare Leistungen, Menschen und Kooperationen aus der Aachen Area sichtbar und entwickelt daraus eine langfristige, international anschlussfähige Standorterzählung.',
      contactTitle: 'Pressekontakt',
      logosTitle: 'Logos & Markenrechtliches',
      logosText: 'Freigegebene Logo-Dateien in RGB, Druck-Versionen und Nutzungsbedingungen.'
    },
    footer: {
      col1Title: 'Standortinhalte',
      col2Title: 'Initiative',
      col3Title: 'Mitmachen',
      col4Title: 'Service & Rechtliches',
      rights: '© 2026 Place Branding Aachen e. V. Alle Rechte vorbehalten.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      cookies: 'Cookie-Einstellungen',
      newsletter: 'Newsletter',
      kontakt: 'Kontakt',
      barrierefreiheit: 'Barrierefreiheit'
    }
  },
  EN: {
    nav: {
      stories: 'Stories',
      themen: 'Topics',
      news: 'News',
      initiative: 'Initiative',
      mitglieder: 'Members',
      mitmachen: 'Engage',
      antrag: 'Apply Now'
    },
    hero: {
      eyebrow: 'LOCATION STORIES FROM THE AACHEN AREA',
      title: 'AACHEN PUSHES BOUNDARIES.',
      subline: 'People, companies, and research institutions across the Aachen Area make possible what wasn\'t possible before. We find these developments, connect them, and carry their stories further.',
      btnPrimary: 'Discover Aachen',
      btnSecondary: 'The Idea Behind It'
    },
    directAnswer: {
      title: 'What is Aachen Without Limits?',
      text: '"Aachen Without Limits" is the joint location brand of the Aachen Area. The platform makes verifiable achievements from business, science, technology, and society visible, places them in broader context, and gradually develops them into original location stories.',
      addendum: 'Published and enabled by Place Branding Aachen e. V. – supported by companies and institutions that want to strengthen the perception of Aachen together.',
      cta: 'How the initiative works'
    },
    montage: {
      title: 'THIS STARTS HERE.',
      intro: 'Some developments are internationally significant but rarely associated with Aachen. A curated selection shows which technological, entrepreneurial, and European stories are emerging in the Aachen Area.'
    },
    storyTeaser: {
      title: 'STORIES THAT ALREADY BEGIN IN AACHEN.',
      intro: 'Not all stories on this platform are fully told yet. But they already exist. We present a curated selection and lead you to the organizations and people behind them.',
      cta: 'View All Stories'
    },
    themenraeume: {
      title: 'THREE SPACES WHERE AACHEN PUSHES BOUNDARIES.',
      t1Title: 'Technology Becomes Impact',
      t1Text: 'Where research, deep tech, and industrial application converge, technological possibilities become concrete solutions.',
      t1Cta: 'Discover technology & impact',
      t2Title: 'Knowledge Becomes Enterprise',
      t2Text: 'In the Aachen Area, new companies and markets emerge from research, experience, and bold decisions.',
      t2Cta: 'Discover startups & transfer',
      t3Title: 'Europe Becomes Practice',
      t3Text: 'Between Germany, Belgium, and the Netherlands, cross-border collaboration is not just planned — it\'s lived.',
      t3Cta: 'Discover cross-border cooperation'
    },
    arbeitsweise: {
      title: 'FROM STRONG INDIVIDUAL CASES TO A SHARED PICTURE.',
      s1Title: 'Find',
      s1Desc: 'We identify achievements, people, and connections of significance to the Aachen Area.',
      s2Title: 'Verify',
      s2Desc: 'We evaluate relevance, facts, sources, rights, and international potential.',
      s3Title: 'Prioritize',
      s3Desc: 'We rank topics by strategic importance for the region and story potential.',
      s4Title: 'Engage',
      s4Desc: 'We involve people and sources, conduct interviews, and secure rights and approvals.',
      s5Title: 'Produce',
      s5Desc: 'We develop understandable, human, and verifiable stories — in German and English.',
      s6Title: 'Amplify',
      s6Desc: 'Members, partners, alumni, and ambassadors carry the content into their networks.',
      cta: 'More about how we work'
    },
    storyGesucht: {
      title: 'WHICH STORY FROM THE AACHEN AREA SHOULD THE WORLD KNOW?',
      text: 'We\'re looking for verifiable achievements, courageous people, and collaborations that push boundaries. A suggestion is not a publication guarantee — but perhaps the beginning of a story that makes Aachen more visible.',
      c1: 'Clear connection to the Aachen Area',
      c2: 'Outstanding achievement or impact',
      c3: 'Verifiable sources',
      c4: 'People who can tell the story',
      cta: 'Suggest a story'
    },
    newsHome: {
      title: 'WHAT\'S MOVING RIGHT NOW.',
      cta: 'All News'
    },
    traeger: {
      title: 'TOGETHER, VISIBILITY BECOMES IMPACT.',
      text: 'These companies and institutions make it possible for individual achievements to become a shared regional identity — long-term, professional, and internationally connected.',
      cta: 'Who supports the initiative'
    },
    beteiligung: {
      title: 'MAKE AACHEN\'S STRENGTHS VISIBLE TOGETHER.',
      text: 'Contribute a story, a contact, your reach, or your membership. Every form of participation helps make the Aachen Area clearer, more credible, and more widely visible.',
      btnPrimary: 'Engage',
      btnSecondary: 'Explore membership'
    },
    stories: {
      h1: 'STORIES FROM THE AACHEN AREA',
      directAnswer: 'Here, "Aachen Without Limits" curates real developments, achievements, and collaborations from the Aachen Area. As long as an original story has not yet been produced, we transparently link to the original sources of the responsible organizations.',
      filterAll: 'All',
      legendExtern: 'External Source — leads to the original page of another organization.',
      legendVorbereitung: 'Story in Progress — our editorial production is firmly planned.',
      legendEigen: 'Aachen Without Limits Story — our own researched contribution.',
      legendSignal: 'Aachen Signal — verified location development in brief.',
      legendProjekt: 'Project Reference — ongoing project with regional relevance.',
      legendFundstueck: 'Discovery — noteworthy external reference with context.',
      ctaStory: 'Suggest a story'
    },
    themenHub: {
      h1: 'STRATEGIC TOPIC SPACES',
      intro: 'Three perspectives on the Aachen Area\'s strengths — editorially curated and backed by real signals.'
    },
    initiative: {
      h1: 'THE INITIATIVE BEHIND AACHEN WITHOUT LIMITS',
      directAnswer: 'Place Branding Aachen e. V. develops and carries the joint location brand "Aachen Without Limits." The association finds, curates, produces, and distributes stories from the Aachen Area, building a long-term network of business, science, and institutions.',
      missionTitle: 'Mission',
      missionText: 'The Aachen Area has an extraordinary density of scientific, economic, and technological expertise. What has been missing is a long-term shared narrative that connects outstanding individual cases into a credible regional identity. "Aachen Without Limits" closes this gap.',
      arbeitTitle: 'How We Work',
      arbeitText: 'The initiative identifies extraordinary achievements, verifies facts and sources, places individual developments in broader context, and tells the strongest stories in a way that is understandable, human, verifiable, and internationally relevant.',
      transparenzTitle: 'Transparency',
      t1: 'The association is not a charitable organization.',
      t2: 'Membership does not create an automatic right to publication.',
      t3: 'Third-party achievements are not presented as our own.',
      t4: 'External sources and interests are disclosed transparently.',
      organeTitle: 'Governance & Leadership',
      organeText: 'Board and management guide the strategic and editorial direction. Governance ensures editorial independence and transparent decision-making.'
    },
    mitglieder: {
      h1: 'WHO MAKES AACHEN WITHOUT LIMITS POSSIBLE',
      intro: 'A shared location brand is not built by a single voice. It is carried by companies and institutions that take responsibility for the perception and future viability of the Aachen Area.',
      cta: 'Explore membership'
    },
    mitmachen: {
      h1: 'HOW WOULD YOU LIKE TO MAKE AACHEN MORE VISIBLE?',
      r1Title: 'I know a story',
      r1Text: 'Suggest a verifiable achievement, person, or collaboration.',
      r1Cta: 'Suggest a story',
      r2Title: 'I can connect a source or contact',
      r2Text: 'Give our editorial team access to knowledge, protagonists, or materials.',
      r2Cta: 'Contribute a contact',
      r3Title: 'I want to carry Aachen further',
      r3Text: 'Use your networks as alumni, ambassador, or multiplier.',
      r3Cta: 'Become an ambassador',
      r4Title: 'I want to use content',
      r4Text: 'Use location stories for your recruiting, corporate communications, or regional positioning.',
      r4Cta: 'Learn more',
      r5Title: 'We want to cooperate',
      r5Text: 'Develop a topic, distribution partnership, or format with the initiative.',
      r5Cta: 'Inquire about partnership',
      r6Title: 'We want to support',
      r6Text: 'Support the shared location communication as a supporting member.',
      r6Cta: 'Explore supporting membership',
      r7Title: 'We want to become members',
      r7Text: 'Enable and shape the long-term location communication of the Aachen Area.',
      r7Cta: 'Explore membership'
    },
    mitgliedschaft: {
      h1: 'GREATER IMPACT FOR AACHEN — TOGETHER',
      leitgedanke: 'Membership is not buying advertising space. It enables the professional development, production, and distribution of shared location communication that benefits the Aachen Area and its stakeholders long-term.',
      bronzeTitle: 'Support',
      bronzeSubtitle: 'Bronze',
      silberTitle: 'Shape',
      silberSubtitle: 'Silver',
      goldTitle: 'Lead',
      goldSubtitle: 'Gold',
      btnApply: 'Apply for membership',
      btnCheck: 'Review fees & benefits',
      btnTalk: 'Schedule a personal conversation',
      calcTitle: 'CALCULATE YOUR CONTRIBUTION',
      calcLabelHeadcount: 'Employees in the Aachen Area (75 km radius)',
      calcLabelTier: 'Desired engagement level',
      calcPriceTitle: 'Annual Membership Fee',
      calcPeriod: 'excl. VAT / calendar year',
      faqTitle: 'FREQUENTLY ASKED QUESTIONS',
      faq1Q: 'What distinguishes regular from associate membership?',
      faq1A: 'Regular members have full voting rights and actively shape the strategic direction. Associate members support the initiative and benefit from network and visibility, but do not have voting rights.',
      faq2Q: 'Does membership create a right to publication?',
      faq2A: 'No. Membership does not create an automatic editorial entitlement. Story selection follows independent editorial criteria.',
      faq3Q: 'How does the admission process work?',
      faq3A: 'After receiving your application, the board reviews the admission. You will receive feedback within 14 days and, upon admission, the complete documentation.',
      aufnahmeTitle: 'ADMISSION PROCESS',
      aufnahmeSteps: 'Submit application → Board review → Feedback within 14 days → Joining and onboarding',
      stimmrechteTitle: 'VOTING RIGHTS',
      stimmrechteText: 'Voting rights are governed by the current statutes and are tied to the type of membership and the number of employees in the Aachen Area.',
      dokumenteTitle: 'DOCUMENTS',
      dokumenteSatzung: 'Statutes',
      dokumenteBeitragsordnung: 'Fee Schedule',
      dokumenteLeistungen: 'Service Overview',
      dokumenteMarkenordnung: 'Brand Guidelines',
      dokumentePlaceholder: '[PLACEHOLDER – Document will be provided before launch]',
      ansprechpartnerTitle: 'YOUR CONTACT',
      ansprechpartnerText: 'Our team is happy to arrange a personal conversation about membership.'
    },
    presse: {
      h1: 'PRESS & MEDIA',
      boilerplate: 'Place Branding Aachen e. V. develops and carries the location brand "Aachen Without Limits." Together with companies and institutions, the initiative makes verifiable achievements, people, and collaborations from the Aachen Area visible and develops them into a long-term, internationally relevant location narrative.',
      contactTitle: 'Press Contact',
      logosTitle: 'Logos & Brand Guidelines',
      logosText: 'Approved logo files in RGB, print versions, and usage terms.'
    },
    footer: {
      col1Title: 'Content',
      col2Title: 'Initiative',
      col3Title: 'Engage',
      col4Title: 'Service & Legal',
      rights: '© 2026 Place Branding Aachen e. V. All rights reserved.',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Settings',
      newsletter: 'Newsletter',
      kontakt: 'Contact',
      barrierefreiheit: 'Accessibility'
    }
  }
};

// ─── APP DATA ────────────────────────────────────────────────────────────────
const APP_DATA = {
  // 12 externe Story-Teaser basierend auf dem priorisierten Produktionsboard
  storyTeaser: [
    {
      id: 'halbleiter-serienfertigung',
      status: 'externe-quelle',
      thema: 'technologie',
      title_de: 'Vom Halbleiter-Prototyp in die Serienfertigung',
      title_en: 'From Semiconductor Prototype to Serial Production',
      teaser_de: 'Forschung und Industrie arbeiten in der Aachen Area daran, den Weg vom Halbleiter-Prototyp in die industrielle Serienfertigung zu beschleunigen. Das zeigt, wie eng wissenschaftliche Infrastruktur und unternehmerische Umsetzung hier zusammenliegen.',
      teaser_en: 'Research and industry in the Aachen Area are working to accelerate the path from semiconductor prototype to industrial serial production — showing how closely scientific infrastructure and entrepreneurial execution are intertwined here.',
      aachenBezug_de: 'Forschungsinfrastruktur trifft direkt auf industrielle Umsetzungskompetenz.',
      aachenBezug_en: 'Research infrastructure meets industrial implementation expertise.',
      organisation: 'IHK Aachen / Beteiligte Unternehmen',
      externalUrl: 'https://www.ihk.de/aachen/innovation/innovation/forschungsdialog-rheinland-6955224',
      ctaLabel_de: 'Projekt bei IHK Aachen ansehen ↗',
      ctaLabel_en: 'View project at IHK Aachen ↗',
      featured: true
    },
    {
      id: 'laser-ki-makerthon',
      status: 'externe-quelle',
      thema: 'technologie',
      title_de: 'Wenn Lasertechnik und KI gemeinsam lernen',
      title_en: 'When Laser Technology and AI Learn Together',
      teaser_de: 'Die LASER.region.AACHEN bündelt mehr als 60 Industrie- und Forschungspartner. Der Makerthon 2026 verbindet Lasertechnik mit KI und Nachwuchsförderung.',
      teaser_en: 'LASER.region.AACHEN unites over 60 industry and research partners. The 2026 Makerthon combines laser technology with AI and youth development.',
      aachenBezug_de: 'Eines der dichtesten Laser- und Photonikkompetenz-Netzwerke Europas.',
      aachenBezug_en: 'One of Europe\'s densest laser and photonics expertise networks.',
      organisation: 'LASER.region.AACHEN / RWTH',
      externalUrl: 'https://laserregionaachen.de/aktuelles-2/makerthon',
      ctaLabel_de: 'Makerthon bei LASER.region.AACHEN ansehen ↗',
      ctaLabel_en: 'View Makerthon at LASER.region.AACHEN ↗',
      featured: true
    },
    {
      id: 'deep-tech-transfer',
      status: 'externe-quelle',
      thema: 'technologie',
      title_de: 'Wo Deep Tech nicht im Labor endet',
      title_en: 'Where Deep Tech Doesn\'t End in the Lab',
      teaser_de: 'Fraunhofer ILT positioniert Aachen mit Anwendungen rund um Laser, Elektromobilität, Photonik und industrielle Innovation als Transferstandort von internationaler Bedeutung.',
      teaser_en: 'Fraunhofer ILT positions Aachen as an internationally significant transfer location with applications in laser technology, electromobility, photonics, and industrial innovation.',
      aachenBezug_de: 'Forschungstransfer als systematische Standortstärke.',
      aachenBezug_en: 'Research transfer as a systematic regional strength.',
      organisation: 'Fraunhofer ILT',
      externalUrl: 'https://www.ilt.fraunhofer.de/',
      ctaLabel_de: 'Fraunhofer ILT entdecken ↗',
      ctaLabel_en: 'Discover Fraunhofer ILT ↗',
      featured: false
    },
    {
      id: 'lava-x-spin-off',
      status: 'externe-quelle',
      thema: 'wissen',
      title_de: 'Laserschweißen im Vakuum wird zum Unternehmen',
      title_en: 'Vacuum Laser Welding Becomes a Company',
      teaser_de: 'LaVa-X hat eine Technologie zum Laserschweißen im Vakuum aus der Forschung in die industrielle Anwendung überführt – ein konkretes Gründungsbeispiel aus dem Aachener Forschungsumfeld.',
      teaser_en: 'LaVa-X transferred vacuum laser welding technology from research to industrial application — a concrete startup example from Aachen\'s research ecosystem.',
      aachenBezug_de: 'Spin-off-Weg von der Hochschule in den industriellen Markt.',
      aachenBezug_en: 'Spin-off journey from university to industrial market.',
      organisation: 'LaVa-X / FH Aachen Gründungszentrum',
      externalUrl: 'https://gruendungszentrum.fh-aachen.de/technologieorientierte-gruendungen/',
      ctaLabel_de: 'Gründung bei FH Aachen ansehen ↗',
      ctaLabel_en: 'View startup at FH Aachen ↗',
      featured: true
    },
    {
      id: 'startup-week-aachen',
      status: 'externe-quelle',
      thema: 'wissen',
      title_de: 'Eine Woche bringt Aachens Gründungsszene zusammen',
      title_en: 'One Week Unites Aachen\'s Startup Scene',
      teaser_de: 'Die Startup Week Aachen 2026 bündelte laut digitalHUB mehr als 40 Veranstaltungen in fünf Tagen und machte das Ökosystem gebündelt sichtbar.',
      teaser_en: 'According to digitalHUB, the 2026 Startup Week Aachen brought together more than 40 events in five days, showcasing the ecosystem at a glance.',
      aachenBezug_de: 'Gründungsökosystem auf einen Blick sichtbar gemacht.',
      aachenBezug_en: 'Making the startup ecosystem visible at a glance.',
      organisation: 'digitalHUB Aachen',
      externalUrl: 'https://www.aachen.digital/',
      ctaLabel_de: 'digitalHUB Aachen besuchen ↗',
      ctaLabel_en: 'Visit digitalHUB Aachen ↗',
      featured: false
    },
    {
      id: 'rwth-innovation-transfer',
      status: 'externe-quelle',
      thema: 'wissen',
      title_de: 'Wie Forschung zur tragfähigen Geschäftsidee wird',
      title_en: 'How Research Becomes a Viable Business Idea',
      teaser_de: 'RWTH Innovation fungiert als zentrale Transfergesellschaft der RWTH Aachen University und der Uniklinik RWTH Aachen und unterstützt Wissenschaftler und Studierende bei der Überführung von Forschung in Gründungen.',
      teaser_en: 'RWTH Innovation serves as the central transfer company for RWTH Aachen University and RWTH University Hospital, supporting scientists and students in turning research into startups.',
      aachenBezug_de: 'Institutionalisierter Transferprozess von der Erkenntnis zur Wirkung.',
      aachenBezug_en: 'Institutionalized transfer process from insight to impact.',
      organisation: 'RWTH Innovation / RWTH Aachen',
      externalUrl: 'https://www.rwth-aachen.de/cms/root/transfer/gruendungsunterstuetzung/~iibzo/start-up-gruenden/',
      ctaLabel_de: 'Transfer bei RWTH Aachen ansehen ↗',
      ctaLabel_en: 'View transfer at RWTH Aachen ↗',
      featured: false
    },
    {
      id: 'trinationale-hochschulen',
      status: 'externe-quelle',
      thema: 'europa',
      title_de: 'Elf Hochschulen machen aus drei Ländern einen Wissensraum',
      title_en: 'Eleven Universities Turn Three Countries Into One Knowledge Space',
      teaser_de: 'Elf Hochschulen aus Deutschland, Belgien und den Niederlanden haben 2026 eine langfristige Zusammenarbeit in Bildung, Forschung und Innovation vereinbart.',
      teaser_en: 'Eleven universities from Germany, Belgium, and the Netherlands agreed in 2026 on long-term collaboration in education, research, and innovation.',
      aachenBezug_de: 'Institutionelle Grenzen produktiv gemacht – Europa als gelebte Praxis.',
      aachenBezug_en: 'Institutional boundaries made productive — Europe as lived practice.',
      organisation: 'Beteiligte Hochschulen',
      externalUrl: 'https://www.fh-aachen.de/en/newsroom/article/grenzregion-bietet-einzigartige-chancen',
      ctaLabel_de: 'Kooperation bei FH Aachen ansehen ↗',
      ctaLabel_en: 'View cooperation at FH Aachen ↗',
      featured: true
    },
    {
      id: 'interreg-foerderprogramme',
      status: 'externe-quelle',
      thema: 'europa',
      title_de: 'Förderprogramme bringen Unternehmen über Grenzen zusammen',
      title_en: 'Funding Programs Bring Companies Across Borders Together',
      teaser_de: 'Interreg Maas-Rhein unterstützt grenzüberschreitende Projekte und verfügt in der Förderperiode 2021 bis 2027 über 176 Millionen Euro, davon 125 Millionen Euro aus EU-Mitteln.',
      teaser_en: 'Interreg Meuse-Rhine supports cross-border projects with €176 million in the 2021–2027 funding period, €125 million from EU funds.',
      aachenBezug_de: 'Grenzüberschreitende Zusammenarbeit mit konkreter Finanzierung.',
      aachenBezug_en: 'Cross-border collaboration with concrete funding.',
      organisation: 'Region Aachen / Interreg',
      externalUrl: 'https://regionaachen.de/euregio/grenzueberschreitende-foerderung/interreg-maas-rhein/',
      ctaLabel_de: 'Interreg bei Region Aachen ansehen ↗',
      ctaLabel_en: 'View Interreg at Region Aachen ↗',
      featured: false
    },
    {
      id: 'emric-grenzrettung',
      status: 'externe-quelle',
      thema: 'europa',
      title_de: 'Wenn Hilfe im Notfall nicht an der Landesgrenze endet',
      title_en: 'When Emergency Help Doesn\'t Stop at the Border',
      teaser_de: 'EMRIC koordiniert die grenzüberschreitende Zusammenarbeit von Rettungsdiensten zwischen Deutschland, Belgien und den Niederlanden – eine der wenigen funktionierenden trinationalen Notfallkooperationen Europas.',
      teaser_en: 'EMRIC coordinates cross-border emergency service cooperation between Germany, Belgium, and the Netherlands — one of Europe\'s few functioning trinational emergency collaborations.',
      aachenBezug_de: 'Unmittelbare gesellschaftliche Wirkung über Ländergrenzen hinweg.',
      aachenBezug_en: 'Immediate societal impact across national borders.',
      organisation: 'EMRIC / StädteRegion Aachen',
      externalUrl: 'https://www.emric.info/',
      ctaLabel_de: 'EMRIC entdecken ↗',
      ctaLabel_en: 'Discover EMRIC ↗',
      featured: false
    },
    {
      id: 'grenzforschung-nl',
      status: 'externe-quelle',
      thema: 'europa',
      title_de: 'Gemeinsame Forschung zwischen Aachen und den Niederlanden',
      title_en: 'Joint Research Between Aachen and the Netherlands',
      teaser_de: 'AGIT beschreibt die grenzüberschreitende Technologieregion als Wirtschaftsraum mit drei Sprachen und engen Verbindungen zwischen Unternehmen und Forschungszentren.',
      teaser_en: 'AGIT describes the cross-border technology region as an economic space with three languages and close connections between companies and research centers.',
      aachenBezug_de: 'Grenzüberschreitendes Innovationsökosystem als Wirtschaftsfaktor.',
      aachenBezug_en: 'Cross-border innovation ecosystem as an economic factor.',
      organisation: 'AGIT',
      externalUrl: 'https://www.agit.de/fuer-die-region/technologieregion-aachen',
      ctaLabel_de: 'Technologieregion bei AGIT ansehen ↗',
      ctaLabel_en: 'View technology region at AGIT ↗',
      featured: false
    },
    {
      id: 'ki-batteriezellen',
      status: 'externe-quelle',
      thema: 'technologie',
      title_de: 'KI beschleunigt die Entwicklung von Batteriezellen',
      title_en: 'AI Accelerates Battery Cell Development',
      teaser_de: 'An der RWTH Aachen beschleunigt KI-gestützte Simulation den Entwicklungsprozess für neue Batteriezellen und verbindet so digitale Innovation mit industrieller Energiewende.',
      teaser_en: 'At RWTH Aachen, AI-driven simulation accelerates the development process for new battery cells, connecting digital innovation with the industrial energy transition.',
      aachenBezug_de: 'KI trifft auf Produktion und Energiewende am selben Standort.',
      aachenBezug_en: 'AI meets production and energy transition at the same location.',
      organisation: 'RWTH Aachen',
      externalUrl: 'https://www.rwth-aachen.de/',
      ctaLabel_de: 'Forschung bei RWTH Aachen ansehen ↗',
      ctaLabel_en: 'View research at RWTH Aachen ↗',
      featured: false
    },
    {
      id: 'polymer-spinoffs',
      status: 'externe-quelle',
      thema: 'wissen',
      title_de: 'Aus Polymerforschung entstehen neue Spin-offs',
      title_en: 'New Spin-offs Emerge from Polymer Research',
      teaser_de: 'Das DWI – Leibniz-Institut für Interaktive Materialien bringt Grundlagenforschung in die Anwendung und hat mehrere Ausgründungen hervorgebracht.',
      teaser_en: 'DWI – Leibniz Institute for Interactive Materials brings basic research to application and has produced several spin-offs.',
      aachenBezug_de: 'Vom Grundlagenwissen zum marktfähigen Produkt.',
      aachenBezug_en: 'From fundamental knowledge to market-ready product.',
      organisation: 'DWI / Leibniz',
      externalUrl: 'https://www.dwi.rwth-aachen.de/',
      ctaLabel_de: 'DWI Leibniz-Institut entdecken ↗',
      ctaLabel_en: 'Discover DWI Leibniz Institute ↗',
      featured: false
    }
  ],

  // Aachen-Signale
  signals: [
    { thema_de: 'Halbleiter', thema_en: 'Semiconductors', fact_de: 'Forschung und Industrie arbeiten in Aachen daran, den Weg vom Halbleiter-Prototyp in die Serienfertigung zu beschleunigen.', fact_en: 'Research and industry in Aachen are accelerating the path from semiconductor prototype to serial production.', source: 'IHK Aachen' },
    { thema_de: 'Laser & Photonik', thema_en: 'Laser & Photonics', fact_de: 'Mehr als 60 Industrie- und Forschungspartner arbeiten in der LASER.region.AACHEN zusammen.', fact_en: 'More than 60 industry and research partners collaborate in LASER.region.AACHEN.', source: 'LASER.region.AACHEN' },
    { thema_de: 'Gründung', thema_en: 'Startups', fact_de: 'Die Startup Week Aachen bündelte mehr als 40 Veranstaltungen in fünf Tagen.', fact_en: 'Aachen Startup Week brought together more than 40 events in five days.', source: 'digitalHUB Aachen' },
    { thema_de: 'Transfer', thema_en: 'Transfer', fact_de: 'RWTH Innovation unterstützt jährlich dutzende Wissenschaftler auf dem Weg von der Forschung zur Gründung.', fact_en: 'RWTH Innovation supports dozens of scientists annually on their path from research to founding a company.', source: 'RWTH Aachen' },
    { thema_de: 'Europa', thema_en: 'Europe', fact_de: 'Elf Hochschulen aus drei Ländern haben eine langfristige Zusammenarbeit vereinbart.', fact_en: 'Eleven universities from three countries have agreed on long-term collaboration.', source: 'FH Aachen' },
    { thema_de: 'Grenzkooperation', thema_en: 'Cross-border', fact_de: 'Interreg Maas-Rhein fördert mit 176 Millionen Euro grenzüberschreitende Projekte.', fact_en: 'Interreg Meuse-Rhine supports cross-border projects with €176 million.', source: 'Region Aachen' }
  ],

  // Montage-Elemente für Startseite
  montageElements: [
    { title_de: 'Halbleiter & Transfer', title_en: 'Semiconductors & Transfer', fact_de: 'Prototyp → Serienfertigung', fact_en: 'Prototype → Serial Production', source: 'IHK Aachen' },
    { title_de: 'Lasertechnik & Industrie', title_en: 'Laser Technology & Industry', fact_de: '60+ Forschungs- und Industriepartner', fact_en: '60+ research & industry partners', source: 'LASER.region.AACHEN' },
    { title_de: 'Gründung aus Forschung', title_en: 'Startups from Research', fact_de: 'Vom Labor zum Scale-up', fact_en: 'From lab to scale-up', source: 'RWTH Innovation' },
    { title_de: 'Trinationale Hochschulen', title_en: 'Trinational Universities', fact_de: '11 Hochschulen · 3 Länder · 1 Wissensraum', fact_en: '11 universities · 3 countries · 1 knowledge space', source: 'FH Aachen' },
    { title_de: 'Rettung ohne Grenzen', title_en: 'Rescue Without Borders', fact_de: 'Grenzüberschreitende Notfallhilfe', fact_en: 'Cross-border emergency services', source: 'EMRIC' }
  ],

  // 5 Launch-News
  news: [
    {
      id: 'n1',
      date_de: '28. Juli 2026',
      date_en: 'July 28, 2026',
      category_de: 'Initiative & Verein',
      category_en: 'Initiative & Association',
      categorySlug: 'initiative',
      title_de: '„Aachen ohne Limits" startet als kuratierte Standortplattform',
      title_en: '"Aachen Without Limits" launches as curated location platform',
      excerpt_de: 'Die neue Plattform des Place Branding Aachen e. V. zeigt reale Entwicklungen aus der Aachen Area und legt das Fundament für eine langfristige, international anschlussfähige Standorterzählung.',
      excerpt_en: 'The new platform by Place Branding Aachen e. V. showcases real developments from the Aachen Area and lays the foundation for a long-term, internationally relevant location narrative.'
    },
    {
      id: 'n2',
      date_de: '25. Juli 2026',
      date_en: 'July 25, 2026',
      category_de: 'Standort & Ökosystem',
      category_en: 'Location & Ecosystem',
      categorySlug: 'standort',
      title_de: 'Aachener Halbleiter-Initiative stärkt Forschungsdialog im Rheinland',
      title_en: 'Aachen semiconductor initiative strengthens research dialogue in the Rhineland',
      excerpt_de: 'Industrie und Forschung intensivieren die Zusammenarbeit, um den Transfer von der Prototypenentwicklung in die Serienfertigung zu beschleunigen.',
      excerpt_en: 'Industry and research intensify collaboration to accelerate the transfer from prototype development to serial production.'
    },
    {
      id: 'n3',
      date_de: '20. Juli 2026',
      date_en: 'July 20, 2026',
      category_de: 'Projekte & Kampagnen',
      category_en: 'Projects & Campaigns',
      categorySlug: 'projekte',
      title_de: 'Makerthon 2026: Lasertechnik trifft KI und Nachwuchs',
      title_en: 'Makerthon 2026: Laser technology meets AI and emerging talent',
      excerpt_de: 'Die LASER.region.AACHEN bringt beim Makerthon 2026 Studierende und Industrieexpertinnen an einen Tisch.',
      excerpt_en: 'LASER.region.AACHEN brings students and industry experts together at the 2026 Makerthon.'
    },
    {
      id: 'n4',
      date_de: '15. Juli 2026',
      date_en: 'July 15, 2026',
      category_de: 'Standort & Ökosystem',
      category_en: 'Location & Ecosystem',
      categorySlug: 'standort',
      title_de: 'Elf Hochschulen der Grenzregion vereinbaren langfristige Zusammenarbeit',
      title_en: 'Eleven border-region universities agree on long-term collaboration',
      excerpt_de: 'Aus drei Ländern entsteht ein gemeinsamer Bildungs-, Forschungs- und Innovationsraum – ein europäisches Modellprojekt.',
      excerpt_en: 'Three countries form a shared space for education, research, and innovation — a European model project.'
    },
    {
      id: 'n5',
      date_de: '10. Juli 2026',
      date_en: 'July 10, 2026',
      category_de: 'Veranstaltungen',
      category_en: 'Events',
      categorySlug: 'veranstaltungen',
      title_de: 'Startup Week Aachen 2026: Mehr als 40 Events in fünf Tagen',
      title_en: 'Startup Week Aachen 2026: More than 40 events in five days',
      excerpt_de: 'Die Startup Week machte das Gründungsökosystem der Aachen Area gebündelt sichtbar.',
      excerpt_en: 'Startup Week made the Aachen Area startup ecosystem visible at a glance.'
    }
  ],

  // Mitglieder mit korrekter Bronze/Silber/Gold-Klassifizierung
  members: [
    { name: 'RWTH Aachen University', tier: 'Gold', category_de: 'Wissenschaft', category_en: 'Academia', quote_de: 'Aachens Stärke entsteht aus der Verbindung von Forschung, Unternehmen und internationalem Netzwerk.', quote_en: 'Aachen\'s strength stems from the connection of research, enterprise, and international networks.' },
    { name: 'FH Aachen', tier: 'Gold', category_de: 'Wissenschaft', category_en: 'Academia' },
    { name: 'digitalHUB Aachen', tier: 'Gold', category_de: 'Netzwerk', category_en: 'Network Hub' },
    { name: 'NetAachen GmbH', tier: 'Gold', category_de: 'Telekommunikation', category_en: 'Telecom' },
    { name: 'IHK Aachen', tier: 'Gold', category_de: 'Kammer', category_en: 'Chamber of Commerce' },
    { name: 'Prospex GmbH', tier: 'Silber', category_de: 'Wirtschaft', category_en: 'Enterprise' },
    { name: 'Stadt Aachen', tier: 'Gold', category_de: 'Kommune', category_en: 'Municipality', quote_de: 'Ein starkes Standortbild nützt allen – Wirtschaft, Wissenschaft und den Menschen, die hier leben.', quote_en: 'A strong regional identity benefits everyone — business, science, and the people who live here.' },
    { name: 'Belvedere Drehturm GmbH', tier: 'Bronze', category_de: 'Gastronomie', category_en: 'Hospitality' },
    { name: 'FutureLab Aachen', tier: 'Bronze', category_de: 'Initiative', category_en: 'Initiative' },
    { name: 'DeepTech Aachen e.V.', tier: 'Bronze', category_de: 'Verein', category_en: 'Association' },
    { name: 'BioMed Euregio', tier: 'Silber', category_de: 'Gesundheit', category_en: 'Health' },
    { name: 'Euregio Innovation Labs', tier: 'Bronze', category_de: 'Netzwerk', category_en: 'Network' }
  ]
};

// ─── APPLICATION STATE ───────────────────────────────────────────────────────
const state = {
  activePage: 'home',
  theme: 'light',
  lang: 'DE',
  activeFilter: 'all',
  newsFilter: 'all',
  sponsorTab: 'Gold',
  sponsorTimer: null
};

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouter();
  initEventListeners();
  renderCurrentPage();
  startSponsorAutoRotate();
});

function startSponsorAutoRotate() {
  if (state.sponsorTimer) clearInterval(state.sponsorTimer);
  state.sponsorTimer = setInterval(() => {
    if (state.activePage !== 'home') return;
    const order = ['Gold', 'Silber', 'Bronze'];
    const idx = order.indexOf(state.sponsorTab);
    state.sponsorTab = order[(idx + 1) % order.length];
    updateSponsorGridUI();
  }, 10000);
}

function updateSponsorGridUI() {
  const container = document.getElementById('home-sponsor-grid-container');
  if (!container) return;
  
  document.querySelectorAll('[data-sponsor-tab]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sponsorTab === state.sponsorTab);
  });

  const members = APP_DATA.members.filter(m => m.tier === state.sponsorTab);
  container.innerHTML = members.map(m => `
    <div class="member-logo-card ${m.tier === 'Gold' ? 'gold-member' : ''}">
      ${m.tier === 'Gold' ? '<span class="gold-badge-tag">Gold</span>' : m.tier === 'Silber' ? '<span class="gold-badge-tag" style="background: var(--ac-blue);">Silber</span>' : '<span class="gold-badge-tag" style="background: var(--ac-yellow); color: #000;">Bronze</span>'}
      <div class="member-name">${m.name}</div>
      <div class="member-type">${m[L('category')]}</div>
    </div>
  `).join('');
}

// ─── THEME MANAGEMENT ────────────────────────────────────────────────────────
function initTheme() {
  setTheme('light');
}
function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem('pba_theme', theme);
  document.body.className = `theme-${theme}`;
}

// ─── ROUTER ──────────────────────────────────────────────────────────────────
function initRouter() {
  const hash = window.location.hash.replace('#', '') || 'home';
  navigateTo(hash, false);
  window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash.replace('#', '') || 'home', false);
  });
}
function navigateTo(pageId, updateHash = true) {
  state.activePage = pageId;
  if (updateHash) window.location.hash = pageId;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === pageId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderCurrentPage();
}

// ─── EVENT LISTENERS ─────────────────────────────────────────────────────────
function initEventListeners() {
  // Theme toggle removed – sections alternate light/dark with diagonal transitions

  document.getElementById('lang-switch').addEventListener('click', () => {
    state.lang = state.lang === 'DE' ? 'EN' : 'DE';
    updateLanguageUI();
    renderCurrentPage();
  });

  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  mobileBtn.addEventListener('click', () => mainNav.classList.toggle('open'));

  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-page]');
    if (link) { e.preventDefault(); navigateTo(link.dataset.page); mainNav.classList.remove('open'); }
    if (e.target.id === 'modal-close' || e.target.id === 'modal-overlay') closeModal();

    const extLink = e.target.closest('[data-external-url]');
    if (extLink) { window.open(extLink.dataset.externalUrl, '_blank', 'noopener'); }

    const applyBtn = e.target.closest('[data-action="apply-membership"]');
    if (applyBtn) openApplicationModal(applyBtn.dataset.tier || 'silber');

    const storyBtn = e.target.closest('[data-action="submit-story"]');
    if (storyBtn) openStorySubmissionModal();

    const filterBtn = e.target.closest('[data-filter]');
    if (filterBtn) {
      state.activeFilter = filterBtn.dataset.filter;
      renderCurrentPage();
    }

    const newsFilterBtn = e.target.closest('[data-news-filter]');
    if (newsFilterBtn) {
      state.newsFilter = newsFilterBtn.dataset.newsFilter;
      renderCurrentPage();
    }

    const sponsorBtn = e.target.closest('[data-sponsor-tab]');
    if (sponsorBtn) {
      state.sponsorTab = sponsorBtn.dataset.sponsorTab;
      updateSponsorGridUI();
      startSponsorAutoRotate();
    }

    const newsletterBtn = e.target.closest('[data-action="open-newsletter"]');
    if (newsletterBtn) {
      e.preventDefault();
      openNewsletterModal();
    }
  });
}

function updateLanguageUI() {
  const codes = document.querySelectorAll('.lang-code');
  if (codes.length >= 2) {
    codes[0].classList.toggle('active', state.lang === 'DE');
    codes[1].classList.toggle('active', state.lang === 'EN');
  }
  const t = I18N[state.lang].nav;
  const links = document.querySelectorAll('.nav-link');
  const navKeys = ['stories', 'news', 'initiative', 'mitglieder', 'mitmachen'];
  links.forEach((l, i) => { if (navKeys[i]) l.textContent = t[navKeys[i]]; });
  const joinBtn = document.querySelector('.header-actions .btn-text');
  if (joinBtn) joinBtn.textContent = t.antrag;
}

// ─── PAGE ROUTER ─────────────────────────────────────────────────────────────
function renderCurrentPage() {
  const root = document.getElementById('app-root');
  const pages = {
    'home': renderHomePage,
    'stories': renderStoriesPage,
    'themen': renderThemenHub,
    'thema-technologie': renderThemaTechnologie,
    'thema-wissen': renderThemaWissen,
    'thema-europa': renderThemaEuropa,
    'news': renderNewsPage,
    'initiative': renderInitiativePage,
    'entstehung': renderEntstehungPage,
    'mitglieder': renderMitgliederPage,
    'mitmachen': renderMitmachenPage,
    'mitgliedschaft': renderMitgliedschaftPage,
    'presse': renderPressePage
  };
  root.innerHTML = (pages[state.activePage] || renderHomePage)();
  updateLanguageUI();
  bindPageTriggers();
}

// ─── HELPER: Lang key ────────────────────────────────────────────────────────
function L(key) { return key + '_' + state.lang.toLowerCase(); }

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
function renderHomePage() {
  const t = I18N[state.lang];
  const featured = APP_DATA.storyTeaser.filter(s => s.featured);
  const homeNews = APP_DATA.news.slice(0, 3);
  const membersWithQuotes = APP_DATA.members.filter(m => m[L('quote')]);

  return `
    <!-- 1. Hero – Markenthese -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="subline-caps" style="color: var(--brand-accent); margin-bottom: 1rem; letter-spacing: 0.15em; font-size: 0.8rem;">${t.hero.eyebrow}</div>
            <h1 class="headline-3deg hero-title">${t.hero.title}</h1>
            <p class="hero-subline">${t.hero.subline}</p>
            <div class="hero-actions">
              <a href="#stories" class="btn btn-primary" data-page="stories">
                <span>${t.hero.btnPrimary}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#initiative" class="btn btn-secondary" data-page="initiative">
                <span>${t.hero.btnSecondary}</span>
              </a>
            </div>
            
            <div class="direct-answer-hero" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1);">
              <h2 style="font-size: 1.2rem; font-family: var(--font-headline); margin-bottom: 0.5rem; color: #fff;">${t.directAnswer.title}</h2>
              <p style="font-size: 0.95rem; color: rgba(255,255,255,0.8);">${t.directAnswer.text}</p>
              <p style="font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-top: 0.5rem;">${t.directAnswer.addendum}</p>
              <a href="#initiative" class="btn btn-text" data-page="initiative" style="margin-top: 1rem; color: var(--brand-accent); padding: 0;">${t.directAnswer.cta} →</a>
            </div>
          </div>
          <div class="hero-media">
            <div class="hero-video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/jbbHinXzIuU?rel=0&modestbranding=1" 
                title="Aachen ohne Limits" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                style="width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-md);"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Kuratierte Montage -->
    <section class="section-wrapper section-light">
      <div class="container">
        <div class="section-header">
          <h2 class="headline-3deg">${t.montage.title}</h2>
          <p class="text-body" style="margin-top: 1rem; max-width: 700px;">${t.montage.intro}</p>
        </div>
        <div class="montage-grid">
          ${APP_DATA.montageElements.map((el, i) => `
            <div class="montage-element${i === 0 ? ' montage-featured' : ''}" style="background: var(--wireframe-bg); border: 2px dashed var(--wireframe-border); min-height: ${i === 0 ? '280px' : '180px'};">
              <div class="montage-content">
                <div class="montage-fact">${el[L('fact')]}</div>
                <h3>${el[L('title')]}</h3>
                <div class="montage-source">${state.lang === 'DE' ? 'Quelle' : 'Source'}: ${el.source}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 4. Story-Teaser -->
    <section class="section-wrapper section-dark">
      <div class="container">
        <div class="section-header">
          <h2 class="headline-3deg">${t.storyTeaser.title}</h2>
          <p class="text-body" style="margin-top: 1rem; max-width: 700px;">${t.storyTeaser.intro}</p>
        </div>

        ${featured.length > 0 ? `
          <div class="featured-story-card" data-external-url="${featured[0].externalUrl}" style="cursor: pointer;">
            <div class="featured-story-image" style="background: var(--wireframe-bg); border: 2px dashed var(--wireframe-border); display:flex; align-items:center; justify-content:center; min-height:200px;">
              <div style="padding: 2rem; color: #fff;">
                <span class="status-label externe-quelle">${state.lang === 'DE' ? 'Externe Quelle' : 'External Source'}</span>
                <span class="story-category-tag" style="position:static; margin-left: 0.5rem;">${featured[0].thema === 'technologie' ? (state.lang === 'DE' ? 'Technologie wird Wirkung' : 'Technology Becomes Impact') : featured[0].thema === 'wissen' ? (state.lang === 'DE' ? 'Aus Wissen wird Unternehmen' : 'Knowledge Becomes Enterprise') : (state.lang === 'DE' ? 'Europa wird Praxis' : 'Europe Becomes Practice')}</span>
              </div>
            </div>
            <div class="featured-story-content">
              <div class="story-meta"><span>${featured[0].organisation}</span></div>
              <h3 class="story-card-title" style="font-size: 1.6rem;">${featured[0][L('title')]}</h3>
              <p class="story-card-excerpt">${featured[0][L('teaser')]}</p>
              <p style="font-size: 0.9rem; color: var(--text-muted); font-style: italic; margin-top: 0.75rem;">${featured[0][L('aachenBezug')]}</p>
              <div style="margin-top: 1.5rem;">
                <span class="external-link-indicator">${featured[0][L('ctaLabel')]}</span>
              </div>
            </div>
          </div>

          <div class="story-grid" style="margin-top: 2rem;">
            ${featured.slice(1, 4).map(s => renderTeaserCard(s)).join('')}
          </div>
        ` : ''}

        <div style="text-align: center; margin-top: 3rem;">
          <a href="#stories" class="btn btn-secondary" data-page="stories">${t.storyTeaser.cta}</a>
        </div>
      </div>
    </section>

    <!-- 5. Themenräume -->
    <section class="section-wrapper section-light">
      <div class="container">
        <div class="section-header">
          <h2 class="headline-3deg">${t.themenraeume.title}</h2>
        </div>
        <div class="themenraum-grid">
          <div class="themenraum-card" data-page="thema-technologie" style="cursor:pointer;">
            <h3>${t.themenraeume.t1Title}</h3>
            <p>${t.themenraeume.t1Text}</p>
            <span class="themenraum-cta">${t.themenraeume.t1Cta} →</span>
          </div>
          <div class="themenraum-card" data-page="thema-wissen" style="cursor:pointer;">
            <h3>${t.themenraeume.t2Title}</h3>
            <p>${t.themenraeume.t2Text}</p>
            <span class="themenraum-cta">${t.themenraeume.t2Cta} →</span>
          </div>
          <div class="themenraum-card" data-page="thema-europa" style="cursor:pointer;">
            <h3>${t.themenraeume.t3Title}</h3>
            <p>${t.themenraeume.t3Text}</p>
            <span class="themenraum-cta">${t.themenraeume.t3Cta} →</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Arbeitsweise -->
    <section class="section-wrapper section-dark">
      <div class="container">
        <div class="section-header">
          <h2 class="headline-3deg">${t.arbeitsweise.title}</h2>
        </div>
        <div class="arbeitsweise-grid">
          ${[1,2,3,4,5,6].map(n => `
            <div class="arbeitsweise-step">
              <div class="step-number">${n}</div>
              <div class="step-title">${t.arbeitsweise['s'+n+'Title']}</div>
              <div class="step-desc">${t.arbeitsweise['s'+n+'Desc']}</div>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <a href="#initiative" class="btn btn-secondary" data-page="initiative">${t.arbeitsweise.cta}</a>
        </div>
      </div>
    </section>

    <!-- 7. Story gesucht -->
    <section class="story-gesucht-section section-dark">
      <div class="container" style="text-align: center;">
        <h2 class="headline-3deg" style="color: #fff;">${t.storyGesucht.title}</h2>
        <p style="color: rgba(255,255,255,0.8); max-width: 700px; margin: 1.5rem auto;">${t.storyGesucht.text}</p>
        <div class="story-gesucht-criteria">
          <span class="criteria-item">${t.storyGesucht.c1}</span>
          <span class="criteria-item">${t.storyGesucht.c2}</span>
          <span class="criteria-item">${t.storyGesucht.c3}</span>
          <span class="criteria-item">${t.storyGesucht.c4}</span>
        </div>
        <button class="btn btn-primary" data-action="submit-story" style="margin-top: 2rem;">${t.storyGesucht.cta}</button>
      </div>
    </section>

    <!-- 8. News -->
    <section class="section-wrapper section-dark">
      <div class="container">
        <div class="section-header">
          <h2 class="headline-3deg">${t.newsHome.title}</h2>
        </div>
        <div class="story-grid">
          ${homeNews.map(n => `
            <div class="story-card">
              <div class="story-card-body">
                <div class="story-meta">
                  <span class="story-category-tag" style="position:static;">${n[L('category')]}</span>
                  <span>${n[L('date')]}</span>
                </div>
                <h3 class="story-card-title">${n[L('title')]}</h3>
                <p class="story-card-excerpt">${n[L('excerpt')]}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 2rem;">
          <a href="#news" class="btn btn-secondary" data-page="news">${t.newsHome.cta}</a>
        </div>
      </div>
    </section>

    <!-- 9. Träger -->
    <section class="section-wrapper traeger-section section-light">
      <div class="container">
        <div class="section-header">
          <h2 class="headline-3deg">${t.traeger.title}</h2>
          <p class="text-body" style="margin-top: 1rem;">${t.traeger.text}</p>
        </div>

        ${membersWithQuotes.length > 0 ? `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
            ${membersWithQuotes.map(m => `
              <div class="traeger-quote">
                <p>„${m[L('quote')]}"</p>
                <div class="traeger-attribution">— ${m.name}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Sponsor Tabs (Gold, Silber, Bronze) -->
        <div class="filter-bar" style="justify-content: center; margin-bottom: 2rem;">
          <button class="filter-btn ${state.sponsorTab === 'Gold' ? 'active' : ''}" data-sponsor-tab="Gold">Gold (${state.lang === 'DE' ? 'Mitprägen' : 'Lead'})</button>
          <button class="filter-btn ${state.sponsorTab === 'Silber' ? 'active' : ''}" data-sponsor-tab="Silber">Silber (${state.lang === 'DE' ? 'Mitgestalten' : 'Shape'})</button>
          <button class="filter-btn ${state.sponsorTab === 'Bronze' ? 'active' : ''}" data-sponsor-tab="Bronze">Bronze (${state.lang === 'DE' ? 'Mittragen' : 'Support'})</button>
        </div>

        <div class="logo-wall-grid" id="home-sponsor-grid-container">
          ${APP_DATA.members.filter(m => m.tier === state.sponsorTab).map(m => `
            <div class="member-logo-card ${m.tier === 'Gold' ? 'gold-member' : ''}">
              ${m.tier === 'Gold' ? '<span class="gold-badge-tag">Gold</span>' : m.tier === 'Silber' ? '<span class="gold-badge-tag" style="background: var(--ac-blue);">Silber</span>' : '<span class="gold-badge-tag" style="background: var(--ac-yellow); color: #000;">Bronze</span>'}
              <div class="member-name">${m.name}</div>
              <div class="member-type">${m[L('category')]}</div>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 3rem; padding-top: 3rem; border-top: 1px solid var(--border-color);">
          <h3 style="font-family: var(--font-headline); font-size: 1.5rem; margin-bottom: 1rem;">${t.beteiligung.title}</h3>
          <p style="margin-bottom: 1.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">${t.beteiligung.text}</p>
          <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <a href="#mitmachen" class="btn btn-primary" data-page="mitmachen">${t.beteiligung.btnPrimary}</a>
            <a href="#mitgliedschaft" class="btn btn-outline" data-page="mitgliedschaft">${t.beteiligung.btnSecondary}</a>
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

// ─── HELPER: Teaser Card ────────────────────────────────────────────────────
function renderTeaserCard(s) {
  const themaLabel = s.thema === 'technologie' ? (state.lang === 'DE' ? 'Technologie wird Wirkung' : 'Technology Becomes Impact') : s.thema === 'wissen' ? (state.lang === 'DE' ? 'Aus Wissen wird Unternehmen' : 'Knowledge Becomes Enterprise') : (state.lang === 'DE' ? 'Europa wird Praxis' : 'Europe Becomes Practice');
  return `
    <div class="story-card" data-external-url="${s.externalUrl}" style="cursor: pointer;">
      <div class="story-card-body">
        <div class="story-meta">
          <span class="status-label externe-quelle">${state.lang === 'DE' ? 'Externe Quelle' : 'External Source'}</span>
          <span class="story-category-tag" style="position:static; font-size: 0.7rem;">${themaLabel}</span>
        </div>
        <h3 class="story-card-title">${s[L('title')]}</h3>
        <p class="story-card-excerpt">${s[L('teaser')]}</p>
        <div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; margin-top: 0.5rem;">${s[L('aachenBezug')]}</div>
        <div style="margin-top: auto; padding-top: 1rem;">
          <span class="external-link-indicator">${s[L('ctaLabel')]}</span>
        </div>
      </div>
    </div>
  `;
}

// ─── STORIES PAGE ──────────────────────────────────────────────────────────
function renderStoriesPage() {
  const t = I18N[state.lang];
  const teasers = state.activeFilter === 'all' ? APP_DATA.storyTeaser : APP_DATA.storyTeaser.filter(s => s.thema === state.activeFilter);

  return `
    <section class="section-wrapper">
      <div class="container">
        <div class="section-header">
          <h1 class="headline-3deg">${t.stories.h1}</h1>
          <div class="direct-answer-card" style="margin-top: 1.5rem; max-width: 800px;">
            <p>${t.stories.directAnswer}</p>
          </div>
        </div>

        <!-- Status Legend -->
        <div class="status-legend">
          <div class="legend-item"><span class="status-label externe-quelle" style="font-size: 0.65rem;">${state.lang === 'DE' ? 'Externe Quelle' : 'External Source'}</span><span>${t.stories.legendExtern}</span></div>
          <div class="legend-item"><span class="status-label story-vorbereitung" style="font-size: 0.65rem;">${state.lang === 'DE' ? 'In Vorbereitung' : 'In Progress'}</span><span>${t.stories.legendVorbereitung}</span></div>
          <div class="legend-item"><span class="status-label eigene-story" style="font-size: 0.65rem;">${state.lang === 'DE' ? 'Eigene Story' : 'Our Story'}</span><span>${t.stories.legendEigen}</span></div>
          <div class="legend-item"><span class="status-label aachen-signal" style="font-size: 0.65rem;">${state.lang === 'DE' ? 'Aachen-Signal' : 'Aachen Signal'}</span><span>${t.stories.legendSignal}</span></div>
          <div class="legend-item"><span class="status-label projektverweis" style="font-size: 0.65rem;">${state.lang === 'DE' ? 'Projektverweis' : 'Project Reference'}</span><span>${t.stories.legendProjekt}</span></div>
          <div class="legend-item"><span class="status-label fundstueck" style="font-size: 0.65rem;">${state.lang === 'DE' ? 'Fundstück' : 'Discovery'}</span><span>${t.stories.legendFundstueck}</span></div>
        </div>

        <!-- Filter -->
        <div class="filter-bar">
          <button class="filter-btn ${state.activeFilter === 'all' ? 'active' : ''}" data-filter="all">${t.stories.filterAll}</button>
          <button class="filter-btn ${state.activeFilter === 'technologie' ? 'active' : ''}" data-filter="technologie">${t.themenraeume.t1Title}</button>
          <button class="filter-btn ${state.activeFilter === 'wissen' ? 'active' : ''}" data-filter="wissen">${t.themenraeume.t2Title}</button>
          <button class="filter-btn ${state.activeFilter === 'europa' ? 'active' : ''}" data-filter="europa">${t.themenraeume.t3Title}</button>
        </div>

        <!-- Teaser Grid -->
        <div class="story-grid">
          ${teasers.map(s => renderTeaserCard(s)).join('')}
        </div>

        <!-- Aachen-Signale Band -->
        <h3 class="headline-3deg" style="font-size: 1.4rem; margin-top: 4rem;">AACHEN-SIGNALE</h3>
        <div class="signal-band" style="margin-top: 1.5rem;">
          ${APP_DATA.signals.map(sig => `
            <div class="aachen-signal">
              <div class="signal-theme">${state.lang === 'DE' ? 'Aachen-Signal · ' : 'Aachen Signal · '}${sig[L('thema')]}</div>
              <div class="signal-fact">${sig[L('fact')]}</div>
              <div class="signal-source">${state.lang === 'DE' ? 'Quelle' : 'Source'}: ${sig.source}</div>
            </div>
          `).join('')}
        </div>

        <!-- Story vorschlagen CTA -->
        <div style="text-align: center; margin-top: 3rem;">
          <button class="btn btn-primary" data-action="submit-story">${t.stories.ctaStory}</button>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

// ─── THEMEN HUB ──────────────────────────────────────────────────────────────
function renderThemenHub() {
  const t = I18N[state.lang];
  return `
    <section class="section-wrapper">
      <div class="container">
        <div class="section-header">
          <h1 class="headline-3deg">${t.themenHub.h1}</h1>
          <p class="text-body" style="margin-top: 1rem; max-width: 700px;">${t.themenHub.intro}</p>
        </div>
        <div class="themenraum-grid">
          <div class="themenraum-card" data-page="thema-technologie" style="cursor:pointer;">
            <h3>${t.themenraeume.t1Title}</h3>
            <p>${t.themenraeume.t1Text}</p>
            <span class="themenraum-cta">${t.themenraeume.t1Cta} →</span>
          </div>
          <div class="themenraum-card" data-page="thema-wissen" style="cursor:pointer;">
            <h3>${t.themenraeume.t2Title}</h3>
            <p>${t.themenraeume.t2Text}</p>
            <span class="themenraum-cta">${t.themenraeume.t2Cta} →</span>
          </div>
          <div class="themenraum-card" data-page="thema-europa" style="cursor:pointer;">
            <h3>${t.themenraeume.t3Title}</h3>
            <p>${t.themenraeume.t3Text}</p>
            <span class="themenraum-cta">${t.themenraeume.t3Cta} →</span>
          </div>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

// ─── THEMA DETAIL PAGES ──────────────────────────────────────────────────────
function renderThemaDetail(themaKey, h1_de, h1_en, da_de, da_en, schwerpunkte_de, schwerpunkte_en, ctaLabel_de, ctaLabel_en) {
  const t = I18N[state.lang];
  const teasers = APP_DATA.storyTeaser.filter(s => s.thema === themaKey);
  const signals = APP_DATA.signals.filter(sig => {
    if (themaKey === 'technologie') return ['Halbleiter', 'Laser & Photonik', 'Semiconductors', 'Laser & Photonics'].includes(sig.thema_de) || ['Semiconductors', 'Laser & Photonics'].includes(sig.thema_en);
    if (themaKey === 'wissen') return ['Gründung', 'Transfer', 'Startups'].includes(sig.thema_de) || ['Startups', 'Transfer'].includes(sig.thema_en);
    return ['Europa', 'Grenzkooperation', 'Europe', 'Cross-border'].includes(sig.thema_de) || ['Europe', 'Cross-border'].includes(sig.thema_en);
  });
  const relatedNews = APP_DATA.news.filter(n => {
    if (themaKey === 'technologie') return ['standort', 'projekte'].includes(n.categorySlug);
    if (themaKey === 'wissen') return ['standort', 'veranstaltungen'].includes(n.categorySlug);
    return ['standort'].includes(n.categorySlug);
  }).slice(0, 2);

  return `
    <section class="section-wrapper">
      <div class="container">
        <div class="section-header">
          <a href="#themen" data-page="themen" style="font-size: 0.85rem; color: var(--brand-accent); font-weight: 600; text-decoration: none;">← ${state.lang === 'DE' ? 'Alle Themen' : 'All Topics'}</a>
          <h1 class="headline-3deg" style="margin-top: 1rem;">${state.lang === 'DE' ? h1_de : h1_en}</h1>
          <div class="direct-answer-card" style="margin-top: 1.5rem; max-width: 800px;">
            <p>${state.lang === 'DE' ? da_de : da_en}</p>
          </div>
        </div>

        <!-- Schwerpunkte -->
        <div style="margin: 2rem 0;">
          <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.1rem; margin-bottom: 1rem;">${state.lang === 'DE' ? 'Inhaltliche Schwerpunkte' : 'Key Focus Areas'}</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${(state.lang === 'DE' ? schwerpunkte_de : schwerpunkte_en).map(s => `<span class="criteria-item" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">${s}</span>`).join('')}
          </div>
        </div>

        <!-- Teaser -->
        <h3 class="headline-3deg" style="font-size: 1.3rem; margin-top: 3rem;">${state.lang === 'DE' ? 'Entdeckungen' : 'Discoveries'}</h3>
        <div class="story-grid" style="margin-top: 1.5rem;">
          ${teasers.map(s => renderTeaserCard(s)).join('')}
        </div>

        <!-- Signals -->
        ${signals.length > 0 ? `
          <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.1rem; margin-top: 3rem; margin-bottom: 1rem;">AACHEN-SIGNALE</h3>
          <div class="signal-band">
            ${signals.map(sig => `
              <div class="aachen-signal">
                <div class="signal-theme">${sig[L('thema')]}</div>
                <div class="signal-fact">${sig[L('fact')]}</div>
                <div class="signal-source">${state.lang === 'DE' ? 'Quelle' : 'Source'}: ${sig.source}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Related News -->
        ${relatedNews.length > 0 ? `
          <h3 class="headline-3deg" style="font-size: 1.3rem; margin-top: 3rem;">${state.lang === 'DE' ? 'Aktuelle News' : 'Latest News'}</h3>
          <div class="story-grid" style="margin-top: 1.5rem;">
            ${relatedNews.map(n => `
              <div class="story-card">
                <div class="story-card-body">
                  <div class="story-meta"><span>${n[L('category')]}</span><span>${n[L('date')]}</span></div>
                  <h3 class="story-card-title">${n[L('title')]}</h3>
                  <p class="story-card-excerpt">${n[L('excerpt')]}</p>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Story gesucht -->
        <div style="text-align: center; margin-top: 4rem; padding: 3rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
          <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin-bottom: 1rem;">${t.storyGesucht.title}</h3>
          <button class="btn btn-primary" data-action="submit-story">${state.lang === 'DE' ? ctaLabel_de : ctaLabel_en}</button>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderThemaTechnologie() {
  return renderThemaDetail('technologie',
    'WENN TECHNOLOGIE WIRKUNG ENTFALTET', 'WHEN TECHNOLOGY CREATES IMPACT',
    'In der Aachen Area treffen Forschung, industrielle Erfahrung und Unternehmertum besonders eng aufeinander. Der Themenraum zeigt Entwicklungen, bei denen aus technologischer Erkenntnis eine konkrete Anwendung, Produktion oder neue Wertschöpfung entsteht.',
    'In the Aachen Area, research, industrial experience, and entrepreneurship converge closely. This topic space shows developments where technological insight becomes concrete application, production, or new value creation.',
    ['Halbleiter und Chips', 'Lasertechnik und Photonik', 'KI in industriellen Anwendungen', 'Batterien und Produktion', 'Deep Tech und Scale-up', 'Transferinfrastruktur'],
    ['Semiconductors & Chips', 'Laser Technology & Photonics', 'AI in Industrial Applications', 'Batteries & Manufacturing', 'Deep Tech & Scale-up', 'Transfer Infrastructure'],
    'Technologiegeschichte vorschlagen', 'Suggest a technology story'
  );
}

function renderThemaWissen() {
  return renderThemaDetail('wissen',
    'WENN AUS WISSEN UNTERNEHMEN WIRD', 'WHEN KNOWLEDGE BECOMES ENTERPRISE',
    'Forschung verändert einen Standort erst dann dauerhaft, wenn Wissen in Anwendungen, Gründungen, Kooperationen und neue Märkte übergeht. Dieser Themenraum zeigt, wie Akteure der Aachen Area den Weg von der Erkenntnis zur Wirkung gestalten.',
    'Research only permanently transforms a location when knowledge transitions into applications, startups, partnerships, and new markets. This topic space shows how Aachen Area stakeholders shape the path from insight to impact.',
    ['Hochschul-Spin-offs', 'Deep-Tech-Gründungen', 'Transfergesellschaften', 'Start-ups und Mittelstand', 'Investorenzugang', 'Gründungskultur und Talent'],
    ['University Spin-offs', 'Deep Tech Startups', 'Transfer Companies', 'Startups & Mid-sized Enterprises', 'Investor Access', 'Startup Culture & Talent'],
    'Gründungs- oder Transfergeschichte vorschlagen', 'Suggest a startup or transfer story'
  );
}

function renderThemaEuropa() {
  return renderThemaDetail('europa',
    'WENN EUROPA ZUM ALLTAG WIRD', 'WHEN EUROPE BECOMES EVERYDAY LIFE',
    'Die Aachen Area liegt nicht nur an Grenzen. Menschen, Hochschulen, Unternehmen und Institutionen arbeiten täglich über sie hinweg. Der Themenraum zeigt, wo aus drei Ländern ein gemeinsamer Wissens-, Wirtschafts- und Lebensraum wird.',
    'The Aachen Area doesn\'t just border other countries. People, universities, companies, and institutions work across these borders every day. This topic space shows where three countries form a shared space for knowledge, business, and life.',
    ['Grenzüberschreitende Hochschulkooperation', 'Forschung und Innovation', 'Unternehmensförderung', 'Talentmobilität', 'Gesundheit und Sicherheit', 'Gemeinsame europäische Projekte'],
    ['Cross-border University Cooperation', 'Research & Innovation', 'Business Development', 'Talent Mobility', 'Health & Safety', 'Joint European Projects'],
    'Grenzgeschichte beitragen', 'Contribute a border story'
  );
}

// ─── NEWS PAGE ───────────────────────────────────────────────────────────────
function renderNewsPage() {
  const t = I18N[state.lang];
  const filteredNews = !state.newsFilter || state.newsFilter === 'all' ? APP_DATA.news : APP_DATA.news.filter(n => n.categorySlug === state.newsFilter);
  return `
    <section class="section-wrapper">
      <div class="container">
        <div class="section-header">
          <h1 class="headline-3deg">${t.newsHome.title}</h1>
        </div>
        <div class="filter-bar">
          <button class="filter-btn ${state.newsFilter === 'all' || !state.newsFilter ? 'active' : ''}" data-news-filter="all">${state.lang === 'DE' ? 'Alle' : 'All'}</button>
          <button class="filter-btn ${state.newsFilter === 'standort' ? 'active' : ''}" data-news-filter="standort">${state.lang === 'DE' ? 'Standort & Ökosystem' : 'Location & Ecosystem'}</button>
          <button class="filter-btn ${state.newsFilter === 'initiative' ? 'active' : ''}" data-news-filter="initiative">${state.lang === 'DE' ? 'Initiative & Verein' : 'Initiative & Association'}</button>
          <button class="filter-btn ${state.newsFilter === 'projekte' ? 'active' : ''}" data-news-filter="projekte">${state.lang === 'DE' ? 'Projekte & Kampagnen' : 'Projects & Campaigns'}</button>
          <button class="filter-btn ${state.newsFilter === 'veranstaltungen' ? 'active' : ''}" data-news-filter="veranstaltungen">${state.lang === 'DE' ? 'Veranstaltungen' : 'Events'}</button>
          <button class="filter-btn ${state.newsFilter === 'presse' ? 'active' : ''}" data-news-filter="presse">${state.lang === 'DE' ? 'Presse' : 'Press'}</button>
        </div>
        <div class="story-grid">
          ${filteredNews.map(n => `
            <div class="story-card">
              <div class="story-card-body">
                <div class="story-meta">
                  <span class="story-category-tag" style="position:static;">${n[L('category')]}</span>
                  <span>${n[L('date')]}</span>
                </div>
                <h3 class="story-card-title">${n[L('title')]}</h3>
                <p class="story-card-excerpt">${n[L('excerpt')]}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

// ─── INITIATIVE PAGE ─────────────────────────────────────────────────────────
function renderInitiativePage() {
  const t = I18N[state.lang].initiative;
  return `
    <section class="section-wrapper">
      <div class="container">
        <div class="section-header">
          <h1 class="headline-3deg">${t.h1}</h1>
          <div class="direct-answer-card" style="margin-top: 1.5rem; max-width: 800px;">
            <p>${t.directAnswer}</p>
          </div>
        </div>

        <div style="margin-top: 3rem; max-width: 800px;">
          <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin-bottom: 1rem;">${t.missionTitle}</h3>
          <p class="text-body">${t.missionText}</p>

          <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin: 2rem 0 1rem;">${t.arbeitTitle}</h3>
          <p class="text-body">${t.arbeitText}</p>

          <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin: 2rem 0 1rem;">${t.organeTitle}</h3>
          <p class="text-body">${t.organeText}</p>

          <!-- Team -->
          <div style="margin-top: 3.5rem;">
            <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.3rem; margin-bottom: 1.5rem;">TEAM</h3>
            <div class="team-grid">
              <div class="team-card">
                <div class="team-avatar">SK</div>
                <div class="team-name">Stefan Kiefer</div>
                <div class="team-role">${state.lang === 'DE' ? 'Geschäftsführer' : 'Managing Director'}</div>
              </div>
              <div class="team-card">
                <div class="team-avatar">CM</div>
                <div class="team-name">Carlo Matic</div>
                <div class="team-role">${state.lang === 'DE' ? 'Vorstandsvorsitzender' : 'Chairman of the Board'}</div>
              </div>
              <div class="team-card">
                <div class="team-avatar">AS</div>
                <div class="team-name">Andreas Schneider</div>
                <div class="team-role">${state.lang === 'DE' ? 'Stellvertretender Vorsitzender' : 'Deputy Chairman'}</div>
              </div>
              <div class="team-card">
                <div class="team-avatar">DR</div>
                <div class="team-name">Dirk Reuters</div>
                <div class="team-role">${state.lang === 'DE' ? 'Kassenwart' : 'Treasurer'}</div>
              </div>
              <div class="team-card">
                <div class="team-avatar">TE</div>
                <div class="team-name">Tobias Ell</div>
                <div class="team-role">${state.lang === 'DE' ? 'Kassenprüfer' : 'Auditor'}</div>
              </div>
              <div class="team-card">
                <div class="team-avatar">ZP</div>
                <div class="team-name">Zeljko Pezely</div>
                <div class="team-role">${state.lang === 'DE' ? 'Stellvertretender Kassenprüfer' : 'Deputy Auditor'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

// ─── ENTSTEHUNG PAGE ─────────────────────────────────────────────────────────
function renderEntstehungPage() {
  const de = state.lang === 'DE';
  return `
    <section class="section-wrapper">
      <div class="container">
        <div class="section-header">
          <div class="subline-caps" style="color: var(--brand-accent);">${de ? 'GESCHICHTE & HINTERGRUND' : 'ORIGIN & HISTORY'}</div>
          <h1 class="headline-3deg">${de ? 'ENTSTEHUNG DER INITIATIVE' : 'ORIGIN OF THE INITIATIVE'}</h1>
          <div class="direct-answer-card" style="margin-top: 1.5rem; max-width: 800px;">
            <p>${de ? '„Aachen ohne Limits" wurde ins Leben gerufen, um die belegbaren Spitzenleistungen, Forschungsdurchbrüche und europäischen Kooperationen der Aachen Area in ein starkes, gemeinsames Standortbild zu übersetzen.' : '"Aachen without Limits" was launched to translate the verifiable top achievements, research breakthroughs, and European collaborations of the Aachen Area into a strong, shared regional identity.'}</p>
          </div>
        </div>

        <div style="margin-top: 3rem; max-width: 800px;">
          <div class="wireframe-placeholder" style="min-height: 200px; margin-bottom: 2rem;">
            <span>[ ${de ? 'INHALTE ZUR ENTSTEHUNGSGESCHICHTE FOLGEN IN KÜRZE' : 'CONTENT ON ORIGIN HISTORY COMING SOON'} ]</span>
          </div>

          <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin-bottom: 1rem;">${de ? 'VOM VEREIN ZUM STANDORTMEDIUM' : 'FROM ASSOCIATION TO REGIONAL MEDIUM'}</h3>
          <p class="text-body" style="margin-bottom: 1.5rem;">${de ? 'Der Place Branding Aachen e. V. wurde von engagierten Akteuren aus Wirtschaft, Wissenschaft und Gesellschaft gegründet, um Standortkommunikation frei von Kirchturmdenken und mit Fokus auf Substanz zu etablieren.' : 'Place Branding Aachen e. V. was founded by dedicated actors from business, academia, and society to establish regional communication focused on substance.'}</p>

          <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
            <a href="#initiative" class="btn btn-primary" data-page="initiative">${de ? 'Zur Initiative & Governance' : 'To Initiative & Governance'}</a>
            <a href="#mitgliedschaft" class="btn btn-secondary" data-page="mitgliedschaft">${de ? 'Antrag anfragen' : 'Inquire Membership'}</a>
          </div>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

// ─── MITGLIEDER PAGE ─────────────────────────────────────────────────────────
function renderMitgliederPage() {
  const t = I18N[state.lang].mitglieder;
  const tiers = ['Gold', 'Silber', 'Bronze'];
  return `
    <section class="section-wrapper">
      <div class="container">
        <div class="section-header">
          <h1 class="headline-3deg">${t.h1}</h1>
          <p class="text-body" style="margin-top: 1rem; max-width: 700px;">${t.intro}</p>
        </div>

        ${tiers.map(tier => {
          const members = APP_DATA.members.filter(m => m.tier === tier);
          if (!members.length) return '';
          return `
            <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.1rem; margin: 2.5rem 0 1rem; color: var(--brand-accent);">${tier}</h3>
            <div class="logo-wall-grid">
              ${members.map(m => `
                <div class="member-logo-card ${m.tier === 'Gold' ? 'gold-member' : ''}">
                  <div class="member-name">${m.name}</div>
                  <div class="member-type">${m[L('category')]}</div>
                </div>
              `).join('')}
            </div>
          `;
        }).join('')}

        <div style="text-align: center; margin-top: 3rem;">
          <a href="#mitgliedschaft" class="btn btn-primary" data-page="mitgliedschaft">${t.cta}</a>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

// ─── MITMACHEN PAGE ──────────────────────────────────────────────────────────
function renderMitmachenPage() {
  const t = I18N[state.lang].mitmachen;
  const tm = I18N[state.lang].mitgliedschaft;
  const de = state.lang === 'DE';
  const roles = [
    { icon: '⭐', title: t.r7Title, text: t.r7Text, cta: t.r7Cta, page: 'mitgliedschaft' },
    { icon: '📖', title: t.r1Title, text: t.r1Text, cta: t.r1Cta, action: 'submit-story' },
    { icon: '🔗', title: t.r2Title, text: t.r2Text, cta: t.r2Cta, action: 'submit-story' },
    { icon: '💎', title: de ? 'Ich möchte privat unterstützen' : 'I want to support privately', text: de ? 'Unterstützen Sie die Standortkommunikation der Aachen Area als außerordentliches Mitglied oder Privatperson (1.000 € / Jahr).' : 'Support the location communication of the Aachen Area as an associate member (€1,000 / year).', cta: de ? 'Außerordentliche Mitgliedschaft beantragen' : 'Apply for associate membership', action: 'apply-membership', tier: 'ausserordentlich' },
    { icon: '📊', title: t.r4Title, text: t.r4Text, cta: t.r4Cta, action: 'submit-story' },
    { icon: '🤝', title: t.r5Title, text: t.r5Text, cta: t.r5Cta, action: 'submit-story' }
  ];
  return `
    <section class="section-wrapper">
      <div class="container">
        <div class="section-header">
          <h1 class="headline-3deg">${t.h1}</h1>
        </div>
        <div class="mitmachen-grid">
          ${roles.map(r => `
            <div class="mitmachen-role">
              <div class="role-icon">${r.icon}</div>
              <div class="role-title">${r.title}</div>
              <p class="role-desc">${r.text}</p>
              ${r.page ? `<a href="#mitgliedschaft-rechner" class="btn btn-secondary">${r.cta}</a>` : `<button class="btn btn-secondary" data-action="${r.action}" ${r.tier ? `data-tier="${r.tier}"` : ''}>${r.cta}</button>`}
            </div>
          `).join('')}
        </div>

        <!-- MITGLIEDSCHAFT & BEITRAGSRECHNER -->
        <div id="mitgliedschaft-rechner" style="margin-top: 5rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <div class="section-header">
            <h2 class="headline-3deg">${tm.h1}</h2>
            <p class="text-body" style="margin-top: 1rem; max-width: 700px; font-style: italic;">${tm.leitgedanke}</p>
          </div>

          <div class="tier-grid">
            <div class="tier-card">
              <div class="tier-badge">${tm.bronzeSubtitle}</div>
              <h3 class="tier-title">${tm.bronzeTitle}</h3>
              <ul class="tier-features">
                <li>${de ? 'Nutzung des Member-Badges' : 'Use of member badge'}</li>
                <li>${de ? 'Logo-Präsenz in der Mitgliederübersicht' : 'Logo presence in member directory'}</li>
                <li>${de ? 'Zugang zu Netzwerk-Events' : 'Access to networking events'}</li>
              </ul>
              <button class="btn btn-secondary" data-action="apply-membership" data-tier="bronze">${de ? 'Antrag anfragen' : 'Inquire Membership'}</button>
            </div>
            <div class="tier-card featured">
              <div class="tier-badge" style="color: var(--ac-purple);">${tm.silberSubtitle}</div>
              <h3 class="tier-title">${tm.silberTitle}</h3>
              <ul class="tier-features">
                <li>${de ? 'Alle Bronze-Vorteile' : 'All Bronze benefits'}</li>
                <li>${de ? 'Story-Vorschläge einreichen' : 'Submit story suggestions'}</li>
                <li>${de ? 'Themen mitgestalten' : 'Co-shape topics'}</li>
              </ul>
              <button class="btn btn-primary" data-action="apply-membership" data-tier="silber">${de ? 'Antrag anfragen' : 'Inquire Membership'}</button>
            </div>
            <div class="tier-card">
              <div class="tier-badge" style="color: var(--ac-yellow);">${tm.goldSubtitle}</div>
              <h3 class="tier-title">${tm.goldTitle}</h3>
              <ul class="tier-features">
                <li>${de ? 'Alle Silber-Vorteile' : 'All Silver benefits'}</li>
                <li>${de ? 'Strategische Mitwirkung' : 'Strategic participation'}</li>
                <li>${de ? 'Vorstandsebene' : 'Board-level involvement'}</li>
              </ul>
              <button class="btn btn-secondary" data-action="apply-membership" data-tier="gold">${de ? 'Antrag anfragen' : 'Inquire Membership'}</button>
            </div>
          </div>

          <!-- Beitragsrechner gemäß Beitragsordnung (§ 6) -->
          <div class="calculator-card" style="margin-top: 3rem;">
            <div class="calculator-grid">
              <div class="calc-inputs">
                <h3 style="font-family:var(--font-headline); font-size:1.8rem; text-transform:uppercase; margin-bottom:1.5rem; color:#fff;">${tm.calcTitle}</h3>
                <div class="calc-form-group">
                  <label class="calc-label">${tm.calcLabelHeadcount}</label>
                  <select id="calc-headcount" class="calc-select">
                    <option value="A">${de ? 'A: bis 10 Mitarbeitende (1 Stimme)' : 'A: Up to 10 employees (1 vote)'}</option>
                    <option value="B" selected>${de ? 'B: über 10 bis 50 Mitarbeitende (2 Stimmen)' : 'B: 11 to 50 employees (2 votes)'}</option>
                    <option value="C">${de ? 'C: über 50 bis 250 Mitarbeitende (3 Stimmen)' : 'C: 51 to 250 employees (3 votes)'}</option>
                    <option value="D">${de ? 'D: über 250 bis 750 Mitarbeitende (4 Stimmen)' : 'D: 251 to 750 employees (4 votes)'}</option>
                    <option value="E">${de ? 'E: über 750 Mitarbeitende (5 Stimmen)' : 'E: Over 750 employees (5 votes)'}</option>
                    <option value="F">${de ? 'Außerordentliche Mitgliedschaft (0 Stimmen)' : 'Associate Membership (0 votes)'}</option>
                  </select>
                </div>
                <div class="calc-form-group">
                  <label class="calc-label">${tm.calcLabelTier}</label>
                  <select id="calc-tier" class="calc-select">
                    <option value="bronze">Bronze (${tm.bronzeTitle})</option>
                    <option value="silber" selected>Silber (${tm.silberTitle})</option>
                    <option value="gold">Gold (${tm.goldTitle})</option>
                  </select>
                </div>
              </div>
              <div class="calc-result-box">
                <div class="subline-caps" style="color:#fff;" id="calc-votes-display">2 STIMMEN (MITARBEITENDESTUFE B)</div>
                <div class="calc-price" id="calc-price-display">4.000 €</div>
                <div class="calc-period">${tm.calcPeriod}</div>
                <button class="btn btn-primary" style="margin-top: 1.5rem; width:100%; justify-content:center;" data-action="apply-membership">${de ? 'Antrag anfragen' : 'Inquire Membership'}</button>
              </div>
            </div>
          </div>

          <!-- Aufnahmeprozess -->
          <div style="margin-top: 4rem;">
            <h3 style="font-family:var(--font-headline); text-transform:uppercase; font-size:1.3rem; margin-bottom:1rem;">${tm.aufnahmeTitle}</h3>
            <div class="arbeitsweise-grid" style="margin-top: 1.5rem;">
              ${tm.aufnahmeSteps.split(' → ').map((step, i) => `
                <div class="arbeitsweise-step">
                  <div class="step-number">${i + 1}</div>
                  <div class="step-title">${step}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Stimmrechte -->
          <div style="margin-top: 3rem;">
            <h3 style="font-family:var(--font-headline); text-transform:uppercase; font-size:1.3rem; margin-bottom:1rem;">${tm.stimmrechteTitle}</h3>
            <p class="text-body">${tm.stimmrechteText}</p>
          </div>

          <!-- FAQ -->
          <div style="margin-top: 4rem;">
            <h3 style="font-family:var(--font-headline); text-transform:uppercase; font-size:1.3rem; margin-bottom:2rem;">${tm.faqTitle}</h3>
            <div style="max-width: 800px;">
              <div style="border-bottom: 1px solid var(--border-color); padding: 1.5rem 0;">
                <h4 style="font-weight:700; margin-bottom:0.75rem;">${tm.faq1Q}</h4>
                <p class="text-body" style="color: var(--text-muted);">${tm.faq1A}</p>
              </div>
              <div style="border-bottom: 1px solid var(--border-color); padding: 1.5rem 0;">
                <h4 style="font-weight:700; margin-bottom:0.75rem;">${tm.faq2Q}</h4>
                <p class="text-body" style="color: var(--text-muted);">${tm.faq2A}</p>
              </div>
              <div style="padding: 1.5rem 0;">
                <h4 style="font-weight:700; margin-bottom:0.75rem;">${tm.faq3Q}</h4>
                <p class="text-body" style="color: var(--text-muted);">${tm.faq3A}</p>
              </div>
            </div>
          </div>

          <!-- Offizielle Dokumente (PDFs) -->
          <div style="margin-top: 3rem;">
            <h3 style="font-family:var(--font-headline); text-transform:uppercase; font-size:1.3rem; margin-bottom:1.5rem;">${tm.dokumenteTitle}</h3>
            <div class="download-grid">
              <a href="./docs/260611_Satzung_PBA.pdf" target="_blank" class="document-download-card">
                <div style="font-weight:700; font-size:1rem; color:#0a0c00;">📜 ${tm.dokumenteSatzung}</div>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">Stand 11. Juni 2026 (PDF) ↗</div>
              </a>
              <a href="./docs/260128_Beitragsordnung_PBA.pdf" target="_blank" class="document-download-card">
                <div style="font-weight:700; font-size:1rem; color:#0a0c00;">📊 ${tm.dokumenteBeitragsordnung}</div>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">Stand 28. Jan 2026 (PDF) ↗</div>
              </a>
              <a href="./docs/260128_Leistungsuebersicht_PBA.pdf" target="_blank" class="document-download-card">
                <div style="font-weight:700; font-size:1rem; color:#0a0c00;">⭐ ${tm.dokumenteLeistungen}</div>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">Stand 28. Jan 2026 (PDF) ↗</div>
              </a>
              <a href="./docs/260128_Markenordnung_PBA.pdf" target="_blank" class="document-download-card">
                <div style="font-weight:700; font-size:1rem; color:#0a0c00;">🏷️ ${tm.dokumenteMarkenordnung}</div>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">Stand 28. Jan 2026 (PDF) ↗</div>
              </a>
              <a href="./docs/260206_Mitgliedsantrag_Ordentlich_PBAeV.pdf" target="_blank" class="document-download-card">
                <div style="font-weight:700; font-size:1rem; color:#0a0c00;">📝 Antrag Ordentliche Mitgliedschaft</div>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">Ausfüllbares PDF ↗</div>
              </a>
              <a href="./docs/260206_Mitgliedsantrag_Ausserordentlich_PBAeV.pdf" target="_blank" class="document-download-card">
                <div style="font-weight:700; font-size:1rem; color:#0a0c00;">🤝 Antrag Außerordentliche Mitgliedschaft</div>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">Ausfüllbares PDF ↗</div>
              </a>
            </div>
          </div>

          <!-- Ansprechpartner Stefan Kiefer -->
          <div style="margin-top: 3rem; padding: 2.5rem; background: var(--bg-secondary); border-radius: var(--radius-md); display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <div style="width: 90px; height: 90px; border-radius: 50%; background: linear-gradient(135deg, var(--ac-purple), var(--ac-blue)); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800; flex-shrink: 0;">SK</div>
            <div style="flex: 1; min-width: 260px;">
              <div class="subline-caps" style="color: var(--ac-purple);">${de ? 'IHR PERSÖNLICHER ANSPRECHPARTNER' : 'YOUR PERSONAL CONTACT'}</div>
              <h3 style="font-family:var(--font-headline); font-size:1.4rem; text-transform:uppercase; margin: 0.25rem 0;">Stefan Kiefer</h3>
              <div style="font-weight:700; font-size:0.95rem; color:var(--text-muted); margin-bottom: 0.75rem;">${de ? 'Geschäftsführer, Place Branding Aachen e. V.' : 'Managing Director, Place Branding Aachen e. V.'}</div>
              <p class="text-body" style="font-size: 0.95rem;">${de ? 'Für ein persönliches Gespräch zur Mitgliedschaft, zu Beitragspaketen oder strategischen Kooperationen stehe ich Ihnen jederzeit gern zur Verfügung.' : 'I am happy to arrange a personal conversation regarding membership, fee tiers, or strategic partnerships.'}</p>
              <p class="text-body" style="margin-top: 0.75rem;"><a href="mailto:verein@aachenohnelimits.de" style="color: var(--ac-purple); font-weight: 700;">verein@aachenohnelimits.de</a></p>
            </div>
            <div>
              <button class="btn btn-primary" data-action="apply-membership">${de ? 'Antrag anfragen' : 'Inquire Membership'}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
}

function renderMitgliedschaftPage() {
  return renderMitmachenPage();
}

// ─── PRESSE PAGE ─────────────────────────────────────────────────────────────
function renderPressePage() {
  const t = I18N[state.lang].presse;
  return `
    <section class="section-wrapper">
      <div class="container">
        <div class="section-header">
          <h1 class="headline-3deg">${t.h1}</h1>
        </div>

        <div class="boilerplate-box">
          <p>${t.boilerplate}</p>
        </div>

        <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.1rem; margin: 3rem 0 1rem;">${t.logosTitle}</h3>
        <p class="text-body" style="margin-bottom: 1.5rem;">${t.logosText}</p>
        <div class="download-grid">
          <div class="download-card">
            <img src="/logos/ACoL_RGB_Violett.svg" alt="Logo Violett" style="height: 48px; margin-bottom: 1rem;" />
            <div style="font-weight: 700; font-size: 0.9rem;">Violett (RGB)</div>
          </div>
          <div class="download-card">
            <img src="/logos/ACoL_RGB_Green.svg" alt="Logo Green" style="height: 48px; margin-bottom: 1rem;" />
            <div style="font-weight: 700; font-size: 0.9rem;">Green (RGB)</div>
          </div>
          <div class="download-card" style="background: #000;">
            <img src="/logos/ACoL_RGB_White.svg" alt="Logo White" style="height: 48px; margin-bottom: 1rem;" />
            <div style="font-weight: 700; font-size: 0.9rem; color: #fff;">White (RGB)</div>
          </div>
          <div class="download-card">
            <img src="/logos/ACoL_RGB_Black.svg" alt="Logo Black" style="height: 48px; margin-bottom: 1rem;" />
            <div style="font-weight: 700; font-size: 0.9rem;">Black (RGB)</div>
          </div>
        </div>

        <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.1rem; margin: 3rem 0 1rem;">${t.contactTitle}</h3>
        <p class="text-body">Place Branding Aachen e. V.<br/>Grüner Weg 106, 52070 Aachen<br/><a href="mailto:verein@aachenohnelimits.de" style="color: var(--brand-accent);">verein@aachenohnelimits.de</a></p>
      </div>
    </section>
    ${renderFooter()}
  `;
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function renderFooter() {
  const t = I18N[state.lang].footer;
  const n = I18N[state.lang].nav;
  const de = state.lang === 'DE';
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo-img-wrapper" style="height: 80px;">
              <img src="./logos/logo_footer_green.png" alt="Aachen ohne Limits Logo" style="height: 100%; width: auto; object-fit: contain;" />
            </div>
            <p style="font-size:0.85rem; color:rgba(255,255,255,0.7); margin-top:1rem; max-width:280px;">${de ? 'Die Standortmarke für die Aachen Area.' : 'The regional brand for the Aachen Area.'}</p>
          </div>

          <div class="footer-col">
            <h4>${t.col1Title}</h4>
            <ul class="footer-links">
              <li><a href="#stories" data-page="stories">${n.stories}</a></li>
              <li><a href="#news" data-page="news">${n.news}</a></li>
              <li><a href="#presse" data-page="presse">${de ? 'Presse & Mediakit' : 'Press & Kit'}</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>${t.col2Title}</h4>
            <ul class="footer-links">
              <li><a href="#initiative" data-page="initiative">${de ? 'Mission & Arbeitsweise' : 'Mission & Approach'}</a></li>
              <li><a href="#entstehung" data-page="entstehung">${de ? 'Entstehung' : 'Origin'}</a></li>
              <li><a href="#initiative" data-page="initiative">${de ? 'Vorstand & Geschäftsführung' : 'Board & Management'}</a></li>
              <li><a href="./docs/260611_Satzung_PBA.pdf" target="_blank">${de ? 'Satzung (PDF)' : 'Statutes (PDF)'} ↗</a></li>
              <li><a href="./docs/260128_Beitragsordnung_PBA.pdf" target="_blank">${de ? 'Beitragsordnung (PDF)' : 'Fee Schedule (PDF)'} ↗</a></li>
              <li><a href="./docs/260128_Markenordnung_PBA.pdf" target="_blank">${de ? 'Markenordnung (PDF)' : 'Brand Guidelines (PDF)'} ↗</a></li>
              <li><a href="./docs/260128_Leistungsuebersicht_PBA.pdf" target="_blank">${de ? 'Leistungsübersicht (PDF)' : 'Services (PDF)'} ↗</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>${t.col3Title}</h4>
            <ul class="footer-links">
              <li><a href="#" data-action="submit-story">${de ? 'Story vorschlagen' : 'Suggest a story'}</a></li>
              <li><a href="#mitmachen" data-page="mitmachen">${de ? 'Mitgliedschaft & Rechner' : 'Membership & Calculator'}</a></li>
              <li><a href="#mitmachen" data-page="mitmachen">${de ? 'Mitgliedsanträge (PDF)' : 'Applications (PDF)'}</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>${t.col4Title}</h4>
            <ul class="footer-links">
              <li><a href="mailto:verein@aachenohnelimits.de">${de ? 'Kontakt' : 'Contact'}</a></li>
              <li><a href="#" data-action="open-newsletter">${de ? 'Newsletter Anmelden' : 'Newsletter Signup'}</a></li>
              <li><a href="#presse" data-page="presse">${de ? 'Mediakit' : 'Media Kit'}</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div>${t.rights}</div>
          <div style="display:flex; gap:1.5rem;">
            <a href="#">${t.imprint}</a>
            <a href="#">${t.privacy}</a>
            <a href="#">${t.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ─── INTERACTIVE CALCULATOR (BEITRAGSORDNUNG § 6) ───────────────────────────
function bindPageTriggers() {
  const hc = document.getElementById('calc-headcount');
  const tier = document.getElementById('calc-tier');
  const priceDisplay = document.getElementById('calc-price-display');
  const votesDisplay = document.getElementById('calc-votes-display');

  if (hc && tier && priceDisplay) {
    const feeMatrix = {
      'A': { votes: 1, bronze: 800, silber: 1200, gold: null, label_de: '1 STIMME (STUFE A: BIS 10 MA)', label_en: '1 VOTE (TIER A: UP TO 10 EMPLOYEES)' },
      'B': { votes: 2, bronze: 2500, silber: 4000, gold: null, label_de: '2 STIMMEN (STUFE B: 11-50 MA)', label_en: '2 VOTES (TIER B: 11-50 EMPLOYEES)' },
      'C': { votes: 3, bronze: 4000, silber: 7500, gold: 10000, label_de: '3 STIMMEN (STUFE C: 51-250 MA)', label_en: '3 VOTES (TIER C: 51-250 EMPLOYEES)' },
      'D': { votes: 4, bronze: 8000, silber: 12000, gold: 16000, label_de: '4 STIMMEN (STUFE D: 251-750 MA)', label_en: '4 VOTES (TIER D: 251-750 EMPLOYEES)' },
      'E': { votes: 5, bronze: 15000, silber: 20000, gold: 25000, label_de: '5 STIMMEN (STUFE E: ÜBER 750 MA)', label_en: '5 VOTES (TIER E: OVER 750 EMPLOYEES)' },
      'F': { votes: 0, bronze: 1000, silber: 1000, gold: 1000, label_de: '0 STIMMEN (AUSSERORDENTLICHE MITGLIEDSCHAFT)', label_en: '0 VOTES (ASSOCIATE MEMBERSHIP)' }
    };

    const syncOptions = (triggerSource) => {
      const goldOpt = tier.querySelector('option[value="gold"]');
      const optA = hc.querySelector('option[value="A"]');
      const optB = hc.querySelector('option[value="B"]');

      if (triggerSource === 'hc' || !triggerSource) {
        if (hc.value === 'A' || hc.value === 'B') {
          if (goldOpt) goldOpt.disabled = true;
          if (tier.value === 'gold') tier.value = 'silber';
        } else {
          if (goldOpt) goldOpt.disabled = false;
        }
      }
      
      if (triggerSource === 'tier' || !triggerSource) {
        if (tier.value === 'gold') {
          if (optA) optA.disabled = true;
          if (optB) optB.disabled = true;
          if (hc.value === 'A' || hc.value === 'B') hc.value = 'C';
        } else {
          if (optA) optA.disabled = false;
          if (optB) optB.disabled = false;
        }
      }
    };

    const calc = () => {
      const hcVal = hc.value || 'B';
      const tierVal = tier.value || 'silber';
      const row = feeMatrix[hcVal] || feeMatrix['B'];

      let fee = row[tierVal];
      if (fee === null) {
        fee = row['silber']; // Fallback if Gold is not available for small tiers
      }

      if (votesDisplay) {
        votesDisplay.textContent = state.lang === 'DE' ? row.label_de : row.label_en;
      }
      priceDisplay.textContent = fee.toLocaleString('de-DE') + ' €';
    };

    hc.addEventListener('change', () => {
      syncOptions('hc');
      calc();
    });
    tier.addEventListener('change', () => {
      syncOptions('tier');
      calc();
    });
    syncOptions();
    calc(); // initial run
  }
}

// ─── MODALS & NEWSLETTER ─────────────────────────────────────────────────────
function openModal(html) {
  const o = document.getElementById('modal-overlay');
  document.getElementById('modal-body').innerHTML = html;
  o.classList.remove('hidden');
}
function closeModal() { document.getElementById('modal-overlay').classList.add('hidden'); }

function openApplicationModal(tier = 'silber') {
  const de = state.lang === 'DE';
  const displayTier = tier === 'ausserordentlich' 
    ? (de ? 'Außerordentliche Mitgliedschaft (1.000 € / Jahr)' : 'Associate Membership (€1,000 / year)')
    : tier.toUpperCase();

  openModal(`
    <h2 class="headline-3deg" style="font-size:1.8rem;">${de ? 'MITGLIEDSCHAFT' : 'MEMBERSHIP'} <span class="accent-word">${de ? 'ANFRAGEN' : 'INQUIRY'}</span></h2>
    <p class="text-body" style="font-size:0.95rem; margin-bottom:1.5rem;">${de ? 'Gewähltes Paket' : 'Selected tier'}: <strong>${displayTier}</strong></p>
    <form onsubmit="event.preventDefault(); alert('${de ? 'Vielen Dank! Ihre Beitrittsanfrage wurde an die Geschäftsführung übermittelt. Wir melden uns innerhalb von 14 Tagen.' : 'Thank you! Your application inquiry has been submitted.'}'); closeModal();">
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Unternehmen / Organisation / Name' : 'Company / Organization / Name'}</label>
        <input type="text" class="calc-input" required style="color:#000; background:#f0f4f8;" />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Name & Funktion des Ansprechpartners' : 'Name & Title of Contact'}</label>
        <input type="text" class="calc-input" required style="color:#000; background:#f0f4f8;" />
      </div>
      <div style="margin-bottom:1.5rem;">
        <label class="calc-label" style="color:var(--text-primary);">E-Mail</label>
        <input type="email" class="calc-input" required style="color:#000; background:#f0f4f8;" />
      </div>
      <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">${de ? 'Antrag anfragen' : 'Submit Inquiry'}</button>
    </form>
  `);
}

function openStorySubmissionModal() {
  const de = state.lang === 'DE';
  openModal(`
    <h2 class="headline-3deg" style="font-size:1.8rem;">${de ? 'GESCHICHTE' : 'STORY'} <span class="accent-word">${de ? 'VORSCHLAGEN' : 'SUGGESTION'}</span></h2>
    <p class="text-body" style="font-size:0.95rem; margin-bottom:1.5rem;">${de ? 'Kennen Sie eine Leistung, einen Menschen oder eine Kooperation aus der Aachen Area, die Grenzen verschiebt?' : 'Do you know an achievement, person, or collaboration from the Aachen Area that pushes boundaries?'}</p>
    <form onsubmit="event.preventDefault(); alert('${de ? 'Ihr Hinweis ist eingegangen. Die Redaktion prüft Relevanz, Quellenlage und Passung.' : 'Your suggestion has been received. The editorial team will review relevance and sources.'}'); closeModal();">
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Ihr Name' : 'Your Name'}</label>
        <input type="text" class="calc-input" required style="color:#000; background:#f0f4f8;" />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Organisation' : 'Organization'}</label>
        <input type="text" class="calc-input" style="color:#000; background:#f0f4f8;" />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Arbeitstitel der Geschichte' : 'Working Title'}</label>
        <input type="text" class="calc-input" required style="color:#000; background:#f0f4f8;" />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Kurzbeschreibung' : 'Short Description'}</label>
        <textarea class="calc-input" rows="3" required style="color:#000; background:#f0f4f8;"></textarea>
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Aachen-Bezug' : 'Connection to Aachen'}</label>
        <input type="text" class="calc-input" required style="color:#000; background:#f0f4f8;" />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Überwundene Grenze / Besonderheit' : 'Boundary Pushed / What Makes It Special'}</label>
        <input type="text" class="calc-input" style="color:#000; background:#f0f4f8;" />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Primärquelle oder Beleg' : 'Primary Source or Evidence'}</label>
        <input type="url" class="calc-input" style="color:#000; background:#f0f4f8;" placeholder="https://..." />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Mögliche Protagonisten' : 'Possible Protagonists'}</label>
        <input type="text" class="calc-input" style="color:#000; background:#f0f4f8;" placeholder="${de ? 'z. B. Dr. Muster, Fraunhofer ILT' : 'e.g. Dr. Smith, Fraunhofer ILT'}" />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Vorhandenes Bild-, Video- oder Datenmaterial' : 'Available Image, Video, or Data Material'}</label>
        <textarea class="calc-input" rows="2" style="color:#000; background:#f0f4f8;" placeholder="${de ? 'Beschreiben Sie verfügbares Material' : 'Describe available material'}"></textarea>
      </div>
      <div style="margin-bottom:1.5rem;">
        <label class="calc-label" style="color:var(--text-primary);">E-Mail</label>
        <input type="email" class="calc-input" required style="color:#000; background:#f0f4f8;" />
      </div>
      <div style="margin-bottom:1.5rem;">
        <label style="display:flex; align-items:flex-start; gap:0.75rem; font-size:0.85rem; color:var(--text-muted); cursor:pointer;">
          <input type="checkbox" required style="margin-top:0.2rem; flex-shrink:0;" />
          <span>${de ? 'Ich willige in die Verarbeitung meiner Angaben zum Zweck der redaktionellen Prüfung ein und habe zur Kenntnis genommen, dass die Einreichung keinen Anspruch auf Veröffentlichung begründet.' : 'I consent to the processing of my data for editorial review purposes and acknowledge that submission does not guarantee publication.'}</span>
        </label>
      </div>
      <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">${de ? 'Geschichte vorschlagen' : 'Submit Suggestion'}</button>
    </form>
  `);
}

function openNewsletterModal() {
  const de = state.lang === 'DE';
  openModal(`
    <h2 class="headline-3deg" style="font-size:1.8rem;">${de ? 'STANDORT-NEWSLETTER' : 'NEWSLETTER'} <span class="accent-word">${de ? 'ABONNIEREN' : 'SUBSCRIBE'}</span></h2>
    <p class="text-body" style="font-size:0.95rem; margin-bottom:1.5rem;">${de ? 'Erhalten Sie regelmäßig kuratierte Stories, Fakten und Signale aus der Aachen Area direkt in Ihr Postfach.' : 'Receive curated stories, facts, and signals from the Aachen Area directly to your inbox.'}</p>
    <div id="newsletter-form-container">
      <form onsubmit="event.preventDefault(); window.handleNewsletterSubmit();">
        <div style="margin-bottom:1.25rem;">
          <label class="calc-label" style="color:var(--text-primary);">E-Mail-Adresse</label>
          <input type="email" class="calc-input" required placeholder="ihre.email@organisation.de" style="color:#000; background:#f0f4f8;" />
        </div>
        <div style="margin-bottom:1.5rem;">
          <label style="display:flex; align-items:flex-start; gap:0.75rem; font-size:0.85rem; color:var(--text-muted); cursor:pointer;">
            <input type="checkbox" required style="margin-top:0.2rem; flex-shrink:0;" />
            <span>${de ? 'Ich willige in den Empfang des Newsletters und die Verarbeitung meiner E-Mail-Adresse ein.' : 'I consent to receiving the newsletter and the processing of my email address.'}</span>
          </label>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">${de ? 'Kostenlos anmelden' : 'Subscribe Now'}</button>
      </form>
    </div>
  `);
}

function handleNewsletterSubmit() {
  const de = state.lang === 'DE';
  const container = document.getElementById('newsletter-form-container');
  if (container) {
    container.innerHTML = `
      <div class="newsletter-success-msg">
        <span style="font-size:1.5rem;">✓</span>
        <div>
          <div style="font-weight:800; font-size:1.05rem;">${de ? 'Vielen Dank für Ihre Anmeldung!' : 'Thank you for subscribing!'}</div>
          <div style="font-size:0.9rem; margin-top:0.25rem;">${de ? 'Sie haben sich erfolgreich für den Standort-Newsletter von „Aachen ohne Limits" registriert. Sie erhalten in Kürze eine Bestätigungs-E-Mail.' : 'You have successfully subscribed to the Aachen without Limits newsletter.'}</div>
        </div>
      </div>
      <button onclick="closeModal()" class="btn btn-secondary" style="margin-top:1.5rem; width:100%; justify-content:center;">${de ? 'Schließen' : 'Close'}</button>
    `;
  }
}

window.closeModal = closeModal;
window.handleNewsletterSubmit = handleNewsletterSubmit;
