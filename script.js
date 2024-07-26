let startbtn=document.querySelector("#start")
let pause=document.querySelector("#pause")
let reset=document.querySelector("#reset")
let lap=document.querySelector("#lap")
let labtime=document.querySelector(".labtime")
let hr=document.getElementById('hr')
let min=document.getElementById('min')
let sec=document.getElementById('sec')
let cou=document.getElementById('count')
let lapContainer = document.querySelector("#lapContainer");
let hour = 0
let minute = 0
let second = 0
let count = 0
let laps=[]


startbtn.addEventListener('click',()=>{
    timer=true
    stopwatchsection()
})
pause.addEventListener('click',()=>{
    timer=false
})
reset.addEventListener('click',()=>{
    timer=false
    hour=0
    minute=0
    second=0
    count=0
    hr.innerHTML="00"
    min.innerHTML="00"
    sec.innerHTML="00"
    cou.innerHTML="00"
    laps=[]
    lapContainer.innerHTML=''
})
lap.addEventListener("click",()=>{
 if(timer){
    let laptime=`${formattime(hour)}:${formattime(minute)}:${formattime(second)}:${formattime(count)}`
    laps.push(laptime)
    displaylaps()
 }
})


function stopwatchsection(){
    if(timer){
        count++
        if(count==100){
            second++
            count=0
           
        }
        if(second==60){
            minute++
            second=0
        }
        if(minute==60){
            hour++
            second=0
            minute=0
        }
        hr.innerHTML=formattime(hour)
        min.innerHTML=formattime(minute)
        sec.innerHTML=formattime(second)
        cou.innerHTML=formattime(count)
        setTimeout(stopwatchsection,10

        )
       
       
       
    }
}
function formattime(time){
    return time < 10 ? `0${time}`:time
}
function displaylaps(){
    lapContainer.innerHTML=""
    laps.forEach((lap,index)=>{
        let lapelem=document.createElement("div")
        lapelem.textContent=`Lap${index+1}:${lap}`
        lapContainer.appendChild(lapelem)

    })
   }
