let inpArea= document.getElementById('inpArea')
let btnEncode= document.getElementById('btnEncode')
let btnEncrypt= document.getElementById('btnEncrypt')
let code=document.getElementById('code')
btnEncode.onclick = ()=>{
    code.value=btoa(inpArea.value);
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

btnEncrypt.onclick= ()=>{
    let data= code.value
    data=EncryptData(data)
    code.value=data
}