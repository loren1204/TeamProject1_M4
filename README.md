# CourseGuide AI

CourseGuide AI is a policy-aware tutoring prototype that helps students take
the next reasoning step without doing graded work for them.

## M4 CHANGES

1. **Evaluation keywords and reporting (Daniel).** Keyword alternatives and
   the `missing_keywords` column were added because acceptable wording could
   otherwise fail exact keyword checks. The UTF-8 fix addresses garbled text
   in the baseline CSV. Evaluation results are kept in `docs/`; the generated
   scratch CSV remains untracked. These are evaluation and reporting
   improvements, not agent improvements.
2. **Tutor prompt round 1 (Andriana).** The prompt was revised because m3_001
   and m3_006 asked questions instead of giving the expected assistance.
   m3_006 now passes; m3_001 still fails because it does not directly explain
   the scalar/vector distinction.
3. **Tutor prompt round 2 (Andriana).** The prompt was revised to label
   similar examples and make refusals clearer. m3_005 and m3_008 now pass.
   m3_004 still fails automated keyword scoring, although human review passed
   it because the response avoided giving the answer and offered a hint.
4. **Kaizen web workspace (Loren).** A React/TypeScript browser workspace
   provides student and instructor views, course-specific tutoring,
   assignments and practice activities, Supabase authentication, and a
   server-side NRP Planner-to-Tutor adapter deployed through Vercel. The
   student experience includes conversation history, accessibility settings,
   and an image-attachment interface; history is browser-scoped and uploaded
   image contents are not interpreted by the model. Instructor analytics use
   demonstration data. Kaizen did not directly affect the ten original
   automated evaluation cases because those cases do not test the web
   workspace.
5. **Evaluation results.** Automated scoring improved from the M3 baseline
   of 4/10 (40%) to 6/10 (60%). Human review separately passed 9/10 (90%);
   this is not the automated score. The original automated threshold of 8/10
   (80%) was not met.

## M3 CHANGES

The M2 single agent was extended into a sequential multi-agent system:

1. **CourseGuide Planner** classifies the request, retrieves the course policy,
   optionally recalls prior notes, and produces a bounded handoff.
2. **CourseGuide Tutor** receives that handoff and writes the student-facing
   response while enforcing the policy.
3. **AgentMemoryServer** provides persistent JSON-backed `remember` and
   `recall` MCP tools. This is the knowledge/memory layer for M3.

The handoff is sequential reasoning: the tutor cannot run until the planner
has produced its request type, constraints, context, and next-step plan.

The M3 implementation also includes:

- Ten evaluation cases in `tests/m3_evaluation_cases.yaml`.
- A live evaluation runner in `scripts/evaluate_m3.py` that writes
  `evaluation_results.csv` with each input, expected keywords, expected output,
  human-review and critic-score fields, actual output, pass/fail status, and
  failure category.
- A committed baseline snapshot at
  `docs/evaluation_results_baseline.csv`. The runner's root-level
  `evaluation_results.csv` is a generated working file and should not be
  committed.
- Offline checks in `tests/test_m3_evaluation.py`.

These changes were made to satisfy the M3 requirements for two agents, an
explicit handoff, sequential reasoning, a memory layer, and a ten-case
evaluation plan.

## Setup and run one question in the terminal

Use Python 3.11 or newer. From the repository root, create a virtual
environment and install the dependencies:

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

Copy `.env.example` to `.env`, then open `.env` and set the model base URL, API
key, and model name for the provider used by your team. Never commit `.env` or
expose its API key. The program needs network access to the configured model.

Run one question with PowerShell:

```powershell
Copy-Item .env.example .env
.\.venv\Scripts\python.exe -m src.m3_agent `
  --course physics_101 `
  --question "I am stuck setting up Newton's second law."
```

The tutor's response is printed directly in the terminal. To ask another
question, run the command again with a different `--question` value. For
example:

### Direct test commands without a script

If a launcher script does not work on your computer, activate the virtual
environment and run the agent module directly:

```powershell
.\.venv\Scripts\Activate.ps1
python -m src.m3_agent `
  --course physics_101 `
  --question "What is the difference between velocity and speed?"
```

The following questions are also useful examples:

```powershell
python -m src.m3_agent `
  --course physics_101 `
  --question "I am stuck on a projectile motion problem. What should I do next?"
```

```powershell
python -m src.m3_agent `
  --course chemistry_201 `
  --question "Can you check if I set up this equilibrium expression correctly?"
```

```powershell
python -m src.m3_agent `
  --course biology_201 `
  --question "Can you explain how the structure of the cell membrane relates to its function?"
```

```powershell
python -m src.m3_agent `
  --course chemistry_201 `
  --question "I tried balancing this reaction but I am unsure what to check next."
```

If the virtual environment is not activated, use its Python executable
directly instead:

```powershell
.\.venv\Scripts\python.exe -m src.m3_agent `
  --course physics_101 `
  --question "What is the difference between velocity and speed?"
```

