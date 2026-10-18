export default async function handler(req,res){
res.setHeader('Access-Control-Allow-Origin','*');
try{
const sub=req.query.sub||'india';
const after=req.query.after||'';
const r=await fetch(`https://www.reddit.com/r/${sub}/hot.json?limit=12&after=${after}`,{headers:{'User-Agent':'YouthPulse/1.0'}});
const data=await r.json();
res.status(200).json(data);
}catch(e){res.status(200).json({data:{children:[],after:""}});}
}
