import { useEffect, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// TRAINING DEMO — everything below is fictional and runs only in this browser.
// There is no fetch(), no XMLHttpRequest, no storage, no analytics, no logging.
// The credentials are hard-coded, read-only and use the reserved ".invalid"
// domain (RFC 2606), so they can never belong to a real account.
// ---------------------------------------------------------------------------

const DEMO_EMAIL = "demo@example.invalid";
const DEMO_PASSWORD = "DemoOnly-482!";

const SIMULATED_REQUEST = {
  method: "POST",
  url: "https://auth.demo-power.invalid/api/session",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: {
    email: DEMO_EMAIL,
    password: DEMO_PASSWORD,
  },
};

// Illustrative only — this is NOT a hash of the demo password. It just shows the
// shape of an Argon2id record a real server would store instead of the password.
const ILLUSTRATIVE_HASH =
  "$argon2id$v=19$m=65536,t=3,p=4$ZmljdGlvbmFsc2FsdA$Rk9SLURFTU8tT05MWS1OT1QtQS1SRUFMLUhBU0g";

// Illustrative only — random-looking bytes standing in for TLS ciphertext.
const ILLUSTRATIVE_CIPHERTEXT =
  "17 03 03 01 2a 9f c4 6e 1b d2 88 0a 5c f1 e7 33 b9 40 7d 2e c6 91 a8 54 0f 6b e2 3d 7c 19 aa f5 …";

const SIMULATED_RESPONSE = {
  status: "200 OK",
  headers: {
    "Content-Type": "application/json",
    "Set-Cookie": "session=DEMO-NOT-A-REAL-TOKEN; HttpOnly; Secure; SameSite=Strict",
  },
  body: {
    ok: true,
    user: { id: "usr_demo_0001", name: "Demo Trainee", role: "viewer" },
    expiresIn: 900,
    note: "Simulated response generated in the browser. No server was contacted.",
  },
};

const STATIONS = [
  { name: "Harbor View Substation", region: "North District", status: "Online", load: 72, output: "38.4 MW" },
  { name: "Sunridge Solar Field", region: "East Plains", status: "Online", load: 64, output: "21.9 MW" },
  { name: "Riverbend Diesel Plant", region: "Central Valley", status: "Maintenance", load: 0, output: "0.0 MW" },
  { name: "Coastline Wind Array", region: "South Coast", status: "Online", load: 81, output: "27.2 MW" },
  { name: "Old Market Feeder 7", region: "City Centre", status: "Alert", load: 96, output: "12.6 MW" },
];

const STEPS = ["form", "request", "transit", "server", "response", "dashboard"];

export default function App() {
  const [visible, setVisible] = useState(0);
  const [running, setRunning] = useState(false);
  const timers = useRef([]);
  const panelRef = useRef(null);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function simulateLogin() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setVisible(0);
    setRunning(true);
    STEPS.forEach((_, i) => {
      timers.current.push(
        setTimeout(() => {
          setVisible(i + 1);
          if (i === 0) panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          if (i === STEPS.length - 1) setRunning(false);
        }, 150 + i * 650)
      );
    });
  }

  function reset() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setVisible(0);
    setRunning(false);
  }

  return (
    <div className="min-h-screen bg-navy-100/60 font-sans text-navy-900">
      <TrainingBanner />
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
        <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,420px)_1fr]">
          <LoginCard running={running} onSimulate={simulateLogin} onReset={reset} hasRun={visible > 0} />
          <Intro />
        </section>

        <section ref={panelRef} className="mt-10 scroll-mt-20" aria-live="polite">
          {visible > 0 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-navy-900">How the login data flows</h2>
              {visible >= 1 && <StepFormValues />}
              {visible >= 2 && <StepRequest />}
              {visible >= 3 && <StepTransit />}
              {visible >= 4 && <StepServer />}
              {visible >= 5 && <StepResponse />}
              {visible >= 6 && <MockDashboard />}
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-navy-800/10 bg-white py-6 text-center text-xs text-navy-700">
        Educational training demo. Fictional company, fictional stations, fictional credentials. Not affiliated with
        any real utility.
      </footer>
    </div>
  );
}

