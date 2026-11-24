import * as fs from "fs";

// One-Line Robot Wedding Vows — make.fun entry.
// A robot's wedding vow: love, but make it hardware.
// One line, 115 characters — well under the 160-character limit.
const vow =
  "I promise to love you in sickness and in health, in low battery and in full charge, until factory reset do us part.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", vow + "\n");
console.log(vow);
