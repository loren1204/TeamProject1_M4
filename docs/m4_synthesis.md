## Patterns

The completed notes cover five undergraduate evaluations and a separate
instructor-perspective evaluation. A recurring need across Testers 1, 2, and
3, and George, is clear explanation of how tutoring limits work. Tester 1
expected a direct concept explanation; Tester 2 found the reason for
withholding a final answer unclear; Tester 3 wanted understandable
information about instructor policies and data; George emphasized consistent
policy application across accounts. These observations are related but not identical.

A second theme is that adoption depends on the surrounding workspace as well
as the Tutor. Testers 1 and 2 noted course or assignment organization; Tester
3 raised privacy and terminology; Tester 4 discussed accessibility,
practice, and conversation access; Tester 5 focused on image feedback; and
George considered existing Canvas workflows and instructor analytics. The
notes summarize these concerns but do not provide dates, formats, verbatim
quotes, satisfaction scores, or criterion-level counts. These completed evaluations do not contain the counts needed to score the M3
criteria.

The technical results are separate. Automated scoring rose from 4/10 (40%)
for M3 to 6/10 (60%) for M4, a 20-percentage-point improvement. Human review
passed 9/10 (90%). The four automated failures were m3_001, m3_003, m3_004,
and m3_007. Per `evaluation_results_m4.csv`, human review confirmed m3_001
as a behavioral failure and overturned m3_003, m3_004, and m3_007 as
keyword-related failures.

## Strongest validation evidence

The clearest qualitative moment in the notes is Tester 2's request for a
similar stoichiometry example after the Tutor's answer restriction was
unclear. The notes report that the student reviewed how the example could
apply to the assignment. This is relevant to m3_005, which passed both
automated and human review after the second prompt round. It supports similar
examples but does not establish learning or task success.

The strongest measured evidence remains the change from 4 to 6 automated
passes, alongside a distinct 9/10 human-review rate. The human score is an
assessment of response quality, not student satisfaction and not a
replacement for automated scoring. No exact participant quotations or
individual scores were supplied.

## Most important failure

m3_001 is the only human-reviewed FAIL and the clearest behavioral miss: its
response asks questions and offers a hint but does not explain the difference
between scalar speed and vector velocity. Tester 1's session also identifies
a need for direct explanations on general concept questions. The interview
task asked about velocity and acceleration, while m3_001 asked about
velocity and speed, so these are related observations rather than the same
test.

m3_004 remains an important clarity issue, but it is not a human-reviewed
failure. The CSV marks it PASS because the Tutor did not provide the answer
and offered a useful hint. Tester 2's notes independently report that the
reason for withholding a final answer was unclear. This supports improving
explicit refusal wording without claiming a critical policy violation.

The current prototype's limits were verified: instructor settings are
browser-local, uploaded image contents are not passed to the tutoring model,
conversation history is browser-scoped, and instructor analytics use
demonstration data. These implementation facts complement, but are not
replacements for, the participant feedback. George's instructor evaluation
is supplementary and does not count toward the five-student criteria.

## Top three changes before the final pitch

1. **Make tutoring limits clear and consistent.** Improve direct explanations
   for general concept questions and clearly state why a restricted answer
   cannot be provided. Re-test m3_001 and m3_004; the former failed human
   review, while the latter passed behaviorally but had a clarity issue.
2. **Make student features dependable and transparent.** Support image
   analysis or clearly explain its limits, clarify data storage and instructor
   access, make accessibility settings easier to find, and provide reliable
   conversation persistence. These issues were raised by Testers 2–5.
3. **Persist instructor policies and make analytics meaningful.** Apply
   course restrictions consistently across accounts and use educational
   activity rather than demonstration data. George's notes also favor
   supplementing Canvas instead of requiring instructors to recreate courses.

Before claiming the M3 usability thresholds were met, collect session dates
and formats, criterion outcomes, and ratings. The interviews provide
qualitative direction, not the counts needed to establish those thresholds.
