window.addEventListener('load', () => {
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $(".Main__about").offset().top - 300
        },'slow');
    });

    $("#projects").click(function() {
        $('html, body').animate({
            scrollTop: $(".Main__projects").offset().top - 300
        },'slow');
    });

    $("#work").click(function() {
        $('html, body').animate({
            scrollTop: $(".Main__work").offset().top - 300
        },'slow');
    });

    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $(".Main__contact").offset().top
        },'slow');
    });

    $("#scrollback").click(function() {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        },'slow');
    });

    //hide on scroll
    const scrollBack = document.querySelector('.ScrollBack');

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 100) {
            document.querySelector(".Header").style.top = "-101px";
            scrollBack.classList.add('ScrollBack--visible');
        } else {
            document.querySelector(".Header").style.top = "0";
            scrollBack.classList.remove('ScrollBack--visible');
        }
    })

    //hamburger
    const hamburger = document.querySelector('.Header__hamburger');
    const nav = document.querySelector('.Header__navigation');
    const itemLink = document.querySelectorAll('.Header__item-link');

    const handleClick = () => {
        hamburger.classList.toggle('Header__hamburger--active');
        nav.classList.toggle('Header__navigation--active');

        document.querySelector('body').style.overflow === "" ?
            document.querySelector('body').style.overflow = "hidden" :
            document.querySelector('body').style.overflow = ""
    }

    const handleItemClick = () => {
        hamburger.classList.toggle('Header__hamburger--active');
        nav.classList.toggle('Header__navigation--active');

        document.querySelector('body').style.overflow === "" ?
            document.querySelector('body').style.overflow = "hidden" :
            document.querySelector('body').style.overflow = ""
    }

    hamburger.addEventListener('click', handleClick);

    if ($(window).width() <= 999) {
        itemLink.forEach(el => {
            el.addEventListener('click', handleItemClick)
        })
    }
})