/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });


    $('body').scrollspy({ 
        target: '.fixed-side-navbar',
        offset: 200
    });
      
      // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
    })

    var owl = $("#owl-testimonials");

owl.owlCarousel({
    pagination : true,
    paginationNumbers: false,
    autoPlay: 6000,
    items : 3,              // mostra 2 itens por vez em telas grandes
    itemsDesktop : [1200,3], // acima de 1200px, 2 itens
    itemsDesktopSmall : [992,2], // entre 992px e 1199px, 2 itens
    itemsTablet: [768,1],   // entre 768px e 991px, 1 item
    itemsMobile : [600,1]   // abaixo de 600px, 1 item
});



});
