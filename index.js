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

let count = 60;
const timer = setInterval(function() {
  count--;
  updateTimer(count);
  if (count === 0) {
    clearInterval(timer);
    let str = document.querySelector("#textarea").value;
    let wpm = str.split(" ").length;
    //alert(str.length);
    document.querySelector(".heading").innerHTML = `${wpm} WPM`;
    document.querySelector("#textarea").disabled = true;
    document.querySelector(".timer").textContent = `⏲ Times up!`;
    //console.log("Time's up!");
  }
}, 1000);

