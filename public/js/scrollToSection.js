window.onload = () => {
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
}