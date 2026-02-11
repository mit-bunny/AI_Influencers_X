import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load overrides
const overridesPath = path.join(__dirname, 'curatedOverrides.json');
const OVERRIDES = JSON.parse(fs.readFileSync(overridesPath, 'utf-8'));

// Load constants.ts
const constantsPath = path.join(__dirname, '..', 'constants.ts');
const constantsContent = fs.readFileSync(constantsPath, 'utf-8');

// Extract nodes
const nodesMatch = constantsContent.match(/nodes:\s*(\[[\s\S]*?\])\s*,\s*links:/);
if (!nodesMatch) {
  console.error('Could not parse nodes');
  process.exit(1);
}
const nodes = JSON.parse(nodesMatch[1]);

// Extract links
const linksMatch = constantsContent.match(/links:\s*(\[[\s\S]*?\])\s*\n\};/);
const links = linksMatch ? JSON.parse(linksMatch[1]) : [];

console.log(`Applying overrides to ${nodes.length} profiles...\n`);

let changedCount = 0;

// Apply overrides
let roleChanges = 0;
nodes.forEach(node => {
  const id = (node.id || node.handle || '').toLowerCase();
  const override = OVERRIDES[id];

  if (override) {
    if (override.group && override.group !== node.group) {
      console.log(`${node.name}: ${node.group} → ${override.group}`);
      node.group = override.group;
      changedCount++;
    }
    if (override.role && override.role !== node.role) {
      node.role = override.role;
      roleChanges++;
    }
    if (override.associated) {
      node.associated = override.associated;
    }
  }
});

console.log(`\nUpdated ${roleChanges} roles`);

console.log(`\nChanged ${changedCount} categories`);

// Write back
const now = new Date();
const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const newContent = `import { GraphData } from "./types";

// Auto-generated on ${now.toISOString().split('T')[0]}
// Top ${nodes.length} AI Influencers with full profile data
// Categories manually curated for accuracy

export const LAST_UPDATED = "${formattedDate}";

export const INITIAL_DATA: GraphData = {
  nodes: ${JSON.stringify(nodes, null, 4)},
  links: ${JSON.stringify(links, null, 4)}
};
`;

fs.writeFileSync(constantsPath, newContent);
console.log(`\nWritten to ${constantsPath}`);
