# M4 Updated Business Model Canvas

## Source note

The original M2 Business Model Canvas was not found in the repository's
tracked files or history. Section 3 of the supplied prompt contains a
retrieval instruction but not the original canvas. This proposed M4 canvas
uses the explicit M4 information and the financial assumptions in
[`m3_cost_and_sustainability.md`](./m3_cost_and_sustainability.md). The change
notes describe M4-supported updates; without the M2 source, they are not a
complete block-by-block comparison. No unverified M2 assumptions are invented.

## Customer Segments

**(Changed: The M4 notes include a completed instructor-perspective
evaluation, making instructors and digital education stakeholders explicit
in the evaluation; this does not establish paying customers.)**

- Undergraduate STEM students are the primary end users.
- University instructors may configure and manage course policies.
- Higher education institutions may implement and pay for the platform.
- Digital education departments may support implementation and evaluation.

Instructors and institutions are potential customers and administrators, not
validated paying customers.

## Value Propositions

- Course-specific AI tutoring.
- Academic assistance without completing restricted graded assignments.
- Guided reasoning and independent learning.
- Instructor-controlled AI assistance.
- Similar examples and practice activities.
- Educational assistance outside class.

The main value proposition remains consistent with the project: help students
take a next reasoning step while respecting course policies.

## Channels

**(Changed: Tester 2 found the assignment organization familiar from Canvas,
and George evaluated Kaizen as a possible supplement to existing courses.)**

- Kaizen web application.
- University pilot programs.
- Instructor recommendations.
- Potential future Canvas and learning-management-system integrations.

The Kaizen web workspace is deployed through Vercel. No institutional pilot
or LMS integration is claimed as established.

## Customer Relationships

**(Changed: Testers 1–5 raised needs around direct explanations, clear
restrictions, privacy information, conversation continuity, and image
feedback. Four of five undergraduate criteria were met; independent task
completion was 3/5 (60%), and no numerical satisfaction ratings were
recorded.)**

- Self-service AI tutoring.
- Course-specific support.
- Guided practice and feedback.
- Instructor-controlled educational environments.
- Student learning support.
- Clear communication about data storage and tutoring limits.

Conversation history is currently browser-scoped. The needs above are
qualitative interview feedback from completed in-person sessions on November
13, 2026. Four of five undergraduate criteria were met: next-step explanation
4/5, reuse 4/5, restriction understanding 5/5, and zero students received a
restricted full answer. Independent task completion was 3/5 (60%), below its
4/5 target. No numerical satisfaction ratings were recorded; George's
instructor-perspective evaluation is supplementary and excluded from those
counts.

## Revenue Streams

The existing documented model is institutional or department licensing,
potentially based on the number of students or courses. The M3 planning
document lists a planning range of $20–$40 per student per year; it is
unvalidated and is not a confirmed price or willingness-to-pay result.
Possible options consistent with that model include per-student or
per-course pricing, usage tiers, department or institution licenses,
additional subjects, analytics exports, and education grants. No new
revenue model is assumed.

## Key Resources

**(Changed: The M4 Kaizen workspace adds web, authentication, and hosting
infrastructure to the existing agent resources.)**

- CourseGuide Planner and Tutor.
- Course policy MCP server.
- JSON-backed memory MCP server.
- NRP model infrastructure.
- React/TypeScript Kaizen web workspace.
- Supabase authentication.
- Vercel hosting.
- Course policies.
- Evaluation datasets and testing infrastructure.

## Key Activities

**(Changed: The automated result is 6/10, below the 8/10 target; completed
interviews identified related needs for clearer tutoring limits and
consistent instructor policies. Student testing met four of five criteria,
with independent completion at 3/5 (60%), below target.)**

- Maintaining and improving the tutoring agent.
- Evaluating agent responses.
- Improving academic-integrity enforcement.
- Managing course-specific policies.
- Improving independent task completion, the only M3 student criterion not
  met (3/5 against a 4/5 target), and validating the other four student
  criteria in later testing.
- Maintaining Kaizen.
- Developing meaningful educational analytics.

## Key Partners

**(Changed: George's completed evaluation recommends compatibility with
existing LMS workflows, raising a future integration-partner opportunity.)**

- NRP model infrastructure.
- Supabase authentication services.
- Vercel hosting services.
- University instructors.
- Higher education institutions.
- Digital education specialists.
- Potential future LMS integration partners.

These are dependencies or potential collaborators; no formal institutional or
LMS partnerships are claimed.

## Cost Structure

**(Changed: Kaizen adds web hosting and authentication/database needs to the
cost categories documented for the two-call agent.)**

- Model inference and API usage. Each request uses a Planner call and a Tutor
  call.
- Hosting, database, and authentication services.
- Software development and application maintenance.
- Evaluation and quality assurance.
- Course setup and policy maintenance.
- Potential future institutional integrations.

The M3 document's planning estimates are approximately $0.01 per completed
request and the following monthly scenarios. They are illustrative estimates,
not measured M4 spending or current provider quotes.

| Scenario | Requests/month | Model cost | Storage/logging | Fixed costs | Total |
|---|---:|---:|---:|---:|---:|
| Pilot course | 1,000 | $10 | $5 | $100 | $115 |
| Expected adoption | 10,000 | $100 | $20 | $150 | $270 |
| High usage | 50,000 | $500 | $75 | $300 | $875 |

The two-model-call workflow is a scaling risk. The cost document notes that
longer prompts, memory retrieval, image analysis, and analytics can also
increase costs. No separate Supabase or Vercel price is estimated here.
