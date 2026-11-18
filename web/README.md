# Kaizen M4 web application

React/TypeScript Student and Instructor workspace with blue/yellow frosted-glass styling, the animated logo introduction, Supabase account login and an NRP chat-completion adapter using a sequential planner → tutor handoff.

The original Python Agents SDK and MCP implementation remains under the repository root, unchanged by this UI integration. The web adapter ports the sequential teaching flow; it does not run the Python stdio MCP servers. Conversation history is browser-scoped; course policies/material approval and analytics remain prototype data. Uploaded document contents and images are not interpreted by the live model.

## Run

Use Node.js 22. `npm ci`, `npm test`, `npm run build`. Copy `.env.example` to `.env.local` and set the public Supabase configuration. For a credential-free UI demonstration only, set `VITE_ENABLE_DEMO=true` locally. Run `npm run dev` for UI and API preview.

## Vercel

Set the Vercel project Root Directory to `web`, framework Vite, build `npm run build`, output `dist`, Node.js 22. Functions under `api/` handle `/api/agent/status` and `/api/agent/tutor` separately from the SPA fallback.

Configure `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, and `VITE_ENABLE_DEMO=false` for the frontend. Set server-only `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` to the same public project values for session verification. Configure server-only `NRP_BASE_URL`, secret `NRP_API_KEY`, and `MODEL_NAME`. Existing MODEL_BASE_URL/BYOM_API_KEY aliases are supported. Never use VITE_ for an NRP credential. The endpoint must be HTTPS and OpenAI chat-completion compatible. Each turn performs two model calls. Server errors and missing configuration are displayed honestly, with no simulated fallback. The key is never included in status responses or frontend code.

The server validates the Supabase bearer token before a paid NRP call. Instructor policies remain browser-editable prototype state and must be moved to an authoritative database before real graded-course use. This adapter does not claim to enforce authenticated instructor policy records.

Status/configuration and sequential request flow are tested with mocked provider responses. Actual NRP connectivity is unverified until server credentials are configured. Diagram feedback, practice answer checking and course analytics remain simulated/local fixtures.
