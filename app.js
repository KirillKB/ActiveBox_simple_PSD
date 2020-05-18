  
  $(function() {
    // fixed header
    let header = $("#header");
    let showcase = $("#showcase");
    let showcaseH = showcase.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

      checkscroll(scrollPos, showcaseH);

    $(window).on("scroll resize", function() { 
      let showcaseH = showcase.innerHeight();
      scrollPos = $(this).scrollTop();
      checkscroll(scrollPos, showcaseH);
      
            
    });

        function checkscroll(scrollPos, showcaseH) {
          if(scrollPos > showcaseH) { 
            header.addClass("fixed");
          } else {
            header.removeClass("fixed");
            }
        }

    // Smooth scroll menu
    
    $("[data-scroll]").on("click", function(event) {
      event.preventDefault();
      
      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      nav.removeClass("show");

      $("html, body").animate ({
        scrollTop: elementOffset -60
      }, 900)
    });

      // Nav Toggle

      

      navToggle.on("click", function(event) {
          event.preventDefault();
          nav.toggleClass("show");

      });

      // Reviews https://kenwheeler.github.io/slick/

      let slider = $("#reviewsSlider");

      
      slider.slick ({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

  });