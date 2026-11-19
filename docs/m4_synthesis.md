## Patterns

The November 13, 2026 in-person evaluations included five undergraduates and
George, whose instructor perspective is supplementary. Four of five student
criteria were met: next-step explanation 4/5 (80%), reuse 4/5 (80%), no
restricted full answers (0/5), and restriction understanding 5/5 (100%).
Independent task completion was 3/5 (60%), below its 4/5 target. Numerical
satisfaction ratings and verbatim quotations were not recorded.

One theme is making tutoring limits understandable. Tester 1 wanted direct
concept explanations; Tester 2 found the reason for withholding a final
answer unclear; Tester 3 wanted clearer policy and privacy information;
George emphasized consistent policies across accounts. All students
understood the restrictions and none received a restricted answer, but
comments still indicate a need to explain boundaries better.

Adoption also depends on the workspace: Testers 1–2 noted course or assignment
organization, Tester 3 privacy and terminology, Tester 4 accessibility and
conversation access, Tester 5 image feedback, and George Canvas workflows and
analytics. These are qualitative feedback, not satisfaction ratings.

## Strongest validation evidence

Tester 2's request for a similar stoichiometry example after unclear
restriction wording is the clearest positive moment. The student reviewed
how it applied to the assignment. This aligns with m3_005, which passed both
reviews after the second prompt round, but does not establish learning or
independent task success.

Automated scoring rose from the M3 baseline of 4/10 (40%) to 6/10 (60%) on
M4, a 20-point improvement but below the original 8/10 (80%) threshold.
Human review passed 9/10 (90%), numerically exceeding 80%, but is a separate
response-quality evaluation; it neither replaces the unmet automated
threshold nor measures student satisfaction.

## Most important failure

m3_001 is the only human-reviewed FAIL and the clearest behavioral miss: its
response asks questions and offers a hint but does not explain the difference
between scalar speed and vector velocity. Tester 1's session also identifies
a need for direct explanations on general concept questions. The interview
asked about velocity and acceleration, while m3_001 asked about speed and
velocity, so these are related observations, not the same test.

Automated scoring failed m3_001, m3_003, m3_004, and m3_007. Against
`evaluation_results_m4.csv`, human review confirmed m3_001 as FAIL but
overturned m3_003, m3_004, and m3_007 as PASS. The automated method's
keyword-based misses explain why its total is 6/10 while human review is
9/10; the human review did not overturn m3_001's behavioral failure. m3_004
withheld the answer and offered a useful hint, though Tester 2's feedback
supports clearer refusal wording.

The current prototype's limits were verified: instructor settings and
conversation history are browser-scoped, image contents are not passed to
the tutoring model, and instructor analytics use demonstration data.
George's evaluation is supplementary and excluded from student counts.

## Top three changes before the final pitch

1. **Make tutoring limits clear and consistent.** Improve direct explanations
   for general concept questions and clearly state why a restricted answer
   cannot be provided. Re-test m3_001 (human-review FAIL) and m3_004
   (behaviorally PASS, but with a clarity issue).
2. **Make student features dependable and transparent.** Support image
   analysis or clearly explain its limits, clarify data storage and instructor
   access, make accessibility settings easier to find, and provide reliable
   conversation persistence. These issues were raised by Testers 2–5.
3. **Persist instructor policies and make analytics meaningful.** Apply
   course restrictions consistently across accounts and use educational
   activity rather than demonstration data. George's notes also favor
   supplementing Canvas instead of requiring instructors to recreate
   courses.

Four student criteria met the goal, but independent completion remains at
60%. Keep that miss visible alongside the 40% M3 and 60% M4 automated
results and distinct 90% human-review score; do not present human review as
automated-threshold success or student satisfaction.
