document.addEventListener("DOMContentLoaded", function() {

    const homeLink = document.querySelector('.home-link');


    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "lab.html";
    });
});
