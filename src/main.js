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
      antrag: 'Mitgliedschaft'
    },
    hero: {
      eyebrow: 'STANDORTGESCHICHTEN AUS DER AACHEN AREA',
      title: 'AACHEN VERSCHIEBT GRENZEN.',
      subline: 'Menschen, Unternehmen und Forschungseinrichtungen der Aachen Area machen möglich, was vorher nicht möglich war. "Aachen ohne Limits" findet die stärksten Geschichten, entwickelt sie mit ausgewiesenen Spezialisten und bringt sie national wie international zu den Zielgruppen, für die sie relevant sind.',
      btnPrimary: 'Stories entdecken',
      btnSecondary: 'Die Idee dahinter'
    },
    directAnswer: {
      title: 'Was ist Aachen ohne Limits?',
      text: 'Aachen ohne Limits ist die gemeinsame Standortmarke für Aachen und die Aachen Area. Getragen von der Unternehmerinitiative Place Branding Aachen e. V. macht die Initiative belegbare Leistungen aus Wirtschaft, Wissenschaft, Technologie und Gesellschaft sichtbar. Sie entwickelt daraus professionelle Geschichten und verbreitet diese – abhängig von Thema und Zielgruppe – über die eigene Plattform, Social Media, Presse- und Medienarbeit, Partnernetzwerke, Veranstaltungen und weitere geeignete nationale und internationale Kanäle.',
      addendum: 'Die Aachen Area bezeichnet den Lebensraum der Menschen, die im Urlaub sagen, dass sie aus der Nähe von Aachen kommen. Sie ist der Bezugsraum der Initiative, keine amtliche Gebietskörperschaft.',
      cta: 'Wie die Initiative arbeitet'
    },
    montage: {
      title: 'GESCHICHTEN, DIE BEREITS IN AACHEN BEGINNEN.',
      intro: 'Manche Entwicklungen sind international relevant, werden aber kaum mit Aachen verbunden. Eine erste kleine Auswahl zeigt, welche vielfältigen technologischen, unternehmerischen und europäischen Geschichten in der Aachen Area entstehen - weitere werden folgen.'
    },
    storyTeaser: {
      title: 'REFERENZEN OHNE LIMITS',
      intro: 'Noch sind nicht alle Geschichten auf dieser Plattform ausführlich erzählt. Aber sie existieren bereits. Wir zeigen eine kuratierte Auswahl und führen zu den Organisationen und Menschen, die dahinterstehen.',
      cta: 'Alle Stories & Referenzen entdecken'
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
      title: 'EINE GUTE GESCHICHTE REICHT NICHT. SIE MUSS DIE RICHTIGEN MENSCHEN ERREICHEN.',
      intro: 'Sichtbarkeit entsteht nicht durch das bloße Veröffentlichen eines Textes. Für jede priorisierte Geschichte verbinden wir redaktionelle Qualität mit einer passenden Produktions- und Distributionsstrategie.',
      s1Title: 'Finden und prüfen',
      s1Desc: 'Wir identifizieren relevante Leistungen, Menschen und Kooperationen und prüfen Fakten, Quellen, Rechte und ihre Bedeutung für die Aachen Area.',
      s2Title: 'Strategisch entwickeln',
      s2Desc: 'Wir definieren Zielgruppen, Kernbotschaft, Dramaturgie, Märkte und die Wirkung, die eine Geschichte erzielen soll.',
      s3Title: 'Passend produzieren',
      s3Desc: 'Je nach Case stellen wir das geeignete Team aus Redaktion, Film, Fotografie, Design, Daten, Audio, Übersetzung und weiteren Disziplinen zusammen.',
      s4Title: 'Für Märkte und Kanäle adaptieren',
      s4Desc: 'Wir entwickeln deutsche und englische Fassungen sowie die Formate, die unterschiedliche Zielgruppen und Kanäle benötigen.',
      s5Title: 'National und international distribuieren',
      s5Desc: 'Wir kombinieren die eigene Plattform mit Social Media, Presse- und Medienarbeit, Fach- und Wirtschaftsmedien, Partner- und Alumni-Netzwerken, Veranstaltungen und – wenn strategisch sinnvoll und finanziert – bezahlter Verstärkung.',
      s6Title: 'Wirkung messen und lernen',
      s6Desc: 'Wir werten Reichweite, relevante Zielgruppen, Medienresonanz, Nutzung, Weiterverbreitung und qualitative Rückmeldungen aus und verbessern damit die nächsten Produktionen.',
      closing: 'Nicht jede Story braucht jeden Kanal. Entscheidend ist, für jede Geschichte die passenden Zielgruppen, Märkte, Formate und Distributionswege zu wählen.',
      cta: 'Mehr über unsere Arbeitsweise'
    },
    ambition: {
      eyebrow: 'UNSER LANGFRISTIGES ZIELBILD',
      title: 'DAMIT AACHEN DAUERHAFT GEHÖRT WIRD: 1 MILLION EURO JAHRESBUDGET.',
      mainText: 'Internationale Wahrnehmung entsteht nicht durch einzelne Posts oder eine einmalige Kampagne. Unser langfristiges Ziel ist deshalb, gemeinsam mit Mitgliedern und Partnern ein Jahresbudget von 1 Million Euro aufzubauen. Dieses Budget soll eine kontinuierliche, professionelle Standortkommunikation ermöglichen: von Recherche und Redaktion über Film, Fotografie, Design und Übersetzung bis zu PR, Social Media, internationaler Distribution, Partnerschaften, Plattformbetrieb und Wirkungsmessung.',
      specialistsText: 'Dafür soll jede Geschichte das Team bekommen, das sie braucht. Je nach Case will Aachen ohne Limits ausgewiesene Fachleute aus Redaktion, Strategie, Film, Fotografie, Design, Animation, Daten, Übersetzung, PR, Social Media und Distribution zusammenbringen. Entscheidend sind nachweisbare Qualität, Themenkompetenz, Zielgruppenverständnis und internationale Erfahrung.',
      transparencyText: 'Die 1 Million Euro ist ein strategisches Ausbauziel – kein bereits verfügbares Budget und kein Versprechen, jede eingereichte Geschichte zu produzieren. Mit wachsender Finanzierung wächst die Fähigkeit, mehr relevante Cases hochwertig zu erzählen, für unterschiedliche Märkte aufzubereiten und dort zu verbreiten, wo sie für Aachen Wirkung entfalten können.',
      cta: 'Was Mitglieder gemeinsam ermöglichen'
    },
    storyGesucht: {
      title: 'WELCHE GESCHICHTE AUS DER AACHEN AREA SOLLTE DIE WELT KENNEN?',
      text: 'Wir suchen belegbare Leistungen, mutige Menschen und Kooperationen, die Grenzen verschieben. Ein Vorschlag ist keine Veröffentlichungsgarantie. Er ist der mögliche Anfang einer redaktionellen Prüfung. Auswahl, Produktionsumfang und Distribution richten sich nach Relevanz, Quellenlage, Rechten, Zielgruppenpotenzial, redaktioneller Priorität und verfügbaren Ressourcen.',
      c1: 'Klarer Bezug zur Aachen Area',
      c2: 'Relevanz über die einzelne Organisation hinaus',
      c3: 'Potenzial für mindestens zwei relevante Zielgruppen',
      c4: 'Nachvollziehbare Quellen und Ansprechpartner',
      cta: 'Geschichte vorschlagen'
    },
    newsHome: {
      title: 'WAS SICH GERADE BEWEGT.',
      cta: 'Alle News'
    },
    traeger: {
      title: 'GEMEINSAM WIRD AUS SICHTBARKEIT WIRKUNG.',
      text: 'Mitglieder finanzieren keine garantierte Einzelwerbung. Sie bauen gemeinsam die redaktionelle, kreative und distributive Infrastruktur auf, mit der relevante Geschichten der Aachen Area professionell produziert und national wie international sichtbar gemacht werden können.',
      cta: 'Mitgliedschaft verstehen'
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
      missionText: 'Die Aachen Area verfügt über eine außergewöhnliche Dichte an wissenschaftlicher, wirtschaftlicher und technologischer Kompetenz. Was bisher fehlt, ist eine langfristige gemeinsame Erzählung, die herausragende Einzelfälle verbindet und daraus ein glaubwürdiges Standortbild entstehen lässt. Eine gemeinsame Identität die Stolz macht und daraus das Mindset wachsen lässt groß zu denken. „Aachen ohne Limits" schließt diese Lücke.',
      arbeitTitle: 'Arbeitsweise',
      arbeitText: 'Die Initiative identifiziert außergewöhnliche Leistungen, prüft Fakten und Quellen, ordnet einzelne Entwicklungen in größere Zusammenhänge ein und erzählt die stärksten Geschichten verständlich, menschlich, belegbar und international anschlussfähig.',
      sectionATitle: 'Von der Auswahl bis zur Wirkung',
      sectionAText: 'Die Initiative identifiziert und prüft relevante Geschichten aus der Aachen Area. Ausgewählte Cases werden mit passend ausgewählten Spezialisten entwickelt, produziert und für deutsche sowie internationale Zielgruppen adaptiert. Für jede priorisierte Geschichte entsteht eine geeignete Kombination aus Plattform, Social Media, Presse- und Medienarbeit, Fachmedien, Partner- und Alumni-Netzwerken, Veranstaltungen und – wenn sinnvoll und finanziert – bezahlter Verstärkung. Die erzielte Wirkung wird ausgewertet und fließt in die weitere Arbeit ein.',
      sectionBTitle: 'Ein Jahresbudget von 1 Million Euro aufbauen',
      sectionBText: 'Das langfristige Ziel ist ein Jahresbudget von 1 Million Euro, das eine kontinuierliche professionelle Standortkommunikation ermöglicht. Finanziert werden sollen damit insbesondere Recherche, Redaktion, kreative Produktion, Übersetzung, PR, Social Media, nationale und internationale Distribution, Partnerschaften, Plattformbetrieb und Wirkungsmessung. Um dieses Ziel zu erreichen müssen wir erst viele werden, dann können wir laut werden.',
      organeTitle: 'Organe & Governance',
      organeText: 'Die Mitglieder sind das höchste Organ im Verein, Vorstand und Geschäftsführung lenken die strategische und redaktionelle Ausrichtung. Die Governance sichert redaktionelle Unabhängigkeit und transparente Entscheidungswege.'
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
      directAnswer: 'Mitglieder des Place Branding Aachen e. V. finanzieren und gestalten eine gemeinsame professionelle Standortkommunikation für die Aachen Area. Ihre Beiträge ermöglichen Recherche, Redaktion, Medienproduktion, Übersetzung, PR, Social Media, nationale und internationale Distribution, Plattformbetrieb und Wirkungsmessung. Eine Mitgliedschaft ist kein Kauf einer Story oder garantierter Reichweite.',
      enablesTitle: 'Was Mitglieder gemeinsam ermöglichen',
      e1: 'Glaubwürdige gemeinsame Stimme für die Aachen Area',
      e2: 'Hochwertige Standortgeschichten mit kollektiver Legitimation',
      e3: 'Professionelle nationale und internationale Distribution',
      e4: 'Inhalte und Argumente für Recruiting, Reputation und Standortkommunikation',
      e5: 'Netzwerk aus Wirtschaft, Wissenschaft, Institutionen, Alumni und Multiplikatoren',
      e6: 'Mitwirkung an Strategie und Themen im Rahmen der geltenden Regeln',
      e7: 'Transparentes Reporting über Aufbau, Produktionen, Distribution und Wirkung',
      budgetNote: 'Das langfristige Ziel ist der Aufbau eines Jahresbudgets von 1 Million Euro. Es soll die kontinuierliche professionelle Produktion und Distribution von Standortgeschichten ermöglichen. Der Betrag ist ein Ausbauziel und kein bereits verfügbares Budget.',
      leitgedanke: 'Die Mitgliedschaft ist kein Kauf von Werbefläche. Sie ermöglicht die professionelle Entwicklung, Produktion und Verbreitung einer gemeinsamen Standortkommunikation, von der die Aachen Area und ihre Akteure langfristig profitieren.',
      bronzeTitle: 'Mittragen',
      bronzeSubtitle: 'Bronze',
      silberTitle: 'Mitgestalten',
      silberSubtitle: 'Silber',
      goldTitle: 'Mitprägen',
      goldSubtitle: 'Gold',
      btnApply: 'Antrag starten',
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
      col4Title: 'Service',
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
      antrag: 'Membership'
    },
    hero: {
      eyebrow: 'LOCATION STORIES FROM THE AACHEN AREA',
      title: 'AACHEN PUSHES BOUNDARIES.',
      subline: 'People, companies, and research institutions in the Aachen Area make possible what was previously impossible. Aachen Without Limits finds the strongest stories, develops them with proven specialists, and delivers them nationally and internationally to the target audiences for whom they are relevant.',
      btnPrimary: 'Discover Aachen',
      btnSecondary: 'The Idea Behind It'
    },
    directAnswer: {
      title: 'What is Aachen Without Limits?',
      text: 'Aachen Without Limits is the shared location brand for Aachen and the Aachen Area. Backed by Place Branding Aachen e. V., the initiative highlights verifiable achievements from business, science, technology, and society. It develops professional stories from these and distributes them – depending on topic and target audience – via its own platform, social media, press and media relations, partner networks, events, and other suitable national and international channels.',
      addendum: 'The Aachen Area refers to the living space of people who say on vacation that they come from near Aachen. It is the reference area of the initiative, not an official administrative district.',
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
      title: 'A GOOD STORY IS NOT ENOUGH. IT MUST REACH THE RIGHT PEOPLE.',
      intro: 'Visibility is not created by merely publishing a text. For every prioritized story, we combine editorial quality with a tailored production and distribution strategy.',
      s1Title: 'Find and verify',
      s1Desc: 'We identify relevant achievements, people, and collaborations, verifying facts, sources, rights, and their significance for the Aachen Area.',
      s2Title: 'Develop strategically',
      s2Desc: 'We define target audiences, core message, narrative structure, markets, and the intended impact of each story.',
      s3Title: 'Produce to match',
      s3Desc: 'Depending on the case, we assemble the ideal team across editorial, film, photography, design, data, audio, translation, and other disciplines.',
      s4Title: 'Adapt for markets and channels',
      s4Desc: 'We create German and English versions as well as the formats required by different target audiences and channels.',
      s5Title: 'Distribute nationally and internationally',
      s5Desc: 'We combine our own platform with social media, PR and media relations, specialized and business press, partner and alumni networks, events, and – when strategically sound and funded – paid amplification.',
      s6Title: 'Measure impact and learn',
      s6Desc: 'We analyze reach, relevant target audiences, media coverage, engagement, sharing, and qualitative feedback to improve future productions.',
      closing: 'Not every story needs every channel. The key is choosing the right target groups, markets, formats, and distribution paths for each story.',
      cta: 'More about how we work'
    },
    ambition: {
      eyebrow: 'OUR LONG-TERM VISION',
      title: 'SO THAT AACHEN IS HEARD PERMANENTLY: 1 MILLION EURO ANNUAL BUDGET.',
      mainText: 'International perception is not built through individual posts or a one-time campaign. Our long-term goal is therefore to build an annual budget of 1 million euros together with members and partners. This budget will enable continuous, professional location communication: from research and editing to film, photography, design, and translation, through to PR, social media, international distribution, partnerships, platform operation, and impact measurement.',
      specialistsText: 'To achieve this, every story should get the team it needs. Depending on the case, Aachen Without Limits aims to bring together proven experts from editorial, strategy, film, photography, design, animation, data, translation, PR, social media, and distribution. What matters is proven quality, topic expertise, audience understanding, and international experience.',
      transparencyText: 'The 1 million euros is a strategic growth target – not a budget currently available and not a promise to produce every submitted story. As funding grows, our capacity grows to tell more relevant cases with high quality, prepare them for different markets, and distribute them where they generate real impact for Aachen.',
      cta: 'What members make possible together'
    },
    storyGesucht: {
      title: 'WHICH STORY FROM THE AACHEN AREA SHOULD THE WORLD KNOW?',
      text: 'We are looking for verifiable achievements, courageous people, and collaborations that push boundaries. A suggestion is not a publication guarantee. It is the potential start of an editorial review. Selection, production scope, and distribution depend on relevance, source situation, rights, audience potential, editorial priority, and available resources.',
      c1: 'Clear connection to the Aachen Area',
      c2: 'Relevance beyond the individual organization',
      c3: 'Potential for at least two relevant target audiences',
      c4: 'Verifiable sources and contact persons',
      cta: 'Suggest a story'
    },
    newsHome: {
      title: 'WHAT\'S MOVING RIGHT NOW.',
      cta: 'All News'
    },
    traeger: {
      title: 'TOGETHER, VISIBILITY BECOMES IMPACT.',
      text: 'Members do not fund guaranteed individual advertising. Together, they build the editorial, creative, and distribution infrastructure through which relevant stories of the Aachen Area can be professionally produced and made visible nationally and internationally.',
      cta: 'Understand membership'
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
      sectionATitle: 'From Selection to Impact',
      sectionAText: 'The initiative identifies and reviews relevant stories from the Aachen Area. Selected cases are developed, produced, and adapted for German and international audiences with carefully chosen specialists. For each prioritized story, a tailored combination of platform, social media, press relations, trade press, partner and alumni networks, events, and – when appropriate and funded – paid amplification is created. The achieved impact is evaluated and feeds into future work.',
      sectionBTitle: 'Building an Annual Budget of 1 Million Euros',
      sectionBText: 'The long-term goal is an annual budget of 1 million euros, enabling continuous professional location communication. This budget is intended to fund research, editing, creative production, translation, PR, social media, national and international distribution, partnerships, platform operations, and impact measurement. This target is not a budget currently available.',
      organeTitle: 'Governance & Leadership',
      organeText: 'The members are the highest body of the association; the board and management guide the strategic and editorial direction. Governance ensures editorial independence and transparent decision-making.'
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
      r6Text: 'Support the shared location communication as an associate member.',
      r6Cta: 'Explore associate membership',
      r7Title: 'We want to become members',
      r7Text: 'Enable and shape the long-term location communication of the Aachen Area.',
      r7Cta: 'Explore membership'
    },
    mitgliedschaft: {
      h1: 'GREATER IMPACT FOR AACHEN — TOGETHER',
      directAnswer: 'Members of Place Branding Aachen e. V. finance and shape a shared professional location communication for the Aachen Area. Their contributions enable research, editing, media production, translation, PR, social media, national and international distribution, platform operation, and impact measurement. Membership is not a purchase of a story or guaranteed reach.',
      enablesTitle: 'What members make possible together',
      e1: 'Credible shared voice for the Aachen Area',
      e2: 'High-quality location stories with collective legitimacy',
      e3: 'Professional national and international distribution',
      e4: 'Content and arguments for recruiting, reputation, and regional positioning',
      e5: 'Network of business, science, institutions, alumni, and multipliers',
      e6: 'Participation in strategy and topics within established rules',
      e7: 'Transparent reporting on growth, productions, distribution, and impact',
      budgetNote: 'The long-term goal is to build an annual budget of 1 million euros. It is intended to enable continuous professional production and distribution of location stories. The amount is a growth target, not a budget currently available.',
      leitgedanke: 'Membership is not buying advertising space. It enables the professional development, production, and distribution of shared location communication that benefits the Aachen Area and its stakeholders long-term.',
      bronzeTitle: 'Support',
      bronzeSubtitle: 'Bronze',
      silberTitle: 'Shape',
      silberSubtitle: 'Silver',
      goldTitle: 'Lead',
      goldSubtitle: 'Gold',
      btnApply: 'Apply Now',
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
      col4Title: 'Service',
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
  // Externe Story-Teaser & Eigene Story-Platzhalter (INCIRT, Element 3-5, ABIOMED)
  storyTeaser: [
    {
      id: 'incirt-chip-design',
      status: 'eigene-story',
      thema: 'technologie',
      title_de: 'INCIRT: Ultra-Highspeed-Chips aus Aachen für die 6G-Zukunft',
      title_en: 'INCIRT: Ultra-High-Speed Chips from Aachen for the 6G Future',
      teaser_de: 'Als Spin-off der RWTH Aachen entwickelt INCIRT integrierte Schaltungen und Hochfrequenz-Datenkonverter für Datenraten im Terabit-Bereich. Die Aachener Chip-Innovation schafft die physikalische Grundlage für kommende 6G-Netze und optische Rechenzentren.',
      teaser_en: 'As an RWTH Aachen spin-off, INCIRT develops integrated circuits and high-frequency data converters for terabit-level data rates. The Aachen chip innovation creates the physical foundation for future 6G networks and optical data centers.',
      aachenBezug_de: 'RWTH-Spitzenforschung wird zu global gefragter Chip-Architektur im Aachener Ökosystem.',
      aachenBezug_en: 'RWTH top research turns into globally sought-after chip architecture in the Aachen ecosystem.',
      organisation: 'INCIRT GmbH / RWTH Spin-off',
      externalUrl: 'https://incirt.de/',
      ctaLabel_de: 'Platzhalter Artikel lesen ↗',
      ctaLabel_en: 'Read Placeholder Article ↗',
      image: './assets/aachen_ki_story.png',
      featured: true,
      article_de: `
        <h3>Wie Aachener Chip-Architektur die Datennetze von morgen antreibt</h3>
        <p>Mit der rasanten Zunahme weltweiter Datenströme stoßen herkömmliche Halbleiterbausteine an physikalische Grenzen. Die Aachener INCIRT GmbH – hervorgegangen aus dem Lehrstuhl für Integrierte Analogschaltungen der RWTH Aachen – entwickelt ultrahocheffiziente Mixed-Signal-Schaltungen und Datenkonverter mit Abtastraten von über 100 Gigasamples pro Sekunde.</p>
        <p>Diese integrierten Schaltungen (ICs) ermöglichen es, massive Datenmengen in Millisekunden zwischen optischen Glasfasernetzen, Mobilfunkstationen und Hochleistungssammlern zu wandeln. Durch den Standort in Aachen profitiert INCIRT von der direkten Nähe zu Reinräumen, Testlaboren und den besten Köpfen der Elektrotechnik.</p>
        <p style="margin-top: 1rem; padding: 1rem; background: var(--bg-secondary); border-left: 3px solid var(--brand-accent);"><strong>Bedeutung für die Aachen Area:</strong> INCIRT belegt, wie aus universitärer Grundlagenforschung der RWTH Aachen marktführende IP-Cores für den weltweiten Halbleitermarkt entstehen – ein Leuchtturm für das regionale Chip-Ökosystem.</p>
      `,
      article_en: `
        <h3>How Aachen Chip Architecture Powers Tomorrow's Data Networks</h3>
        <p>With global data traffic surging, conventional semiconductor components hit physical limits. Aachen-based INCIRT GmbH — spun off from RWTH Aachen University — develops ultra-efficient mixed-signal integrated circuits and data converters with sampling rates exceeding 100 Giga-samples per second.</p>
        <p>These integrated circuits (ICs) enable seamless conversion of massive data volumes between optical fiber networks, mobile base stations, and high-performance hubs. Located in Aachen, INCIRT benefits from immediate proximity to cleanrooms, testing labs, and top electrical engineering talent.</p>
        <p style="margin-top: 1rem; padding: 1rem; background: var(--bg-secondary); border-left: 3px solid var(--brand-accent);"><strong>Significance for the Aachen Area:</strong> INCIRT proves how RWTH Aachen research turns into globally leading IP cores for the semiconductor market — a beacon for the regional chip ecosystem.</p>
      `
    },
    {
      id: 'element-3-5-epitaxy',
      status: 'eigene-story',
      thema: 'technologie',
      title_de: 'Element 3-5: Neue Epitaxie-Technologie revolutioniert die Halbleiterfertigung',
      title_en: 'Element 3-5: New Epitaxy Technology Revolutionizes Semiconductor Manufacturing',
      teaser_de: 'Das High-Tech-Unternehmen Element 3-5 aus Baesweiler in der Aachen Area ermöglicht mit seiner neuartigen Epitaxie-Technologie die energieeffiziente Fertigung von III-V-Halbleitern für Leistungselektronik und MicroLEDs.',
      teaser_en: 'Baesweiler-based high-tech company Element 3-5 enables energy-efficient production of III-V semiconductors for power electronics and microLEDs with its novel low-temperature epitaxy technology.',
      aachenBezug_de: 'High-Tech-Anlagenbau und grüne Halbleiter-Innovation aus der Aachen Area.',
      aachenBezug_en: 'High-tech equipment engineering and green semiconductor innovation from the Aachen Area.',
      organisation: 'Element 3-5 GmbH / Baesweiler',
      externalUrl: 'https://element3-5.com/',
      ctaLabel_de: 'Platzhalter Artikel lesen ↗',
      ctaLabel_en: 'Read Placeholder Article ↗',
      image: './assets/hero_aachen_innovation.png',
      featured: true,
      article_de: `
        <h3>Energieeffiziente Halbleiterherstellung aus Baesweiler</h3>
        <p>Die Fertigung von Leistungshalbleitern aus Galliumnitrid (GaN) und Aluminiumnitrid (AlN) erforderte bisher extrem hohe Temperaturen und immensen Energieaufwand. Die Element 3-5 GmbH aus Baesweiler (Aachen Area) hat mit dem ACCELERATOR-System eine bahnbrechende Niedertemperatur-Epitaxie-Technologie entwickelt.</p>
        <p>Durch die drastische Reduktion des thermischen Budgets sinken nicht nur die Produktionskosten und der CO2-Fußabdruck in der Wafer-Herstellung erheblich; es entstehen auch völlig neue Kombinationsmöglichkeiten von Halbleitermaterialien für Leistungselektronik, 5G/6G-Verstärker und moderne MicroLED-Displays.</p>
        <p style="margin-top: 1rem; padding: 1rem; background: var(--bg-secondary); border-left: 3px solid var(--brand-accent);"><strong>Bedeutung für die Aachen Area:</strong> Element 3-5 zeigt, wie Spezialanlagenbau in der Aachen Area technologische Schlüsselprobleme der globalen Energiewende und Mikroelektronik löst.</p>
      `,
      article_en: `
        <h3>Energy-Efficient Semiconductor Manufacturing from Baesweiler</h3>
        <p>Manufacturing power semiconductors from Gallium Nitride (GaN) and Aluminum Nitride (AlN) previously required extreme temperatures and immense energy consumption. Element 3-5 GmbH in Baesweiler (Aachen Area) developed a breakthrough low-temperature epitaxy technology with its ACCELERATOR system.</p>
        <p>Drastically reducing the thermal budget significantly lowers production costs and carbon footprints in wafer fabrication while enabling completely new material combinations for power electronics, 5G/6G amplifiers, and microLED displays.</p>
        <p style="margin-top: 1rem; padding: 1rem; background: var(--bg-secondary); border-left: 3px solid var(--brand-accent);"><strong>Significance for the Aachen Area:</strong> Element 3-5 demonstrates how specialized equipment manufacturing in the Aachen Area solves key technological bottlenecks in global energy transition and microelectronics.</p>
      `
    },
    {
      id: 'abiomed-jnj-impella',
      status: 'eigene-story',
      thema: 'wissen',
      title_de: 'ABIOMED (Johnson & Johnson): Vom Aachener Labor zum weltweiten Lebensretter',
      title_en: 'ABIOMED (Johnson & Johnson): From Aachen Laboratory to Global Life Saver',
      teaser_de: 'Aus der biomedizinischen Spitzenforschung an der RWTH Aachen entstand die Impella® – die kleinste Herzpumpe der Welt. Heute führt ABIOMED als Teil von Johnson & Johnson MedTech seinen europäischen Hauptsitz aus Aachen und rettet weltweit Zehntausende von Leben.',
      teaser_en: 'Originating from cutting-edge biomedical research at RWTH Aachen, the Impella® — the world\'s smallest heart pump — was born. Today, ABIOMED as part of Johnson & Johnson MedTech directs its European HQ from Aachen, saving tens of thousands of lives globally.',
      aachenBezug_de: 'Biomedizinischer Technologietransfer aus Aachen mit weltweiter Auswirkung.',
      aachenBezug_en: 'Biomedical technology transfer from Aachen with global impact.',
      organisation: 'ABIOMED / Johnson & Johnson MedTech',
      externalUrl: 'https://www.abiomed.de/',
      ctaLabel_de: 'Platzhalter Artikel lesen ↗',
      ctaLabel_en: 'Read Placeholder Article ↗',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      featured: true,
      article_de: `
        <h3>Die Impella-Herzpumpe: Aachener Medizintechnik rettet weltweit Leben</h3>
        <p>Es begann am Helmholtz-Institut für Biomedizinische Technik der RWTH Aachen: Die Vision einer mikroskopisch kleinen, kathetergestützten Herzpumpe, die das geschädigte Herz bei einem akuten Herzinfarkt oder kardiogenen Schock temporär entlastet und die Blutzirkulation aufrechterhält.</p>
        <p>Aus dieser Aachener Erfindung entwickelte sich die Impella®-Herzpumpe, die heute weltweit als Goldstandard der kardialen Unterstützung gilt. Nach der Übernahme durch Johnson & Johnson MedTech für über 16 Milliarden US-Dollar bleibt Aachen das europäische Herz und der zentrale Forschungs- und Produktionsstandort von ABIOMED Europe.</p>
        <p style="margin-top: 1rem; padding: 1rem; background: var(--bg-secondary); border-left: 3px solid var(--brand-accent);"><strong>Bedeutung für die Aachen Area:</strong> ABIOMED ist das Paradebeispiel dafür, wie ein akademisches Spin-off aus Aachen über Jahrzehnte hinweg zum Weltmarktführer heranwächst und globale Konzerne an den Standort bindet.</p>
      `,
      article_en: `
        <h3>The Impella Heart Pump: Aachen Medical Technology Saves Lives Worldwide</h3>
        <p>It started at the Helmholtz Institute for Biomedical Engineering at RWTH Aachen University: The vision of a microscopic, catheter-based heart pump that temporarily relieves a damaged heart during acute myocardial infarction or cardiogenic shock and maintains blood circulation.</p>
        <p>From this Aachen invention developed the Impella® heart pump, now considered the global gold standard in cardiac support. Following its acquisition by Johnson & Johnson MedTech for over $16 billion, Aachen remains the European heart and primary research and manufacturing hub for ABIOMED Europe.</p>
        <p style="margin-top: 1rem; padding: 1rem; background: var(--bg-secondary); border-left: 3px solid var(--brand-accent);"><strong>Significance for the Aachen Area:</strong> ABIOMED is the prime example of how an academic spin-off from Aachen grows over decades into a global market leader, anchoring global corporations to the region.</p>
      `
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
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80',
      featured: true
    },
    {
      id: 'fraunhofer-ilt-transfer',
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
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
      featured: true
    },
    {
      id: 'startup-week-aachen',
      status: 'externe-quelle',
      thema: 'wissen',
      title_de: 'Eine Woche bringt Aachens Gründungsszene zusammen',
      title_en: 'One Week Unites Aachen\'s Startup Scene',
      teaser_de: 'Die Startup Week Aachen bündelte mehr als 40 Veranstaltungen in fünf Tagen und machte das Ökosystem gebündelt sichtbar.',
      teaser_en: 'The Aachen Startup Week brought together more than 40 events in five days, showcasing the ecosystem at a glance.',
      aachenBezug_de: 'Gründungsökosystem auf einen Blick sichtbar gemacht.',
      aachenBezug_en: 'Making the startup ecosystem visible at a glance.',
      organisation: 'digitalHUB Aachen',
      externalUrl: 'https://www.aachen.digital/',
      ctaLabel_de: 'digitalHUB Aachen besuchen ↗',
      ctaLabel_en: 'Visit digitalHUB Aachen ↗',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      featured: true
    },
    {
      id: 'rwth-innovation-transfer',
      status: 'externe-quelle',
      thema: 'wissen',
      title_de: 'Wie Forschung zur tragfähigen Geschäftsidee wird',
      title_en: 'How Research Becomes a Viable Business Idea',
      teaser_de: 'RWTH Innovation fungiert als zentrale Transfergesellschaft der RWTH Aachen University und unterstützt Wissenschaftler bei der Überführung von Forschung in Gründungen.',
      teaser_en: 'RWTH Innovation serves as the central transfer company for RWTH Aachen University, supporting scientists in turning research into startups.',
      aachenBezug_de: 'Institutionalisierter Transferprozess von der Erkenntnis zur Wirkung.',
      aachenBezug_en: 'Institutionalized transfer process from insight to impact.',
      organisation: 'RWTH Innovation / RWTH Aachen',
      externalUrl: 'https://www.rwth-aachen.de/cms/root/transfer/gruendungsunterstuetzung/~iibzo/start-up-gruenden/',
      ctaLabel_de: 'Transfer bei RWTH Aachen ansehen ↗',
      ctaLabel_en: 'View transfer at RWTH Aachen ↗',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80',
      featured: true
    },
    {
      id: 'interreg-foerderprogramme',
      status: 'externe-quelle',
      thema: 'europa',
      title_de: 'Förderprogramme bringen Unternehmen über Grenzen zusammen',
      title_en: 'Funding Programs Bring Companies Across Borders Together',
      teaser_de: 'Interreg Maas-Rhein unterstützt grenzüberschreitende Projekte und verfügt in der Förderperiode 2021 bis 2027 über 176 Millionen Euro.',
      teaser_en: 'Interreg Meuse-Rhine supports cross-border projects with €176 million in the 2021–2027 funding period.',
      aachenBezug_de: 'Grenzüberschreitende Zusammenarbeit mit konkreter Finanzierung.',
      aachenBezug_en: 'Cross-border collaboration with concrete funding.',
      organisation: 'Region Aachen / Interreg',
      externalUrl: 'https://regionaachen.de/euregio/grenzueberschreitende-foerderung/interreg-maas-rhein/',
      ctaLabel_de: 'Interreg bei Region Aachen ansehen ↗',
      ctaLabel_en: 'View Interreg at Region Aachen ↗',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
      featured: false
    }
  ],

  // Aachen-Signale (Belegte Standort-Zahlen & Fakten mit direkter Quellenverlinkung)
  signals: [
    { thema_de: 'Halbleiter & Nanoelektronik', thema_en: 'Semiconductors & Nanoelectronics', fact_de: '> 30 % aller deutschen GaN-Leistungshalbleiter-Patente stammen aus der Aachen Area.', fact_en: '> 30% of all German GaN power semiconductor patents originate from the Aachen Area.', source: 'Forschungszentrum Jülich / VDE', externalUrl: 'https://www.fz-juelich.de/' },
    { thema_de: 'Medizintechnik & Herzchirurgie', thema_en: 'MedTech & Cardiac Surgery', fact_de: '> 250.000 Patienten weltweit verdanken ihr Leben der in Aachen erfundenen Impella® Herzpumpe.', fact_en: '> 250,000 patients globally owe their lives to the Impella® heart pump invented in Aachen.', source: 'Johnson & Johnson MedTech', externalUrl: 'https://www.abiomed.de/' },
    { thema_de: '6G & Supercomputing', thema_en: '6G & Supercomputing', fact_de: '100+ Giga-Samples/s: Aachen betreibt eines der weltweit schnellsten Testbeds für KI- & 6G-Datenkonverter.', fact_en: '100+ Giga-samples/s: Aachen operates one of the world\'s fastest testbeds for AI & 6G data converters.', source: 'INCIRT / RWTH Aachen', externalUrl: 'https://incirt.de/' },
    { thema_de: 'Deep-Tech & Transfer', thema_en: 'Deep Tech & Transfer', fact_de: '100+ Spin-offs pro Jahr: Aachen zählt zu den top 3 Deep-Tech-Gründungsregionen Europas.', fact_en: '100+ spin-offs per year: Aachen ranks among Europe\'s top 3 deep-tech startup regions.', source: 'Startup-Monitor Deutschland', externalUrl: 'https://www.rwth-aachen.de/cms/root/transfer/' },
    { thema_de: 'Europäische Euregio', thema_en: 'European Euregio', fact_de: '55.000+ Grenzgänger überqueren täglich grenzenlos die Arbeitsmärkte von DE, NL und BE in der Aachen Area.', fact_en: '55,000+ cross-border commuters seamlessly cross borders daily between DE, NL, and BE in the Aachen Area.', source: 'Euregio Maas-Rhein', externalUrl: 'https://regionaachen.de/' }
  ],

  // Montage-Elemente für Startseite (3 Blöcke: INCIRT, Element 3-5, ABIOMED)
  montageElements: [
    { title_de: 'INCIRT', title_en: 'INCIRT', fact_de: 'Ultra-Highspeed-Chips für die globale 6G-Kommunikation', fact_en: 'Ultra-high-speed chips for global 6G communications', source: 'INCIRT / RWTH Spin-off' },
    { title_de: 'Element 3-5', title_en: 'Element 3-5', fact_de: 'Revolutionäre Niedertemperatur-Epitaxie für Halbleiter', fact_en: 'Revolutionary low-temperature epitaxy for semiconductors', source: 'Element 3-5 / Baesweiler' },
    { title_de: 'ABIOMED (Johnson & Johnson)', title_en: 'ABIOMED (Johnson & Johnson)', fact_de: 'Weltmarktführende Impella-Herzpumpe aus Aachen', fact_en: 'World-leading Impella heart pump from Aachen', source: 'ABIOMED / Johnson & Johnson MedTech' }
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
    // GOLD (10)
    { name: 'digitalHUB Aachen', speaker: 'Iris Wilhelmi, digitalHUB Aachen', tier: 'Gold', category_de: 'Netzwerk & Digitalisierung', category_en: 'Digital Ecosystem & Network', quote_de: 'Eine starke Standortmarke macht die gebündelte Innovationskraft der Aachen Area international sichtbar.', quote_en: 'A strong regional brand makes the pooled innovation power of the Aachen Area visible internationally.' },
    { name: 'CARPUS+PARTNER', tier: 'Gold', category_de: 'Architektur & Beratung', category_en: 'Architecture & Consulting' },
    { name: 'IHK Aachen', speaker: 'Michael Bayer, IHK Aachen', tier: 'Gold', category_de: 'Wirtschaftskammer', category_en: 'Chamber of Commerce', quote_de: 'Ein starkes Standortbild nützt allen – Wirtschaft, Wissenschaft und den Menschen, die hier leben.', quote_en: 'A strong regional identity benefits everyone — business, science, and the people who live here.' },
    { name: 'INFORM', tier: 'Gold', category_de: 'Software & Logistik-KI', category_en: 'Software & Logistics AI' },
    { name: 'Interactive Pioneers', tier: 'Gold', category_de: 'Digitalagentur & Technologie', category_en: 'Digital Agency & Tech' },
    { name: 'Johnson & Johnson MedTech', tier: 'Gold', category_de: 'Medizintechnik & Gesundheit', category_en: 'Medical Technology & Health' },
    { name: 'Landmarken Group', tier: 'Gold', category_de: 'Projektentwicklung & Immobilien', category_en: 'Real Estate & Development' },
    { name: 'NetAachen', speaker: 'Andreas Schneider, NetAachen', tier: 'Gold', category_de: 'Telekommunikation & IT', category_en: 'Telecommunications & IT', quote_de: 'Starke Netzwerke und moderne Infrastruktur sind das Rückgrat einer zukunftsfähigen Region.', quote_en: 'Strong networks and modern infrastructure are the backbone of a future-proof region.' },
    { name: 'regio iT', tier: 'Gold', category_de: 'IT-Dienstleistungen & Kommunen', category_en: 'IT Services & Public Sector' },
    { name: 'Mayersche', tier: 'Gold', category_de: 'Kultur & Handel', category_en: 'Culture & Retail' },

    // SILBER (9)
    { name: 'Aachener Bank', tier: 'Silber', category_de: 'Finanzwesen & Regionale Bank', category_en: 'Banking & Financial Services' },
    { name: 'CHIO Aachen', tier: 'Silber', category_de: 'Sport & Internationales Event', category_en: 'Sports & International Event' },
    { name: 'Schaps Steuerberatung', tier: 'Silber', category_de: 'Steuerberatung & Wirtschaft', category_en: 'Tax & Business Advisory' },
    { name: 'S-UBG', tier: 'Silber', category_de: 'Beteiligungskapital', category_en: 'Venture Capital & Private Equity' },
    { name: 'Talbot Services', tier: 'Silber', category_de: 'Schienenfahrzeuge & Mobilität', category_en: 'Rail Vehicles & Mobility' },
    { name: 'TVF', tier: 'Silber', category_de: 'Verpackung & Logistik', category_en: 'Packaging & Logistics' },
    { name: 'URBAL networks', tier: 'Silber', category_de: 'Netzwerke & Kommunikation', category_en: 'Networks & Communications' },
    { name: 'yukawa', tier: 'Silber', category_de: 'Digitalisierung & Innovation', category_en: 'Digitalization & Innovation' },
    { name: 'SustainGuard Group', tier: 'Silber', category_de: 'Nachhaltigkeit & Technologie', category_en: 'Sustainability & Tech' },

    // BRONZE (22 Mitglieder)
    { name: 'aachen tourist service', tier: 'Bronze', category_de: 'Tourismus & Marketing', category_en: 'Tourism & Regional Marketing' },
    { name: 'Bauer + Kirch', tier: 'Bronze', category_de: 'Software & IT-Systeme', category_en: 'Software & IT Systems' },
    { name: 'Alabon Business Development', tier: 'Bronze', category_de: 'Unternehmensberatung', category_en: 'Business Development' },
    { name: 'e.mobility hub', tier: 'Bronze', category_de: 'Elektromobilität & Energie', category_en: 'Electromobility & Energy' },
    { name: 'CP Bauteam', tier: 'Bronze', category_de: 'Bau & Projektentwicklung', category_en: 'Construction & Development' },
    { name: 'RelAix Networks', tier: 'Bronze', category_de: 'Telekommunikation & Netze', category_en: 'Telecommunications & Networks' },
    { name: 'FRINGS', tier: 'Bronze', category_de: 'IT & Systemhaus', category_en: 'IT & Enterprise Solutions' },
    { name: 'AMO', tier: 'Bronze', category_de: 'Nanotechnologie & Forschung', category_en: 'Nanotechnology & Research' },
    { name: 'GOLDBECK', tier: 'Bronze', category_de: 'Bauen & Immobilien', category_en: 'Construction & Real Estate' },
    { name: 'Im.puls Team', tier: 'Bronze', category_de: 'Beratung & Transformation', category_en: 'Consulting & Transformation' },
    { name: 'Kohl Automobile', tier: 'Bronze', category_de: 'Automotive & Mobilität', category_en: 'Automotive & Mobility' },
    { name: 'Peterhoff Gebäudedienste', tier: 'Bronze', category_de: 'Dienstleistung & Infrastruktur', category_en: 'Facility Services' },
    { name: 'WINKLER', tier: 'Bronze', category_de: 'Druck & Medien', category_en: 'Printing & Media' },
    { name: 'POWER+RADACH', tier: 'Bronze', category_de: 'Marke & Kommunikation', category_en: 'Brand & Communications' },
    { name: 'PL Bioscience', tier: 'Bronze', category_de: 'BioTech & Life Sciences', category_en: 'BioTech & Life Sciences' },
    { name: 'R.E.G.I.N.A', tier: 'Bronze', category_de: 'Regionales Netzwerk', category_en: 'Regional Network' },
    { name: 'courté', tier: 'Bronze', category_de: 'Dienstleistung & Beratung', category_en: 'Services & Advisory' },
    { name: 'MOQO', tier: 'Bronze', category_de: 'Shared Mobility Software', category_en: 'Shared Mobility Software' },
    { name: 'ADVANTEAM', tier: 'Bronze', category_de: 'Software & Beratung', category_en: 'Software & Consulting' },
    { name: 'Dialego', tier: 'Bronze', category_de: 'Marktforschung & Innovation', category_en: 'Market Research & Innovation' },
    { name: 'Wienand Ausstatter', tier: 'Bronze', category_de: 'Handwerk & Gestaltung', category_en: 'Crafts & Design' },
    { name: 'Carolus Thermen Bad Aachen', tier: 'Bronze', category_de: 'Gesundheit & Erholung', category_en: 'Health & Wellness' }
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
  try {
    localStorage.removeItem('pba_theme');
    localStorage.removeItem('theme');
  } catch (e) {}
  setTheme('light');
}
function setTheme(theme = 'light') {
  state.theme = 'light';
  document.body.className = 'theme-light';
  const logoImg = document.querySelector('.logo-img');
  if (logoImg) {
    logoImg.src = './logos/logo_header_purple.png';
  }
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-page]');
    if (link) {
      e.preventDefault();
      navigateTo(link.dataset.page);
      mainNav.classList.remove('open');
      return;
    }
    if (e.target.id === 'modal-close' || e.target.id === 'modal-overlay') closeModal();

    const storyCard = e.target.closest('[data-story-id]');
    if (storyCard) {
      e.preventDefault();
      openStoryModal(storyCard.dataset.storyId);
      return;
    }

    const extLink = e.target.closest('[data-external-url]');
    if (extLink) { window.open(extLink.dataset.externalUrl, '_blank', 'noopener'); }

    const applyBtn = e.target.closest('[data-action="apply-membership"]');
    if (applyBtn) openApplicationModal(applyBtn.dataset.tier || 'silber');

    const storyBtn = e.target.closest('[data-action="submit-story"]');
    if (storyBtn) openStorySubmissionModal();

    const contactSourceBtn = e.target.closest('[data-action="submit-contact-source"]');
    if (contactSourceBtn) openContactSourceModal();

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

// ─── SEO & META TAG ENGINE ───────────────────────────────────────────────────
function updateMetaTags() {
  const page = state.activePage || 'home';
  const lang = state.lang.toLowerCase();
  const de = state.lang === 'DE';
  const baseUrl = 'https://carlomatic.github.io/aachen-ohne-limits-relaunch';

  const metaData = {
    home: {
      title: de ? 'Aachen ohne Limits — Standortmarke für die Aachen Area' : 'Aachen Without Limits — Location Brand for the Aachen Area',
      desc: de ? 'Aachen ohne Limits ist die gemeinsame Standortmarke für Aachen und die Aachen Area. Wir finden belegbare Standortgeschichten und verbreiten sie national wie international.' : 'Aachen Without Limits is the joint location brand for the Aachen Area. We find verifiable location stories and distribute them nationally and internationally.'
    },
    stories: {
      title: de ? 'Stories aus der Aachen Area — Aachen ohne Limits' : 'Stories from the Aachen Area — Aachen Without Limits',
      desc: de ? 'Kuratierte Standortgeschichten, Projektsignale und Entwicklungen aus Wirtschaft, Wissenschaft und Innovation in der Aachen Area.' : 'Curated location stories, project signals, and developments from business, science, and innovation in the Aachen Area.'
    },
    themen: {
      title: de ? 'Strategische Themenräume — Aachen ohne Limits' : 'Strategic Topic Spaces — Aachen Without Limits',
      desc: de ? 'Drei Perspektiven auf die Standortstärken der Aachen Area: Technologie wird Wirkung, Aus Wissen wird Unternehmen, Europa wird Praxis.' : 'Three perspectives on the Aachen Area\'s strengths: Technology Becomes Impact, Knowledge Becomes Enterprise, Europe Becomes Practice.'
    },
    news: {
      title: de ? 'News & Aktuelles — Aachen ohne Limits' : 'News & Updates — Aachen Without Limits',
      desc: de ? 'Aktuelle Nachrichten, Standortentwicklungen und Fortschritte der Initiative Aachen ohne Limits.' : 'Latest news, location developments, and progress of the Aachen Without Limits initiative.'
    },
    initiative: {
      title: de ? 'Die Initiative — Place Branding Aachen e. V.' : 'The Initiative — Place Branding Aachen e. V.',
      desc: de ? 'Der Place Branding Aachen e. V. entwickelt und trägt die gemeinsame Standortmarke Aachen ohne Limits.' : 'Place Branding Aachen e. V. develops and carries the joint location brand Aachen Without Limits.'
    },
    mitglieder: {
      title: de ? 'Mitglieder & Träger — Aachen ohne Limits' : 'Members & Partners — Aachen Without Limits',
      desc: de ? 'Unternehmen und Institutionen, die die Standortkommunikation der Aachen Area gemeinsam ermöglichen.' : 'Companies and institutions enabling joint location communication for the Aachen Area.'
    },
    mitmachen: {
      title: de ? 'Mitmachen & Mitgliedschaft — Aachen ohne Limits' : 'Engage & Membership — Aachen Without Limits',
      desc: de ? 'Werden Sie Mitglied im Place Branding Aachen e. V. und gestalten Sie die Standortkommunikation der Aachen Area aktiv mit.' : 'Become a member of Place Branding Aachen e. V. and actively shape location communication for the Aachen Area.'
    },
    mitgliedschaft: {
      title: de ? 'Mitgliedschaft & Beiträge — Aachen ohne Limits' : 'Membership & Fees — Aachen Without Limits',
      desc: de ? 'Beitragsrechner, Mitgliedschaftsmodelle und Unterlagen des Place Branding Aachen e. V.' : 'Fee calculator, membership tiers, and documents of Place Branding Aachen e. V.'
    },
    presse: {
      title: de ? 'Presse & Medien — Aachen ohne Limits' : 'Press & Media — Aachen Without Limits',
      desc: de ? 'Pressemitteilungen, Ansprechpartner, Boilerplate und offizielle Logos von Aachen ohne Limits.' : 'Press releases, contacts, boilerplate, and official logos of Aachen Without Limits.'
    }
  };

  const curr = metaData[page] || metaData.home;
  document.title = curr.title;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = curr.desc;

  // Canonical & hreflang
  const currentPath = `/${lang}/${page === 'home' ? '' : page + '/'}`;
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  // Open Graph & Twitter Meta Tags
  const setMetaProperty = (prop, val, isName = false) => {
    let el = document.querySelector(isName ? `meta[name="${prop}"]` : `meta[property="${prop}"]`);
    if (!el) {
      el = document.createElement('meta');
      if (isName) el.name = prop; else el.setAttribute('property', prop);
      document.head.appendChild(el);
    }
    el.content = val;
  };

  setMetaProperty('og:title', curr.title);
  setMetaProperty('og:description', curr.desc);
  setMetaProperty('og:type', 'website');
  setMetaProperty('og:url', `${baseUrl}${currentPath}`);
  setMetaProperty('og:image', `${baseUrl}/logos/logo_header_purple.png`);

  setMetaProperty('twitter:card', 'summary_large_image', true);
  setMetaProperty('twitter:title', curr.title, true);
  setMetaProperty('twitter:description', curr.desc, true);
  setMetaProperty('twitter:image', `${baseUrl}/logos/logo_header_purple.png`, true);

  // JSON-LD Structured Data
  let jsonLd = document.getElementById('json-ld-schema');
  if (!jsonLd) {
    jsonLd = document.createElement('script');
    jsonLd.id = 'json-ld-schema';
    jsonLd.type = 'application/ld+json';
    document.head.appendChild(jsonLd);
  }
  jsonLd.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Place Branding Aachen e. V.',
    'alternateName': 'Aachen ohne Limits',
    'url': baseUrl,
    'logo': `${baseUrl}/logos/logo_header_purple.png`,
    'description': curr.desc,
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Aachen Area'
    }
  });
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
  updateMetaTags();
  bindPageTriggers();
}

