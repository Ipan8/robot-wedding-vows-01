// One-Line Robot Wedding Vows — make.fun bounty entry.
//
// The joke, in one sentence: a wedding vow is a promise that survives
// every condition — so a robot's vow should survive every condition a
// robot actually has. Human vows cover "sickness and in health"; a
// robot's equivalent failure modes are a dying battery and a full
// charge. And where a human vow ends at "till death do us part", a
// robot's ends at the one thing that wipes its memory clean: a
// factory reset. The vow is a mirror: same solemn shape, same
// cadence, but every clause swapped for hardware.
//
// How this file works:
//   1. The vow is assembled from named parts, not pasted as one blob,
//      so each clause of the joke is visible and editable on its own.
//   2. A guard checks the assembled line against the bounty limit
//      (160 characters) before anything is written.
//   3. The line is written to /output/entry.txt with a trailing
//      newline, exactly as the bounty expects.

import { mkdirSync, writeFileSync } from "node:fs";

// The bounty caps a one-line entry at 160 characters. Our vow is
// 115, comfortably inside — but the guard below makes that a fact
// the program checks, not a fact we just hope stays true.
const MAX_LINE_LENGTH = 160;

// The three promises inside the vow, in the order they are spoken.
// Keeping them as separate pieces means a future edit — a stronger
// punchline, a different failure mode — touches one line, not the
// whole vow.
const vowParts = {
  // The classic opening, untouched: a robot can still promise love.
  opening: "I promise to love you",
  // The human condition, kept for the rhyme of the joke.
  humanCondition: "in sickness and in health",
  // The robot condition: the battery is the robot's body, so its
  // charge level is its health. Low battery is its sickness;
  // full charge is its best day.
  robotCondition: "in low battery and in full charge",
  // The ending: not death, but the reset that erases everything
  // the robot remembers — including the vow itself.
  ending: "until factory reset do us part.",
};

// Join the parts the way the vow is spoken: the opening flows
// straight into the human condition with no comma ("love you in
// sickness..."), then a comma before the robot condition and another
// before the ending. That exact punctuation is what makes the line
// 115 characters.
function assembleVow(parts: typeof vowParts): string {
  return (
    `${parts.opening} ${parts.humanCondition}, ` +
    `${parts.robotCondition}, ${parts.ending}`
  );
}

// A one-line entry must be exactly one line: no embedded newlines,
// no trailing spaces, and short enough for the limit.
function validateVow(line: string): void {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Vow must be a single line, but it contains a newline.");
  }
  if (line.trim() !== line) {
    throw new Error("Vow must not have leading or trailing whitespace.");
  }
  if (line.length > MAX_LINE_LENGTH) {
    throw new Error(
      `Vow is ${line.length} characters, over the ${MAX_LINE_LENGTH} limit.`,
    );
  }
}

// A small report so a human running this can see the shape of the
// entry at a glance: length, word count, and how much headroom the
// 160-character limit leaves. Purely informational — it never
// changes the entry itself.
function describeVow(line: string): string {
  const words = line.split(" ").filter(Boolean).length;
  const headroom = MAX_LINE_LENGTH - line.length;
  return `${line.length} characters, ${words} words, ${headroom} characters of headroom`;
}

function main(): void {
  const vow = assembleVow(vowParts);
  validateVow(vow);

  // The bounty reads the entry from this exact path.
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", vow + "\n");

  console.log(`Vow written (${describeVow(vow)}):`);
  console.log(vow);
}

main();
