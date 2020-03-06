// Start Header Content
let mobileBtn 	= document.querySelector(".header__mobile");
let menu 		= document.querySelector(".header__nav");
mobileBtn.addEventListener("click", function() {
	menu.classList.toggle("open");
});
// End Header Content

// Start Works Content
$(document).ready(function() {

	$("#menu").on("click","a", function (event) {
        event.preventDefault ();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });    
		

	$("#slider-one").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: false,
		infinite: false,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$("#slider-two").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: false
	});

	$("#slider-three").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: false
	});

	$(".panel-title").on("click", function() {
		if ( $(this).hasClass('active')  ) {
			$(this).next().slideToggle();
			$(this).removeClass("active");
		} else {
			$(".panel-title.active").next().slideToggle();
			$(".panel-title.active").removeClass("active");

			$(this).next().slideToggle();
			$(this).addClass("active");
		}
	});

});
// End Works Content