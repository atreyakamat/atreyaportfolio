atreyakamat.dev --- Full Product Requirements Document
Document: PRD.md  
Product: atreyakamat.dev  
Product Type: Personal developer profile + portfolio + professional
identity hub  
Status: Product definition / source of truth  
Primary Positioning: BUILD + PERSONAL  
Design Direction: Clean white + turquoise, photographic, editorial,
premium, simple  
Version: 2.0
---
1. Executive Summary
`atreyakamat.dev` is the primary digital identity and developer
portfolio for Atreya Kamat.
It is deliberately not the website that tries to sell every
professional direction Atreya operates in. The root domain is focused on
the intersection of:
Atreya as a person
professional software engineering
product development
selected technical work
projects and demos
professional experience
technical capabilities
credibility and contact
The root domain should feel like a high-quality, modern personal profile
first and a developer portfolio second.
It must answer four questions quickly:
Who is Atreya?
What does he build?
Is he credible?
Where can I see the proof?
The deeper personal ecosystem remains available, but is intentionally
moved toward the end of the experience:
BUILD + PERSONAL → `atreyakamat.dev`
CREATE → future creative/freelance destination
TEACH → future tutoring/education destination
SPEAK → future speaking destination
EXPERIMENT → future AI/lab destination
The homepage should never become an index of five businesses. It is
primarily Atreya's developer and professional home.
---
2. Product Vision
Build the kind of personal website that can be sent confidently to:
a recruiter
engineering manager
CTO
startup founder
potential technical client
collaborator
hackathon/community contact
someone who discovers Atreya through GitHub or LinkedIn
and have that visitor understand the profile without needing context.
The website should communicate:
> Here is who I am, what I have built, where I have worked, what I can
> do, and the evidence behind it.
It should show evidence rather than make claims.
---
3. Product Principles
3.1 Person First
The visitor meets Atreya before seeing technologies.
A real portrait is a core asset, not decoration.
3.2 Proof Over Claims
Instead of:
> Experienced with React, TypeScript and Docker.
Prefer:
> A project demonstrating the actual product, its interface, decisions,
> deployment and outcome.
3.3 Projects Are Products
Projects are not small portfolio cards.
Every meaningful project can have its own detailed `/projects/:slug`
page containing:
product overview
demo
screenshots
video
problem
solution
contribution
key decisions
technical implementation
outcome
links
3.4 Progressive Disclosure
Homepage = fast understanding.
Project page = deeper evidence.
Experience page = professional depth.
Skills page = technical breadth.
Resume = formal summary.
External profiles = further verification.
3.5 Premium, Not Complicated
Visual quality comes from:
typography
photography
composition
excellent spacing
strong imagery
polished microinteraction
tasteful motion
It must not come from making the interface difficult to use.
3.6 Motion Supports Content
Animation can increase delight and perceived quality, but the page must
remain understandable when all animation is removed.
3.7 The Root Domain Has One Identity
`atreyakamat.dev` represents:
> Atreya Kamat --- Developer, Product Builder, and Person.
Creative freelancing, teaching, speaking and experimentation are part of
the broader identity but do not compete with this primary positioning
above the fold.
---
4. Primary Product Goals
G1 --- Establish Identity
Within five seconds, visitors should know:
Atreya's name
face
primary professional direction
broad value proposition
G2 --- Establish Developer Credibility
Within thirty seconds, visitors should encounter strong project proof.
G3 --- Make Projects Discoverable
Projects must be first-class content with:
homepage highlights
dedicated project index
dedicated project detail routes
video/demo capability
filters/tags if the collection grows
G4 --- Support Recruitment
A recruiter should easily find:
experience
skills
projects
resume
LinkedIn
GitHub
contact information
G5 --- Support Freelance Technical Leads
A founder/client should quickly see:
quality of work
product understanding
ability to ship
project demos
contact path
G6 --- Create a Maintainable Personal Platform
Projects, skills and experience must be data-driven so the website can
evolve as Atreya's profile evolves.
---
5. Non-Goals
The root website is not:
a SaaS application
an engineering dashboard
a terminal-themed portfolio
an interactive operating system
a WebGL demo
a creative agency website
a tutoring sales funnel
a speaking booking platform
a blog-first website
an AI chatbot
a personal social network
Do not add features simply because a component library makes them
possible.
---
6. Target Audiences
6.1 Recruiter / Talent Partner
Primary questions:
What does he do?
Where has he worked?
What technologies does he actually use?
What has he shipped?
Where is the resume?
Ideal journey:
`Home → Featured Projects → Experience → Skills → Resume`
6.2 Engineering Manager / CTO
Primary questions:
How does he build?
How substantial are the projects?
What parts did he own?
Does he understand systems beyond UI?
Can I inspect the implementation?
Ideal journey:
`Home → Project → Demo/Architecture/Decisions → GitHub → Experience`
6.3 Founder / Technical Client
Primary questions:
Can this person turn an idea into a working product?
Is the work polished?
Does he understand the product, not just the code?
Can I contact him?
Ideal journey:
`Home → Featured Work → Project Demo → Contact`
6.4 Developer / Collaborator
Primary questions:
What is he building?
What tools does he use?
Is the work open source?
What experiments/projects are interesting?
Ideal journey:
`Projects → Project Detail → GitHub → Skills`
6.5 General Visitor
Primary questions:
Who is this?
What does he do?
What is interesting about him?
Ideal journey:
`Home → About → Selected Work`
---
7. Information Architecture
Primary Navigation
Home
Projects
Experience
Skills
About
Resume
Contact
Desktop navigation should remain visible and simple.
Mobile navigation may collapse into a compact menu.
Route Map
``` text
/
├── /projects
│   └── /projects/:slug
├── /experience
├── /skills
├── /about
├── /resume
└── /contact (optional route; homepage contact section remains canonical)
```
Future routes may include:
``` text
/now
/uses
/notes
```
These are not V1 requirements.
---
8. Homepage Requirements
8.1 Header
Content
Left: - Atreya Kamat wordmark/name
Right: - Projects - Experience - Skills - About - Resume - Contact
Behaviour
transparent/minimal initially
subtle solid background after scroll if needed
keyboard accessible
active route indication
responsive menu
no oversized navigation animation
Optional Premium Detail
Use a subtle Fancy Components letter-swap/underline interaction on
navigation labels.
The interaction must not reduce readability.
---
9. Hero
The hero is the primary identity moment.
Required Content
Atreya's portrait
name
concise developer positioning
short human introduction
location
primary CTA to Projects
secondary CTA to Resume or Contact
GitHub/LinkedIn available without visual clutter
Recommended Copy Direction
The exact copy remains editable, but the structure should resemble:
> Hi, I'm Atreya.
> I build software and products that make useful ideas real.
Supporting line can communicate product thinking, engineering and
curiosity without listing technologies.
Portrait
Use the clean portrait treatment already created:
isolated subject
white environment
turquoise atmospheric glow
subtle lower fade
natural photographic appearance
The portrait should feel integrated into the composition rather than
placed inside a generic card.
Hero Motion
Allowed:
soft blur-fade entrance
subtle portrait parallax
slow turquoise atmospheric gradient movement
lightweight text emphasis
Avoid:
3D abstract objects
particles
typewriter paragraphs
rotating job titles every second
complex scroll choreography
Candidate Components
Magic UI: - Blur Fade - Text Highlighter, selectively - Progressive Blur
where visually justified
Fancy Components: - Variable Font Hover / Text Cursor Proximity only for
tiny signature details - Animated Gradient background adapted to
turquoise palette
---
10. Immediate Credibility Strip
Directly after the hero, show a compact credibility layer.
Possible content:
current professional role/company
number of selected shipped projects, only if accurate
location
availability status, if useful
GitHub
LinkedIn
Resume
This should not resemble KPI cards.
Prefer a clean editorial line or small horizontally flowing metadata.
---
11. Featured Projects
This is the homepage's most important proof section.
Heading
`Selected Projects`
or
`Things I've Built`
Avoid overly clever naming.
Project Source
Projects displayed on the homepage must come from the central project
dataset.
Each project has:
``` ts
featured: boolean
featuredOrder: number
```
This allows Atreya to pin/unpin projects without changing layout code.
The homepage should display approximately 4--6 pinned projects.
Project Card Requirements
Each featured project should contain:
strong visual
project name
short outcome/value sentence
category
year
optional status
link to `/projects/:slug`
Do not show a wall of technology pills.
Technology may appear on hover/detail or on the project page.
Layout
Editorial rather than uniform.
Examples:
one large flagship project
two medium projects
one wide project
alternating image ratios
Avoid six identical cards in a 3×2 grid.
Interaction
Possible premium interactions:
Fancy Components: - Parallax Floating - Media Between Text - Stacking
Cards - Image Trail, only if extremely restrained
Magic UI: - Lens for project screenshots - Magic Card only where the
effect is subtle - Blur Fade for entrance - Hero Video Dialog for
projects with demo video
The component must be customised to the portfolio design system.
Never paste library defaults unchanged.
---
12. `/projects` --- Project Library
`/projects` is the canonical index of Atreya's project work.
This page is significantly more comprehensive than the homepage.
Purpose
show breadth
allow recruiters to browse
provide permanent URLs
expose demos
document work over time
become a growing proof archive
Header
Title:
`Projects`
Supporting copy:
One concise sentence about building products, tools and systems.
Project Collection
Display all public portfolio projects.
Support:
Featured
All
Product
Web
AI/Data
Systems/Tools
Experimental
Exact categories should be based on actual portfolio content.
Do not create empty categories.
Search
Search is optional for V1.
Add only when project count justifies it.
Sorting
Default:
Pinned/featured first → newest → older.
Project Item
Each item includes:
title
thumbnail/cover
one-line summary
category
year
status
demo availability
repository availability
Featured/Pinned Behaviour
The central dataset controls pinning.
Example:
``` ts
{
  slug: "pulsewatch",
  featured: true,
  featuredOrder: 1
}
```
This same source drives homepage and `/projects`.
---
13. `/projects/:slug` --- Project Detail / Demo Page
This is one of the major differentiators of the portfolio.
Every substantial project should eventually receive a polished project
page.
The page is not a generic case-study template filled with text.
It is a product demonstration plus concise technical documentation.
13.1 Project Hero
Required:
project name
one-sentence product description
role
year
status
hero media
demo CTA if available
repository CTA if public
Optional:
live URL
collaborators/team
duration
13.2 Demo
Preferred order:
Interactive live demo when safe and feasible
Embedded demo video
High-quality recorded walkthrough
Screenshot sequence
Every pinned flagship project should ideally have a 30--120 second demo
video.
Videos should demonstrate:
the problem
core workflow
strongest feature
final result
Do not create long narrated product tours by default.
Video UX
Use a polished modal/lightbox.
Magic UI `Hero Video Dialog` is a strong candidate for this pattern.
Video requirements:
poster image
captions where narration exists
no autoplay audio
lazy-loaded
mobile compatible
13.3 Problem
Maximum 1--3 concise paragraphs.
Explain the actual problem the product addresses.
13.4 What I Built
Explain Atreya's contribution.
Be explicit about:
ownership
product/design work
frontend
backend
infrastructure
AI/data work
collaboration
Do not imply sole ownership when work was collaborative.
13.5 Product Walkthrough
Use real screenshots and short annotations.
Potential pattern:
`01 → 02 → 03 → 04`
Each stage shows one meaningful user flow.
13.6 Key Decisions
Show 2--5 meaningful decisions.
Format:
Decision  
What was chosen.
Why  
Why it made sense under the constraints.
Trade-off  
What was sacrificed.
This demonstrates thinking better than technology badges.
13.7 Technical Architecture
Technical information belongs here rather than dominating the homepage.
Include when relevant:
architecture diagram
data flow
deployment model
API structure
database decisions
security model
AI pipeline
Architecture must reflect the real project.
Never create decorative fake architecture.
13.8 Technology
A concise stack section is appropriate here.
Group by:
Frontend
Backend
Data
Infrastructure
Tools
Only list technologies actually used.
13.9 Outcome
Use verified outcomes.
Examples:
deployed to production
number of users
process reduction
latency improvement
automation achieved
operational use
competition result
client adoption
Never invent metrics for visual impact.
13.10 Learnings
2--5 concise insights.
Focus on what changed in Atreya's thinking.
13.11 Project Navigation
Bottom:
`Previous Project` `All Projects` `Next Project`
Optionally surface one related project.
---
14. Project Content Model
``` ts
interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;

  category: ProjectCategory;
  tags: string[];

  year: string;
  status: "shipped" | "active" | "prototype" | "archived";

  role: string[];
  team?: TeamMember[];

  featured: boolean;
  featuredOrder?: number;

  cover: MediaAsset;
  gallery: MediaAsset[];

  demo?: {
    type: "live" | "video" | "interactive";
    url?: string;
    videoSrc?: string;
    poster?: string;
  };

  links?: {
    live?: string;
    github?: string;
    documentation?: string;
  };

  problem?: RichContent;
  contribution?: RichContent;
  walkthrough?: WalkthroughStep[];
  decisions?: ProjectDecision[];
  architecture?: ArchitectureAsset;
  stack?: StackGroup[];
  outcomes?: Outcome[];
  learnings?: string[];
}
```
---
15. Initial Project Strategy
Do not hard-code the PRD around a fixed project list.
The repository should contain a central `projects` data source.
At launch:
Import/define the projects currently considered portfolio-worthy.
Mark the strongest projects as `featured`.
Homepage renders only `featured`.
`/projects` renders all public projects.
Each public project receives `/projects/:slug`.
Flagships receive demos first.
Less-developed projects may initially have simpler detail pages.
Known candidates from the existing portfolio can be evaluated for
launch, including projects such as PulseWatch and Vistara BI, but the
actual pinned set must come from the current portfolio data rather than
assumptions.
---
16. `/experience` --- Professional Experience
This page is the canonical detailed employment/professional history.
The homepage contains only a preview.
Purpose
Give recruiters and professional visitors a fast, credible history
without forcing them to open the resume PDF.
Page Structure
Intro
`Experience`
One short positioning sentence.
Current Role
Visually prioritised.
Include:
company
role
employment type if relevant
dates
location/remote
2--4 high-value outcomes
relevant projects/areas
Previous Experience
Chronological.
Each role contains:
company
title
dates
concise context
meaningful contributions
selected technologies only where relevant
related project links where public
Other Professional Work
Can include legitimate internships, contract work, leadership or
technical engagements where relevant.
Do not mix every extracurricular activity into employment history.
Resume CTA
End with:
`View / Download Resume`
---
17. `/skills` --- Skills & Capabilities
The Skills page exists for recruiters and technical evaluators who
specifically want this information.
It should not be a logo wall.
Principle
Skills need context.
Instead of:
`React — 90%`
Use:
`React` Used for: Project A, Project B, Project C.
Categories
Adapt to actual profile.
Suggested:
Languages
Frontend
Backend
Databases
Cloud / Infrastructure
AI & Automation
Product / Design Tools
Developer Tools
Skill Model
``` ts
interface Skill {
  name: string;
  category: SkillCategory;
  level?: "working" | "strong" | "advanced";
  years?: number;
  projectSlugs?: string[];
  experienceIds?: string[];
  featured?: boolean;
}
```
Do not use arbitrary percentage bars.
Evidence Linking
Skills should link back to proof.
Example:
`PostgreSQL` → used in PulseWatch → used in professional experience X
This makes `/skills` useful rather than decorative.
---
18. `/about`
The About page provides the human context that does not belong in
project pages.
Include
strong portrait/candid photography
concise personal introduction
engineering/product perspective
curiosity
entrepreneurship
selected personal interests
community involvement
current direction
It may mention broader dimensions of Atreya's life/work naturally, but
should not turn into separate sales funnels.
Keep it human.
---
19. Founder / Stix N Vibes Positioning
Stix N Vibes is part of Atreya's background and demonstrates
entrepreneurship, product ownership, design and execution.
However:
it does not need to become a primary homepage identity label
the homepage does not need a large "Founder" badge
it should not distract from developer positioning
It may appear where contextually useful:
About
selected work, if relevant
experience/entrepreneurship subsection
future CREATE ecosystem
The product should never hide legitimate experience, but hierarchy
matters.
---
20. Broader Ecosystem
The broader identity architecture moves near the end of the homepage.
Section concept:
`More of what I do`
or:
`Other sides of my work`
Destinations:
CREATE
Creative/freelance work
TEACH
Tutoring/education
SPEAK
Talks/workshops
EXPERIMENT
AI tools, prototypes and exploratory work
The BUILD identity is not shown as an external destination because the
visitor is already inside it.
`atreyakamat.dev` itself is BUILD + PERSONAL.
These ecosystem destinations may initially be disabled or marked
appropriately until launched.
Never ship dead links.
---
21. Homepage Experience Preview
Homepage should include a compact professional experience preview.
Show approximately:
current role
1--2 previous relevant roles
CTA:
`View full experience →`
Links to `/experience`.
---
22. Homepage Skills Preview
Do not create a giant skills section.
Instead show a concise line such as:
`Working across frontend, backend, data, infrastructure and AI.`
Then show approximately 8--12 selected skills or capability labels.
CTA:
`Explore skills →`
Links to `/skills`.
---
23. Resume
Resume is a high-priority conversion asset.
Requirements:
visible navigation link
view in browser
download PDF
analytics event
correct filename
kept current
The website and resume should tell a consistent story.
---
24. Contact
Primary goal: remove friction.
Include:
email
LinkedIn
GitHub
Other platforms only if professionally useful.
Contact form is not required for V1.
Suggested closing direction:
> Have something interesting in mind?
> Let's talk.
Keep it human.
---
25. Fancy Components Integration
Fancy Components should be treated as an interaction toolkit, not the
design system.
Fancy Components is built around React, TypeScript, Tailwind and Motion,
making it compatible with the intended implementation.
Approved candidate patterns:
Navigation
Letter Swap Hover
Underline Animation
Hero
Animated Gradient With SVG
subtle Variable Font interaction
Project Presentation
Media Between Text
Parallax Floating
Stacking Cards
Box Carousel
Editorial Details
Text Highlighter
Scroll And Swap
Simple Marquee
Experimental Microinteractions
Elastic Line
Cursor Attractor
Rules
maximum 1--2 visually obvious Fancy Components effects per viewport
customise colours, spacing, motion and typography
never copy library demos verbatim
mobile fallback required
reduced-motion fallback required
remove an effect if it competes with content
---
26. Magic UI Integration
Magic UI should provide polished motion primitives and presentation
components.
Approved candidate usage:
Hero
Blur Fade
Progressive Blur
subtle Text Highlighter
Project Demo
Hero Video Dialog
Project Grid
Lens
Magic Card, selectively
Metadata / Social Proof
Marquee only when meaningful
Background
Noise Texture
extremely subtle gradient/grid only if consistent with DESIGN.md
Motion
Text Reveal / Text Animate only for short headings
Explicitly Avoid by Default
Terminal
Retro Grid
heavy particles
Globe
Orbiting Circles
Icon Cloud
Meteors
excessive shiny/rainbow buttons
These conflict with the simple human/product direction unless a future
page has a strong content reason.
---
27. Component Selection Rule
For every third-party component ask:
Does it make the content easier or more enjoyable to understand?
Does it fit the white/turquoise identity?
Would the page still feel premium without it?
Does it remain usable on touch devices?
Does it respect reduced motion?
Is the performance cost justified?
If the answer is weak, do not use it.
---
28. Visual Direction
Primary Palette
White / warm white: `#FFFFFF`, `#F8FBFA`
Ink: `#111514`
Primary turquoise: `#18CDBB`
Deep turquoise: `#079C91`
Soft turquoise: `#8CF3E8`
Mist: `#DFFFFB`
Character
bright
clean
premium
human
modern
slightly playful
photographic
Avoid
dark developer-template aesthetic
neon cyberpunk
engineering grids
fake telemetry
excessive glass
generic SaaS gradients
3D for 3D's sake
---
29. Page Motion System
Motion hierarchy:
Level 0 --- Static
Body copy, experience details, skill evidence.
Level 1 --- Micro
Links, buttons, navigation, tags.
Level 2 --- Reveal
Hero, section headings, project media.
Level 3 --- Feature
Project demo opening, flagship project interaction.
Only one Level 3 interaction should compete for attention at a time.
---
30. Responsive Requirements
Desktop
Editorial layouts may be asymmetrical.
Tablet
Preserve hierarchy while simplifying composition.
Mobile
Mobile is a first-class product.
Requirements:
portrait remains prominent
project media remains large
project filters are touch friendly
no hover-only information
videos fit viewport
navigation is accessible
fancy effects degrade gracefully
page remains fast on mobile networks
---
31. Accessibility
Minimum requirements:
semantic landmarks
visible focus states
keyboard navigation
alt text
accessible video controls
captions for spoken demo videos
minimum contrast compliance
no essential information conveyed only through colour
reduced-motion support
touch targets ≥ 44px
descriptive external links
Target WCAG 2.2 AA.
---
32. SEO
Root
Optimise for:
Atreya Kamat
developer portfolio
software engineer
product developer
relevant location/professional descriptors
Do not keyword-stuff.
Project Pages
Each project receives:
unique title
description
Open Graph image
canonical URL
structured metadata where appropriate
Project pages should be independently shareable.
Experience / Skills
Indexable and semantic.
Structured Data
Use where valid:
Person
WebSite
ProfilePage
CreativeWork / SoftwareApplication for applicable projects
---
33. Social Sharing
Every major route should have deliberate Open Graph presentation.
Required:
homepage OG
projects index OG
individual project OG
experience OG
skills OG
Project OG images should visually identify the project rather than reuse
the generic homepage card.
---
34. Analytics
Track meaningful intent only.
Events:
`project_open`
`project_demo_play`
`project_live_open`
`project_github_open`
`projects_view_all`
`experience_view`
`skills_view`
`resume_view`
`resume_download`
`linkedin_open`
`github_open`
`email_click`
`ecosystem_create`
`ecosystem_teach`
`ecosystem_speak`
`ecosystem_experiment`
No invasive fingerprinting.
---
35. Content Administration
V1 should remain code/data driven.
Recommended:
``` text
src/content/
  projects/
  experience/
  skills/
  profile/
```
or typed TS/MDX depending on final architecture.
The system must make these operations easy:
pin a project
unpin a project
add project
add demo video
update current role
add skill
connect skill to project
update resume
enable future ecosystem link
A CMS is not required initially.
---
36. Project Media Requirements
Each flagship project should aim to have:
1 high-quality cover image
3--8 screenshots
1 demo video
optional architecture diagram
optional mobile/device mockup
project OG image
Media must be compressed and responsive.
Avoid embedding huge raw recordings.
---
37. Demo Video Production Standard
Recommended length:
30--120 seconds.
Structure:
Product/problem context
Core interaction
strongest capability
outcome
Video should not need sound to make basic sense.
Provide:
poster
captions where applicable
controls
preload strategy
mobile fallback
---
38. Performance Requirements
Targets:
Lighthouse Performance ≥ 95 where practical
Accessibility ≥ 95
Best Practices ≥ 95
SEO ≥ 95
Core Web Vitals should pass on representative mobile conditions.
Strategies:
route-level code splitting
lazy project media
responsive images
AVIF/WebP
defer video
preload only critical hero media
avoid unnecessary animation runtime
tree-shake icons
keep third-party scripts minimal
Fancy Components and Magic UI are not permission to increase bundle size
without review.
---
39. Error States
Required:
404
Human, minimal, route back home/projects.
Missing Project
Never crash when a slug is invalid.
Missing Demo
Hide demo CTA rather than showing disabled/broken media.
Disabled Ecosystem
Do not link until destination exists.
Failed Image
Provide graceful fallback.
---
40. Project Status
Supported:
Shipped
Active
Prototype
Archived
Status should be factual.
Do not label unfinished experiments as production products.
---
41. Trust & Accuracy
The website must not contain:
fake uptime
fake users
fake performance metrics
invented client logos
inflated responsibilities
invented testimonials
misleading project ownership
Where a metric is shown, it must be supportable.
---
42. V1 Release Scope
Pages
`/`
`/projects`
`/projects/:slug`
`/experience`
`/skills`
`/about`
`/resume`
Homepage
header
portrait hero
credibility layer
selected projects
experience preview
skills preview
short about
broader ecosystem near end
contact
Projects
central project dataset
pinning
all-project index
project details
media gallery
video support
project links
project metadata
Professional
experience page
skills page
resume
Platform
SEO
analytics
accessibility
responsive
performance optimisation
404
---
43. V1.1 / Follow-Up
Potential:
project filters/search
richer project diagrams
`/now`
`/uses`
notes/articles
project MDX authoring
automatic GitHub metadata where genuinely useful
richer video hosting
LinkedIn content alignment
Do not delay V1 for these.
---
44. Future Personal Ecosystem
The long-term brand can become:
``` text
atreyakamat.dev
BUILD + PERSONAL

create.*
Creative / freelance

teach.*
Education / tutoring

speak.*
Speaking / workshops

experiment.*
AI / prototypes / exploratory work
```
Exact subdomain names are not locked by this PRD.
The root domain remains stable even as specialised profiles evolve.
---
45. LinkedIn Alignment Requirement
The website should become the canonical detailed source from which
LinkedIn can later be cleaned up.
Keep consistent:
role titles
dates
project names
project descriptions
skill naming
professional positioning
Do not delay the website redesign waiting for the LinkedIn update.
---
46. Content Hierarchy
The order of importance is:
Person
Developer/product positioning
Projects/proof
Professional experience
Skills
About/personal context
Resume/contact
Broader CREATE/TEACH/SPEAK/EXPERIMENT ecosystem
This hierarchy must be visible in both layout and navigation.
---
47. Acceptance Criteria
Homepage
portrait visible above fold on common desktop viewport
clear professional positioning
Projects CTA visible
4--6 pinned projects rendered from data
Experience preview links to `/experience`
Skills preview links to `/skills`
ecosystem appears after core developer/professional content
no engineering-dashboard UI
Projects
`/projects` renders all public projects
pinned projects appear first
every project has a stable slug
detail page supports images
detail page supports optional video
live/GitHub links render only when available
mobile project pages are fully usable
Experience
current role clearly visible
chronology readable
resume CTA works
Skills
skills grouped meaningfully
no percentage proficiency bars
skills can reference proof/projects
Design
white/turquoise system consistent
portrait integrated cleanly
third-party components customised
no component-library-demo aesthetic
Accessibility
keyboard navigation passes
reduced motion supported
focus visible
images have alt text
videos accessible
Performance
no autoplay video
below-fold images lazy
critical portrait optimised
third-party component effects audited
---
48. Final Product Test
Ask six questions before release.
Identity
Can someone understand who Atreya is in five seconds?
Proof
Can someone see real work without hunting?
Depth
Can a technical visitor inspect a project meaningfully?
Recruitment
Can a recruiter find Experience, Skills and Resume immediately?
Personality
Does the website feel like a real person rather than a portfolio
template?
Restraint
Did we use Fancy Components and Magic UI to improve the experience
rather than to show off the libraries?
If all six answers are yes, the product is doing its job.
---
49. Final Product Statement
`atreyakamat.dev` is the professional BUILD + PERSONAL home of Atreya
Kamat.
The homepage introduces the person.
Projects provide proof.
Project demos demonstrate execution.
Experience establishes professional credibility.
Skills make capabilities inspectable.
The resume formalises the profile.
The broader ecosystem provides paths into the other sides of Atreya's
work without diluting the core developer identity.
The website should feel simple on first contact and increasingly
impressive the deeper someone chooses to explore.