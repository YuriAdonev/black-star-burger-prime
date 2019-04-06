$(document).ready(function () {
  svg4everybody({});
  
	$('.menu-toggle').click(function(){
		$('.menu-toggle').toggleClass('menu-toggle--close');
		$('.main-nav__wrap').toggleClass('active');
		$('.side-nav').toggleClass('mobile');
		$('body').toggleClass('no-scroll');
	});
	const mobileMenu = document.querySelector(".main-nav__wrap");
	const mobileMenuBtn = document.querySelector(".menu-toggle");
	
	mobileMenuBtn.addEventListener('click', function(e) {
		mobileMenu
	});
	
});