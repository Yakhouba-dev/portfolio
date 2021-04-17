$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500 ){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });
    // script glissez vers le haut
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
    // basculement du menu/navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Animation ecriture
    var typed = new Typed(".typing",{
        strings: ["Intégrateur web", "Developpeur web", "Graphiste"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    var typed = new Typed(".typing-2",{
        strings: ["Intégrateur web", "Developpeur web", "Graphiste"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    // Script caroussel
    $('.caroussel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
            },
            600:{
                items: 2,
                nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            }
        }
    });
});