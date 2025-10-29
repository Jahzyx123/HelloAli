// generator.js (ULTRA)
function randomFrom(arr){return arr[Math.floor(Math.random()*arr.length)];}
function randomKey(obj){const k=Object.keys(obj);return k[Math.floor(Math.random()*k.length)];}
function pickMultiple(arr,count){const out=[];const used=new Set();for(let i=0;i<count;i++){let idx=Math.floor(Math.random()*arr.length);while(used.has(idx)&&used.size<arr.length)idx=Math.floor(Math.random()*arr.length);used.add(idx);out.push(arr[idx]);}return out;}
function generateCreature(config){
  const colorKey=randomKey(COLOR_PALETTES);const color=COLOR_PALETTES[colorKey];
  const atmosphere=randomFrom(ATMOSPHERIC_EFFECTS);const environment=randomFrom(ENVIRONMENT_DETAILS);
  const feature=randomFrom(UNIQUE_FEATURES);
  const stateKey =randomFrom(CREATURE_STATES);
  const state=CREATURE_STATES[stateKey];
  const mutationKey=randomKey(MUTATION_ENGINES);const mutationTrait=randomFrom(MUTATION_ENGINES[mutationKey]);
  const mutationTrait2=randomFrom(MUTATION_ENGINES[randomKey(MUTATION_ENGINES)]);
  const connector=(typeof CONNECTORS!=='undefined')?randomFrom(CONNECTORS):'and';
  const biologyKey=randomKey(BEYOND_EARTH_BIOLOGY);const biology=BEYOND_EARTH_BIOLOGY[biologyKey];
  const vertical=(typeof VERTICAL_STRETCH_EFFECTS!=='undefined')?randomFrom(VERTICAL_STRETCH_EFFECTS):null;
  const includeExtra=(config.length==='LONG'||config.length==='MAXIMUM');const includeMax=(config.length==='MAXIMUM');
  const intro=[`A ${config.size.toLowerCase()} specimen classified as: ${biology.title}.`,`${biology.description}`,`It manifests as ${biology.body}, ${biology.organic}.`];
  const physical=[`Color palette: ${color.name} — ${color.primary.join(', ')}.`,`Notable organ: ${feature.replace(/_/g,' ')}.`,`Local atmosphere: ${atmosphere}.`,`Surrounding environment: ${environment}.`];
  const stateBlock=[`[CURRENT STATE — ${stateKey}]`,`Posture: ${state.posture}.`,`Behavior: ${state.behavior}.`,`Color modulation: ${state.color_mod}.`,`Movement: ${state.movement}.`];
  const mutationBlock=[`Mutation engine: ${mutationKey} — ${mutationTrait} ${connector} ${mutationTrait2}.`];
  const notes=[`Mood: ${color.mood}.`,`Glow: ${color.glow}.`,`Surreal: ${biology.surreal}.`];
  const extraBlock= includeExtra ? ['[STRUCTURAL VARIATIONS]',`Vertical adaptation: ${vertical}.`,`Additional traits: ${pickMultiple(UNIQUE_FEATURES,3).map(s=>s.replace(/_/g,' ')).join('; ')}.`] : [];
  const maxBlock = includeMax ? ['[DEEP-DIVE METABOLICS]',`Symbiotic relationships: ${pickMultiple(Object.keys(BEYOND_EARTH_BIOLOGY),2).join(' & ')}.`,`Mutation lineage summary: ${mutationKey} series leading to ${randomFrom(UNIQUE_FEATURES)}.`] : [];
  const blocks=[intro.join(' '),physical.join(' '),stateBlock.join(' '),mutationBlock.join(' '),notes.join(' ')].concat(extraBlock).concat(maxBlock);
  if(Math.random()>0.6){blocks.splice(2,0,blocks.pop());}
  return blocks.join("\n\n");
}