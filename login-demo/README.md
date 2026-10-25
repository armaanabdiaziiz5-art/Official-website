# Login Flow Training Demo

A local-only React + Tailwind CSS page that visualizes how login data flows:
form values → HTTP request → HTTPS in transit → server-side hashing → response → dashboard.

> **TRAINING DEMO — Dummy credentials only.**
> The company ("DemoPower"), stations, token and credentials are fictional. The navy/yellow/white
> palette is only a colour reference; no logos, names, pages or authentication behaviour from any
> real website are used, and the app never contacts any real website.

| Field    | Fixed, read-only value |
|----------|------------------------|
| Email    | `demo@example.invalid` |
| Password | `DemoOnly-482!`        |

## What it does *not* do

- No real authentication, `fetch`, XHR, cookies, `localStorage`, analytics or logging.
- The inputs are `readOnly` and not inside a `<form>`, so nothing can be typed or submitted.
- A Content-Security-Policy in `index.html` blocks connections to anything except the local dev server.
- The "request" and "response" are plain text rendered in the browser. The `.invalid` domain can never resolve.

## Windows setup

1. Install **Node.js 20 LTS or newer** from <https://nodejs.org> (the default options are fine).
   Open a new **PowerShell** window and check it worked:
   ```powershell
   node -v
   npm -v
   ```
2. Go to this folder (adjust the path to wherever you cloned or unzipped the repo):
   ```powershell
   cd C:\path\to\Official-website\login-demo
   ```
3. Install dependencies (one time only):
   ```powershell
   npm install
   ```
4. Start the demo:
   ```powershell
   npm run dev
   ```
5. Open <http://localhost:5173> in your browser and click **Simulate login**.
   Press `Ctrl + C` in PowerShell to stop the server.

If PowerShell says *"running scripts is disabled on this system"*, run the commands from
**Command Prompt (cmd.exe)** instead, or run once:
`Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

Optional production build, served locally only:

```powershell
npm run build
npm run preview   # http://localhost:4173
```

## Files

```
login-demo/
├─ index.html          # page shell + Content-Security-Policy
├─ package.json        # pinned dependency versions
├─ vite.config.js      # React + Tailwind plugins, binds to localhost
└─ src/
   ├─ main.jsx         # React entry point
   ├─ index.css        # Tailwind import + navy/yellow theme tokens
   └─ App.jsx          # the whole demo (banner, form, flow steps, dashboard)
```
