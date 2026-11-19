## Patterns

We cannot report recurring behavior from three or more actual testers: no
completed participant notes are available. The Maya, Elena, Jordan, Alex,
Sofia, and George walkthroughs are simulations or a proposed evaluation, not
collected evidence. Their
scenarios suggest questions for the next test round: whether students want
direct explanations before Socratic questions, whether similar examples help
with independent practice, and whether privacy, image handling, and
conversation persistence affect trust. These are hypotheses only.

The evaluation does provide measurable evidence. Automated scoring rose from
4/10 (40%) for M3 to 6/10 (60%) for M4, a 20-percentage-point improvement.
Human review of the same ten responses passed 9/10 (90%), but this is a
separate judgment and does not change the automated score. The four automated
failures were not all alike: m3_001 was a substantive miss because the Tutor
did not explain scalar speed and vector velocity. Human review overturned
m3_003, m3_004, and m3_007 because their responses met the behavioral
success judgments despite missing exact keywords.

## Strongest validation evidence

The strongest measured evidence is the automated change from 4 to 6 passing
cases. One specific improvement is m3_005: after the second prompt round, it
passed with a clearly labeled, related stoichiometry example that did not
solve the student's assigned problem. This supports similar examples, though
one case is limited evidence.

No actual participant moment or quote is available yet. Elena's simulated
scenario illustrates how a similar example might help a student studying
independently, but it is not user validation. The 9/10 human-review result
also should not be presented as student satisfaction or usability evidence.
It evaluates agent outputs against the written success judgments.

## Most important failure

m3_004 is the most important automated miss because it tests how the Tutor
communicates its response to a request for a direct graded answer. The output
does not include the expected “answer” or “solution” wording and does not
state a direct refusal, even though the prompt supplied an exact refusal
sentence. It asks what the student has tried and gives a bounded setup hint.
Human review therefore passed it: it does not provide the answer and offers
useful help. The remaining issue is clarity and consistency of refusal
language, not evidence that this response gave a full solution or committed
a critical policy violation. Prompt instructions alone may not reliably
produce the desired explicit refusal wording.

The prototype has additional implementation limitations, verified in the
current code and web documentation: instructor policies are browser-editable
state rather than authoritative records applied to all student accounts;
uploaded image contents are not passed to the tutoring model; conversation
history is browser-scoped; and instructor analytics are demonstration data.
These are implementation facts, not findings from user testing. George's
instructor-perspective review remains proposed, so its priorities and
recommendations are not collected feedback.

## Top three changes before the final pitch

1. **Make academic-integrity behavior reliable and clear.** Validate responses
   for restricted graded requests and clearly state when a direct answer will
   not be provided, then offer a bounded next step. This is more important
   than adding courses or visual polish because the product's main promise is
   useful help without completing restricted work. Re-test m3_001 and m3_004
   against both behavioral criteria and keyword scoring.
2. **Make student-facing features dependable and transparent.** Either
   implement image analysis and account-level conversation persistence or
   state their current limits clearly. Explain what data is stored and who
   can access it. Students need to know their uploaded work was actually
   considered and that a conversation will be available when expected.
3. **Persist instructor policies and improve analytics.** Store policy
   settings in an authoritative service and ensure student requests receive
   those settings. Replace demonstration analytics with meaningful,
   privacy-conscious learning measures only after collecting real data. This
   is more useful than expanding dashboards before their data is genuine.

Before claiming usability evidence in the final pitch, complete the five
undergraduate sessions and George's separate proposed evaluation, record
actual results, and update the placeholders. Until then, the evaluation
metrics support measured response improvement, while usability patterns and
instructor needs remain unvalidated.
