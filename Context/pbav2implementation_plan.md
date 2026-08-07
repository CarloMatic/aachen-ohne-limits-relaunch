# Implementierungsplan: Relaunch Website Place Branding Aachen e.V. (`www.aachenohnelimits.de`)

Implementierungsplan und meilensteinbasierte Roadmap für den Relaunch der Vereinswebsite. Das Konzept basiert auf dem geschärften Briefing ([website_briefing.md](file:///Users/carlomatic/.gemini/antigravity/brain/51e3b1f9-a3ae-4317-97c2-4c9a7cd38cab/website_briefing.md)) und wurde mit den spezialisierten *Resonance-Rollen* (GTM Thinker, Conversion Rate Engineer, SEO Specialist, Frontend Architect und QA Auditor) auditiert und optimiert.

---

## Confirmations & Decisions (Vom Auftraggeber bestätigt)

> [!NOTE]
> **1. Mitgliedschaftsmodelle & Link-Policy (Bestätigt):**
> * **Gold-Mitglieder:** Erhalten ein eigenes Unternehmensprofil (`/mitglieder/[slug]`), verknüpfte Stories und einen externen **Dofollow-Backlink** zur eigenen Website.
> * **Standard-Mitglieder:** Werden im Logo-Grid geführt und erhalten einen externen Link mit `rel="nofollow"`.

> [!NOTE]
> **2. Hosting & Infrastruktur (Bestätigt):**
> * Das WordPress-Hosting (PHP 8.2+, HTTP/2, SSL, Serverseitiges Caching) ist geklärt und bereitgestellt.

> [!NOTE]
> **3. Newsletter-System (Bestätigt):**
> * Die Anbindung der Newsletter-Anmeldung erfolgt an **Brevo** via API / Bricks Forms Integration mit gesetzlich vorgeschriebenem Double Opt-In (DOI) und Captcha-Schutz (Turnstile).

---

## Technical Layout Guardrails

> [!WARNING]
> **Typografische 3°-Neigung auf Mobilgeräten:**
> Die Headlines werden gemäß Styleguide in `Ufficio Display 800` Versalien im **3°-Winkel** gesetzt. Auf Mobilgeräten wird dies durch technische Container-Kapselung (`overflow: hidden;`) isoliert, um ungewolltes horizontales Wischen (Overflow-X) zu verhindern. Fließtexte bleiben stets aufrecht ($0^\circ$), um Lesbarkeit und Accessibility zu sichern.

---

## Proposed Changes & Phasen-Roadmap

Die Umsetzung gliedert sich in **4 Hauptphasen**, von der System-Einrichtung über die Builder-Architektur bis hin zur SEO-/GEO-Optimierung und der Qualitätsprüfung.

---

### Phase 1: WordPress & Bricks Design-System Setup

Grundlage ist das Aufsetzen von WordPress mit Bricks Builder sowie das Einrichten des verbindlichen Corporate Designs (*Brand Basics Guidelines 06-2026*).

#### [NEW] [website_briefing.md](file:///Users/carlomatic/.gemini/antigravity/brain/51e3b1f9-a3ae-4317-97c2-4c9a7cd38cab/website_briefing.md)
* Vollständiges Website-Briefing und strategischer Rahmen.

#### [NEW] `theme-settings.json` (Bricks Global Design Tokens)
* **Farben:**
  * Primary Light: `#AC0AC0` (AC Purple), `#0A0C00` (AC Black)
  * Primary Dark: `#ACF000` (AC Green), `#FFFFFF` (AC White)
  * Secondary: `#6AB0CA` (AC Blue), `#FACE00` (AC Yellow)
* **Schriften:**
  * WOFF2 Local Hosting für `Ufficio Display` (Headlines) & `Switzer` (Sublines & Bodytext).
* **Breakpoints & Logo-Switch:**
  * Einrichten der umschaltbaren Logo-Klassen (Regular mit Subline $\rightarrow$ XS ohne Subline unter $150\,\text{px}$).

---

### Phase 2: Informationsarchitektur & Custom Post Types (CPTs)

Einrichten der Datenstrukturen zur Entkopplung der Redaktionsarbeit vom Page Builder.

#### [NEW] Custom Post Type: `Story` (`/stories/`)
* **Custom Fields (ACF Pro):** Story-Titel, Untertitel, Protagonist, Unternehmen, Zitat, Hero-Bild, Galerie, Verknüpftes Mitglied.
* **Taxonomie:** Innovation, Forschung, Unternehmertum, Gesellschaft.

#### [NEW] Custom Post Type: `News` (`/news/`)
* **Custom Fields:** Pressemitteilung PDF-Download, Ansprechpartner, Pressekontakt-Box.
* **Taxonomie:** Pressemitteilung, Vereinsleben, Events, Place Branding.

#### [NEW] Custom Post Type / User Field: `Mitglied` (`/mitglieder/`)
* Differenzierung zwischen Standard- (Logo + NoFollow Link) und Gold-Mitgliedern (Profile + Dofollow Link + Zitate).

#### [NEW] Brevo Newsletter Integration
* Bricks Forms Integration mit Brevo API, Double Opt-In Bestätigungs-Workflow und Cloudflare Turnstile Spam-Schutz.

---

### Phase 3: Seitenaufbau in Bricks Builder (Templates & Conversion Funnel)

Aufbau aller Einzelseiten und zentraler Hubs unter Einhaltung der LIFT- und CRO-Kriterien.

#### [NEW] Single & Archive Templates
* **Startseite (`/`):** Hero (3°-Tilt Versalien), Mission, Ansatz, Featured Stories, Mitglieder-Wall, News-Teaser, Direct Lead CTA.
* **Mitmachen (`/mitmachen/`):** Primary B2B Conversion Hub mit Vorteil-Matrix, 3-Schritte-Beitrittsablauf, Downloads (Satzung, Beitragsordnung, Member-Badge Kit).
* **Initiative (`/initiative/`):** Vision, Vorstand (Stefan Kiefer), Beirat, Transparenz.
* **Warum Aachen (`/warum-aachen/`):** Standortvorteile & Notwendigkeit kollektiver Sichtbarkeit.
* **Stories Hub & Single (`/stories/` & `/stories/[slug]`):** Multimediale Erfolgsgeschichten.
* **Mitglieder Hub & Profile (`/mitglieder/` & `/mitglieder/[slug]`):** Social Proof & Gold-Profilseiten.
* **News Hub & Single (`/news/` & `/news/[slug]`):** Pressebereich & Downloads.
* **Kontakt (`/kontakt/`):** Ansprechpartner & barrierefreies Kontaktformular.

---

### Phase 4: SEO, GEO, DSGVO & Quality Assurance (Resonance Audit)

Feinschliff für maximale Auffindbarkeit in klassischen und KI-Suchmaschinen (Perplexity, Google AI Overviews) sowie Einhaltung der DACH-Compliance.

#### [NEW] Structured Data Module (JSON-LD)
* Ausgabe von `NGO` / `Organization` für den Verein, `Article` für Stories/News und `ProfilePage` für Gold-Mitglieder.

#### [NEW] Direct-Answer & GEO-Paragraphs
* Integration von 2-3-sätzigen prägnanten Absätzen am Kopf aller Hauptseiten für direkte KI-Zitate.

#### [NEW] Privacy & Compliance Setup
* Integration des Cookie-Banners (Complianz / Borlabs), Anonymisiertes Tracking (Matomo/Plausible), statische Social-Media-Links.

---

## Verification Plan

### Automated Tests & Quality Checks
* **Core Web Vitals Performance Audit:**
  * Ausführung via PageSpeed Insights / Lighthouse CLI: `npx lighthouse-ci collect --url=https://aachenohnelimits.de`
  * **Zielwerte:** LCP < 1,5s, INP < 100ms, CLS = 0, Performance Score > 90.
* **Accessibility & Contrast Check (a11y):**
  * Barrierefreiheits-Prüfung aller 3°-tilted Headlines und Farbkombinationen (#AC0AC0 auf Weiß, #ACF000 auf Schwarz).
* **SEO & Structured Data Verification:**
  * Test der Schema.org JSON-LD Tags mit dem *Google Rich Results Test Tool*.

### Manual Verification
* **Conversion-Funnel Test (DACH-Markt):**
  * Durchspielen des Beitrittsablaufs auf der "Mitmachen"-Seite auf Desktop, Tablet und Smartphone (iOS/Android).
* **Brevo Double Opt-In Flow:**
  * Verifizierung des Brevo-Anmeldeflows inklusive Bestätigungs-E-Mail und DSGVO-Opt-In-Protokollierung.
* **Responsiver Logo-Switch:**
  * Überprüfen des nahtlosen Wechsels vom Regular-Logo (mit Unterzeile) zum XS-Logo (ohne Unterzeile) unter $150\,\text{px}$ Breite.
* **Redaktions-Workflow Simulation:**
  * Einpflegen einer Test-Story über den Gutenberg-Editor mit ACF-Feldern ohne Zugriff auf Bricks Builder, um die 100%ige Design-Treue zu verifizieren.
