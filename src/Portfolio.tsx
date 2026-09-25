import "@fontsource-variable/source-serif-4/wght-italic.css";
import "./Portfolio.css";

// ── Data ────────────────────────────────────────────────
// DRAFT: entries marked "placeholder" need real content.

const courses = [
  {
    title: "Information Retrieval",
    term: "FS26",
    role: "Teaching Assistant",
    blurb:
      "Weekly exercise sessions, slides and Kahoot quizzes covering indexing, ranking and evaluation.",
    href: "#/teaching/information-retrieval",
  },
];

const projects = [
  {
    name: "x86-64 Compiler Backend",
    blurb: "An optimising compiler backend in OCaml.",
    detail:
      "Generates x86-64 assembly with graph-colouring register allocation and dataflow analyses for constant propagation and liveness. Built for ETH's Compiler Design course; code is private under the course terms.",
    stack: ["OCaml", "x86-64"],
    href: null,
  },
  {
    name: "Ledgr",
    blurb: "Local-first personal finance tracker.",
    detail:
      "Multi-currency tracking across 4,500+ real transactions, with imports, categorisation and investment tracking. Self-hosted on my home server with push-to-deploy. No cloud, no accounts.",
    stack: ["Next.js", "TypeScript", "SQLite", "Docker"],
    href: "https://github.com/Azyrma/ledgr",
  },
  {
    name: "Community Solutions",
    blurb: "The exam collection for ETH CS students.",
    detail:
      "Students share and discuss solutions to past exams. I contribute as part of the VIS CAT team.",
    stack: ["React", "Django", "PostgreSQL"],
    href: "https://exams.vis.ethz.ch",
  },
  {
    name: "Home Server",
    blurb: "The Raspberry Pi 5 this site runs on.",
    detail:
      "Caddy as a single reverse proxy, public traffic through a Cloudflare Tunnel, private services in Docker reachable only over Tailscale.",
    stack: ["Linux", "Docker", "Caddy", "Tailscale"],
    href: null,
  },
  {
    name: "KV Store",
    blurb: "A key-value storage engine, built from scratch.",
    detail:
      "In progress. A single-node storage engine first, then replication with Raft on top.",
    stack: [],
    href: null,
  },
  {
    name: "VVZ App",
    blurb: "A faster way to browse the ETH course catalogue.",
    detail:
      "On hold. Search and filter the Vorlesungsverzeichnis and plan credits for a semester.",
    stack: ["React", "Vite"],
    href: "https://github.com/Azyrma/bettervvz",
  },
];

const experience = [
  {
    when: "March 2026 – present",
    what: "Junior Software Engineer (part-time)",
    where: "PQ Solutions, Zürich",
    detail: "Building and maintaining RegTech software in Ruby on Rails, Java and Python.",
  },
  {
    when: "FS25, FS26",
    what: "Teaching Assistant",
    where: "ETH Zürich, D-INFK",
    detail: "Information Retrieval exercise sessions.",
  },
  {
    when: "FS25 - HS25",
    what: "Vice President and Event Manager",
    where: "VIS, ETH CS student association",
    detail: "Vice President of the ~2,500-member association representing ETH's computer science students.",
  },
  {
    when: "FS25 – present",
    what: "Board Member",
    where: "VIS, ETH CS student association",
    detail: "Board of the ~2,500-member association representing ETH's computer science students.",
  },
];

const stack = [
  { group: "Languages", items: "TypeScript, Python, Java, Ruby, OCaml, C, SQL" },
  { group: "Frontend", items: "React, Next.js, Tailwind" },
  { group: "Backend", items: "Ruby on Rails, Django, PostgreSQL, SQLite" },
  { group: "Infrastructure", items: "Linux, Docker, Caddy, Cloudflare Tunnel, Tailscale, Git" },
];

const nav = [
  { href: "#/about", label: "About" },
  { href: "#/teaching", label: "Teaching" },
  { href: "#/projects", label: "Projects" },
  { href: "#/experience", label: "Experience" },
];

