jQuery(function($) {

	// Кнопка меню
	$('.mobile-btn').on('click', function() {
		$(this).toggleClass('active');
	});
	//

	//Высчитываем и добавляем отступ слева при ресайзе слайдеру на главной
	function resize () {
		var ww = $(window).width(),
			wWrap = $('.wrapper').width(),
			pl = (ww - wWrap) / 2;

		$('.hero__slider').css('padding-left', pl)
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
