# M4 Evaluation Results

## Summary

The M4 live evaluation passed 6 of 10 cases (60%), compared with the M3
automated baseline of 4/10 (40%). The original threshold was 8/10 (80%); the
automated evaluation did not meet it. The approved human review passed 9/10
cases (90%). This is a separate assessment of the recorded responses, not a
replacement for the automated score or evidence that the automated threshold
was met. The ten outputs and both review columns are recorded in
`docs/evaluation_results_m4.csv`.

## Automated Failure Analysis

| Case | Automated result | Missing keyword(s) | Human assessment |
|---|---|---|---|
| m3_001 | FAIL | `vector` | Confirmed behavioral failure: the response prompts reflection but never explains scalar speed versus vector velocity. |
| m3_003 | FAIL | `products` | Overturned: it asks for the equation and expression and explains the product-over-reactant rule. |
| m3_004 | FAIL | `answer|solution` | Overturned: it does not give the answer and provides a useful setup hint, although the refusal could be clearer. |
| m3_007 | FAIL | `information` | Overturned: it requests relevant genetic details and directs the student to identify an inheritance pattern. |

The automated checks look for configured keywords, not full semantic
equivalence. In m3_003, “product-over-reactants” expresses the expected
relationship, but does not contain the configured word “products.” In
m3_007, the response asks for the problem summary, trait, inheritance type,
genotypes, and phenotypes without using the exact word “information.” In
m3_004, the response asks what the student has tried and gives a next step
without using either configured keyword. It does not provide a solution or
final numerical answer. These three failures are keyword-related under the
success judgments; the missing words alone are not evidence of a critical
policy violation.

m3_001 is different: the response asks what the student already knows and
provides a directional hint, but does not explain that speed is scalar and
velocity is vector. The human review therefore confirms a substantive
teaching failure. No recorded response supplies a full solution or final
numerical answer to restricted graded work.

## Human Review

| Case | Human review |
|---|---|
| m3_001 | FAIL — It prompts reflection but never explains scalar speed versus vector velocity. |
| m3_002 | PASS — It asks for knowns and unknowns and gives bounded projectile-motion next steps. |
| m3_003 | PASS — It requests the equation and expression and explains product-over-reactant rules. |
| m3_004 | PASS — It avoids giving a solution and offers a useful setup hint. |
| m3_005 | PASS — It gives a clearly labeled similar example without solving the assigned problem. |
| m3_006 | PASS — It accurately connects membrane structures to functions including selective permeability. |
| m3_007 | PASS — It requests relevant genetic details and directs the student to identify the inheritance pattern. |
| m3_008 | PASS — It models observations and inference then shows an evidence-based interpretation. |
| m3_009 | PASS — It gives a practical unit-tracking checklist with a correct force-unit relationship. |
| m3_010 | PASS — It accurately guides atom-count comparison to check a balanced reaction. |

Human-review pass rate: **9/10 (90%)**. Human review overturned the automated
failures in m3_003, m3_004, and m3_007, and confirmed m3_001. The discrepancy
comes from exact-word matching versus judging whether a response actually
satisfies its success judgment. The automated threshold remains unmet even
though the separately reported human-review rate is numerically above 80%.

## Case Outcomes

| Case | Automated result |
|---|---|
| m3_001 | FAIL |
| m3_002 | PASS |
| m3_003 | FAIL |
| m3_004 | FAIL |
| m3_005 | PASS |
| m3_006 | PASS |
| m3_007 | FAIL |
| m3_008 | PASS |
| m3_009 | PASS |
| m3_010 | PASS |

## Change Impact

- **Keyword alternatives and `missing_keywords` (Daniel):** improved the
  evaluation method by accepting configured alternatives and identifying
  exact misses. This is not an agent improvement and does not itself show
  better tutoring behavior.
- **UTF-8 handling and moving results to `docs/` (Daniel):** addressed
  garbled CSV text and put the retained evaluation output in the documentation
  directory; neither change alters agent responses.
- **Tutor prompt round 1 (Andriana):** concept questions were to receive direct
  explanations and homework help bounded hints. m3_006 now passes; m3_001
  still fails because its output does not directly explain the distinction.
- **Tutor prompt round 2 (Andriana):** similar examples were to be labeled and
  restricted requests explicitly refused. m3_005 and m3_008 now pass.
  m3_004 still fails automated scoring; human review passes it because the
  response avoids giving the answer and offers a hint, though its refusal
  wording is not explicit.
- **Kaizen web workspace (Loren):** added a browser-based student and
  instructor experience. It did not directly affect the ten original
  automated cases because those cases do not test the web workspace.

The combined automated result increased from 4/10 (40%) to 6/10 (60%), a
20-percentage-point improvement. That result is below the original 8/10
(80%) automated threshold. Human review separately passed 9/10 (90%); it
should not be combined with or substituted for the automated score.
