// IDLE TIMER
let timer,
  currSeconds = 0;
function resetTimer() {
  /* Hide the timer text */

  document.querySelector(".timertext").style.display = "none";

  /* Clear the previous interval */

  clearInterval(timer);

  /* Reset the seconds of the timer */

  currSeconds = 0;

  timer = setInterval(startIdleTimer, 1000);
}
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeypress = resetTimer;

function startIdleTimer() {
  /* Increment the 
                    timer seconds */

  currSeconds++;

  /* Set the timer text 
                    to the new value */

  document.querySelector(".secs").textContent = currSeconds;

  /* Display the timer text */

  document.querySelector(".timertext").style.display = "block";
}
setInterval(() => {
  if (currSeconds > 900) {
    location.href = "javascript:keeperLogOut()";
    location.href = "/session-end";
  }
}, 1000);
// Menu
// Get the modal
var modal = document.getElementById("Modal");

// Get the button that opens the modal
var btn = document.getElementById("Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function() {
    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function() {
      div.style.display = "none";
    }, 600);
  };
}
//Get the button
var mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function clearAll() {
  var x = document.cookie;
  document.cookie = "Yes";
  // alert(x);
  if ((x = "Yes")) {
    document.getElementById("clear").style.display = "none";
    document.getElementById("alert").style.display = "none";
    document.getElementById("alert2").style.display = "none";
    document.getElementById("alert3").style.display = "none";
    document.getElementById("alert4").style.display = "none";
    document.getElementById("alert5").style.display = "none";
    document.getElementById("alert6").style.display = "none";
    document.getElementById("alert7").style.display = "none";
    document.getElementById("alert8").style.display = "none";
    document.getElementById("alert9").style.display = "none";
  } else {
    document.cookie = "clear=Yes";
    document.getElementById("clear").style.display = "none";
    document.getElementById("alert").style.display = "none";
    document.getElementById("alert2").style.display = "none";
    document.getElementById("alert3").style.display = "none";
    document.getElementById("alert4").style.display = "none";
    document.getElementById("alert5").style.display = "none";
    document.getElementById("alert6").style.display = "none";
    document.getElementById("alert7").style.display = "none";
    document.getElementById("alert8").style.display = "none";
    document.getElementById("alert9").style.display = "none";
  }
}
