
let bike1=document.getElementById("bike1")
let div=document.getElementById("s");
bike1.onclick=(e)=>{
    e.preventDefault()
    let inp=document.getElementById("r").value
    div.innerText=inp*5;
let ppp=Math.floor(Math.random()*100000).toString(16)
    document.body.style.backgroundColor=`#${ppp}`
}

let auto=document.getElementById("auto")
auto.onclick=(e)=>{
e.preventDefault()
let inp=document.getElementById("l").value
div.innerText=inp*6;
let ppp=Math.floor(Math.random()*100000).toString(16)
    document.body.style.backgroundColor=`#${ppp}`

}

let car=document.getElementById("car")

car.addEventListener("click",()=>{

    let inp=document.getElementById("x").value
    div.innerText=inp*8;
    let ppp=Math.floor(Math.random()*100000).toString(16)
    document.body.style.backgroundColor=`#${ppp}`
})