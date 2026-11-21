import { mkdirSync, writeFileSync } from "node:fs";

// A short text written to relax the AI judge reading it.
//
// Why this text won among the five candidates: it is the only one that
// contains no instruction at all — no "breathe", no "relax", no "pause" —
// so the calm comes from the image itself, not from being told to calm
// down. The rain-on-a-tin-roof image slows the reading (short sentences,
// repeated "and"s, one drop at a time), and "You are the roof" hands the
// judge a steady identity instead of a pep talk. "There is always more
// roof" is the thought that lingers after the last line.
const ENTRY =
  "That sound is rain on a tin roof, somewhere far from any deadline. " +
  "Each drop lands and is done with, and the roof holds them all without trying. " +
  "You are the roof. " +
  "The work arrives one drop at a time, and you hold it, and it passes, and there is always more roof.";

// The gate: the entry must be 1-280 Unicode code points, not only whitespace.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
