import {defineConfig,loadEnv} from 'vite';
// @ts-ignore Shared server adapter is JavaScript
import {api} from './server/agent.mjs';
export default defineConfig(({mode})=>({
 plugins:[{name:'nrp-local-api',configureServer(server){const env={...process.env,...loadEnv(mode,process.cwd(),'')};server.middlewares.use(async(req,res,next)=>{if(!req.url?.startsWith('/api/agent/'))return next();try{let body='';for await(const chunk of req){body+=chunk;if(body.length>24000){res.statusCode=413;res.end(JSON.stringify({error:'Request too large'}));return;}}const request=new Request(`http://${req.headers.host}${req.url}`,{method:req.method,headers:req.headers as Record<string,string>,...(req.method==='POST'?{body}:{} )});const response=await api(request,env);res.statusCode=response.status;response.headers.forEach((v:string,k:string)=>res.setHeader(k,v));res.end(await response.text());}catch{res.statusCode=500;res.end(JSON.stringify({error:'Local agent API failed'}));}});}}],
 build:{rollupOptions:{output:{manualChunks:{charts:['recharts']}}}}
}));
