//final-modal
var finalModal = document.getElementById('finalModal');

// Get the button that opens the modal
var finalBtn = document.querySelector('#finalBtn');

// Get the <span> element that closes the modal
var finalSpan = document.getElementsByClassName("finalModalBtn")[0];

// When the user clicks on the button, open the modal
finalBtn.onclick = function() {
    finalModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
finalSpan.onclick = function() {
    finalModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        finalModal.style.display = "none";
    }
}
