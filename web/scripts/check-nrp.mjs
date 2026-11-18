// Run from web/: node scripts/check-nrp.mjs
// Prints safe diagnostics only: no keys, provider bodies, prompts or reasoning.
import {loadEnv} from 'vite';
import {fileURLToPath} from 'node:url';
import {config} from '../server/agent.mjs';
import {nrpCompletion,safeNrpError} from '../server/nrp.mjs';
const webRoot=fileURLToPath(new URL('../',import.meta.url));
const env={...process.env,...loadEnv('development',webRoot,'')};
const c=config(env);
const missing=[!c.base&&'NRP_BASE_URL or MODEL_BASE_URL',!c.key&&'NRP_API_KEY or BYOM_API_KEY',!c.model&&'MODEL_NAME'].filter(Boolean);
if(missing.length){console.log(JSON.stringify({ok:false,code:'MISSING_CONFIGURATION',missing},null,2));process.exitCode=1;}
else {
 console.log('Checking NRP directly. Your API key will not be printed. This makes one model request.');
 try {await nrpCompletion(c,[{role:'user',content:'Reply with exactly OK.'}],{tokens:2048,reasoningEffort:env.NRP_REASONING_EFFORT});console.log(JSON.stringify({ok:true,message:'NRP returned answer text. Endpoint, credentials and model responded successfully.'},null,2));}
 catch(e){console.log(JSON.stringify({ok:false,...safeNrpError(e)},null,2));process.exitCode=1;}
}