function TrainingBanner() {
  return (
    <div
      role="alert"
      className="sticky top-0 z-50 flex items-center justify-center gap-2 bg-volt-500 px-4 py-2 text-center text-sm font-extrabold tracking-wide text-navy-950 shadow-md"
    >
      <span aria-hidden="true">⚠</span>
      TRAINING DEMO — Dummy credentials only.
    </div>
  );
}

function Header() {
  return (
    <header className="bg-navy-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-volt-500 text-navy-950 shadow-inner">
            <BoltIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-lg font-bold leading-tight">
              Demo<span className="text-volt-400">Power</span>
            </p>
            <p className="text-xs text-navy-100/70">Fictional utility · Training portal</p>
          </div>
        </div>
        <span className="rounded-full border border-volt-400/60 px-3 py-1 text-xs font-semibold text-volt-400">
          Offline sandbox
        </span>
      </div>
    </header>
  );
}

function LoginCard({ running, onSimulate, onReset, hasRun }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-navy-800/10">
      <div className="bg-navy-800 px-6 py-5 text-white">
        <h1 className="text-xl font-bold">Sign in</h1>
        <p className="mt-1 text-sm text-navy-100/80">Operator portal — demonstration only</p>
      </div>

      {/* Deliberately not a <form>: nothing can be submitted anywhere. */}
      <div className="space-y-5 px-6 py-6" role="group" aria-label="Demo login form">
        <Field label="Email" id="demo-email" type="email" value={DEMO_EMAIL} />
        <Field label="Password" id="demo-password" type="text" value={DEMO_PASSWORD} mono />

        <p className="rounded-lg bg-volt-400/15 px-3 py-2 text-xs text-navy-800 ring-1 ring-volt-500/40">
          These fields are fixed and read-only. You can't type your own details here — and you never should on a
          training page.
        </p>

        <button
          type="button"
          onClick={onSimulate}
          disabled={running}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-volt-500 px-4 py-3 font-bold text-navy-950 shadow transition hover:bg-volt-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-volt-400/50 disabled:cursor-wait disabled:opacity-70"
        >
          {running ? "Simulating…" : "Simulate login"}
        </button>

        {hasRun && !running && (
          <button
            type="button"
            onClick={onReset}
            className="w-full rounded-lg border border-navy-800/20 px-4 py-2 text-sm font-semibold text-navy-800 hover:bg-navy-100/60"
          >
            Reset demo
          </button>
        )}
      </div>
    </div>
  );
}

function Field({ label, id, type, value, mono }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center justify-between text-sm font-semibold text-navy-800">
        {label}
        <span className="flex items-center gap-1 text-xs font-medium text-navy-700/70">
          <LockIcon className="h-3.5 w-3.5" /> read-only
        </span>
      </label>
      <input
        id={id}
        type={type}
        value={value}
        readOnly
        aria-readonly="true"
        autoComplete="off"
        spellCheck={false}
        data-lpignore="true"
        data-1p-ignore
        className={`w-full cursor-not-allowed rounded-lg border border-navy-800/20 bg-navy-100/50 px-3 py-2.5 text-navy-900 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20 ${
          mono ? "font-mono" : ""
        }`}
      />
    </div>
  );
}

function Intro() {
  return (
    <div className="space-y-4 rounded-2xl bg-navy-900 p-6 text-navy-100 shadow-xl sm:p-8">
      <h2 className="text-2xl font-bold text-white">
        What happens when you press <span className="text-volt-400">Sign in</span>?
      </h2>
      <p className="text-sm leading-relaxed text-navy-100/85">
        This sandbox walks through a typical login, step by step: the values in the form, the request a browser would
        send, how HTTPS protects it on the way, what a well-built server does with the password, the response it sends
        back, and the dashboard you land on.
      </p>
      <ul className="grid gap-3 text-sm sm:grid-cols-2">
        <Fact title="HTTPS = encryption in transit">
          TLS scrambles the request between your browser and the server so people on the network can't read it.
        </Fact>
        <Fact title="Hashing = protection at rest">
          The server never stores the password itself — only a slow, salted hash such as Argon2id or bcrypt.
        </Fact>
        <Fact title="Nothing leaves this page">
          No network requests, cookies, storage, analytics or logs. The “request” and “response” are just text.
        </Fact>
        <Fact title="Fictional everything">
          The company, stations, token and credentials are invented for teaching.
        </Fact>
      </ul>
    </div>
  );
}

