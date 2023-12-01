function buttonAnimation(currentKey){
    document.querySelector(`.${currentKey}`).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(`.${currentKey}`).classList.remove("pressed");
    }, 100);
}

function updateTimer(time){
    document.querySelector(".timer").textContent = `⏲ ${time} Seconds left`;
}



document.addEventListener("keypress", function(event){
    //console.log(`key pressed ${event.key} key code = ${event.code}`);
    buttonAnimation(event.code);
});

let count = 6;
const timer = setInterval(function() {
  count--;
  updateTimer(count);
  if (count === 0) {
    clearInterval(timer);
    let str = document.querySelector("#textarea").value;
    //alert(str.length);
    document.querySelector(".heading").innerHTML = `${str.length} WPM`;
    //console.log("Time's up!");
  }
}, 1000);

