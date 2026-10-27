const input = document.getElementById("input")
const save = document.getElementById("save")
const display=document.getElementById("display")
const camero=document.getElementById("camero")

let storege=JSON.parse(localStorage.getItem("users")) || []

save.addEventListener('click',function(){
    let name = input.value.trim()

    if(name===""){
        display.innerText="enter some thing"
        return
    }
    display.innerHTML=""
    if(storege.includes(name)){
        display.textContent="user allready exitist"
        return
    }
    display.innerHTML=""


    storege.push(name)
      input.value=""
    localStorage.setItem("users",JSON.stringify(storege))

    showmessage()
  
})
function showmessage(){
    display.innerText=""
storege.forEach( function(data,index){
let p = document.createElement('p')
let button=document.createElement('button')
let start=document.createElement('button')
let video = document.createElement('video')

p.innerHTML=data
button.innerHTML="delete"
start.innerHTML="<h3>start camero</h3>"



display.appendChild(p)
display.appendChild(button)
display.appendChild(start)
display.appendChild(video)

button.addEventListener('click',function(){
    storege.splice(index,1)
    localStorage.getItem("users")
    showmessage()
})

start.addEventListener('click', async function () {
    let media= await navigator.mediaDevices.getUserMedia({
        video:true,
        audio:false
    })

    camero.srcObject=media
})
})
}