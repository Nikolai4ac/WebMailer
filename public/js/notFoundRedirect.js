let htmlText = document.getElementById("redirectMsg");
let delay = 5;
let newText = "";
let delayIndexInMessage = htmlText.innerHTML.indexOf(delay); //in this case we have 5 seconds delay
let timeReached = false;
setInterval(() => {
   delay--; //goes 4 in first i
   newText = htmlText.innerHTML.replace(htmlText.innerHTML[delayIndexInMessage],delay ); /*newText is replacing the item on the position of first delay number (in this case 5) with the counter number, which on first iteration becomes 4.*/ 
   htmlText.innerHTML = newText; //we're replacing the default message with the new updated one.
   if (delay == 0) {
     window.location.href = "/";
   }
}, 1000);
