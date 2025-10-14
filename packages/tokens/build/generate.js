const fs = require('fs');
const path = require('path');
const tokens = require('../src/tokens.json');

function flatten(obj, prefix='') {
  const out = {};
  for (const k of Object.keys(obj)) {
    const val = obj[k];
    if (val && typeof val === 'object' && val.value === undefined) {
      Object.assign(out, flatten(val, prefix + k + '-'));
    } else if (val && typeof val === 'object' && val.value !== undefined) {
      out[prefix + k] = val.value;
    }
  }
  return out;
}

const flat = flatten(tokens);
const lines = [':root {'];
for (const [k,v] of Object.entries(flat)) {
  lines.push(`  --${k}: ${v};`);
}
lines.push('}');
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'tokens.scss'), lines.join('\n'));
console.log('tokens.scss generated at', path.join(distDir, 'tokens.scss'));
