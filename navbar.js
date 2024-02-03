let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
 // JavaScript to increment and display visit count
 document.addEventListener("DOMContentLoaded", function() {
    // Check if the visit count is already stored in localStorage
    let visitCount = localStorage.getItem("visitCount");

    // If not, initialize it to 0
    if (!visitCount) {
        visitCount = 0;
    }

    // Increment the visit count
    visitCount++;

    // Update the visit count in localStorage
    localStorage.setItem("visitCount", visitCount);

    // Display the visit count in the span element
    document.getElementById("visitCounter").innerText = visitCount;
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').css('background-color', 'black'); /* Replace with your desired color */
        } else {
            $('header').css('background-color', '#c37960'); /* Replace with the initial color */
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.open').css('background-color', 'black'); /* Replace with your desired color */
        } else {
            $('.open').css('background-color', '#c37960'); /* Replace with the initial color */
        }
    });
});