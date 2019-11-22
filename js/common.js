jQuery(function($) {

	//Добавляем атрибут кнопке заказать равный заголовку карточке
	$('.my-grid.services-grid .my-grid__item.service').each(function() {
		var servCard = $(this),
			servTitle = servCard.find('h3').text(),
			servButton = servCard.find('.serv-modal-link');
		servButton.attr('data-title', servTitle.split('"').join(''));
	});
	//

	$('.serv-modal-link').magnificPopup({
		fixedContentPos: false
	});

	$('.serv-modal-link').click(function(){
		var ths = $(this),
			dataTitle = ths.data('title');
		$('.form-modal h3').text(dataTitle);
	});

	// Высота заголовка и описания карточки услуги
	if( $(window).width() > 580 ){
		$('.my-grid.services-grid').each(function() {
			$(this).children('.my-grid__item.service').find('h3').equalHeights();
			$(this).children('.my-grid__item.service').find('.text-block .small-descr').equalHeights();
		});
	}
	//
	
	//Видео слайдер
	$('.video__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 477.175 477.175" xml:space="preserve">	<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
		nextArrow: '<button class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 477.175 477.175" xml:space="preserve">	<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		}
		]
	});
	//

	// Video Load & Popup
	$('.video-popup').magnificPopup({
		disableOn: 700,
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: true,

		fixedContentPos: true,
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/', 
					id: 'v=',
					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			},
			srcAction: 'iframe_src', 
		}
	});
	//

	// Кнопка меню
	$('.mobile-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
	});
	//

	// Кнопка авторизации
	$('.login-mobail').on('click', function(){
		$(this).next().toggleClass('active');
	});
	//

	//Высчитываем при ресайзе
	function resize () {
		var ww = $(window).width(),
			wWrap = $('.wrapper').width(),
			pl = (ww - wWrap) / 2;

		$('.hero__slider').css('padding-left', pl);

		if ( ww > 580 ){
			var itemW= $('.my-grid__item').width();
			$('.post .img-block, .post .text-block').css('height', itemW);
		}		
	}
	resize ();

	$(window).resize(function(){
		resize ();
	});
	//

	// Слик слайдер
	$('.hero__slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: true
	});


});
