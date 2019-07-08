$(document).ready(function () {
    $('.SectionSobre').waypoint(function (direction) {
        if (direction == "down") {
            $('.btnsobre').removeClass('btnwaypoint');
        } else {
            $('.btnsobre').addClass('btnwaypoint');
        }
    },{
        offset:'-120px'
    });
    $('.SectionFormação').waypoint(function (direction) {
        if (direction == "down") {
            $('.btnformaçao').addClass('btnwaypoint');
        } else {
            $('.btnformaçao').removeClass('btnwaypoint');
        }
    },{
        offset:'120px'
    });
    $('.noborderSection').waypoint(function (direction) {
        if (direction == "down") {
            $('.btnformaçao').removeClass('btnwaypoint');
        } else {
            $('.btnformaçao').addClass('btnwaypoint');
        }
    },{
        offset:'350px'
    });
    $('.noborderSection').waypoint(function (direction) {
        if (direction == "down") {
            $('.btncursos').addClass('btnwaypoint');
        } else {
            $('.btncursos').removeClass('btnwaypoint');
        }
    },{
        offset:'100px'
    });
    $('.noborderSection').waypoint(function (direction) {
        if (direction == "down") {
            $('.btncursos').removeClass('btnwaypoint');
        } else {
            $('.btncursos').addClass('btnwaypoint');
        }
    },{
        offset:'-600px'
    });
    $('.experiencias').waypoint(function (direction) {
        if (direction == "down") {
            $('.bntexperiencias').addClass('btnwaypoint');
        } 
    },{
        offset:'100px'
    });
    $('.experiencias').waypoint(function (direction) {
        if (direction == "down") {
            $('.bntexperiencias').removeClass('btnwaypoint');
        } 
    },{
        offset:'-350px'
    });
    $('.experiencias').waypoint(function (direction) {
        if (direction == "up") {
            $('.bntexperiencias').removeClass('btnwaypoint');
        } 
    },{
        offset:'200px'
    });
    $('.projetos').waypoint(function (direction) {
        if (direction == "up") {
            $('.bntexperiencias').addClass('btnwaypoint');
        } 
    },{
        offset:'450px'
    });
    $('.projetos').waypoint(function (direction) {
        if (direction == "down") {
            $('.btnprojetos').addClass('btnwaypoint');
        } 
    },{
        offset:'100px'
    });
    $('.projetos').waypoint(function (direction) {
        if (direction == "up") {
            $('.btnprojetos').removeClass('btnwaypoint');
        } 
    },{
        offset:'220px'
    });


    $(".btnsobre").click(function () { 
        $('html, body').animate({
            scrollTop: ($('.SectionSobre').offset().top)
        },500);
    });
    $(".btnformaçao").click(function () { 
        $('html, body').animate({
            scrollTop: ($('.SectionFormação').offset().top)
        },500);
    });
    $(".btncursos").click(function () { 
        $('html, body').animate({
            scrollTop: ($('.noborderSection').offset().top)
        },500);
    });
    $(".bntexperiencias").click(function () { 
        $('html, body').animate({
            scrollTop: ($('.experiencias').offset().top)
        },500);
    });
    $(".btnprojetos").click(function () { 
        $('html, body').animate({
            scrollTop: ($('.projetos').offset().top)
        },500);
    });
});




