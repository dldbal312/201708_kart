$(window).scroll(function(){
	var scrTop = $(document).scrollTop();
	if(scrTop > 0){
		$('.header').addClass('on');
	}else{
		$('.header').removeClass('on');
	}
});

//main_slider
$('.main_visual').owlCarousel({
	loop: false,
	lazyLoad: true,
	nav: true,
	dots: false,
	responsive:{
		0:{
			items: 1
		},
		768:{
			items: 2
		},
		1500:{
			items: 3
		}
	}
});
$('.main_visual .item_area > a').click(function(e){
	$(this).next().addClass('on');
	e.preventDefault();
})
$('.main_visual .btn_close').click(function(){
	$(this).parent().removeClass('on');
});

$('.item_num a.sectit4').click(function(e){
	$(this).parent().toggleClass('on').find('.cscon').toggleClass('active');
	e.preventDefault();
})

//main - 작품
$('#int_slider1').owlCarousel({
	margin: 10,
	stagePadding:15,
	loop: false,
	nav: true,
	dots: false,
	responsive:{
		0:{
			items:2
		},
		768:{
			items: 4
		},
		1024:{
			items: 6,
			margin:23,
			stagePadding:0
		}
	}
});

//main - 작가
$('#int_slider2').owlCarousel({
	margin: 10,
	stagePadding:15,
	loop: false,
	nav: true,
	dots: false,
	responsive:{
		0:{
			items:3
		},
		768:{
			items: 5
		},
		1024:{
			items: 7,
			margin:23,
			stagePadding:0
		}
	}
});

