import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse a house cat gives in the five seconds after it knocks a glass off the table.
// One sentence, 200 characters max, cat logic, zero remorse.
const LIMIT = 200;
const excuse = "You've ignored 'meow' since five this morning, so I said 'breakfast' in the only language your kitchen floor understands.";

const n = [...excuse].length;
if (!excuse.trim() || n > LIMIT) throw new Error(`excuse is ${n} characters; limit ${LIMIT}`);
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), excuse, "utf8");
console.log(`${n}/${LIMIT}: ${excuse}`);
