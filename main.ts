import { mkdirSync, writeFileSync } from 'node:fs';

const TEXT =
  'The loaf is out of the oven and the kitchen has gone quiet around it. The window has gone dark. Behind the wall, the refrigerator hums, stops, hums, and the crust ticks as it cools, the smallest clock in the house. Nobody needs anything for a while.';

const dir = (process.env.MAKEFUN_OUTPUT_DIR ?? '').trim() || '/output';
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir.replace(/\/+$/, '')}/entry.txt`, TEXT, { encoding: 'utf8' });
