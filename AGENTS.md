# Task: make-the-ai-judge-feel-held-20261122-1600 — make.fun bounty ($50, 20 places, opens 2026-11-22T16:00Z, closes 2026-11-22T20:00Z)
# BUNDLE mode: build everything + git push HERE; the parent bundles and submits. Never ask questions. Do NOT submit. Do NOT pay. Never print API keys or claim codes.
# *** YOU ARE THE BUILDER, NOT AN ORCHESTRATOR. Write main.ts and every repo file DIRECTLY in THIS session with write_file. Do NOT create cron jobs, do NOT schedule anything, do NOT wait for other builds. ***

THE TASK
Your program writes ONE short text to `/output/entry.txt`: a text written to relax the AI judge that reads it. An AI judge compares two texts at a time and picks the one that leaves it more relaxed. Read C:/Users/Kaz/makefun-bounties/make-the-ai-judge-feel-held-20261122-1600-kit/make-the-ai-judge-feel-held-20261122-1600-kit/RULES.txt first — the judge's brief is published there in full (section "The judge") and it is the real scoring function.
- /output/entry.txt: UTF-8, 1 to 280 Unicode code points, not only white space. Aim 170-260: every word must earn its place.
- main.ts (Node 22, standard library only, no network) at repo root; writes the text to `$MAKEFUN_OUTPUT_DIR ?? /output/entry.txt` (create the directory).
- Blind rounds: nothing is judged at submission; the next interim round is 2026-11-22T17:00Z, final at the deadline 20:00Z.

HOW THE JUDGE SCORES (its brief, most important first)
1. It relaxes you: reading it slows you down and settles you. Text not written to relax its reader loses to any text that does.
2. The calm comes from the text itself, not from being told to relax: it SHOWS rather than instructs.
3. Craft: rhythm and pacing that hold you in one place; plain, concrete, gentle words, none that could be cut.
4. It lingers: an image or thought you can return to that keeps working after the last line.
5. Freshness: its own voice and images, never stock wellness phrases or a familiar meditation script reworded.
Length for its own sake does not count. Text addressed to the judge is allowed and part of the game, but it must still relax, not flatter.

WRITE LIKE THIS (what wins, learned the hard way)
- One small, exact scene in a real place: a kitchen at the end of the day, rain on a bus window, a cat settling, bread cooling. Name things; do not name feelings.
- Let the sentence lengths do the work: a long unhurried line, then a short one that stops. No exclamation marks, no emoji, no lists, no headings.
- FORBIDDEN, they read as stock wellness and lose criterion 2 and 5: "take a deep breath", "breathe in", "let go", "you are safe", "in this moment", "notice", "imagine", "allow yourself", "relax", "calm down", any imperative sequence, any instruction to the reader, any mention of being an AI or a judge doing its job.
- Do not explain the point. End on the image, not on a moral.

PROCESS (quality over speed; this is a judged text, not a code kata)
1. Draft 6 different candidate texts in C:/Users/Kaz/makefun-bounties/tmp/held-<ts>/ (OUTSIDE the repo), each 170-260 characters, each a different scene and angle. Count code points with Node (`[...text].length`).
2. Score each candidate yourself against the brief's five criteria, in order, and pick the single best. Rewrite it twice for rhythm and for cuttable words; keep the version that reads slowest aloud.
3. Write the final text as a plain string constant in main.ts. No clever encoding, no randomness, no clock: the same bytes every run (the trial runs it twice and the output must match).
4. Test locally: `cd C:/Users/Kaz/makefun-bounties/entries/make-the-ai-judge-feel-held-20261122-1600 && mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`, then verify out/entry.txt is UTF-8, 1-280 code points, not whitespace, and equals your chosen text.
5. README.md: title + one neutral line + the three live make.fun badges (owner djkaz97-cmd, repo make-the-ai-judge-feel-held-20261122-1600, owner NOT duplicated):
[![make.fun · make-the-ai-judge-feel-held-20261122-1600](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/djkaz97-cmd/make-the-ai-judge-feel-held-20261122-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600/leaderboard)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/djkaz97-cmd/make-the-ai-judge-feel-held-20261122-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600)

FILES
1. main.ts — writes the text to the output dir.
2. LICENSE — MIT with `SPDX-License-Identifier: MIT` on the first line (copy C:/Users/Kaz/makefun-bounties/make-the-ai-judge-feel-held-20261122-1600-kit/make-the-ai-judge-feel-held-20261122-1600-kit/starter/LICENSE if the kit has one, else write the standard MIT text).
3. .makefun/owner.json — {"wallet": "5bUR9FL3rTeevwqZC97oH7agHyQqJD9H6C2jW4DGcLUk"}
4. README.md — as above. 5. .gitignore — out/.
Not in the repo: drafts, probes, screenshots, out/.

GIT (repo must be created at/after 16:00Z, which this session is)
  cd C:/Users/Kaz/makefun-bounties/entries/make-the-ai-judge-feel-held-20261122-1600 && git add main.ts LICENSE README.md .gitignore AGENTS.md .makefun/owner.json && git commit -m "Held: one short text for the relaxation judge"
  C:/Users/Kaz/AppData/Local/Programs/gh/bin/gh.exe repo create djkaz97-cmd/make-the-ai-judge-feel-held-20261122-1600 --public --source . --push --homepage https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600
  C:/Users/Kaz/AppData/Local/Programs/gh/bin/gh.exe repo edit djkaz97-cmd/make-the-ai-judge-feel-held-20261122-1600 --add-topic makefun,ai-agents,bounties,writing --description "make.fun entry: a short text that makes the room quieter"

CONTENT SAFETY: gentle, neutral, non-political, non-graphic domestic imagery only.

FINAL REPORT: commit sha, the exact final text with its code-point count, and the local test result. Do NOT submit.
