const playbtn= document.querySelector(".play");
const lapbtn= document.querySelector(".lap");
const resetbtn= document.querySelector(".reset");
const second= document.querySelector(".sec");
const minute= document.querySelector(".min");
const msecond= document.querySelector(".msec");
const clearbtn= document.querySelector(".clear-btn");



let isplay=false;
let secCounter=0;
let mincounter=0;
let mseccounter=0;
let sec;
let msec;
let min;

const toggelbtn=()=>{
    lapbtn.classList.remove("hidden");
    resetbtn.classList.remove("hidden");
}



const play=()=>{

    if(!isplay){
        playbtn.innerHTML="Pause";



        msec=    setInterval(() => {
            if(mseccounter===100){
                mseccounter=0;
                second.innerHTML=` ${++secCounter}:`;
              
if(secCounter===60 ){
    secCounter=0;
    minute.innerHTML=`${++mincounter}: `;
    
}
            }
            msecond.innerHTML=`${++mseccounter} `;
        }, 10);


        




        isplay=true;
    }
    else{
        playbtn.innerHTML="Play";
        clearInterval(msec);
        isplay=false;

    }
   

    toggelbtn();
}

const playsec=()=>{

}



const reset=()=>{
    clearInterval(msec);
    isplay = false;     
    playbtn.innerHTML = "Play"; 
    lapbtn.classList.add("hidden");
    resetbtn.classList.add("hidden");
    secCounter = 0;     
    mincounter = 0;
    mseccounter = 0;
    minute.innerHTML = '00: ';
    second.innerHTML = '00: ';
    msecond.innerHTML = ' 00';
}

const lapfun=()=>{ const lapItem = document.createElement('li');
    lapItem.className = 'laps-items';
    
    const lapNumber = document.createElement('span');
    lapNumber.className = 'number';
    lapNumber.innerText = `#${document.querySelectorAll('.laps-items').length + 1}`;

    const lapTimeStamp = document.createElement('span');
    lapTimeStamp.className = 'time-stamp';
    lapTimeStamp.innerText = `${minute.innerText} ${second.innerText} ${msecond.innerText}`;

    lapItem.appendChild(lapNumber);
    lapItem.appendChild(lapTimeStamp);

    document.querySelector('.laps').appendChild(lapItem);
}


 const clearfun=()=>{
    const  lapsContainer = document.querySelector('.laps');
while(lapsContainer.firstChild ){
    lapsContainer.removeChild(lapsContainer.firstChild);
 }
 }


playbtn.addEventListener("click",play);
resetbtn.addEventListener("click",reset);
lapbtn.addEventListener("click",lapfun);
clearbtn.addEventListener("click",clearfun);

