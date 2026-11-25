import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Unsent: The Micro-Confession Sprint
// One two-part micro-confession: a To: line and the unsent line itself,
// written exactly as it was typed. Deterministic, standard library only.
// Written byte-exact with no trailing newline, so the gate counts exactly
// the two lines below and nothing else.
const ENTRY =
  "To: Maya\n" +
  "I still have the ticket stub from the night we missed the 11:40 train and walked home in the rain, and I never told you I was hoping we'd miss it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
