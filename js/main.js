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

/* ========= NOVO SISTEMA DE TABS ========= */
$(document).off('click.tabsHandler').on('click.tabsHandler', '.tabs a', function(e) {
  e.preventDefault();
  var $this = $(this);

  // identifica o grupo (ex: data-tabgroup="first-tab-group")
  var groupName = $this.closest('ul.tabs').data('tabgroup');
  if (!groupName) return;

  var $tabgroup = $('#' + groupName);
  var targetSelector = $this.attr('href');
  var $target = $tabgroup.find(targetSelector);

  if ($target.length === 0) {
    $target = $(targetSelector); // fallback
    if ($target.length === 0) return;
  }

  // atualiza classes nos botões
  $this.closest('ul.tabs').find('a').removeClass('active');
  $this.addClass('active');

  // inicializa o grupo se ainda não estiver
  if (!$tabgroup.data('tabs-initialized')) {
    $tabgroup.children().hide();
    $tabgroup.children('.active').show();
    $tabgroup.data('tabs-initialized', true);
  }

  // evita repetição se já estiver visível
  if ($target.is(':visible')) return;

  // animação de troca suave
  var $currentlyVisible = $tabgroup.children(':visible');
  $currentlyVisible.stop(true, true).fadeOut(250, function() {
    $currentlyVisible.removeClass('active');
    $target.stop(true, true).fadeIn(300).addClass('active');
  });
});
/* ========= FIM NOVO SISTEMA DE TABS ========= */



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
