const express=require('express'),path=require('path'),app=express();
app.use(express.static('public'));app.use(express.json());
app.get('/',(r,s)=>s.sendFile(path.join(__dirname,'index.html')));
app.post('/api/signup',(r,s)=>{console.log('Signup:',r.body);s.json({success:true})});
app.post('/api/analytics',(r,s)=>s.json({success:true}));
app.get('/success',(r,s)=>s.send('<html><body style="display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:sans-serif"><div style="text-align:center"><h1>Thank you!</h1><p>Purchase successful.</p><a href="/">Go back</a></div></body></html>'));
const PORT=process.env.PORT||3000;app.listen(PORT,()=>console.log('Running on '+PORT));