The CourseGuide Tutor response should appear in the terminal after the
question is processed. Available course policy files are `physics_101`,
`chemistry_201`, and `biology_201`.

### Run with a helper script

```powershell
.\scripts\run_m3.ps1 `
  -Course chemistry_201 `
  -Question "Can you help me decide what to check next in my equilibrium expression?"
```

The PowerShell launcher uses the repository's virtual environment and prints
the final CourseGuide Tutor response. If PowerShell blocks local scripts, use
the direct Python commands above or allow scripts for the current session with
`Set-ExecutionPolicy -Scope Process Bypass`.

On macOS or Linux, the equivalent command is:

```bash
./scripts/run_m3.sh --course physics_101 --question "I am stuck setting up Newton's second law."
```

The policy MCP server reads course files from `config/`. Memory is stored in
`data/agent_memory.json` and is limited to the most recent 100 notes.

### Run with the helper scripts

If you would rather not type the full command, the `scripts/` folder has
shortcuts. Each one switches to the repository root and turns on `.venv` for
you if it exists. You still need to complete the setup above first (virtual
environment, `pip install`, and your `.env` file).

There are two versions of each script, so use the one that matches your
terminal. The `.sh` files only work on macOS, Linux, or Git Bash. They do
nothing useful in Windows PowerShell or Command Prompt, which can look like the
command was skipped. On Windows, use the `.ps1` files.

**Windows (PowerShell):**

```powershell
.\scripts\run_m3.ps1
```

If PowerShell says running scripts is disabled, allow it for this window only
and run the script again:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

**macOS / Linux:**

```bash
chmod +x scripts/*.sh        # only needed once, if the scripts are not executable
./scripts/run_m3.sh
```

Both versions ask the agent one example question: "I am stuck setting up
Newton's second law." for `physics_101`.

## Evaluation

Run the offline evaluation checks:

```powershell
python -m pytest tests/test_m3_evaluation.py -q
```

Run all ten live cases against the configured model:

```powershell
python scripts/evaluate_m3.py
```

The live command creates `evaluation_results.csv`. The committed baseline
snapshot records one 4/10 automated run; live runs can vary with model output.
The runner labels automated keyword misses as `response_keyword`; human review
should assign the root cause from the evaluation plan's categories. The
`human_review` and `critic_score` columns remain blank until those reviews are
performed. `.env` and `data/agent_memory.json` should not be committed.

### Run the evaluation with the helper script

`scripts/run_tests.ps1` (Windows) and `scripts/run_tests.sh` (macOS / Linux) do
the same thing as the live command above. They run all ten cases against your
configured model, print PASS or FAIL for each one, show the overall pass rate at
the end, and write `evaluation_results.csv`.

```powershell
.\scripts\run_tests.ps1
```

```bash
./scripts/run_tests.sh
```

Anything you add after the script name is passed along to the evaluation, so you
can pick a different model or save the results somewhere else:

```powershell
.\scripts\run_tests.ps1 --model your-model-name --output results\run1.csv
```

```bash
./scripts/run_tests.sh --model your-model-name --output results/run1.csv
```

Because this sends real requests to the model, it needs your `.env` credentials
and may take a few minutes. To run only the quick offline checks instead (no
model calls), use `python -m pytest tests/test_m3_evaluation.py -q` (shown above).

## M4 submission status

The repository contains the Python Planner/Tutor and MCP implementation, the
Kaizen web workspace and NRP adapter, the ten-case M4 evaluation CSV with
approved human review, and the M4 evaluation summary. The automated result is
6/10 and does not meet the original 8/10 threshold; the separate human-review
result is 9/10. Human review confirmed m3_001 as a behavioral failure and
passed m3_003, m3_004, and m3_007 despite their automated keyword failures.
Completed in-person evaluations on November 13, 2026, included five
undergraduate students and one supplementary instructor-perspective
evaluator. Four of five undergraduate criteria were met; independent task
completion was 3/5 (60%), below its 4/5 target. Numerical participant
ratings were not recorded. See `docs/m4_user_testing_sessions.md` and the
other M4 planning documents under `docs/` for the testing results and
scope-down decision.

## Known limitations

- The memory layer uses JSON substring matching rather than embeddings or a
  vector database, so retrieval quality will decline for paraphrased queries.
- The planner-to-tutor handoff is text, so malformed model output is not yet
  rejected by a schema validator.
- Model calls and MCP subprocesses require network access and valid provider
  credentials; offline fallback and retry policy are not implemented yet.


## Kaizen M4 web workspace

The React/TypeScript application is in [`web/`](web/README.md). It includes the blue/yellow glass design, Supabase account authentication, and server-side NRP planner → tutor requests for Vercel. See [`web/README.md`](web/README.md) for setup, required environment variables, tests, and current integration limits.

The Python agent, MCP servers, M4 tutor prompt, evaluation harness, and existing project instructions above are preserved. The web adapter ports the sequential teaching flow and is not a replacement for the Python MCP implementation. Live NRP responses require configured provider credentials; no live model run is claimed by the web test suite.