// ─── HELPER: Lang key ────────────────────────────────────────────────────────
function L(key) { return key + '_' + state.lang.toLowerCase(); }

// ─── HOME PAGE (1:1 matching Desktop.png design) ─────────────────────────────
function renderHomePage() {
  const de = state.lang === 'DE';
  const members = APP_DATA.members.filter(m => m.tier === (state.sponsorTab || 'Gold'));

  return `
    <!-- 1. HERO SEKTION (Top Visual Banner with single-line AACHEN VERSCHIEBT over video + Purple GRENZEN below) -->
    <section class="hero-section-desktop">
      <div class="container">
        <!-- Top Visual Banner with Autoplaying Background YouTube Video & Slanted Cut -->
        <div class="hero-top-visual">
          <div class="hero-visual-media">
            <iframe 
              class="hero-video-bg"
              src="https://www.youtube-nocookie.com/embed/jbbHinXzIuU?autoplay=1&mute=1&loop=1&playlist=jbbHinXzIuU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&playsinline=1&enablejsapi=1"
              title="Aachen ohne Limits Hero Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="hero-visual-overlay"></div>

            <!-- "AACHEN VERSCHIEBT" sits in white directly on the video along the 3-degree slope with natural word spacing -->
            <div class="hero-video-headline-wrap">
              <div class="hero-headline-overlay headline-3deg">
                AACHEN VERSCHIEBT
              </div>
            </div>
          </div>
        </div>

        <!-- 2-Column Hero Grid below video banner -->
        <div class="hero-desktop-grid">
          <!-- Left Column: "GRENZEN." in Purple on the 3° tilt directly below -->
          <div class="hero-brand-statement">
            <div class="hero-display-purple headline-3deg">
              GRENZEN.
            </div>
            <div class="subline-caps hero-eyebrow-caps">STANDORTGESCHICHTEN AUS DER AACHEN AREA</div>
          </div>

          <!-- Right Column: Intro Copy & Action Buttons -->
          <div class="hero-intro-text">
            <h3 class="hero-subhead-bold">STANDORTGESCHICHTEN<br>AUS DER AACHEN AREA</h3>
            <p class="hero-paragraph">
              Aachen ohne Limits ist die gemeinsame Standortmarke für Aachen und die Aachen Area – getragen von der Unternehmerinitiative Place Branding Aachen e. V. Sie macht sichtbar, was Menschen, Unternehmen und Forschungseinrichtungen der Region möglich machen: belegbare Leistungen aus Wirtschaft, Wissenschaft, Technologie und Gesellschaft, verdichtet zu den stärksten Geschichten des Standorts.
            </p>
            <p class="hero-paragraph">
              Gemeinsam mit ausgewiesenen Spezialisten entwickelt die Initiative daraus professionelle Stories und bringt sie – abhängig von Thema und Zielgruppe – national wie international dorthin, wo sie relevant sind: über die eigene Plattform, Social Media, Presse- und Medienarbeit, Partnernetzwerke, Veranstaltungen und weitere geeignete Kanäle.
            </p>
            <div class="hero-actions-row">
              <a href="#stories" class="btn btn-primary btn-pill" data-page="stories">STORIES ENTDECKEN</a>
              <a href="#initiative" class="btn btn-outline btn-pill" data-page="initiative">DIE IDEE DAHINTER</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. GESCHICHTEN DIE BEREITS IN AACHEN BEGINNEN (Dark Carousel Card - 2 Full Stories + 3rd Peeked, Real Case Photos) -->
    <section class="section-wrapper story-start-section">
      <div class="container">
        <div class="dark-feature-card">
          <div class="dark-feature-header">
            <span class="counter-badge">01 ──── 05</span>
            <h2 class="dark-feature-title">
              GESCHICHTEN DIE BEREITS<br>
              <span class="text-accent-green">IN AACHEN BEGINNEN</span>
            </h2>
            <a href="#stories" class="btn btn-pill-glass" data-page="stories">MEHR STORIES</a>
          </div>

          <div class="story-carousel-track">
            <!-- Story 1: Element 3-5 / INCIRT Chips -->
            <div class="story-preview-card" data-story-id="element35-accelerator" style="cursor: pointer;">
              <div class="story-preview-img-wrap">
                <img src="./assets/incirt-chip.jpg" alt="INCIRT Chips Aachen" class="story-preview-img" />
                <button class="story-action-badge" aria-label="Story ansehen">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <circle cx="6" cy="6" r="2.5"/>
                    <circle cx="18" cy="6" r="2.5"/>
                    <circle cx="6" cy="18" r="2.5"/>
                    <circle cx="18" cy="18" r="2.5"/>
                  </svg>
                </button>
              </div>
              <div class="story-preview-meta">
                <span class="badge-neon-green">ELEMENT 3-5 GMBH</span>
                <h3 class="story-preview-title">INCIRT: Ultra-Highspeed-Chips aus Aachen für die 6G-Zukunft</h3>
                <p class="story-preview-desc">RWTH-Spitzenforschung wird zu global gefragter Chip-Architektur im Aachener Ökosystem.</p>
              </div>
            </div>

            <!-- Story 2: Abiomed Impella -->
            <div class="story-preview-card" data-story-id="abiomed-jnj-impella" style="cursor: pointer;">
              <div class="story-preview-img-wrap">
                <img src="./assets/abiomed-medtech.jpg" alt="Abiomed Impella Medizintechnik" class="story-preview-img" />
                <button class="story-action-badge" aria-label="Story ansehen">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <circle cx="6" cy="6" r="2.5"/>
                    <circle cx="18" cy="6" r="2.5"/>
                    <circle cx="6" cy="18" r="2.5"/>
                    <circle cx="18" cy="18" r="2.5"/>
                  </svg>
                </button>
              </div>
              <div class="story-preview-meta">
                <span class="badge-neon-green">ABIOMED / JOHNSON & JOHNSON</span>
                <h3 class="story-preview-title">Impella: Kleinste Herzpumpe der Welt</h3>
                <p class="story-preview-desc">Vom Aachener Universitätsklinikum zum weltweiten Goldstandard in der Kardiologie.</p>
              </div>
            </div>

            <!-- Story 3: Laser & KI -->
            <div class="story-preview-card" data-story-id="laser-ki-makerthon" style="cursor: pointer;">
              <div class="story-preview-img-wrap">
                <img src="./assets/laser-region.jpg" alt="Laser & KI Aachen" class="story-preview-img" />
                <button class="story-action-badge" aria-label="Story ansehen">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <circle cx="6" cy="6" r="2.5"/>
                    <circle cx="18" cy="6" r="2.5"/>
                    <circle cx="6" cy="18" r="2.5"/>
                    <circle cx="18" cy="18" r="2.5"/>
                  </svg>
                </button>
              </div>
              <div class="story-preview-meta">
                <span class="badge-neon-green">LASER.REGION.AACHEN</span>
                <h3 class="story-preview-title">Wenn Lasertechnik und KI gemeinsam lernen</h3>
                <p class="story-preview-desc">Über 60 Partner bündeln Photonik- und KI-Kompetenz für europäische Spitzenforschung.</p>
              </div>
            </div>

            <!-- Story 4: Fraunhofer ILT -->
            <div class="story-preview-card" data-story-id="fraunhofer-ilt-transfer" style="cursor: pointer;">
              <div class="story-preview-img-wrap">
                <img src="./assets/fraunhofer-ilt.jpg" alt="Fraunhofer ILT Transfer" class="story-preview-img" />
                <button class="story-action-badge" aria-label="Story ansehen">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <circle cx="6" cy="6" r="2.5"/>
                    <circle cx="18" cy="6" r="2.5"/>
                    <circle cx="6" cy="18" r="2.5"/>
                    <circle cx="18" cy="18" r="2.5"/>
                  </svg>
                </button>
              </div>
              <div class="story-preview-meta">
                <span class="badge-neon-green">FRAUNHOFER ILT</span>
                <h3 class="story-preview-title">Wo Deep Tech nicht im Labor endet</h3>
                <p class="story-preview-desc">Systematischer Forschungstransfer von der Grundlagenforschung in die Industrieanwendung.</p>
              </div>
            </div>

            <!-- Story 5: digitalHUB Aachen -->
            <div class="story-preview-card" data-story-id="digitalhub-aachen" style="cursor: pointer;">
              <div class="story-preview-img-wrap">
                <img src="./assets/digitalhub-aachen.jpg" alt="digitalHUB Aachen" class="story-preview-img" />
                <button class="story-action-badge" aria-label="Story ansehen">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <circle cx="6" cy="6" r="2.5"/>
                    <circle cx="18" cy="6" r="2.5"/>
                    <circle cx="6" cy="18" r="2.5"/>
                    <circle cx="18" cy="18" r="2.5"/>
                  </svg>
                </button>
              </div>
              <div class="story-preview-meta">
                <span class="badge-neon-green">DIGITALHUB AACHEN</span>
                <h3 class="story-preview-title">Eine Woche bringt Aachens Gründungsszene zusammen</h3>
                <p class="story-preview-desc">Startup Week Aachen macht das Innovationsökosystem der Dreiländerregion gebündelt sichtbar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. REFERENZEN OHNE LIMITS (Weiß / 2-Spalten) -->
    <section class="section-wrapper section-light references-section">
      <div class="container">
        <div class="references-header">
          <div class="references-header-text">
            <span class="subline-caps">Kuratierte Originalquellen</span>
            <h2 class="headline-references">REFERENZEN OHNE LIMITS</h2>
            <p class="references-intro">
              Noch nicht als eigene Story produzierte, aber hochrelevante Entwicklungen aus dem Aachener Ökosystem. Wir führen transparent zu den Originalseiten der beteiligten Organisationen.
            </p>
          </div>
          <div class="references-header-action">
            <a href="#stories" class="btn btn-primary btn-pill" data-page="stories">ALLE REFERENZEN</a>
          </div>
        </div>

        <div class="references-content-grid">
          <!-- Left Column: Landscape Image -->
          <div class="references-media-col">
            <img src="./assets/interreg-maasrhein.jpg" alt="Aachen Landschaft" class="references-feature-img" />
          </div>

          <!-- Right Column: 3 Stacked Cards -->
          <div class="references-cards-col">
            <div class="ref-link-card ref-card-purple" data-page="stories" style="cursor: pointer;">
              <div class="ref-card-inner">
                <h4>Supply-constrained markets</h4>
                <p>Regions characterized by geographical boundaries, cost-related obstacles, and/or complex political barriers.</p>
              </div>
              <span class="ref-card-arrow">→</span>
            </div>

            <div class="ref-link-card" data-page="stories" style="cursor: pointer;">
              <div class="ref-card-inner">
                <h4>Supply-constrained markets</h4>
                <p>Regions characterized by geographical boundaries, cost-related obstacles, and/or complex political barriers.</p>
              </div>
              <span class="ref-card-arrow">→</span>
            </div>

            <div class="ref-link-card" data-page="stories" style="cursor: pointer;">
              <div class="ref-card-inner">
                <h4>Supply-constrained markets</h4>
                <p>Regions characterized by geographical boundaries, cost-related obstacles, and/or complex political barriers.</p>
              </div>
              <span class="ref-card-arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. DREI RÄUME, IN DENEN AACHEN GRENZEN VERSCHIEBT (Gestapelte Fächerkarten) -->
    <section class="section-wrapper topic-stack-section">
      <div class="container">
        <div class="topic-stack-header text-center">
          <h2 class="topic-stack-headline">
            <span class="stack-headline-black">DREI RÄUME, <span class="text-purple">IN DENEN</span></span><br>
            <span class="stack-headline-purple headline-3deg">AACHEN GRENZEN VERSCHIEBT.</span>
          </h2>
        </div>

        <div class="stacked-cards-wrapper">
          <!-- Card 01: Hellgrün -->
          <div class="stack-card stack-card-green" data-page="thema-technologie" style="cursor: pointer;">
            <div class="stack-card-content">
              <h3>Technologie wird<br>Wirkung</h3>
              <p>Noch nicht als eigene Story produzierte, aber hochrelevante Entwicklungen aus dem Aachener Ökosystem.</p>
            </div>
            <div class="stack-card-num">01</div>
          </div>

          <!-- Card 02: Dunkelgrau/Anthrazit -->
          <div class="stack-card stack-card-dark" data-page="thema-wissen" style="cursor: pointer;">
            <div class="stack-card-content">
              <h3>Aus Wissen wird<br>Unternehmen</h3>
              <p>Noch nicht als eigene Story produzierte, aber hochrelevante Entwicklungen aus dem Aachener Ökosystem. Wir führen transparent zu den Originalseiten der beteiligten Organisationen.</p>
            </div>
            <div class="stack-card-num">02</div>
          </div>

          <!-- Card 03: Full-Width Leuchtend Violett -->
          <div class="stack-card stack-card-purple" data-page="thema-europa" style="cursor: pointer;">
            <div class="stack-card-content">
              <h3>Europa wird Praxis</h3>
              <p>Noch nicht als eigene Story produzierte, aber hochrelevante Entwicklungen aus dem Aachener Ökosystem. Wir führen transparent zu den Originalseiten der beteiligten Organisationen.</p>
              <div class="stack-card-cta-link">Mehr entdecken →</div>
            </div>
            <div class="stack-card-num">03</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. EINE GUTE GESCHICHTE REICHT NICHT. SIE MUSS DIE RICHTIGEN MENSCHEN ERREICHEN. -->
    <section class="section-wrapper story-reach-section">
      <div class="container">
        <div class="reach-banner-header">
          <h2 class="reach-title-top">
            EINE <span class="badge-purple-box">GUTE</span><br>
            <span class="badge-purple-box">GESCHICHTE</span><br>
            REICHT NICHT.
          </h2>
          <h3 class="reach-title-subline headline-3deg">SIE MUSS DIE RICHTIGEN MENSCHEN ERREICHEN.</h3>
        </div>

        <div class="reach-content-grid">
          <!-- Left: Image -->
          <div class="reach-image-col">
            <img src="./assets/fraunhofer-ilt.jpg" alt="Aachen Produktion & Forschung" class="reach-feature-img" />
          </div>

          <!-- Right: Process Steps Card -->
          <div class="reach-steps-col">
            <div class="reach-step-row">
              <span class="reach-num text-purple">01</span>
              <div class="reach-step-text">
                <h4>FINDEN UND PRÜFEN</h4>
                <p>Wir identifizieren relevante Leistungen, Menschen und Kooperationen und prüfen Fakten, Quellen, Rechte und ihre Bedeutung für die Aachen Area.</p>
              </div>
            </div>

            <div class="reach-step-row">
              <span class="reach-num text-purple">02</span>
              <div class="reach-step-text">
                <h4>FINDEN UND PRÜFEN</h4>
                <p>Wir identifizieren relevante Leistungen, Menschen und Kooperationen und prüfen Fakten, Quellen, Rechte und ihre Bedeutung für die Aachen Area.</p>
              </div>
            </div>

            <div class="reach-step-row reach-step-light">
              <span class="reach-num text-light-purple">03</span>
              <div class="reach-step-text">
                <h4>FINDEN UND PRÜFEN</h4>
                <p>Wir identifizieren relevante Leistungen, Menschen und Kooperationen und prüfen Fakten, Quellen, Rechte und ihre Bedeutung für die Aachen Area.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. DAMIT AACHEN DAUERHAFT GEHÖRT WIRD: 1 MILLION EURO BUDGET FÜR SICHTBARKEIT -->
    <section class="section-wrapper million-budget-section" id="ambition">
      <div class="container text-center">
        <!-- Banner Image (Eye focus) -->
        <div class="budget-eye-banner-wrap">
          <img src="./assets/aachen_ki_story.png" alt="Aachen Fokus" class="budget-eye-img" />
        </div>

        <div class="budget-subline-top">
          DAMIT AACHEN <span class="text-purple headline-3deg">DAUERHAFT GEHÖRT WIRD:</span>
        </div>

        <h2 class="huge-million-headline">
          <span class="million-black">1 MILLION EURO</span>
          <span class="million-purple headline-3deg">BUDGET FÜR SICHTBARKEIT</span>
        </h2>

        <div class="budget-text-grid">
          <p>
            Internationale Wahrnehmung entsteht nicht durch einzelne Posts oder eine einmalige Kampagne. Unser langfristiges Ziel ist deshalb, gemeinsam mit Mitgliedern und Partnern ein Jahresbudget von 1 Million Euro aufzubauen. Dieses Budget soll eine kontinuierliche, professionelle Standortkommunikation ermöglichen: von Recherche und Redaktion über Film, Fotografie, Design und Übersetzung bis zu PR, Social Media, internationaler Distribution, Partnerschaften, Plattformbetrieb und Wirkungsmessung.
          </p>
          <p>
            Dafür soll jede Geschichte das Team bekommen, das sie braucht. Je nach Case wählt Aachen ohne Limits ausgewiesene Fachleute aus Redaktion, Strategie, Film, Fotografie, Design, Animation, Daten, Übersetzung, PR, Social Media und Distribution zusammenbringen. Entscheidend sind nachweisbare Qualität, Themenkompetenz, Zielgruppenverständnis und internationale Erfahrung.
          </p>
        </div>

        <div class="budget-info-card">
          <p>
            Die 1 Million Euro ist ein strategisches Ausbauziel – kein bereits verfügbares Budget und kein Versprechen, jede eingereichte Geschichte zu produzieren. Mit wachsender Finanzierung wächst die Fähigkeit, mehr relevante Cases hochwertig zu erzählen, für unterschiedliche Märkte aufzubereiten und dort zu verbreiten, wo sie für Aachen Wirkung entfalten können.
          </p>
        </div>

        <div class="budget-cta-wrap">
          <a href="#mitgliedschaft" class="btn btn-primary btn-pill" data-page="mitgliedschaft">WERDE TEIL DAVON</a>
        </div>
      </div>
    </section>

    <!-- 7. IMMER INFORMIERT BLEIBEN (Newsletter Banner) -->
    <section class="section-wrapper newsletter-dark-section">
      <div class="container">
        <div class="newsletter-card-dark">
          <div class="newsletter-col-left">
            <div class="newsletter-brand-badge headline-3deg">
              IMMER<br>INFORMIERT<br>BLEIBEN
            </div>
          </div>
          <div class="newsletter-col-right">
            <h3>STANDORT-IMPULSE DIREKT IN IHRE INBOX</h3>
            <p>Erhalten Sie regelmäßig kuratierte Erfolge, Hintergründe und Entwicklungen aus der Aachen Area. Kein Spam – jederzeit abbestellbar.</p>
            <form class="newsletter-inline-form" onsubmit="event.preventDefault(); window.handleHomeNewsletterSubmit();">
              <input type="email" required placeholder="Ihre E-Mail..." class="newsletter-pill-field" />
              <button type="submit" class="btn btn-pill-green">NEWSLETTER ABONNIEREN</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. GEMEINSAM WIRD AUS SICHTBARKEIT WIRKUNG (Testimonials + Member Logos) -->
    <section class="section-wrapper social-proof-section section-light">
      <div class="container">
        <div class="proof-header-row">
          <div>
            <span class="subline-caps">Starke Partner</span>
            <h2 class="headline-proof">GEMEINSAM WIRD AUS<br>SICHTBARKEIT WIRKUNG.</h2>
            <p class="proof-lead-text">
              Mitglieder finanzieren keine garantierte Einzelwerbung. Sie bauen gemeinsam die redaktionelle, kreative und distributive Infrastruktur auf, mit der relevante Geschichten der Aachen Area professionell produziert und national wie international sichtbar gemacht werden können.
            </p>
          </div>
          <div>
            <a href="#mitglieder" class="btn btn-primary btn-pill" data-page="mitglieder">MITGLIEDER</a>
          </div>
        </div>

        <!-- 3 Testimonial Cards with Photos -->
        <div class="testimonials-three-grid">
          <div class="testi-card">
            <div class="testi-avatar-wrap">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80" alt="Jenny Wilson" class="testi-avatar" />
            </div>
            <div class="testi-content">
              <p class="testi-quote-text">“Flow transformed my energy use. Efficient, green tech, outstanding service!”</p>
              <div class="testi-name">Jenny Wilson</div>
              <div class="testi-role">Solar energy service</div>
            </div>
          </div>

          <div class="testi-card">
            <div class="testi-avatar-wrap">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80" alt="Jenny Wilson" class="testi-avatar" />
            </div>
            <div class="testi-content">
              <p class="testi-quote-text">“Flow transformed my energy use. Efficient, green tech, outstanding service!”</p>
              <div class="testi-name">Jenny Wilson</div>
              <div class="testi-role">Solar energy service</div>
            </div>
          </div>

          <div class="testi-card">
            <div class="testi-avatar-wrap">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80" alt="Jenny Wilson" class="testi-avatar" />
            </div>
            <div class="testi-content">
              <p class="testi-quote-text">“Flow transformed my energy use. Efficient, green tech, outstanding service!”</p>
              <div class="testi-name">Jenny Wilson</div>
              <div class="testi-role">Solar energy service</div>
            </div>
          </div>
        </div>

        <!-- Tier Tabs (Gold, Silber, Bronze) -->
        <div class="tier-pills-row">
          <button class="tier-tab-btn ${state.sponsorTab === 'Gold' || !state.sponsorTab ? 'active' : ''}" data-sponsor-tab="Gold">🪙 GOLD MITGLIEDER</button>
          <button class="tier-tab-btn ${state.sponsorTab === 'Silber' ? 'active' : ''}" data-sponsor-tab="Silber">SILBER</button>
          <button class="tier-tab-btn ${state.sponsorTab === 'Bronze' ? 'active' : ''}" data-sponsor-tab="Bronze">BRONZE</button>
        </div>

        <!-- Modern Logo Wall Grid -->
        <div class="modern-logo-grid" id="home-sponsor-grid-container">
          ${members.map(m => `
            <div class="modern-logo-card">
              <div class="modern-logo-placeholder">
                <span class="logo-symbol">✣</span>
                <span class="logo-text-sample">${m.name}</span>
              </div>
              <span class="modern-logo-tag">${m.tier.toUpperCase()}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 9. WELCHE GESCHICHTE AUS DER AACHEN AREA SOLLTE DIE WELT KENNEN? -->
    <section class="section-wrapper discovery-banner-section">
      <div class="container">
        <div class="discovery-banner-card">
          <div class="discovery-banner-content">
            <h2 class="discovery-banner-headline">
              WELCHE GESCHICHTE AUS DER AACHEN AREA<br>
              SOLLTE DIE WELT KENNEN?
            </h2>
            <p class="discovery-banner-p">
              Machen Sie Aachens Stärken sichtbar – mit einer Geschichte, einem Kontakt oder Ihrer Mitgliedschaft. Wir suchen belegbare Leistungen, mutige Menschen und Kooperationen, die Grenzen verschieben. Ein Vorschlag ist keine Veröffentlichungsgarantie, sondern der mögliche Anfang einer redaktionellen Prüfung. Auswahl und Umfang richten sich nach Relevanz, Quellenlage, Rechten und verfügbaren Ressourcen.
            </p>
            <div class="discovery-banner-actions">
              <a href="#mitgliedschaft" class="btn btn-primary btn-pill" data-page="mitgliedschaft">MITGLIED WERDEN</a>
              <button class="btn btn-pill-green" data-action="submit-story">STORY VORSCHLAGEN</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

function openStoryModal(storyId) {
  const story = APP_DATA.storyTeaser.find(s => s.id === storyId);
  if (!story) return;
  const de = state.lang === 'DE';
  const title = story[L('title')];
  const body = story[L('article')] || `<p class="text-body">${story[L('teaser')]}</p>`;
  openModal(`
    <div style="max-width: 750px;">
      <div style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
        <span class="status-label eigene-story">${de ? 'Aachen-ohne-Limits Story' : 'Aachen Without Limits Story'}</span>
        <span class="story-category-tag" style="position:static;">${story.organisation}</span>
      </div>
      <h2 class="headline-3deg" style="font-size: 1.8rem; margin-bottom: 1.25rem; text-transform: uppercase; line-height: 1.2;">${title}</h2>
      <div class="text-body" style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        ${body}
      </div>
      <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); display: flex; gap: 1rem; justify-content: space-between; align-items: center; flex-wrap: wrap;">
        <a href="${story.externalUrl}" target="_blank" rel="noopener" class="btn btn-primary">${de ? 'Unternehmenswebsite besuchen ↗' : 'Visit Company Website ↗'}</a>
        <button onclick="closeModal()" class="btn btn-secondary">${de ? 'Schließen' : 'Close'}</button>
      </div>
    </div>
  `);
}

// ─── HELPER: Teaser Card ────────────────────────────────────────────────────
function renderTeaserCard(s) {
  const isEigene = s.status === 'eigene-story' || s.article_de;
  const themaLabel = s.thema === 'technologie' ? (state.lang === 'DE' ? 'Technologie wird Wirkung' : 'Technology Becomes Impact') : s.thema === 'wissen' ? (state.lang === 'DE' ? 'Aus Wissen wird Unternehmen' : 'Knowledge Becomes Enterprise') : (state.lang === 'DE' ? 'Europa wird Praxis' : 'Europe Becomes Practice');
  const statusLabelText = isEigene ? (state.lang === 'DE' ? 'Aachen-Story' : 'Aachen Story') : s.status === 'story-vorbereitung' ? (state.lang === 'DE' ? 'In Vorbereitung' : 'In Preparation') : (state.lang === 'DE' ? 'Externe Quelle' : 'External Source');
  const statusClass = isEigene ? 'eigene-story' : s.status === 'story-vorbereitung' ? 'story-vorbereitung' : 'externe-quelle';

  const rawLabel = (s[L('ctaLabel')] || '').replace(/[↗→]/g, '').trim();

  return `
    <div class="story-card" ${isEigene ? `data-story-id="${s.id}"` : `data-external-url="${s.externalUrl}"`} style="cursor: pointer; overflow: hidden;">
      ${s.image ? `
        <div class="story-card-image" style="background: url('${s.image}') center/cover no-repeat; height: 160px; border-radius: var(--radius-sm) var(--radius-sm) 0 0; border-bottom: 1px solid var(--border-color);"></div>
      ` : ''}
      <div class="story-card-body">
        <div class="story-meta" style="margin-bottom: 0.3rem;">
          <span class="status-label ${statusClass}">${statusLabelText}</span>
          <span class="story-category-tag" style="position:static; font-size: 0.7rem;">${themaLabel}</span>
        </div>
        <h3 class="story-card-title" style="margin-top: 0.2rem; margin-bottom: 0.15rem; font-size: 1.15rem; line-height: 1.25;">${s[L('title')]}</h3>
        <p class="story-card-excerpt" style="margin-top: 0; margin-bottom: 0.35rem; font-size: 0.9rem; line-height: 1.4;">${s[L('teaser')]}</p>
        <div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; margin-top: 0.35rem;">${s[L('aachenBezug')]}</div>
        <div style="margin-top: auto; padding-top: 0.75rem;">
          <span class="${isEigene ? 'btn btn-secondary' : 'external-link-indicator'}" style="${isEigene ? 'font-size:0.8rem; padding:0.4rem 0.8rem; width:auto; display:inline-block;' : ''}">${s[L('ctaLabel')]}</span>
        </div>
      </div>
    </div>
  `;
}

// ─── HELPER: Full Width Story Card for Stories Page ─────────────────────────
function renderFullWidthStoryCard(s) {
  const themaLabel = s.thema === 'technologie' ? (state.lang === 'DE' ? 'Technologie wird Wirkung' : 'Technology Becomes Impact') : s.thema === 'wissen' ? (state.lang === 'DE' ? 'Aus Wissen wird Unternehmen' : 'Knowledge Becomes Enterprise') : (state.lang === 'DE' ? 'Europa wird Praxis' : 'Europe Becomes Practice');
  
  return `
    <div class="featured-story-card" data-story-id="${s.id}" style="cursor: pointer; width: 100%; margin-bottom: 2.5rem; border-left: 4px solid var(--brand-accent);">
      ${s.image ? `
        <div class="featured-story-image" style="background: url('${s.image}') center/cover no-repeat; min-height: 260px; border-radius: var(--radius-md) var(--radius-md) 0 0; position: relative;">
          <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1.25rem 1.5rem; background: linear-gradient(transparent, rgba(0,0,0,0.85));">
            <span class="status-label eigene-story">${state.lang === 'DE' ? 'Aachen-Story' : 'Aachen Story'}</span>
            <span class="story-category-tag" style="position:static; margin-left: 0.5rem; font-size: 0.7rem;">${themaLabel}</span>
          </div>
        </div>
      ` : ''}
      <div class="featured-story-content" style="padding: 2rem;">
        <div class="story-meta" style="margin-bottom: 0.5rem;"><span style="font-weight: 700; color: var(--brand-accent);">${s.organisation}</span></div>
        <h3 class="story-card-title" style="font-size: 1.65rem; margin-top: 0.2rem; margin-bottom: 0.6rem; line-height: 1.25;">${s[L('title')]}</h3>
        <p class="story-card-excerpt" style="font-size: 1rem; line-height: 1.6; margin-top: 0; margin-bottom: 0.75rem;">${s[L('teaser')]}</p>
        <div style="font-size: 0.9rem; color: var(--text-muted); font-style: italic; margin-bottom: 1.25rem;">${s[L('aachenBezug')]}</div>
        <div>
          <button class="btn btn-secondary" style="font-size: 0.9rem; padding: 0.6rem 1.25rem;">${s[L('ctaLabel')]}</button>
        </div>
      </div>
    </div>
  `;
}

// ─── STORIES PAGE ──────────────────────────────────────────────────────────
function renderStoriesPage() {
  const t = I18N[state.lang];
  const allTeasers = state.activeFilter === 'all' ? APP_DATA.storyTeaser : APP_DATA.storyTeaser.filter(s => s.thema === state.activeFilter);
  const eigeneStories = allTeasers.filter(s => s.status === 'eigene-story' || s.article_de);
  const referenzen = allTeasers.filter(s => s.status !== 'eigene-story' && !s.article_de);

  return `
    <section class="section-wrapper">
      <div class="container">
        <div class="section-header">
          <h1 class="headline-3deg">${t.stories.h1}</h1>
          <div class="direct-answer-card" style="margin-top: 1.5rem; max-width: 800px;">
            <p>${t.stories.directAnswer}</p>
          </div>
        </div>

        <!-- Filter -->
        <div class="filter-bar" style="margin-top: 2rem;">
          <button class="filter-btn ${state.activeFilter === 'all' ? 'active' : ''}" data-filter="all">${t.stories.filterAll}</button>
          <button class="filter-btn ${state.activeFilter === 'technologie' ? 'active' : ''}" data-filter="technologie">${t.themenraeume.t1Title}</button>
          <button class="filter-btn ${state.activeFilter === 'wissen' ? 'active' : ''}" data-filter="wissen">${t.themenraeume.t2Title}</button>
          <button class="filter-btn ${state.activeFilter === 'europa' ? 'active' : ''}" data-filter="europa">${t.themenraeume.t3Title}</button>
        </div>

        <!-- 1. AACHEN-STORIES (Redaktionell produzierte Stories - Volle Breite, untereinander) -->
        ${eigeneStories.length > 0 ? `
          <div style="margin-top: 3rem;">
            <div style="margin-bottom: 2rem; border-bottom: 2px solid var(--brand-accent); padding-bottom: 1rem;">
              <span class="status-label eigene-story" style="font-size: 0.75rem;">${state.lang === 'DE' ? 'Eigenständige Redaktion' : 'Independent Editorial'}</span>
              <h2 class="headline-3deg" style="font-size: 1.8rem; margin-top: 0.5rem; margin-bottom: 0.5rem;">${state.lang === 'DE' ? 'GESCHICHTEN, DIE BEREITS IN AACHEN BEGINNEN' : 'STORIES THAT ALREADY BEGIN IN AACHEN'}</h2>
              <p class="text-body" style="font-size: 1.05rem; color: var(--text-muted); max-width: 850px;">${state.lang === 'DE' ? 'Ausführliche redaktionelle Storys über Menschen, Unternehmen und wissenschaftliche Durchbrüche aus der Aachen Area.' : 'In-depth editorial stories about people, companies, and scientific breakthroughs from the Aachen Area.'}</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${eigeneStories.map(s => renderFullWidthStoryCard(s)).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 2. REFERENZEN OHNE LIMITS (Kuratierte externe Quellen) -->
        ${referenzen.length > 0 ? `
          <div style="margin-top: 5rem; padding: 3rem 2.5rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color); border-left: 5px solid var(--ac-green);">
            <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1.25rem;">
              <span class="status-label externe-quelle" style="font-size: 0.75rem;">${state.lang === 'DE' ? 'Kuratierte Originalquellen' : 'Curated Original Sources'}</span>
              <h2 class="headline-3deg" style="font-size: 1.8rem; margin-top: 0.5rem; margin-bottom: 0.5rem;">${state.lang === 'DE' ? 'REFERENZEN OHNE LIMITS' : 'REFERENCES WITHOUT LIMITS'}</h2>
              <p class="text-body" style="font-size: 1rem; color: var(--text-muted); max-width: 850px;">${state.lang === 'DE' ? 'Noch nicht als eigene Story produzierte, aber hochrelevante Entwicklungen aus dem Aachener Ökosystem. Wir führen transparent zu den Originalseiten der beteiligten Organisationen.' : 'Highly relevant developments from the Aachen ecosystem not yet produced as full internal stories. We transparently link to the original sources of responsible organizations.'}</p>
            </div>
            
            <div class="story-grid">
              ${referenzen.map(s => renderTeaserCard(s)).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 3. AACHEN-SIGNALE (STANDORT-ZAHLEN & FAKTEN) -->
        <div style="margin-top: 5rem;">
          <div style="margin-bottom: 1.75rem;">
            <span class="status-label aachen-signal" style="font-size: 0.75rem;">${state.lang === 'DE' ? 'Standort-Radar' : 'Regional Radar'}</span>
            <h2 class="headline-3deg" style="font-size: 1.6rem; margin-top: 0.5rem; margin-bottom: 0.5rem;">${state.lang === 'DE' ? 'AACHEN-SIGNALE (STANDORT-ZAHLEN & FAKTEN)' : 'AACHEN SIGNALS (FACTS & NUMBERS)'}</h2>
            <p class="text-body" style="font-size: 0.95rem; color: var(--text-muted); max-width: 800px;">${state.lang === 'DE' ? 'Kurze, verifizierte Zahlen, Daten und Fakten zur wissenschaftlichen und wirtschaftlichen Stärke der Region.' : 'Short, verified numbers, data, and facts showcasing the scientific and economic strength of the region.'}</p>
          </div>

          <div class="signal-band">
            ${APP_DATA.signals.map(sig => `
              <div class="aachen-signal" data-external-url="${sig.externalUrl}" style="cursor: pointer;">
                <div class="signal-theme">${state.lang === 'DE' ? 'Aachen-Signal · ' : 'Aachen Signal · '}${sig[L('thema')]}</div>
                <div class="signal-fact">${sig[L('fact')]}</div>
                <div class="signal-source" style="display:flex; justify-content:space-between; align-items:center; margin-top:0.75rem; font-size:0.8rem;">
                  <span>${state.lang === 'DE' ? 'Quelle' : 'Source'}: ${sig.source}</span>
                  <span class="external-link-indicator"></span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Story vorschlagen CTA -->
        <div style="text-align: center; margin-top: 3.5rem;">
          <button class="btn btn-primary" data-action="submit-story">${t.stories.ctaStory}</button>
        </div>

        <!-- Transparenz & Status-Legende (Unten platziert & strukturiert) -->
        <div class="status-legend-box" style="margin-top: 4.5rem; padding: 2.5rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; letter-spacing: 0.05em; margin-bottom: 0.5rem;">${state.lang === 'DE' ? 'TRANSPARENZ & STATUS-KENNZEICHNUNGEN' : 'TRANSPARENCY & STATUS LABELS'}</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted);">${state.lang === 'DE' ? 'Jeder Beitrag auf dieser Plattform ist eindeutig gekennzeichnet, damit Herkunft und Veröffentlichungsstatus transparent nachvollziehbar sind.' : 'Every contribution on this platform is clearly labeled so that origin and publication status are transparently understandable.'}</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
            <div style="padding: 1.25rem; background: var(--card-bg); border-radius: var(--radius-sm); border: var(--card-border);">
              <div style="margin-bottom: 0.5rem;">
                <span class="status-label eigene-story">${state.lang === 'DE' ? 'Aachen-Story' : 'Aachen Story'}</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.5;">${t.stories.legendEigen}</p>
            </div>

            <div style="padding: 1.25rem; background: var(--card-bg); border-radius: var(--radius-sm); border: var(--card-border);">
              <div style="margin-bottom: 0.5rem;">
                <span class="status-label story-vorbereitung">${state.lang === 'DE' ? 'In Vorbereitung' : 'In Progress'}</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.5;">${t.stories.legendVorbereitung}</p>
            </div>

            <div style="padding: 1.25rem; background: var(--card-bg); border-radius: var(--radius-sm); border: var(--card-border);">
              <div style="margin-bottom: 0.5rem;">
                <span class="status-label externe-quelle">${state.lang === 'DE' ? 'Externe Quelle' : 'External Source'}</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.5;">${t.stories.legendExtern}</p>
            </div>
          </div>
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
            <span class="themenraum-cta">${t.themenraeume.t1Cta}</span>
          </div>
          <div class="themenraum-card" data-page="thema-wissen" style="cursor:pointer;">
            <h3>${t.themenraeume.t2Title}</h3>
            <p>${t.themenraeume.t2Text}</p>
            <span class="themenraum-cta">${t.themenraeume.t2Cta}</span>
          </div>
          <div class="themenraum-card" data-page="thema-europa" style="cursor:pointer;">
            <h3>${t.themenraeume.t3Title}</h3>
            <p>${t.themenraeume.t3Text}</p>
            <span class="themenraum-cta">${t.themenraeume.t3Cta}</span>
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
          <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.1rem; margin-top: 3rem; margin-bottom: 1rem;">AACHEN-SIGNALE (STANDORT-ZAHLEN & FAKTEN)</h3>
          <div class="signal-band">
            ${signals.map(sig => `
              <div class="aachen-signal" data-external-url="${sig.externalUrl}" style="cursor: pointer;">
                <div class="signal-theme">${sig[L('thema')]}</div>
                <div class="signal-fact">${sig[L('fact')]}</div>
                <div class="signal-source" style="display:flex; justify-content:space-between; align-items:center; margin-top:0.75rem; font-size:0.8rem;">
                  <span>${state.lang === 'DE' ? 'Quelle' : 'Source'}: ${sig.source}</span>
                  <span class="external-link-indicator">↗</span>
                </div>
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

          <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin: 2rem 0 1rem;">${t.sectionATitle}</h3>
          <p class="text-body">${t.sectionAText}</p>

          <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin: 2rem 0 1rem;">${t.sectionBTitle}</h3>
          <p class="text-body">${t.sectionBText}</p>

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
  return `
    <section class="section-wrapper" style="padding-top: 2rem;">
      <div class="container">
        <!-- Hero Stage with Emotional Community Photo -->
        <div style="position: relative; border-radius: var(--radius-lg, 16px); overflow: hidden; margin-bottom: 3.5rem; min-height: 420px; display: flex; align-items: flex-end; box-shadow: 0 20px 40px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.15);">
          <img src="./mitmachen-hero.jpg" alt="Gemeinschaft Aachen ohne Limits" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 35%; filter: brightness(0.85);" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,12,0,0.95) 0%, rgba(10,12,0,0.5) 50%, rgba(0,0,0,0.15) 100%);"></div>
          <div style="position: relative; z-index: 2; padding: 2.5rem; max-width: 820px; color: #fff;">
            <div style="color: var(--brand-accent); font-size: 0.85rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.5rem;">
              GEMEINSAM STARK FÜR AACHEN
            </div>
            <h1 class="headline-3deg" style="font-size: 2.4rem; margin: 0 0 0.75rem; color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.7);">
              ${t.h1}
            </h1>
            <p style="font-size: 1.1rem; line-height: 1.6; color: rgba(255,255,255,0.92); margin: 0; max-width: 700px; text-shadow: 0 1px 5px rgba(0,0,0,0.6);">
              ${de ? 'Aachen ohne Limits lebt von den Menschen, Initiativen und Akteuren der Region. Mach mit und gestalte die Standortkommunikation der Aachen Area aktiv mit!' : 'Aachen without Limits thrives on the people, initiatives, and actors of the region. Join in and shape location communication!'}
            </p>
          </div>
        </div>
        <div class="mitmachen-grid">
          <!-- 1. Wir möchten Mitglied werden (Jump to Gold, Silber, Bronze on same page) -->
          <div class="mitmachen-role">
            <div class="role-icon">⭐</div>
            <div class="role-title">${t.r7Title}</div>
            <p class="role-desc">${t.r7Text}</p>
            <a href="#mitgliedschaft-rechner" class="btn btn-secondary" onclick="document.getElementById('mitgliedschaft-rechner')?.scrollIntoView({behavior:'smooth'})">${t.r7Cta} ↓</a>
          </div>

          <!-- 2. Ich kenne eine Geschichte -->
          <div class="mitmachen-role">
            <div class="role-icon">📖</div>
            <div class="role-title">${t.r1Title}</div>
            <p class="role-desc">${t.r1Text}</p>
            <button class="btn btn-secondary" data-action="submit-story">${t.r1Cta}</button>
          </div>

          <!-- 3. Ich kann einen Kontakt oder Quelle vermitteln (Eigenes Formular) -->
          <div class="mitmachen-role">
            <div class="role-icon">🔗</div>
            <div class="role-title">${t.r2Title}</div>
            <p class="role-desc">${t.r2Text}</p>
            <button class="btn btn-secondary" data-action="submit-contact-source">${t.r2Cta}</button>
          </div>

          <!-- 4. Ich möchte privat unterstützen (PDF Antrag runterladen) -->
          <div class="mitmachen-role">
            <div class="role-icon">💎</div>
            <div class="role-title">${de ? 'Ich möchte privat unterstützen' : 'I want to support privately'}</div>
            <p class="role-desc">${de ? 'Unterstützen Sie die Standortkommunikation der Aachen Area als außerordentliches Mitglied oder Privatperson (1.000 € / Jahr).' : 'Support location communication as an associate member (€1,000 / year).'}</p>
            <a href="./docs/260206_Mitgliedsantrag_Ausserordentlich_PBAeV.pdf" target="_blank" download class="btn btn-secondary">${de ? 'Antrag runterladen 📥' : 'Download Application 📥'}</a>
          </div>

          <!-- 5. Ich möchte Inhalte nutzen (Noch nicht verlinken) -->
          <div class="mitmachen-role">
            <div class="role-icon">📊</div>
            <div class="role-title">${t.r4Title}</div>
            <p class="role-desc">${t.r4Text}</p>
            <span class="btn btn-secondary" style="opacity: 0.6; cursor: default; pointer-events: none;">${de ? 'In Kürze verfügbar' : 'Coming soon'}</span>
          </div>

          <!-- 6. Wir möchten kooperieren (Mailto Vereins-E-Mail) -->
          <div class="mitmachen-role">
            <div class="role-icon">🤝</div>
            <div class="role-title">${t.r5Title}</div>
            <p class="role-desc">${t.r5Text}</p>
            <a href="mailto:verein@aachenohnelimits.de?subject=Kooperationsanfrage%20Aachen%20ohne%20Limits" class="btn btn-secondary">${t.r5Cta} ✉</a>
          </div>
        </div>

        <!-- MITGLIEDSCHAFT & BEITRAGSRECHNER -->
        <div id="mitgliedschaft-rechner" style="margin-top: 5rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <div class="section-header">
            <h2 class="headline-3deg">${tm.h1}</h2>
            
            <div class="direct-answer-card" style="margin-top: 1.5rem; max-width: 850px;">
              <p>${tm.directAnswer}</p>
            </div>

            <div style="margin-top: 2.5rem; max-width: 850px; text-align: left;">
              <h3 style="font-family: var(--font-headline); font-size: 1.2rem; text-transform: uppercase; margin-bottom: 1rem;">${tm.enablesTitle}</h3>
              <ul style="line-height: 1.8; color: var(--text-muted); padding-left: 1.25rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 0.5rem 1.5rem;">
                <li>${tm.e1}</li>
                <li>${tm.e2}</li>
                <li>${tm.e3}</li>
                <li>${tm.e4}</li>
                <li>${tm.e5}</li>
                <li>${tm.e6}</li>
                <li>${tm.e7}</li>
              </ul>
            </div>

            <div style="margin-top: 1.5rem; background: rgba(172,10,192,0.05); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--brand-accent); max-width: 850px; text-align: left; font-size: 0.95rem;">
              ${tm.budgetNote}
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
              <a href="mailto:verein@aachenohnelimits.de" class="btn btn-primary">${tm.btnTalk}</a>
              <button class="btn btn-secondary" data-action="apply-membership">${tm.btnApply}</button>
            </div>

            <p class="text-body" style="margin-top: 2rem; max-width: 700px; font-style: italic;">${tm.leitgedanke}</p>
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
            <img src="./logos/ACoL_RGB_Violett.svg" alt="Logo Violett" style="height: 48px; margin-bottom: 1rem;" />
            <div style="font-weight: 700; font-size: 0.9rem;">Violett (RGB)</div>
          </div>
          <div class="download-card">
            <img src="./logos/ACoL_RGB_Green.svg" alt="Logo Green" style="height: 48px; margin-bottom: 1rem;" />
            <div style="font-weight: 700; font-size: 0.9rem;">Green (RGB)</div>
          </div>
          <div class="download-card" style="background: #000;">
            <img src="./logos/ACoL_RGB_White.svg" alt="Logo White" style="height: 48px; margin-bottom: 1rem;" />
            <div style="font-weight: 700; font-size: 0.9rem; color: #fff;">White (RGB)</div>
          </div>
          <div class="download-card">
            <img src="./logos/ACoL_RGB_Black.svg" alt="Logo Black" style="height: 48px; margin-bottom: 1rem;" />
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

// ─── FOOTER (Desktop.png Modern Card Design) ─────────────────────────────────
function renderFooter() {
  const de = state.lang === 'DE';
  return `
    <footer class="site-footer-modern">
      <div class="container">
        <div class="footer-card-inner">
          <div class="footer-columns-grid">
            <!-- Col 1: Logo -->
            <div class="footer-logo-col">
              <img src="./logos/logo_header_purple.png" alt="Aachen ohne Limits Logo" class="footer-brand-logo" />
            </div>

            <!-- Col 2: Platform -->
            <div class="footer-nav-col">
              <h5>Platform</h5>
              <ul class="footer-link-list">
                <li><a href="#stories" data-page="stories">Platform</a></li>
                <li><a href="#themen" data-page="themen">Solutions</a></li>
                <li><a href="#initiative" data-page="initiative">How it works</a></li>
                <li><a href="#mitmachen" data-page="mitmachen">Pricing</a></li>
              </ul>
            </div>

            <!-- Col 3: Platform (Duplicate Column as shown in Design) -->
            <div class="footer-nav-col">
              <h5>Platform</h5>
              <ul class="footer-link-list">
                <li><a href="#stories" data-page="stories">Platform</a></li>
                <li><a href="#themen" data-page="themen">Solutions</a></li>
                <li><a href="#initiative" data-page="initiative">How it works</a></li>
                <li><a href="#mitmachen" data-page="mitmachen">Pricing</a></li>
              </ul>
            </div>

            <!-- Col 4: Company -->
            <div class="footer-nav-col">
              <h5>Company</h5>
              <ul class="footer-link-list">
                <li><a href="#initiative" data-page="initiative">Company</a></li>
                <li><a href="#initiative" data-page="initiative">About</a></li>
                <li><a href="#initiative" data-page="initiative">Our Mission</a></li>
                <li><a href="#mitmachen" data-page="mitmachen">Careers <span class="badge-hiring">HIRING</span></a></li>
                <li><a href="mailto:verein@aachenohnelimits.de">Contact</a></li>
              </ul>
            </div>

            <!-- Col 5: Resources -->
            <div class="footer-nav-col">
              <h5>Resources</h5>
              <ul class="footer-link-list">
                <li><a href="#news" data-page="news">Resources</a></li>
                <li><a href="#news" data-page="news">Blog</a></li>
                <li><a href="#presse" data-page="presse">Help Center</a></li>
                <li><a href="mailto:verein@aachenohnelimits.de">Support</a></li>
              </ul>
            </div>

            <!-- Col 6: Social Buttons -->
            <div class="footer-social-col">
              <a href="https://facebook.com/aachenohnelimits" target="_blank" rel="noopener" class="btn-social-follow">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                <span>Follow us on Facebook</span>
              </a>
              <a href="https://instagram.com/aachenohnelimits" target="_blank" rel="noopener" class="btn-social-follow">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="#fff" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                <span>Follow us on Instagram</span>
              </a>
              <a href="https://linkedin.com/company/aachen-ohne-limits" target="_blank" rel="noopener" class="btn-social-follow">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                <span>Follow us on LinkedIn</span>
              </a>
            </div>
          </div>

          <!-- Giant Wordmark at Bottom of Card -->
          <div class="footer-giant-wordmark headline-3deg">
            AACHEN OHNE LIMITS
          </div>

          <div class="footer-copyright-line">
            <span>© 2024 Flow. All rights reserved. • Place Branding Aachen e. V.</span>
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
    <div style="max-width: 780px; margin: 0 auto; text-align: left;">
      <!-- Header & Intro -->
      <div style="margin-bottom: 1.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 1.5rem;">
        <span style="color: var(--brand-accent); font-size: 0.8rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase;">ERFOLGSGESCHICHTE TEILEN</span>
        <h2 class="headline-3deg" style="font-size: 2rem; margin: 0.5rem 0 0.75rem;">Was wird durch Aachen möglich?</h2>
        <p class="text-body" style="font-size: 1.02rem; line-height: 1.65; color: var(--text-primary);">
          Wir suchen nicht nur Erfolge, die in Aachen stattfinden. Wir suchen Geschichten, die zeigen, welchen Unterschied Aachen und die Region machen: durch Wissen, Zusammenarbeit, Unternehmergeist, Internationalität, Kultur oder gesellschaftliches Engagement.
        </p>

        <!-- WEICHE / PATH SELECTION -->
        <div style="margin-top: 1.5rem;">
          <label style="display: block; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem; color: var(--brand-accent);">
            Wie möchtest du deine Idee einreichen?
          </label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <button type="button" id="path-btn-full" onclick="window.switchSubmissionPath('full')" style="padding: 1.25rem 1rem; border-radius: var(--radius-md); border: 2px solid var(--brand-accent); background: var(--card-bg); text-align: left; cursor: pointer; transition: all var(--transition-fast);">
              <div style="font-weight: 800; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
                💡 Konkrete Geschichte vorschlagen
              </div>
              <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">
                Ausführlicher 6-Schritte-Leitfaden (~5 bis 10 Min. Dauer)
              </div>
            </button>

            <button type="button" id="path-btn-quick" onclick="window.switchSubmissionPath('quick')" style="padding: 1.25rem 1rem; border-radius: var(--radius-md); border: 2px solid var(--border-color); background: var(--bg-secondary); text-align: left; cursor: pointer; transition: all var(--transition-fast);">
              <div style="font-weight: 800; font-size: 1rem; color: var(--text-primary); margin-bottom: 0.35rem;">
                ⚡ Schnellen Tipp geben
              </div>
              <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">
                Ein einfaches Textfeld & deine Kontaktdaten (~1 Min. Dauer)
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- WEG 1: KONKRETE GESCHICHTE VORSCHLAGEN (FULL 6-STEP FORM) -->
      <div id="submission-path-full">
        <!-- Guideline Box -->
        <div style="background: rgba(172,10,192,0.06); border-left: 4px solid var(--brand-accent); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.6;">
          <strong>💡 Die ideale Aachen-Geschichte:</strong> Sie macht einen konkreten Erfolg sichtbar, zeigt eine überwundene Grenze und erklärt glaubwürdig, warum dieser Erfolg gerade hier gelingen konnte. Stichworte reichen – die redaktionelle Ausarbeitung übernimmt der Verein.
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 1.5rem;">
          <span>⏱️ Dauer: etwa 5 bis 10 Minuten</span>
        </div>

        <form onsubmit="event.preventDefault(); window.handleStorySubmissionSubmit();">

          <!-- STEP 01 -->
          <div class="form-step-block" style="margin-bottom: 2.25rem; padding: 1.75rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
              <span class="step-number" style="width: 36px; height: 36px; border-radius: 50%; background: var(--brand-accent); color: var(--bg-dark); font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">01</span>
              <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin: 0;">Die Geschichte einordnen</h3>
            </div>

            <!-- Question 1.1 -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Themenbereich <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Wähle den Schwerpunkt. Die Geschichte darf mehrere Bereiche verbinden.</p>

              <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="themenbereich" value="Wirtschaft" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Wirtschaft & Unternehmertum (Technologie wird Wirkung)</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="themenbereich" value="Forschung" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Forschung, Hochschule & Innovation (Aus Wissen wird Unternehmen)</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="themenbereich" value="Europa" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Grenzüberschreitende Erfolge (Europa wird Praxis)</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="themenbereich" value="Kultur" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Kultur & Gesellschaft</span>
                </label>
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.25rem;">
                  <input type="text" placeholder="Anderer Bereich..." class="calc-input" style="flex: 1; color: #000; background: #f0f4f8;" />
                </div>
              </div>
            </div>

            <!-- Question 1.2 -->
            <div>
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Wo in der Aachen Area ist die Geschichte verankert? <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Zum Beispiel: Ort, Unternehmen, Hochschule, Institut, Verein, Initiative oder Netzwerk.</p>
              <input type="text" required class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="z. B. Campus Melaten, Fraunhofer ILT, digitalHUB Aachen..." />
            </div>
          </div>

          <!-- STEP 02 -->
          <div class="form-step-block" style="margin-bottom: 2.25rem; padding: 1.75rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
              <span class="step-number" style="width: 36px; height: 36px; border-radius: 50%; background: var(--brand-accent); color: var(--bg-dark); font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">02</span>
              <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin: 0;">Den erzählenswerten Kern finden</h3>
            </div>

            <!-- Question 2.1 -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Welcher Erfolg sollte auch außerhalb Aachens bekannt sein? <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Nenne die Leistung, Idee oder Veränderung in ein bis zwei Sätzen. Was ist daran überraschend, besonders oder zukunftsweisend? Noch keine Werbeüberschrift nötig.</p>
              <textarea required rows="3" class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="Beschreibe den konkreten Kernerfolg..."></textarea>
            </div>

            <!-- Question 2.2 -->
            <div>
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Welche Grenze wurde dabei verschoben? <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Was war vorher schwierig, getrennt, begrenzt oder galt als kaum möglich? Wähle den wichtigsten Punkt und erläutere ihn kurz.</p>

              <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="radio" name="grenze" value="technisch" style="accent-color: var(--brand-accent);" required />
                  <span style="font-size: 0.9rem; font-weight: 600;">Eine technische oder wissenschaftliche Grenze</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="radio" name="grenze" value="wirtschaftlich" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Eine wirtschaftliche oder unternehmerische Grenze</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="radio" name="grenze" value="branchen" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Eine Grenze zwischen Branchen, Disziplinen oder Organisationen</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="radio" name="grenze" value="geografisch" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Eine geografische, sprachliche oder internationale Grenze</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="radio" name="grenze" value="kulturell" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Eine kulturelle oder gesellschaftliche Grenze</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="radio" name="grenze" value="denken" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Eine Grenze im Denken oder im Alltag</span>
                </label>
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <input type="text" placeholder="Etwas anderes..." class="calc-input" style="flex: 1; color: #000; background: #f0f4f8;" />
                </div>
              </div>

              <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.35rem;">Kurz erklärt:</label>
              <textarea rows="2" class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="Erläutere die verschobene Grenze in wenigen Worten..."></textarea>
            </div>
          </div>

          <!-- STEP 03 -->
          <div class="form-step-block" style="margin-bottom: 2.25rem; padding: 1.75rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
              <span class="step-number" style="width: 36px; height: 36px; border-radius: 50%; background: var(--brand-accent); color: var(--bg-dark); font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">03</span>
              <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin: 0;">Den Aachen-Faktor sichtbar machen</h3>
            </div>

            <!-- Question 3.1 -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Welche Stärke der Region hat den Erfolg möglich gemacht? <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld, max. 3)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Wähle höchstens drei Faktoren. Entscheidend ist nicht nur, dass die Geschichte hier spielt, sondern was Aachen konkret beigetragen hat.</p>

              <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="aachenFaktor" onchange="window.handleAachenFaktorLimit(this)" value="Forschung" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Forschung, Wissen oder Ausbildung</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="aachenFaktor" onchange="window.handleAachenFaktorLimit(this)" value="Unternehmertum" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Unternehmertum, Industrie oder Handwerk</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="aachenFaktor" onchange="window.handleAachenFaktorLimit(this)" value="KurzeWege" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Kurze Wege, Netzwerke oder ungewöhnliche Zusammenarbeit</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="aachenFaktor" onchange="window.handleAachenFaktorLimit(this)" value="International" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Internationale oder grenzüberschreitende Perspektiven</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="aachenFaktor" onchange="window.handleAachenFaktorLimit(this)" value="Talente" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Talente, Fachkräfte oder engagierte Persönlichkeiten</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="aachenFaktor" onchange="window.handleAachenFaktorLimit(this)" value="Kulturell" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Kulturelles oder gesellschaftliches Engagement</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="aachenFaktor" onchange="window.handleAachenFaktorLimit(this)" value="Infrastruktur" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Infrastruktur, Institutionen oder besondere Orte</span>
                </label>
                <label class="calc-option-card" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer;">
                  <input type="checkbox" name="aachenFaktor" onchange="window.handleAachenFaktorLimit(this)" value="TraditionZukunft" style="accent-color: var(--brand-accent);" />
                  <span style="font-size: 0.9rem; font-weight: 600;">Die Verbindung von Tradition und Zukunft</span>
                </label>
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <input type="text" placeholder="Etwas anderes..." class="calc-input" style="flex: 1; color: #000; background: #f0f4f8;" />
                </div>
              </div>
            </div>

            <!-- Question 3.2 -->
            <div>
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Warum konnte das gerade hier gelingen? <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Stell dir vor, das Vorhaben wäre an einem anderen Ort gestartet: Was hätte dort gefehlt? Beschreibe möglichst konkret, wie der gewählte Aachen-Faktor den Unterschied gemacht hat.</p>
              <textarea required rows="3" class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="Erkläre den spezifischen Aachen-Beitrag..."></textarea>
            </div>
          </div>

          <!-- STEP 04 -->
          <div class="form-step-block" style="margin-bottom: 2.25rem; padding: 1.75rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
              <span class="step-number" style="width: 36px; height: 36px; border-radius: 50%; background: var(--brand-accent); color: var(--bg-dark); font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">04</span>
              <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin: 0;">Wirkung und Glaubwürdigkeit sichern</h3>
            </div>

            <!-- Question 4.1 -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Was ist dadurch konkret möglich geworden – und für wen? <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Beschreibe die Wirkung: Wer profitiert? Was hat sich verbessert, verändert oder neu eröffnet – in der Region oder darüber hinaus?</p>
              <textarea required rows="3" class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="Beschreibe die konkrete Wirkung..."></textarea>
            </div>

            <!-- Question 4.2 -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Woran lässt sich der Erfolg erkennen? <span style="color: var(--brand-accent); font-size: 0.85rem;">(Empfohlen)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Zum Beispiel: Zahl, Meilenstein, Preis, Patent, Gründung, neue Arbeitsplätze, eingesparte Ressourcen, Reichweite, wissenschaftlicher Durchbruch oder eine konkrete Veränderung im Leben von Menschen.</p>
              <textarea rows="2" class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="Kennzahlen, Fakten, Nachweise..."></textarea>
            </div>

            <!-- Question 4.3 -->
            <div>
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Welche Menschen und Organisationen haben den Erfolg gemeinsam möglich gemacht? <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Nenne alle, die unbedingt erwähnt werden sollten. Besonders interessant sind Verbindungen, die sonst selten zusammenkommen.</p>
              <input type="text" required class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="Beteiligte Köpfe, Unternehmen, Institute..." />
            </div>
          </div>

          <!-- STEP 05 -->
          <div class="form-step-block" style="margin-bottom: 2.25rem; padding: 1.75rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
              <span class="step-number" style="width: 36px; height: 36px; border-radius: 50%; background: var(--brand-accent); color: var(--bg-dark); font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">05</span>
              <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin: 0;">Material</h3>
            </div>

            <!-- Question 5.1 -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Wer oder was gibt der Geschichte ein Gesicht? <span style="color: var(--text-muted); font-size: 0.85rem;">(Optional)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Gibt es eine Person, ein konkretes Beispiel, einen Ort oder einen kurzen Satz, an dem die Geschichte lebendig wird?</p>
              <input type="text" class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="Personen, Zitate, Schlüsselmomente..." />
            </div>

            <!-- Question 5.2 -->
            <div>
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem;">
                Link oder Material <span style="color: var(--text-muted); font-size: 0.85rem;">(Optional)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Website, Artikel, Studie, Video oder Bild. Dateien können im digitalen Formular zusätzlich hochgeladen werden.</p>
              <input type="url" class="calc-input" style="color: #000; background: #f0f4f8; margin-bottom: 0.75rem;" placeholder="https://beispiel-link.de..." />
              <div style="display: flex; flex-direction: column; gap: 0.35rem;">
                <span style="font-size: 0.85rem; font-weight: 600;">Datei-Upload:</span>
                <input type="file" multiple class="calc-input" style="color: var(--text-primary); background: var(--card-bg); padding: 0.5rem;" />
              </div>
            </div>
          </div>

          <!-- STEP 06 -->
          <div class="form-step-block" style="margin-bottom: 2rem; padding: 1.75rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
              <span class="step-number" style="width: 36px; height: 36px; border-radius: 50%; background: var(--brand-accent); color: var(--bg-dark); font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">06</span>
              <h3 style="font-family: var(--font-headline); text-transform: uppercase; font-size: 1.2rem; margin: 0;">Kontakt</h3>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
              <div>
                <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.35rem;">
                  Dein Name <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
                </label>
                <input type="text" required class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="Vor- und Nachname" />
              </div>
              <div>
                <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.35rem;">
                  E-Mail <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
                </label>
                <input type="email" required class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="name@organisation.de" />
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
              <div>
                <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.35rem;">
                  Organisation / Rolle <span style="color: var(--text-muted); font-size: 0.85rem;">(Optional)</span>
                </label>
                <input type="text" class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="z. B. digitalHUB Aachen / Innovation Lead" />
              </div>
              <div>
                <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.35rem;">
                  Telefon <span style="color: var(--text-muted); font-size: 0.85rem;">(Optional)</span>
                </label>
                <input type="tel" class="calc-input" style="color: #000; background: #f0f4f8;" placeholder="+49 241 ..." />
              </div>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <label style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.85rem; color: var(--text-muted); cursor: pointer;">
                <input type="checkbox" required style="margin-top: 0.2rem; flex-shrink: 0; accent-color: var(--brand-accent);" />
                <span>
                  Ja, der Place Branding Aachen e.V. darf mich zu dieser Empfehlung kontaktieren. Eine Veröffentlichung erfolgt erst nach Rücksprache.
                  <br/><em style="display: block; margin-top: 0.35rem;">Hinweis: Mit dem Absenden werden deine Angaben zur Prüfung und Bearbeitung der Empfehlung verarbeitet.</em>
                  <a href="#datenschutz" style="color: var(--brand-accent); text-decoration: underline; display: inline-block; margin-top: 0.25rem;" onclick="alert('Datenschutzhinweis: Sämtliche übermittelten Daten werden ausschließlich zur vertraulichen redaktionellen Prüfung gemäß DSGVO durch den Place Branding Aachen e. V. verwendet.'); return false;">Vollständige Datenschutzerklärung ansehen</a>
                </span>
              </label>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 1rem; font-size: 1.1rem;">
            GESCHICHTE VORSCHLAGEN
          </button>

        </form>
      </div>

      <!-- WEG 2: SCHNELLEN TIPP GEBEN (QUICK FORM) -->
      <div id="submission-path-quick" style="display: none;">
        <div style="background: rgba(172,240,0,0.06); border-left: 4px solid var(--ac-green); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.75rem; font-size: 0.95rem; line-height: 1.6;">
          <strong>⚡ Schneller Tipp:</strong> Du hast einen ersten Hinweis, eine Idee oder möchtest der Redaktion ein spannendes Thema zurufen? Nenne kurz die Kernidee – wir kümmern uns um den Rest.
        </div>

        <form onsubmit="event.preventDefault(); window.handleQuickTipSubmit();">
          <div class="form-step-block" style="padding: 1.75rem; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.75rem;">
            <!-- Field 1: Tipp Textarea -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem; color: var(--text-primary);">
                Dein Tipp / Kurzer Hinweis <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
              </label>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                Welchen Erfolg, welche Entwicklung oder welche Person aus der Aachen Area sollte die Redaktion kennen?
              </p>
              <textarea required rows="4" class="calc-input" style="color: #000; background: #f0f4f8; width: 100%; font-size: 0.95rem; padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-family: var(--font-body);" placeholder="Beschreibe deinen Tipp in wenigen Sätzen..."></textarea>
            </div>

            <!-- Field 2: Link -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: 700; font-size: 0.95rem; margin-bottom: 0.35rem; color: var(--text-primary);">
                Link oder Hinweis auf Quelle <span style="color: var(--text-muted); font-size: 0.85rem;">(Optional)</span>
              </label>
              <input type="url" class="calc-input" style="color: #000; background: #f0f4f8; width: 100%; font-size: 0.95rem; padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);" placeholder="https://beispiel-link.de..." />
            </div>

            <!-- Field 3 & 4: Name & Email -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
              <div>
                <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.35rem; color: var(--text-primary);">
                  Dein Name <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
                </label>
                <input type="text" required class="calc-input" style="color: #000; background: #f0f4f8; width: 100%; font-size: 0.95rem; padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);" placeholder="Vor- und Nachname" />
              </div>
              <div>
                <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.35rem; color: var(--text-primary);">
                  E-Mail <span style="color: #e11d48; font-size: 0.85rem;">* (Pflichtfeld)</span>
                </label>
                <input type="email" required class="calc-input" style="color: #000; background: #f0f4f8; width: 100%; font-size: 0.95rem; padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);" placeholder="name@organisation.de" />
              </div>
            </div>

            <!-- Field 5: Organisation -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 0.35rem; color: var(--text-primary);">
                Organisation / Rolle <span style="color: var(--text-muted); font-size: 0.85rem;">(Optional)</span>
              </label>
              <input type="text" class="calc-input" style="color: #000; background: #f0f4f8; width: 100%; font-size: 0.95rem; padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);" placeholder="z. B. Firma / Funktion" />
            </div>

            <!-- Field 6: Consent -->
            <div>
              <label style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.85rem; color: var(--text-muted); cursor: pointer;">
                <input type="checkbox" required style="margin-top: 0.2rem; flex-shrink: 0; accent-color: var(--brand-accent);" />
                <span>
                  Ja, der Place Branding Aachen e.V. darf mich zu diesem Tipp kontaktieren. Mit dem Absenden werden deine Angaben zur vertraulichen redaktionellen Prüfung verarbeitet.
                </span>
              </label>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 1rem; font-size: 1.1rem;">
            TIPP ABSENDEN
          </button>
        </form>
      </div>
  `);
}

function openContactSourceModal() {
  const de = state.lang === 'DE';
  openModal(`
    <h2 class="headline-3deg" style="font-size:1.8rem;">${de ? 'KONTAKT ODER QUELLE' : 'CONTACT OR SOURCE'} <span class="accent-word">${de ? 'VERMITTELN' : 'CONNECT'}</span></h2>
    <p class="text-body" style="font-size:0.95rem; margin-bottom:1.5rem;">${de ? 'Öffnen Sie unserer Redaktion den Zugang zu Experten, Protagonisten, Kontakten oder wertvollem Material aus der Aachen Area.' : 'Connect our editorial team with experts, protagonists, contacts, or valuable material from the Aachen Area.'}</p>
    <form onsubmit="event.preventDefault(); alert('${de ? 'Vielen Dank! Ihre Kontaktempfehlung ist bei der Redaktion eingegangen. Wir setzen uns zeitnah mit Ihnen in Verbindung.' : 'Thank you! Your contact recommendation has been received.'}'); closeModal();">
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Ihr Name' : 'Your Name'}</label>
        <input type="text" class="calc-input" required style="color:#000; background:#f0f4f8;" placeholder="${de ? 'z. B. Maria Muster' : 'e.g. Jane Doe'}" />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Ihre E-Mail-Adresse' : 'Your Email Address'}</label>
        <input type="email" class="calc-input" required style="color:#000; background:#f0f4f8;" placeholder="name@beispiel.de" />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Welcher Kontakt / welche Quelle wird vermittelt?' : 'Which Contact / Source are you connecting?'}</label>
        <input type="text" class="calc-input" required style="color:#000; background:#f0f4f8;" placeholder="${de ? 'z. B. Prof. Dr. Schmidt (RWTH Aachen) oder Ansprechpartner X' : 'e.g. Prof. Dr. Smith (RWTH Aachen)'}" />
      </div>
      <div style="margin-bottom:1rem;">
        <label class="calc-label" style="color:var(--text-primary);">${de ? 'Kurze Beschreibung & Bezug zur Aachen Area' : 'Brief Description & Connection to Aachen'}</label>
        <textarea class="calc-input" rows="3" required style="color:#000; background:#f0f4f8;" placeholder="${de ? 'Welches Wissen, Thema oder Material kann diese Quelle beisteuern?' : 'What knowledge, topic, or material can this source provide?'}"></textarea>
      </div>
      <div style="margin-bottom:1.5rem;">
        <label style="display:flex; align-items:flex-start; gap:0.75rem; font-size:0.85rem; color:var(--text-muted); cursor:pointer;">
          <input type="checkbox" required style="margin-top:0.2rem; flex-shrink:0;" />
          <span>${de ? 'Ich willige ein, dass meine Angaben zur Kontaktaufnahme durch die Redaktion verarbeitet werden dürfen.' : 'I consent to my data being processed for editorial contact purposes.'}</span>
        </label>
      </div>
      <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">${de ? 'Kontakt / Quelle übermitteln' : 'Submit Contact / Source'}</button>
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

function handleHomeNewsletterSubmit() {
  const de = state.lang === 'DE';
  const container = document.getElementById('home-newsletter-container');
  if (container) {
    container.innerHTML = `
      <div style="padding: 1.5rem; background: rgba(172,240,0,0.1); border: 1px solid var(--brand-accent); border-radius: var(--radius-md); text-align: center; color: #fff; max-width: 550px; margin: 0 auto;">
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--brand-accent);">✓ ${de ? 'Fast geschafft!' : 'Almost done!'}</div>
        <div style="font-size: 0.95rem; margin-top: 0.5rem; color: rgba(255,255,255,0.9);">
          ${de ? 'Vielen Dank für Ihre Anmeldung. Bitte bestätigen Sie Ihre Registrierung in der E-Mail, die wir Ihnen soeben gesendet haben.' : 'Thank you for subscribing. Please confirm your registration in the email we just sent you.'}
        </div>
      </div>
    `;
  }
}

function handleStorySubmissionSubmit() {
  const modalBody = document.getElementById('modal-body');
  if (modalBody) {
    modalBody.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem; max-width: 600px; margin: 0 auto;">
        <div style="font-size: 3.5rem; margin-bottom: 1rem; color: var(--brand-accent);">✓</div>
        <h2 class="headline-3deg" style="font-size: 2rem; color: var(--brand-accent); margin-bottom: 1rem;">DANKE!</h2>
        <p class="text-body" style="font-size: 1.1rem; line-height: 1.7; color: var(--text-primary); margin-bottom: 2rem;">
          Wir prüfen, welches Potenzial in deiner Geschichte steckt, und melden uns bei Rückfragen. Die weitere Ausarbeitung übernimmt der Verein.
        </p>
        <button onclick="closeModal()" class="btn btn-primary" style="padding: 0.85rem 2rem;">Schließen</button>
      </div>
    `;
  }
}

function handleAachenFaktorLimit(el) {
  const checked = document.querySelectorAll('input[name="aachenFaktor"]:checked');
  if (checked.length > 3) {
    el.checked = false;
    alert('Bitte wähle höchstens 3 Aachen-Faktoren aus.');
  }
}

function switchSubmissionPath(path) {
  const fullContainer = document.getElementById('submission-path-full');
  const quickContainer = document.getElementById('submission-path-quick');
  const btnFull = document.getElementById('path-btn-full');
  const btnQuick = document.getElementById('path-btn-quick');

  if (path === 'full') {
    if (fullContainer) fullContainer.style.display = 'block';
    if (quickContainer) quickContainer.style.display = 'none';
    if (btnFull) {
      btnFull.style.borderColor = 'var(--brand-accent)';
      btnFull.style.background = 'var(--card-bg)';
    }
    if (btnQuick) {
      btnQuick.style.borderColor = 'var(--border-color)';
      btnQuick.style.background = 'var(--bg-secondary)';
    }
  } else {
    if (fullContainer) fullContainer.style.display = 'none';
    if (quickContainer) quickContainer.style.display = 'block';
    if (btnQuick) {
      btnQuick.style.borderColor = 'var(--brand-accent)';
      btnQuick.style.background = 'var(--card-bg)';
    }
    if (btnFull) {
      btnFull.style.borderColor = 'var(--border-color)';
      btnFull.style.background = 'var(--bg-secondary)';
    }
  }
}

function handleQuickTipSubmit() {
  const modalBody = document.getElementById('modal-body');
  if (modalBody) {
    modalBody.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem; max-width: 600px; margin: 0 auto;">
        <div style="font-size: 3.5rem; margin-bottom: 1rem; color: var(--brand-accent);">⚡</div>
        <h2 class="headline-3deg" style="font-size: 2rem; color: var(--brand-accent); margin-bottom: 1rem;">VIELEN DANK!</h2>
        <p class="text-body" style="font-size: 1.1rem; line-height: 1.7; color: var(--text-primary); margin-bottom: 2rem;">
          Vielen Dank für deinen Tipp! Die Redaktion prüft deinen Hinweis und setzt sich bei Rückfragen mit dir in Verbindung.
        </p>
        <button onclick="closeModal()" class="btn btn-primary" style="padding: 0.85rem 2rem;">Schließen</button>
      </div>
    `;
  }
}

window.closeModal = closeModal;
window.handleNewsletterSubmit = handleNewsletterSubmit;
window.handleHomeNewsletterSubmit = handleHomeNewsletterSubmit;
window.handleStorySubmissionSubmit = handleStorySubmissionSubmit;
window.handleAachenFaktorLimit = handleAachenFaktorLimit;
window.switchSubmissionPath = switchSubmissionPath;
window.handleQuickTipSubmit = handleQuickTipSubmit;