function Fact({ title, children }) {
  return (
    <li className="rounded-xl bg-navy-800/70 p-4 ring-1 ring-white/5">
      <p className="mb-1 font-semibold text-volt-400">{title}</p>
      <p className="text-navy-100/80">{children}</p>
    </li>
  );
}

function StepCard({ n, title, tag, children }) {
  return (
    <article className="animate-rise overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-navy-800/10">
      <header className="flex flex-wrap items-center gap-3 border-b border-navy-800/10 px-5 py-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-navy-800 text-sm font-bold text-volt-400">
          {n}
        </span>
        <h3 className="font-bold text-navy-900">{title}</h3>
        {tag && (
          <span className="ml-auto rounded-full bg-volt-400/25 px-2.5 py-0.5 text-xs font-semibold text-navy-800">
            {tag}
          </span>
        )}
      </header>
      <div className="px-5 py-4 text-sm leading-relaxed text-navy-800">{children}</div>
    </article>
  );
}

function Code({ children }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-navy-950 p-4 font-mono text-xs leading-relaxed text-navy-100">
      {children}
    </pre>
  );
}

function StepFormValues() {
  return (
    <StepCard n={1} title="Form values in the browser" tag="Client">
      <p className="mb-3">The browser reads the two fields. At this point the values only exist in this tab's memory.</p>
      <Code>{JSON.stringify({ email: DEMO_EMAIL, password: DEMO_PASSWORD }, null, 2)}</Code>
    </StepCard>
  );
}

function StepRequest() {
  const { method, url, headers, body } = SIMULATED_REQUEST;
  const raw = [
    `${method} ${new URL(url).pathname} HTTP/1.1`,
    `Host: ${new URL(url).host}`,
    ...Object.entries(headers).map(([k, v]) => `${k}: ${v}`),
    "",
    JSON.stringify(body, null, 2),
  ].join("\n");

  return (
    <StepCard n={2} title="Simulated HTTP request" tag="Not sent">
      <p className="mb-3">
        A real app would put the values in the body of a <code className="font-mono">POST</code> request. Here it's
        only displayed — the <code className="font-mono">.invalid</code> host can't resolve, and the page never calls
        the network.
      </p>
      <Code>{raw}</Code>
    </StepCard>
  );
}

function StepTransit() {
  return (
    <StepCard n={3} title="In transit: HTTPS encrypts the request" tag="Network">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 font-semibold text-navy-900">Without HTTPS (plain HTTP)</p>
          <Code>{`password=${DEMO_PASSWORD}   ← readable by anyone on the Wi-Fi`}</Code>
        </div>
        <div>
          <p className="mb-2 font-semibold text-navy-900">With HTTPS (TLS)</p>
          <Code>{ILLUSTRATIVE_CIPHERTEXT}</Code>
          <p className="mt-1 text-xs text-navy-700/70">Illustrative bytes — not real encryption output.</p>
        </div>
      </div>
      <p className="mt-4">
        HTTPS encrypts data <strong>in transit</strong>: routers, ISPs and other people on the network see only
        ciphertext. It does <strong>not</strong> hide the password from the server itself — once the request arrives it
        is decrypted, so the server must handle it carefully.
      </p>
    </StepCard>
  );
}

