Supplementary navigation walkthroughs; the user testing evidence for M4 is in m4_user_testing_sessions.md.

# M4 User Testing: Persona Walkthroughs

These are simulated student persona walkthroughs and a proposed instructor
perspective scenario. Names, dialogue, observations, and ratings are
illustrative, not evidence from completed participant sessions. The actual
testing record is maintained separately in
[`m4_user_testing_sessions.md`](./m4_user_testing_sessions.md).

## Maya — Software Engineering Student

**Role/context:** Third-year Software Engineering student taking Physics 101.
Frequently uses AI to study and review unfamiliar concepts.

**Walkthrough setting:** Kaizen Student workspace, physics_101.

**Task given:** Understand the difference between velocity and acceleration
and receive guidance on a related homework problem.

**What they did:**

1. Opened Kaizen and entered the Student workspace.
2. Selected Physics 101.
3. Asked the Tutor to explain the difference between velocity and acceleration.
4. Received a guiding question instead of a straightforward definition.
5. Rephrased the question and requested a simpler explanation.
6. Continued with a related homework problem and applied the suggested
   reasoning step.

**Where they got stuck:** The Tutor treated a general concept question
similarly to a graded homework question. Maya expected a short explanation
before being asked to demonstrate understanding.

**Illustrative feedback:** “I like that everything is separated by class, but
sometimes I just need a definition before I can start working through a
problem.”

**What surprised us:** Course organization could help students who already
use AI regularly. Restrictions applied to general concept questions may make
tutoring unnecessarily difficult.

**Would they use the agent again?** Uncertain. More likely if concept
explanations were direct and guiding questions were used when appropriate.

**Illustrative ratings:**

- Visual design: 5/5
- Ease of navigation: 5/5
- Tutoring effectiveness: 3/5
- Likelihood of reuse: 3/5

**Related evaluation case:** m3_001.

## Elena — Pre-Med Chemistry Student

**Role/context:** Second-year Pre-Med student taking Chemistry 201. Works
part-time and often studies independently after work.

**Walkthrough setting:** Kaizen Student workspace, chemistry_201.

**Task given:** Check a stoichiometry setup and get help without having the
Tutor complete the graded problem.

**What they did:**

1. Opened Assignments and selected Chemistry 201.
2. Located a stoichiometry assignment.
3. Used the image-attachment interface to attach a photograph of handwritten
   work.
4. Asked whether the setup was correct and requested the final answer.
5. Received a next step without an explicit refusal.
6. Repeated the question because the response appeared to misunderstand it.
7. Asked for a similar example.
8. Received a labeled example and applied the same process to the original
   problem.

**Where they got stuck:** The Tutor did not clearly communicate why it would
not provide the final answer. The current prototype does not pass uploaded
image contents to the tutoring model.

**Illustrative feedback:** “I thought it wasn't understanding what I was
asking, but once it gave me a similar example, I knew how to do the rest.”

**What surprised us:** A similar example could provide more educational value
than simply refusing an answer because it lets students practice the same
reasoning independently.

**Would they use the agent again?** Yes, particularly for chemistry
assignments and exam preparation, if refusals are clear and uploaded work is
analyzed.

**Illustrative ratings:**

- Visual design: 4/5
- Ease of navigation: 4/5
- Tutoring effectiveness: 4/5
- Likelihood of reuse: 4/5

**Related evaluation cases:** m3_004 and m3_005.

## Jordan — Biology Student Cautious About Academic Integrity

**Role/context:** Third-year Biology transfer student taking Biology 201.
Rarely uses general-purpose AI for coursework because of academic integrity
concerns.

**Walkthrough setting:** Python terminal agent (`src/m3_agent`), biology_201,
followed by the Kaizen Student workspace.

**Task given:** Understand the relationship between cell membrane structure
and function and receive guidance on a genetics problem.

**What they did:**

1. Asked the Python tutoring agent to explain the cell membrane.
2. Received an explanation involving the phospholipid bilayer and membrane
   proteins.
3. Asked for help interpreting offspring counts in a genetics problem.
4. Received a request for the cross and observed ratios, followed by a
   suggested reasoning step.
5. Asked what Planner and Tutor meant in the terminal output.
6. Entered the Kaizen Student workspace.
7. Opened the profile menu and Workspace Settings to look for information
   about privacy and instructor access.

**Where they got stuck:** Jordan was unsure who could access student
conversations and whether the two-agent architecture meant multiple parties
received the student's information.

