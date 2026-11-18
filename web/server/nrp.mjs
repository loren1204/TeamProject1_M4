export class NrpError extends Error {
  constructor(code,message,stage,status){super(message);this.code=code;this.stage=stage;this.upstreamStatus=status;}
}
export async function nrpCompletion(c,messages,{stage='connection check',tokens=2048,timeout=45000,reasoningEffort}={}){
 let url;
 try {url=new URL(c.base);if(url.protocol!=='https:'||url.username||url.password||url.search||url.hash)throw new Error();}catch{throw new NrpError('NRP_INVALID_URL','The NRP base URL must be an HTTPS API base URL without credentials or query parameters.',stage);}
 const endpoint=url.href.replace(/\/+$/,'').replace(/\/chat\/completions$/,'')+'/chat/completions';
 const effort=reasoningEffort||(/gpt[-_]oss/i.test(c.model)?'low':undefined);
 const payload={model:c.model,messages,max_tokens:tokens,temperature:0.3,...(effort?{reasoning_effort:effort}:{})};
 let r;
 try {r=await fetch(endpoint,{method:'POST',headers:{Authorization:`Bearer ${c.key}`,'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(timeout)});}
 catch(e){if(e?.name==='TimeoutError'||e?.name==='AbortError')throw new NrpError('NRP_TIMEOUT',`NRP timed out during the ${stage}. Try again or check the inference service.`,stage);throw new NrpError('NRP_NETWORK',`The server could not reach NRP during the ${stage}. Check the endpoint and network connection.`,stage);}
 if(!r.ok){const status=r.status;const message=status===401||status===403?'NRP rejected the API key or model permission.':status===404?'NRP returned HTTP 404. Check the API base URL and exact model name.':status===429?'NRP is rate limited or busy. Try again shortly.':status===400||status===422?'NRP rejected the request format (HTTP '+status+'). Check model support and the reasoning_effort setting.':'NRP returned HTTP '+status+'. Check the inference service.';throw new NrpError('NRP_HTTP_'+status,message,stage,status);}
 let d;try{d=await r.json();}catch{throw new NrpError('NRP_INVALID_RESPONSE','NRP returned a response that was not JSON. Check the API endpoint.',stage);}
 const choice=d.choices?.[0],text=choice?.message?.content;
 if(typeof text!=='string'||!text.trim()){
  if(choice?.finish_reason==='length')throw new NrpError('NRP_OUTPUT_LIMIT',`NRP used the output budget before returning text during the ${stage}. Increase that stage’s token budget.`,stage);
  throw new NrpError('NRP_EMPTY_RESPONSE',`NRP returned no answer text during the ${stage}. Check the model’s chat-completion support.`,stage);
 }
 return text;
}
export function safeNrpError(e){return e instanceof NrpError?{error:e.message,code:e.code,stage:e.stage,...(e.upstreamStatus?{upstreamStatus:e.upstreamStatus}:{})}:{error:'The NRP request failed unexpectedly. Run the local connection check for more information.',code:'NRP_UNEXPECTED'};}
