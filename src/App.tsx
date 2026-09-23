import "./App.css";
import infretWeek1 from "./assets/infret_week1.pdf";
import infretWeek2 from "./assets/infret_week2.pdf";
import infretWeek3 from "./assets/infret_week3.pdf";
import infretWeek4 from "./assets/infret_week4.pdf";
import infretWeek5 from "./assets/infret_week5-1.pdf";
import infretWeek6 from "./assets/infret_week6.pdf";
import infretWeek7 from "./assets/infret_week7.pdf";
import infretWeek8 from "./assets/infret_week8.pdf";
import infretWeek10 from "./assets/infret_week10-1.pdf";
import infretWeek11 from "./assets/infret_week11-1.pdf";
import infretWeek12 from "./assets/infret_week12-1.pdf";

import { useState } from "react";

// ── Data ────────────────────────────────────────────────

const exercises = [
  {
    week: "01",
    title: "Introduction",
    slides: infretWeek1,
    kahoot:
      "https://create.kahoot.it/share/information-retrieval-introduction/4e5bc650-e58a-402b-9a63-55bd99ed6496",
  },
  {
    week: "02",
    title: "Boolean Retrieval",
    slides: infretWeek2,
    kahoot:
      "https://create.kahoot.it/share/ir-week-ii-boolean-retrieval/b04521d6-eedd-46c2-8e91-959ee741809f",
  },
  {
    week: "03",
    title: "Term Vocabulary",
    slides: infretWeek3,
    kahoot:
      "https://create.kahoot.it/details/f6631349-f63b-4c88-9cc2-c1bf9d140451",
  },
  {
    week: "04",
    title: "Tolerant Retrieval",
    slides: infretWeek4,
    kahoot:
      "https://create.kahoot.it/details/87bc0fc2-c901-4fcf-8d6f-9bbae17da58e",
    note: "(prev. year)",
  },
  {
    week: "05",
    title: "Index Construction",
    slides: infretWeek5,
    kahoot:
      "https://create.kahoot.it/share/ex-04-index-construction/89fc6ef7-2262-4924-888d-9549940c0e74",
  },
  {
    week: "06",
    title: "Index Compression",
    slides: infretWeek6,
    kahoot:
      "https://create.kahoot.it/share/information-retrieval-index-compression/eab34273-e603-4ba3-a617-2a2130efabdb",
  },
  {
    week: "07",
    title: "Ranked Retrieval",
    slides: infretWeek7,
    kahoot:
      "https://create.kahoot.it/share/information-retrieval-ranked-retrieval/4ce4ee62-9d8b-478c-b73f-8876e8ec77ef",
  },
  {
    week: "08",
    title: "Vector Space Model",
    slides: infretWeek8,
    kahoot:
      "https://create.kahoot.it/details/duplicate-of-information-retrieval-ex-07-vector-space-models-mschoeb/d790da6e-9dd4-4191-bdd5-e71a97d32ca3",
  },
  {
    week: "09",
    title: "Champion Lists",
    slidesText: "See week 8",
    kahootText: "See week 8",
  },
  {
    week: "10",
    title: "Evaluation",
    slides: infretWeek10,
    kahoot:
      "https://create.kahoot.it/details/4b14f751-21e2-4baf-95ba-6b5e94ccd78e?drawer=",
  },
  {
    week: "11",
    title: "Probabilistic Retrieval",
    slides: infretWeek11,
    kahoot:
      "https://create.kahoot.it/share/incomplete-information-retrieval-probabilistic-retreival/d01d9bd5-1220-468b-a793-2e5f1146d8e2",
  },
  {
    week: "12",
    title: "Language Models",
    slidesText: "See week 11",
    kahootText: "See week 11",
  },
  {
    week: "13",
    title: "Summary",
    slides: infretWeek12,
    kahoot:
      "https://create.kahoot.it/share/ir-final-kahoot/5f73dd1b-482e-4ada-9419-e667080a838b",
  },
];

const resources = [
  { label: "Element Chat", href: "http://chat.ethz.ch/" },
  {
    label: "Jupyter Server",
    href: "https://student-jupyter.inf.ethz.ch/hub/login",
  },
  {
    label: 'Book: "Introduction to Information Retrieval"',
    href: "https://nlp.stanford.edu/IR-book/information-retrieval-book.html",
  },
  {
    label: "Past Exams",
    href: "https://exams.vis.ethz.ch/category/InformationRetrieval",
  },
];

const bonusDates = [
  { date: "13.03", topic: "Tolerant Retrieval", done: true },
  { date: "27.03", topic: "Index Compression", done: true },
  { date: "24.04", topic: "Vector Space Model", done: true },
];

// ── Helpers ─────────────────────────────────────────────

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <h2 className="section-label">{title}</h2>
      {children}
    </section>
  );
}

