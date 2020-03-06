function scrollFunction() {
    if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 8) {
        document.getElementById("navbar").classList.remove("navbar-not-scrolled");
        document.getElementById("navbar").classList.add("navbar-scrolled");
    } else {
        document.getElementById("navbar").classList.remove("navbar-scrolled");
        document.getElementById("navbar").classList.add("navbar-not-scrolled");
    }
}