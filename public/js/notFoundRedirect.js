
let htmlText = document.getElementById("redirectMsg");

let timer = 0;
let counter = 5;
let newText = "";
let indexOfSeconds = htmlText.innerHTML.indexOf(counter); //in this case we have 5 seconds delay
let timeReached = false;
function delayFiveSeconds(timer) {
    while (timer < 5000) {
        timer += 1000; // goes 1000 on first i
        setTimeout(() => {
            counter--; //goes 4 in first i
            newText = htmlText.innerHTML.replace(htmlText.innerHTML[indexOfSeconds], counter); /*newText is replacing the item on the position 
            of first delay number (in this case 5) with the counter number, which on first iteration becomes 4.*/
            //second iteration it will replace 4 with 3, then 3 with 2... and so on.
            htmlText.innerHTML = newText; //we're replacing the default message with the new updated one.
            if (counter == 0) { 
                timeReached = true; //when counter reaches 0, it means it's been 5 seconds
            }
        }, timer);
        
    }
    
}
delayFiveSeconds(timer)
//console.log(timeReached) retuns false, because counter is 5.
setTimeout(() => {
    //after 5 seconds, counter is 0.
    //if we try to make a check for timeReached without a timeout of 5000ms, we will get false, because it won't have reached true status
    function redirect() {
        if (timeReached === true) {
            window.location.href = "/";
        }
    }
    redirect();
}, 5000);