function SideLabel({ children }: { children: React.ReactNode }) {
  return <div className="side-label">{children}</div>;
}

function Code({ children }: { children: React.ReactNode }) {
  return <code className="code-inline">{children}</code>;
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="code-block">
      <code>{children}</code>
    </pre>
  );
}

// ── App ─────────────────────────────────────────────────

function App() {
  const [openQ, setOpenQ] = useState(false);

  return (
    <div className="layout">
      {/* ── Left sidebar ── */}
      <aside className="sidebar">
        <h1 className="sidebar-name">Severin Mills</h1>
        <a
          className="sidebar-course"
          href="https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=198419&semkez=2026S&ansicht=ALLE&lang=de"
        >
          Information Retrieval
        </a>
        <div className="sidebar-term">Spring 2026 &middot; ETH Z&uuml;rich</div>

        <SideLabel>Schedule</SideLabel>
        <div className="schedule-rows">
          {[
            { time: "10:15 – 12:00", room: "CAB G 11" },
            { time: "16:15 – 17:00", room: "CAB G 51" },
          ].map((row, i) => (
            <div key={i} className="schedule-row">
              <span className="schedule-time">{row.time}</span>
              <span className="schedule-room">{row.room}</span>
            </div>
          ))}
        </div>
        <p className="schedule-note">
          No lectures on 03.04 (Good Friday), 10.04 (Easter), 01.05 (Labour Day)
        </p>

        <SideLabel>Contact</SideLabel>
        <div className="contact-list">
          {[
            {
              label: "Email",
              text: "smills@ethz.ch",
              href: "mailto:smills@ethz.ch",
            },
            {
              label: "Moodle",
              text: "Information Retrieval FS26",
              href: "https://moodle-app2.let.ethz.ch/course/view.php?id=26803",
            },
          ].map((c) => (
            <div key={c.label} className="contact-row">
              <span className="contact-label">{c.label}</span>
              <a href={c.href}>{c.text}</a>
            </div>
          ))}
        </div>

        <SideLabel>Resources</SideLabel>
        <div className="resource-list">
          {resources.map((r, i) => (
            <a
              key={r.href}
              href={r.href}
              className={`resource-link${i < resources.length - 1 ? " resource-link--bordered" : ""}`}
            >
              {r.label}
            </a>
          ))}
        </div>

        <div className="sidebar-footer">
          Information Retrieval &middot; ETH Z&uuml;rich &middot; 2026
        </div>
      </aside>

      {/* ── Divider ── */}
      <div className="divider" />

      {/* ── Main content ── */}
      <main className="main">
        {/* Disclaimer */}
        <div className="disclaimer">
          <span className="disclaimer-icon">&#9888;</span>
          <p>
            This is an <strong>unofficial</strong> resource and not affiliated
            with or endorsed by ETH Z&uuml;rich. Slides and other materials may
            contain mistakes. Always refer to the official course materials and
            lecture slides for authoritative content. If you find any mistakes,
            please contact me.
          </p>
        </div>

        {/* Lecture Information */}
        <Section title="Lecture Information">
          <p className="body-sm">
            Congratulations on finishing the course! There are weekly quizzes and Jupyter Notebooks that you may solve as
            an exercise. I would recommend to do the weekly quizzes at least,
            since they will give you the most benefit for the exam.
          </p>
          <p className="body-sm">
            There is an opportunity to receive bonus points, up to 0.25, which
            will count towards your final grade. The bonus consists of three of
            the weekly quizzes, from which you will need to get the required
            points from two of them, on the dates specified below:
          </p>
          <div className="bonus-table">
            {bonusDates.map((b, i) => (
              <div
                key={b.date}
                className={`bonus-row${i === 0 ? " bonus-row--first" : ""}`}
              >
                <span className="bonus-date">{b.date}</span>
                <span className="bonus-topic">{b.topic}</span>
                {b.done && <span className="badge-done">Done</span>}
              </div>
            ))}
          </div>
          <p className="body-xs muted" style={{ marginTop: "0.875rem" }}>
            It is possible to pass the quizzes without solving the
            Jupyter-Notebook, but I would recommend to solve it in the week with
            the bonuses. The time limit for each quiz is one week, you have two
            attempts.
          </p>
        </Section>

        <div className="split-columns">
          {/* Exercises */}
          <Section title="Exercises">
            <table className="data-table">
              <thead>
                <tr className="data-table__head-row">
                  <th className="col-week">#</th>
                  <th>Topic</th>
                  <th className="col-right">Slides</th>
                  <th className="col-center">Quiz</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((ex, i) => (
                  <tr
                    key={ex.week}
                    className={
                      i < exercises.length - 1
                        ? "data-table__row--bordered"
                        : ""
                    }
                  >
                    <td className="cell-week">{ex.week}</td>
                    <td className="cell-topic">
                      {ex.title}
                      {ex.note && <span className="note">{ex.note}</span>}
                    </td>
                    <td className="col-right">
                      {ex.slides ? (
                        <a href={ex.slides} className="mono-link">
                          pdf
                        </a>
                      ) : (
                        <span className="dim">{ex.slidesText ?? "—"}</span>
                      )}
                    </td>
                    <td className="col-center">
                      {ex.kahoot ? (
                        <a href={ex.kahoot} className="mono-link">
                          kahoot
                        </a>
                      ) : (
                        <span className="dim">{ex.kahootText ?? "—"}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          {/* Questions */}
          <Section title="Questions">
            <div className="accordion">
              <button
                className={`accordion-trigger${openQ ? " accordion-trigger--open" : ""}`}
                onClick={() => setOpenQ(!openQ)}
              >
                <span>
                  Week 3: Tolerant Retrieval &mdash; Skip List Comparisons
                </span>
                <span
                  className={`accordion-icon${openQ ? " accordion-icon--open" : ""}`}
                >
                  +
                </span>
              </button>

              {openQ && (
                <div className="accordion-body">
                  <p>
                    There was a question about calculating the number of
                    comparisons in the intersection algorithm with skip lists.
                  </p>
                  <div>
                    <p className="muted body-sm">The proposed shortcut was:</p>
                    <CodeBlock>
                      (size_of_list) - skipped_elements + all_skip_nodes
                    </CodeBlock>
                  </div>
                  <p>
                    I don&apos;t think this is fully correct since it would fail
                    where the number of failed skip checks is not equal to the
                    number of skip pointers - 1.
                  </p>
                  <div>
                    <p className="muted body-sm">
                      I propose an alternative, non-verified formula:
                    </p>
                    <CodeBlock>
                      (baseline comparisons without skips) &minus; (elements
                      skipped by taken skips) + (failed skip checks)
                    </CodeBlock>
                  </div>
                  <div>
                    <p className="subheading">
                      I believe this could technically hold, given these
                      assumptions:
                    </p>
                    <ol className="num-list">
                      <li>A skip check counts as a comparison.</li>
                      <li>
                        A failed skip check still leads to a direct comparison.
                      </li>
                      <li>Skip pointers exist on only one list.</li>
                    </ol>
                  </div>
                  <div>
                    <p className="subheading">
                      Counterexample to the shortcut formula
                    </p>
                    <p>
                      Consider list 1:{" "}
                      <Code>1 &rarr; 2 &rarr; 3 &rarr; 10</Code> with skip
                      pointer <Code>1&rarr;10</Code>, and list 2:{" "}
                      <Code>0 &rarr; 11</Code>.
                    </p>
                    <p style={{ marginTop: "0.5rem" }}>
                      The baseline (no skips) is 5 comparisons, with p2
                      advancing once. With skips:
                    </p>
                    <table
                      className="data-table"
                      style={{ marginTop: "0.625rem", fontSize: "0.8rem" }}
                    >
                      <thead>
                        <tr className="data-table__head-row">
                          {["p1", "p2", "Action", "#"].map((h, i) => (
                            <th
                              key={h}
                              className={i === 3 ? "col-right" : ""}
                              style={{
                                fontFamily: i < 2 ? "var(--mono)" : undefined,
                              }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            p1: "1",
                            p2: "0",
                            action:
                              "skip pointer check, fails since 1 < 10. compare p1, p2, increment p2",
                            n: "2",
                          },
                          {
                            p1: "1",
                            p2: "11",
                            action:
                              "skip pointer check, succeeds since 10 < 11, jump to 10, skips 2 and 3",
                            n: "1",
                          },
                          {
                            p1: "10",
                            p2: "11",
                            action: "compare 10 < 11, p1 exhausted",
                            n: "1",
                          },
                        ].map((row, i, arr) => (
                          <tr
                            key={i}
                            className={
                              i < arr.length - 1
                                ? "data-table__row--bordered"
                                : ""
                            }
                          >
                            <td className="cell-mono">{row.p1}</td>
                            <td className="cell-mono">{row.p2}</td>
                            <td className="muted">{row.action}</td>
                            <td className="col-right cell-mono">{row.n}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div
                      style={{
                        marginTop: "0.875rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.25rem",
                      }}
                    >
                      <p>
                        Total: <strong>4 comparisons</strong>.
                      </p>
                      <p className="muted">
                        Correct formula: <Code>5 &minus; 2 + 1 = 4</Code>
                      </p>
                      <p className="muted">
                        Student formula: <Code>4 &minus; 2 + 1 = 3</Code>
                      </p>
                      <p className="muted" style={{ marginTop: "0.5rem" }}>
                        The student formula undercounts the baseline by 1 (p2
                        advanced once), but the skip penalty gap is 0 (1 node, 1
                        failed check) &mdash; the errors don&apos;t cancel.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}

export default App;
