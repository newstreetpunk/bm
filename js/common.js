jQuery(function($) {

	// Применение CSS шапке при скролле
	if( $(window).width() > 580 ){
		$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('.header').css('background-color', 'rgba(0,0,0, 1)');
			} else {
				$('.header').css('background-color', 'rgba(0, 0, 0, .3)');
			}
		});
	}
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

	//Высчитываем и добавляем отступ слева при ресайзе
	function resize () {
		var ww = $(window).width(),
			wWrap = $('.wrapper').width(),
			pl = (ww - wWrap) / 2;

		$('.hero__slider').css('padding-left', pl);

		var itemW= $('.my-grid__item').width();
		$('.my-grid__item .img-block, .my-grid__item .text-block').css('height', itemW)
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