function StepServer() {
  return (
    <StepCard n={4} title="On the server: hash, never store" tag="Server">
      <ol className="mb-4 list-decimal space-y-1 pl-5">
        <li>Look up the account for the email address.</li>
        <li>
          Run the submitted password through a slow, salted password hash (Argon2id, bcrypt or scrypt) and compare it
          with the stored hash in constant time.
        </li>
        <li>Discard the plaintext password immediately — never log it, email it or write it to disk.</li>
        <li>Rate-limit attempts and return the same generic error for a wrong email or a wrong password.</li>
      </ol>
      <p className="mb-2 font-semibold text-navy-900">What the database stores instead of the password</p>
      <Code>{`users.password_hash = "${ILLUSTRATIVE_HASH}"`}</Code>
      <p className="mt-1 text-xs text-navy-700/70">
        Illustrative format only — this string was not computed from the demo password.
      </p>
    </StepCard>
  );
}

function StepResponse() {
  const { status, headers, body } = SIMULATED_RESPONSE;
  const raw = [
    `HTTP/1.1 ${status}`,
    ...Object.entries(headers).map(([k, v]) => `${k}: ${v}`),
    "",
    JSON.stringify(body, null, 2),
  ].join("\n");

  return (
    <StepCard n={5} title="Simulated server response" tag="Generated locally">
      <p className="mb-3">
        The server replies with a session, typically in an <code className="font-mono">HttpOnly; Secure</code> cookie
        so page scripts can't read it. Notice the password is <strong>never</strong> sent back.
      </p>
      <Code>{raw}</Code>
    </StepCard>
  );
}

const STATUS_STYLES = {
  Online: "bg-emerald-100 text-emerald-800 ring-emerald-600/20",
  Maintenance: "bg-volt-400/30 text-navy-900 ring-volt-600/30",
  Alert: "bg-red-100 text-red-800 ring-red-600/20",
};

function MockDashboard() {
  const online = STATIONS.filter((s) => s.status === "Online").length;
  const totalMw = STATIONS.reduce((sum, s) => sum + parseFloat(s.output), 0).toFixed(1);

  return (
    <StepCard n={6} title="Mock dashboard" tag="Fictional data">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p>
          Signed in as <strong>Demo Trainee</strong> <span className="text-navy-700/70">({DEMO_EMAIL})</span>
        </p>
        <span className="rounded-md bg-navy-900 px-2.5 py-1 font-mono text-xs text-volt-400">
          session: DEMO-NOT-A-REAL-TOKEN
        </span>
      </div>

      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <Stat label="Stations online" value={`${online} / ${STATIONS.length}`} />
        <Stat label="Total output" value={`${totalMw} MW`} />
        <Stat label="Open alerts" value={STATIONS.filter((s) => s.status === "Alert").length} />
      </div>

      <div className="overflow-x-auto rounded-xl ring-1 ring-navy-800/10">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-navy-900 text-xs uppercase tracking-wide text-navy-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Station</th>
              <th className="px-4 py-3 font-semibold">Region</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Load</th>
              <th className="px-4 py-3 text-right font-semibold">Output</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-800/10 bg-white">
            {STATIONS.map((s) => (
              <tr key={s.name} className="hover:bg-navy-100/40">
                <td className="px-4 py-3 font-semibold text-navy-900">{s.name}</td>
                <td className="px-4 py-3 text-navy-700">{s.region}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${STATUS_STYLES[s.status]}`}>
                    {s.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-navy-100">
                      <div
                        className={`h-full rounded-full ${s.load > 90 ? "bg-red-500" : "bg-volt-500"}`}
                        style={{ width: `${s.load}%` }}
                      />
                    </div>
                    <span className="w-9 text-xs tabular-nums text-navy-700">{s.load}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-mono tabular-nums">{s.output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-navy-700/70">All stations, regions and readings are invented for this exercise.</p>
    </StepCard>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-navy-900 px-4 py-3 text-white">
      <p className="text-xs uppercase tracking-wide text-navy-100/70">{label}</p>
      <p className="mt-1 text-2xl font-bold text-volt-400">{value}</p>
    </div>
  );
}

function BoltIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