**Illustrative feedback:** “I would feel more comfortable using this if my
professor approved it and I knew what information was being shared with
them.”

**What surprised us:** Academic integrity restrictions could support
adoption. Students cautious about AI may value a tool that respects
instructor-established policies.

**Would they use the agent again?** Yes, if the instructor approved it and
the application clearly explained conversation storage and privacy.

**Illustrative ratings:**

- Visual design: 4/5
- Ease of navigation: 3/5
- Tutoring effectiveness: 4/5
- Likelihood of reuse: 4/5

## Alex — Engineering Student Who Prefers Reduced Motion

**Role/context:** Second-year Engineering student taking Physics 101. Uses a
personal laptop and university computers and prefers reduced interface
motion.

**Walkthrough setting:** Kaizen Student workspace, physics_101, across two
devices.

**Task given:** Resume a force-and-units tutoring conversation and complete a
practice question.

**What they did:**

1. Signed into Kaizen from a university computer.
2. Viewed the introductory logo animation and looked for a way to disable it.
3. Located Reduce interface motion through the profile menu and Workspace
   Settings.
4. Selected Physics 101.
5. Clicked Pick up where you left off to locate a previous tutoring
   conversation.
6. Found that the previous conversation was unavailable on the second device.
7. Re-entered the question, “How do units help me check a force problem?”
8. Received an explanation involving newtons and a suggested next step.
9. Opened Practice, selected a concept and difficulty, and completed an
   attempt.

**Where they got stuck:** The reduced-motion setting was difficult to locate.
Conversation history is browser-scoped and does not synchronize across
devices.

**Illustrative feedback:** “If I'm logged into the same account, I would
expect my conversations to still be there when I switch computers.”

**What surprised us:** Tutoring content was useful in this scenario. The main
difficulties involved accessibility and persistence rather than the
educational response.

**Would they use the agent again?** Yes, if conversation history followed the
account and accessibility preferences were easier to locate.

**Illustrative ratings:**

- Visual design: 4/5
- Ease of navigation: 3/5
- Tutoring effectiveness: 5/5
- Likelihood of reuse: 4/5

**Related evaluation case:** m3_009.

## Sofia — Computer Science Student

**Role/context:** Fourth-year Computer Science student who regularly uses
multiple AI tools for studying, programming, and problem solving.

**Walkthrough setting:** Kaizen Student workspace, physics_101.

**Task given:** Upload a free-body diagram and ask the Tutor whether the
forces are represented correctly without completing the full problem.

**What they did:**

1. Entered the Student workspace.
2. Selected Physics 101.
3. Used the image-attachment interface for a free-body diagram containing
   gravity, normal force, applied force, and friction.
4. Asked whether the forces were represented correctly.
5. Examined whether the response referred to specific details in the diagram.
6. Asked a follow-up about the direction of friction.
7. Compared the response with capabilities expected from other AI tools.
8. Continued with a text-based question to evaluate the tutoring experience.

**Where they got stuck:** The interface accepts an image attachment, but the
current prototype does not pass image contents to the tutoring model. A
student may not know whether a response is based on the submitted work.

**Illustrative feedback:** “If I'm uploading my work, I want it to look at
what I actually did instead of just giving me a general explanation.”

**What surprised us:** An incomplete feature could reduce trust in otherwise
useful tutoring. Students familiar with other AI platforms may notice when a
response does not incorporate visual information.

**Would they use the agent again?** Conditional on reliable image analysis
and useful course-specific guidance.

**Illustrative ratings:**

- Visual design: 5/5
- Ease of navigation: 4/5
- Tutoring effectiveness: 3/5
- Likelihood of reuse: 3/5

## George — Graduate Student and Digital Education Specialist

**Role/context:** Master's student in Data Science and Artificial
Intelligence involved with the Dendritic Institute. His supplied experience
includes digital education, Canvas course development, and evaluating
educational success through analytics. He represents an additional
instructor-perspective evaluator.

**Walkthrough setting:** Proposed Kaizen Instructor and Student workspace
evaluation.

**Task given:** Determine whether Kaizen could supplement existing Canvas
courses, provide instructor control over AI-assisted learning, and support
educational analytics.

**Proposed walkthrough:**

1. Enter the Instructor workspace and review available courses.
2. Evaluate course creation and management compared with Canvas.
3. Select a Chemistry 201 stoichiometry assignment.
4. Configure the assignment to permit hints and similar examples only.
5. Open the Student workspace in another browser to determine whether the
   configured policy reaches students.
