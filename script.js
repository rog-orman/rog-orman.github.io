window.onload = function() { document.body.scrollTop = 0; }

function toggleMenu() {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".external-link");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const continueBtn = document.getElementById("continue");
    const cancelBtn = document.getElementById("cancel");
    let targetUrl = "";

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Stop the default action
            targetUrl = this.href;
            popup.classList.add("active");
            popup.style.display = "block";
            overlay.style.display = "block";
        });
    });

    continueBtn.addEventListener("click", function() {
        window.location.href = targetUrl;
    });

    cancelBtn.addEventListener("click", function() {
        popup.classList.remove("active");
        setTimeout(() => {
            popup.style.display = "none";
            overlay.style.display = "none";
        }, 300);
    });
});
