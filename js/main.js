/*------------------------------------
 *Author:Md.Abu Sayed
 *Template:Banglar Gonji Shop
 *Version:1.0
 *-------------------------------------
 */


jQuery(document).ready(function() {


  /*
   *---------------------------------------------
   *----------------Sticky Navbar----------------
   *---------------------------------------------
   */

  $(window).scroll(function(){

      if ($(this).scrollTop()>100){
        $('#main-navbar').addClass('fixed-navbar');
        $('#top-toolbar').css('display','none');
      } 
      else {
        $('#main-navbar').removeClass('fixed-navbar');
        $('#top-toolbar').css('display','block');
      }
  });


  $('.msbtn').click(function(){
    $('.search-content').css('display','block');
    $('#nav-item').addClass('.nav-container');
  });

  $('.rsbtn').click(function(){
    $('.search-content').css('display','none');
  });

  /*
   * ----------------------------------------------------------------
   *-----------------------Icon Change-------------------------------
   * ----------------------------------------------------------------
   */

   $('.collapse').on('show.bs.collapse', function(){
      $(this).parent().find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
   }).on('hidden.bs.collapse', function(){
      $(this).parent().find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
   })

  /*
    * ----------------------------------------------
    *-----------------Vegas Slider------------------
    * ----------------------------------------------
    */
      
  var slider = $("#vegas-slider");
  slider.vegas({
    overlay: false,
    cover:true,
    transition: 'fade',
    transitionDuration: 4000,
    delay: 10000,
    timer:true,
    animation: 'random',
    animationDuration: 20000,
    slides: [
      {
        src: 'http://www.freehdimages.in/uploads/large/desktop-big-pictures-of-tigers-download.jpg'
      },
      {
        src: 'http://uhd-wallpapers.net/images/sunshine-beach_031.jpeg'
      },
      {
        src: 'http://allpicts.in/download/1496/full_hd_nature_wallpapers_1080p_desktop_river_and_autumn_forest.jpeg/'
      },
      {
        src: 'http://s1.bwallpapers.com/wallpapers/2014/01/24/beach-hd-wallpaper_105302567.jpg'
      }
    ]
  });

  $('a.previous').on('click', function () {
    $("#vegas-slider").vegas('options', 'transition', 'fade').vegas('previous');
  });

  $('a.next').on('click', function () {
     $("#vegas-slider").vegas('options', 'transition', 'fade').vegas('next');
  });



  /*
   *---------------------------------------------
   *-------------OwlCarousel/Client--------------
   *---------------------------------------------
   */

  var client = $("#owl-client");
  client.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


  /*
   *------------------------------------------------
   *----------OwlCarousel/Related Product-----------
   *------------------------------------------------
   */

  var RProduct = $("#owl-RProduct");
  RProduct.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    items: 4,
    loop: true,
    responsiveClass: true,
    margin:20,
    responsive: {
      0: {
        items: 1
      },
       360: {
        items: 1
      },
      375: {
        items: 2
      },
      425: {
        items: 2
      },
      464: {
        items: 2
      },
      480: {
        items: 3
      },
      700: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });


  /*
   * -----------------------------------------------------------------
   *---------------------------ElevateZoom----------------------------
   * -----------------------------------------------------------------
   */


$("#pdd-img").elevateZoom(
  {
    gallery:'zoom-control',
    zoomType: "inner",
    cursor: "crosshair",
    galleryActiveClass: 'active',
    imageCrossfade: true,
    constrainType:"height", 
    constrainSize: 350
});   


  /*
   * -----------------------------------------------------------------
   *--------------------------Back To Top-----------------------------
   * -----------------------------------------------------------------
   */


});


  /*
   * ----------------------------------------------------------------
   *------------------------Sidenav--------------------------------
   * ----------------------------------------------------------------
   */

    function openNav() {
      if ($(window).width() > 360) {
        document.getElementById("cart-sidenav").style.width = "320px";
      }else{
        document.getElementById("cart-sidenav").style.width = "260px";
      }
      document.getElementById("main-wrapper").style.marginRight = "250px";
  }

  function closeNav() {
      document.getElementById("cart-sidenav").style.width = "0";
      document.getElementById("main-wrapper").style.marginRight= "0";
  }


  function openmenuSidenav() {
      if ($(window).width() > 360) {
        document.getElementById("menu-sidenav").style.width = "320px";
      }else{
        document.getElementById("menu-sidenav").style.width = "260px";
      }
      document.getElementById("main-wrapper").style.marginLeft = "250px";
  }

  function closemenuSidenav() {
      document.getElementById("menu-sidenav").style.width = "0";
      document.getElementById("main-wrapper").style.marginLeft= "0";
  }


  function openfilterSidenav() {
      if ($(window).width() > 360) {
        document.getElementById("filter-sidenav").style.width = "320px";
      }else{
        document.getElementById("filter-sidenav").style.width = "260px";
      }
      document.getElementById("main-wrapper").style.marginLeft = "250px";
  }

  function closefilterSidenav() {
      document.getElementById("filter-sidenav").style.width = "0";
      document.getElementById("main-wrapper").style.marginLeft= "0";
  }