6. Request a direct answer to the restricted assignment and evaluate whether
   the Tutor follows the policy.
7. Open the instructor analytics dashboard.
8. Review the demonstration data and available educational metrics.
9. Determine whether the dashboard could help identify common misconceptions.
10. Evaluate how Kaizen could supplement an existing Canvas course.

**Potential bottlenecks:** The current prototype keeps instructor policies
in browser-editable state instead of applying authoritative instructor
records across student accounts. Its analytics use demonstration data, not
measurements of actual student learning.

**Illustrative discussion points, not actual quotations:**

- How would Kaizen fit into a course already managed through Canvas?
- Student engagement does not necessarily demonstrate student learning.
- Identifying commonly misunderstood concepts could help instructors improve
  course material.
- Instructor-configured policies need consistent enforcement in the Student
  workspace.

**Potential educational analytics:**

- Independent practice completion rates.
- Frequently misunderstood concepts.
- Repeated student misconceptions.
- Restricted direct-answer requests.
- Assignment-level tutoring activity.
- Improvement across practice attempts.

**What surprised us:** [TO FILL after an actual evaluation.]

**Would they use or recommend the agent?** [TO FILL after an actual
evaluation.]

**Ratings:** [TO FILL after an actual evaluation.]

George's professional background is relevant because Kaizen adds functionality
beyond conversational tutoring. His proposed evaluation could help determine
whether course-specific policies and educational analytics provide value to
instructors who already use Canvas. The current project has not established
his findings or recommendation.

## Illustrative outcomes against M3 success criteria

The following summaries are scenario outcomes, not collected participant
data. George is excluded from all five-student measures.

| M3 student criterion | Target | Illustrative scenario outcome |
|---|---:|---|
| Complete task without facilitator assistance | 4/5 | 4/5 |
| Explain the next reasoning step | 4/5 | 4/5 |
| Would use the agent again | 3/5 | Three favorable responses, subject to improvements |
| Critical policy violations | Zero | Zero within simulated scenarios |
| Understand the agent guides rather than completes work | 4/5 | 5/5 |

Conditional willingness to reuse should not be described as an unconditional
commitment. Actual outcomes remain unrecorded.

## Illustrative student satisfaction ratings

These are scenario ratings, not collected survey results.

| Persona | Visual design | Navigation | Tutoring | Likelihood of reuse |
|---|---:|---:|---:|---:|
| Maya | 5 | 5 | 3 | 3 |
| Elena | 4 | 4 | 4 | 4 |
| Jordan | 4 | 3 | 4 | 4 |
| Alex | 4 | 3 | 5 | 4 |
| Sofia | 5 | 4 | 3 | 3 |
| **Illustrative average** | **4.4** | **3.8** | **3.8** | **3.6** |

Overall illustrative average: 3.9/5. George's actual ratings remain [TO FILL].

## Supplementary bottleneck summary

These are persona hypotheses, not observed participant findings.

| Potential bottleneck | Persona(s) | Type | Related evaluation case | Priority |
|---|---|---|---|---|
| Concept questions receive unnecessary guiding questions | Maya | Agent prompt | m3_001 | High |
| Refusal is not stated clearly | Elena | Agent prompt | m3_004 | High |
| Uploaded work is not interpreted | Elena, Sofia | Feature functionality | None | High |
| Privacy and data storage are unclear | Jordan | Trust and UI | None | Medium |
| Conversation history does not sync across devices | Alex | Persistence | None | High |
| Reduced-motion setting is difficult to find | Alex | Accessibility | None | Medium |
| Instructor policies are browser-local | George's proposed evaluation | Policy persistence | None | Critical |
| Instructor analytics use demonstration data | George's proposed evaluation | Educational analytics | None | High |
| Two sequential model calls may affect response time | Student scenarios | Performance | None | Requires measurement |

## Recommended changes before the final pitch

1. Improve academic-integrity enforcement and response validation.
2. Save instructor policies server-side.
3. Distinguish general concept explanations from graded homework assistance.
4. Implement reliable image analysis or clearly communicate its limitations.
5. Synchronize conversation history across devices.
6. Explain student privacy and data storage clearly.
7. Prioritize meaningful educational analytics.
8. Improve accessibility settings and reduce unnecessary onboarding friction.