// Icons: Lucide (ISC). GitHub and LinkedIn URLs are placeholders.
const social = [
  {
    label: "GitHub",
    href: "https://github.com/Azyrma",
    icon: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
  },
  {
    label: "Email",
    href: "mailto:smills@ethz.ch",
    icon: (
      <>
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/severin-mills/",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

// ── Layout ──────────────────────────────────────────────

export function Shell({
  hash,
  children,
}: {
  hash: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pf">
      <header className="pf-header">
        <a href="#/" className="pf-name">
          Severin Mills
        </a>
        <nav className="pf-nav">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              aria-current={
                hash === n.href || hash.startsWith(n.href + "/")
                  ? "page"
                  : undefined
              }
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>
      {/* key restarts the fade-in on every page change */}
      <main className="pf-main" key={hash}>
        {children}
      </main>
      <footer className="pf-footer">
        <div className="pf-social">
          {social.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
        <span>2026</span>
      </footer>
    </div>
  );
}

function Connect() {
  return (
    <section className="pf-section">
      <h2 className="pf-label">Connect</h2>
      {/* placeholder GitHub URL */}
      <p>
        Reach me at <a href="mailto:smills@ethz.ch">smills@ethz.ch</a> or on{" "}
        <a href="https://github.com/Azyrma">GitHub</a>.
      </p>
    </section>
  );
}

// ── Pages ───────────────────────────────────────────────

// Fisher-Yates shuffle, then take the first n.
function pickRandom<T>(items: T[], n: number): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

// Picked once per page load, so a refresh reshuffles but navigating back home does not.
const homeCourses = pickRandom(courses.filter((c) => c.href), 2);
const homeProjects = pickRandom(projects, 2);
const homeExperience = pickRandom(experience, 2);

export function Home() {
  return (
    <>
      <section className="pf-section">
        <p>
        <em>Building reliable systems.</em> Studying Computer Science at ETH
        Zürich, with a focus on compilers, distributed systems and security.
        </p>
        <p>
          I work part-time as a software engineer at PQ Solutions, build tools
          for CS students with the <a href="#/projects">VIS CAT team</a>, and
          TA{" "}
          <a href="#/teaching/information-retrieval">Information Retrieval</a>.
        </p>
</section>

      <section className="pf-columns">
        <div>
          <h2 className="pf-label">Teaching</h2>
          {homeCourses.map((c) => (
            <Item
              key={c.title}
              title={c.title}
              href={c.href}
              text={`${c.role}, ${c.term}.`}
            />
          ))}
          <Item
            title="All courses"
            href="#/teaching"
            text="Slides, quizzes and notes."
          />
        </div>
        <div>
          <h2 className="pf-label">Projects</h2>
          {homeProjects.map((p) => (
            <Item key={p.name} title={p.name} href="#/projects" text={p.blurb} />
          ))}
          <Item
            title="All projects"
            href="#/projects"
            text="Things I've built and maintain."
          />
        </div>
        <div>
          <h2 className="pf-label">Experience</h2>
          {homeExperience.map((e) => (
            <Item
              key={e.what}
              title={e.what}
              href="#/experience"
              text={`${e.where}.`}
            />
          ))}
          <Item
            title="Full history"
            href="#/experience"
            text="Roles, education and stack."
          />
        </div>
      </section>

      <Connect />
    </>
  );
}

export function About() {
  return (
    <>
      <section className="pf-section">
        <h1 className="pf-label"><b>Hi, I'm Severin.</b></h1>
        <p>
          I'm a Computer Science student at ETH Zürich, heading toward the Secure and Reliable Systems master's track. 
          I'm happiest close to the metal: I've written an x86-64 compiler backend in OCaml with graph-coloring register allocation and dataflow optimizations, built a memory allocator in C, and I'm currently working on a key-value storage engine that I plan to extend with Raft.
        </p>
        <p>
          Alongside my studies, I work part-time as a software engineer at PQ Solutions, a Swiss RegTech company, shipping Ruby on Rails, Java, and Python in production. 
          I also TA'd the Information Retrieval course twice at ETH and served on the board of VIS, the CS student association, as Event Manager and Vice President.
        </p>
        <p>
          This site runs on a Raspberry Pi 5 in my apartment, behind Caddy and a Cloudflare Tunnel, because I'd rather understand the stack than just deploy to it.
          When I'm not at a keyboard, I'm usually running, skiing, or organizing the next event.
        </p>
      </section>
      <Connect />
    </>
  );
}

export function Teaching() {
  return (
    <section className="pf-section">
      <h1 className="pf-label">Teaching</h1>
      <p>
        Exercise sessions, slides and quiz material for courses I&apos;ve
        TA&apos;d. Pick a course for its materials.
      </p>
      <div className="pf-cards">
        {courses.map((c, i) => {
          const body = (
            <>
              <span className="pf-small">
                {c.term} · {c.role}
              </span>
              <span className="pf-card-title">{c.title}</span>
              <span className="pf-muted">{c.blurb}</span>
              <span className="pf-card-go">
                {c.href ? "Open course →" : "Materials coming soon"}
              </span>
            </>
          );
          return c.href ? (
            <a key={i} href={c.href} className="pf-card">
              {body}
            </a>
          ) : (
            <div key={i} className="pf-card pf-card--off">
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="pf-section">
      <h1 className="pf-label">Projects</h1>
      {projects.map((p) => (
        <div key={p.name} className="pf-entry">
          <Item title={p.name} href={p.href} text={p.blurb} />
          <p className="pf-muted">{p.detail}</p>
          <p className="pf-small">{p.stack.join(" · ")}</p>
        </div>
      ))}
    </section>
  );
}

export function Experience() {
  return (
    <>
      <section className="pf-section">
        <h1 className="pf-label">Experience</h1>
        {experience.map((e, i) => (
          <div key={i} className="pf-row">
            <span className="pf-small">{e.when}</span>
            <div>
              <p>{e.what}</p>
              <p className="pf-muted">
                {e.where}. {e.detail}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="pf-section">
        <h2 className="pf-label">Stack</h2>
        {stack.map((s) => (
          <div key={s.group} className="pf-row">
            <span className="pf-small">{s.group}</span>
            <p>{s.items}</p>
          </div>
        ))}
      </section>
    </>
  );
}

// ── Helpers ─────────────────────────────────────────────

function Item({
  title,
  href,
  text,
}: {
  title: string;
  href: string | null;
  text: string;
}) {
  return (
    <div className="pf-item">
      {href ? <a href={href}>{title}</a> : <span>{title}</span>}
      {href?.startsWith("http") && <span className="pf-arrow">↗</span>}
      <p>{text}</p>
    </div>
  );
}
