$(document).ready(function(){

	
	// Painel
	fullsizeDiv();
	$(window).resize(fullsizeDiv);
	function fullsizeDiv(){
		var window_height = $(window).height();
		var window_width = $(window).width();
		var header_size = $(".header").height();
		var painel_height = window_height - header_size;
		$(".painel").height(painel_height);
		$(".fade-slider").height(painel_height);
		$(".painel").width(window_width);
		$(".texting h1").css("padding-top", painel_height*.25 + "px");
	}
	

	var currentSlide = 0;
	var nextSlide = 1;
	var painel = $(".painel");
	painel.css("display","none");
	$(painel[0]).fadeIn("slow");
	setTimeout(Painel, 3000);
	function Painel(){
		var currentPainel = $(painel[currentSlide]);
		var nextPainel = $(painel[nextSlide]);
		var imageUrl = ["assets/images/index/bg-painel-1.png",
						"assets/images/index/bg-painel-2.png",
						"assets/images/index/bg-painel-3.png"];
		nextPainel.css('background-image', 'url(' + imageUrl[nextSlide] + ')');			

		var interval = 4000;
		currentPainel.fadeOut(interval);
		nextPainel.fadeIn(interval);
		currentSlide = (++currentSlide) % 3;
		nextSlide = (++nextSlide) % 3;
		setTimeout(Painel, 10000);
	}


	// Float Center
	floatCenter();
	$(window).resize(floatCenter);
	function floatCenter(){
		if($(window).width() > 992){
			var title_box = $(".tipo-per h2");
			var div_box = $(".tit-pericia");
			for(var i = 0; i < title_box.length; i++ ){
				var title = $(title_box[i]);
				var div = $(div_box[i]);
				var rest_div = div.width() - title.width();
				var padding = parseInt(title.css("padding-right"));
				title.css("margin-left", " " + (rest_div/2) - padding + "px");
			}		
		}else {
			var title_box = $(".tipo-per h2");
			for(var i = 0; i < title_box.length; i++ ){
				var title = $(title_box[i]);
				title.css("margin-left", 5);
			}	
			
		}
		
	}
	
	
	//Responsive
	menu_responsive();
	$(window).resize(menu_responsive);
	function menu_responsive(){
		var menu_height = $(".header").height();
		// $("#menu-drop").css("margin-top", menu_height + "px");
	}
	$(window).delay(1000);
	setTimeout(centerHeight, 1000);
	$(window).resize(centerHeight);
	function centerHeight(){
		var title = $(".painel-serv h3");
		var painel_height = 360;
		for(var i = 0; i < title.length; i++){
			var actual = $(title[i]);
			actual.css("padding-top", ((painel_height - actual.height()) / 2 ) + "px");	
		}
	}

	// Carousel
	var jcarousel = $('.jcarousel');

	jcarousel
		.on('jcarousel:reload jcarousel:create', function () {
			var carousel = $(this),
			width = carousel.innerWidth();

			if (width >= 650) {
				width = width/3;
			}
			width -= 40;
			carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
			})
		.jcarousel({
			wrap: 'circular'
		});

	$('.jcarousel-control-prev')
		.jcarouselControl({
			target: '-=1'
		});

	$('.jcarousel-control-next')
		.jcarouselControl({
			target: '+=1'
		});
});