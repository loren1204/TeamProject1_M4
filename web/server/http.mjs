import {api} from './agent.mjs';
export default async function handler(req,res){
 try {
  const host=req.headers.host;
  const url=new URL(req.url||'/',`https://${host}`);
  const body=req.method==='POST'?(typeof req.body==='string'?req.body:JSON.stringify(req.body||{})):undefined;
  if(body?.length>24000){res.statusCode=413;res.end(JSON.stringify({error:'Request too large'}));return;}
  const headers=new Headers();for(const [k,v] of Object.entries(req.headers)){if(v)headers.set(k,Array.isArray(v)?v.join(','):v);}
  const result=await api(new Request(url,{method:req.method,headers,...(body?{body}:{})}),process.env);
  res.statusCode=result.status;result.headers.forEach((v,k)=>res.setHeader(k,v));res.end(await result.text());
 }catch{res.statusCode=500;res.setHeader('Content-Type','application/json');res.end(JSON.stringify({error:'Unable to process this tutoring request.'}));}
}
