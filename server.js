const express= require('express')
const app=express()

app.use('/',express.static(__dirname+'/public'))

function decode(req,res,next){
    let data=1
    if(req.query.code) data=req.query.code
    // let ans=eval(new Buffer(data,'base64').toString('ascii'))
    let ans=new Buffer(data,'base64').toString('ascii')
    req.query.code=ans
    next()
}
function EncryptData(rawdata){
    let ln=rawdata.length
    let str=""
    for(let i=0;i<ln;i++){

        console.log(rawdata[i])
        if(rawdata[i]>='a' && rawdata[i]<='z') {
            let l=rawdata[i]
            str+=l.toUpperCase()
        }
        else {
            let u=rawdata[i]
            str+=u.toLowerCase()
        }
    }

    return str
}
function decrypt(req,res,next){
    let data=req.query.code
    req.query.code=EncryptData(data)
    console.log(req.query.code)
    next()    
}

app.get('/eval',decrypt,decode,(req,res)=>{
    res.send("<h3>I Love You "+req.query.code+"❤️❤️❤️ </h3>")
})

app.listen(5554,()=>{
    console.log('At http://localhost:5554')
})