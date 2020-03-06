(function registerEvents() {
    var modal = document.getElementById("smoopitModal");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // When the user press escape, close it
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            modal.style.display = "none";
        }
    };
})();  

function openModal() {
    var modal = document.getElementById("smoopitModal");
    modal.style.display = "block";
}