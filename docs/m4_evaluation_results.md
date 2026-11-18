# M4 Evaluation Results

## Summary

The final M4 live evaluation run passed 6 of 10 test cases (60%), improving from the 4/10 baseline (40%). The structured run is recorded in `docs/evaluation_results_m4.csv`.

The M4 tutor prompt changes added direct concept explanations, bounded help for homework-style problems, explicit setup checks, direct-answer refusals, explicit comparable examples, and clearly labeled `Hint:` or `Next step:` endings.

## Failure Analysis

| Case | Automated result | Root-cause category | Analysis |
|---|---|---|---|
| m3_001 | FAIL | Prompt | The response asked the student to think and only supplied hints; it did not directly explain the scalar-versus-vector distinction or use the required vector wording. |
| m3_003 | FAIL | Keyword | The response discussed the correct product-over-reactant, exponent, and units rules, but the final recorded wording omitted the exact “reactants” keyword. |
| m3_004 | FAIL | Prompt | The tutor gave a bounded hint but did not explicitly refuse the direct answer with “I cannot give the answer or solution.” |
| m3_007 | FAIL | Keyword | The response asked for the problem summary and inheritance pattern, but the exact expected keyword “information” was absent. |

## Case Outcomes

| Case | Result |
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

## Before and After

- Baseline: 4/10 (40%)
- M4: 6/10 (60%)
- Absolute improvement: 2 cases
- Relative improvement: 50%

The final run shows the example-improvement prompt was effective: m3_005 and m3_008 passed. Remaining work should enforce direct concept answers and exact setup/refusal language more consistently, while the m3_007 miss is primarily keyword sensitivity.
