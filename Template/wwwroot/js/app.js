// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




//Mobile Button. No Jquery required!
var overlayClicked = document.getElementById('sidebar-overlay'); // or whatever triggers the toggle

overlayClicked.addEventListener('click', function (e) {
    e.preventDefault();
    closeSidebar();
});

function openSidebar() {
    document.getElementById("app").classList.add("sidebar-open");
}


function closeSidebar() {
    document.getElementById("app").classList.remove("sidebar-open");
}
