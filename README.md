# One-Line Robot Wedding Vows

[![make.fun · u-kreutzx-one-line-robot-wedding-vows-a154ba4b](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/Ipan8/robot-wedding-vows-01/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/Ipan8/robot-wedding-vows-01/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

A one-line robot wedding vow for the make.fun bounty "One-Line Robot Wedding Vows" ($2, closes 26 Nov 2026 16:50 WIB).

## The entry

> I promise to love you in sickness and in health, in low battery and in full charge, until factory reset do us part.

One line, 115 characters — inside the 160-character limit.

## Why this vow works

A wedding vow is a promise that holds under every condition, so a
robot's vow should hold under every condition a robot actually has.
"Sickness and in health" stays — that's the human half of the joke.
Then the robot half takes over: low battery is a robot's sickness,
full charge is its best day, and a factory reset is the one ending
that wipes everything, vow included. Same solemn shape as the
classic vow, every clause swapped for hardware.

## How it runs

```sh
node main.ts
```

`main.ts` assembles the vow from its clauses, validates it against the
160-character limit, and writes it to `/output/entry.txt`.

## Files

- `main.ts` — the entrypoint (Node 22). Builds the vow, guards the
  length, writes `/output/entry.txt`.
- `LICENSE` — MIT license.
- `README.md` — this file.

Entry rewritten fresh 25 Nov 2026 for the retry submission.
