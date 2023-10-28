$(".burger-btn").on("click", function(){
    $(".header-menu").toggleClass("header-menu-show");
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
    });
  });

  Fancybox.bind("#gallery a", {
    groupAll : true,
  });

