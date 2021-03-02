window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 100) {
        document.getElementById("header").style.top = "-101px";
    } else {
        document.getElementById("header").style.top = "0";
    }
}