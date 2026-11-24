import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`POST.json could not be copied from ${botDir} to ${outputDir}: ${message}`);
  process.exit(1);
}
