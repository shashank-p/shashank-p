(function($) {
	'use strict';
		
		
		jQuery(document).on('ready', function(){
			
			/*PRELOADER JS*/
			$(window).on('load', function() { 
				$('.status').fadeOut();
				$('.preloader').delay(450).fadeOut('slow'); 
			}); 
			/*END PRELOADER JS*/
			
			// jQuery Image magnificPopup
				jQuery('.img-popup').magnificPopup({
				  type: 'image',
				  gallery:{
					  enabled:true
				  }
				});
			// jQuery Video magnificPopup
				jQuery('.video-popup').magnificPopup({
				  type: 'iframe',
				});
			
			/*START MENU JS*/
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).on('scroll', function() {
			   if ($(this).scrollTop() > 100) {
					$('#header-area').addClass('menu-sticky');
				  } else {
					$('#header-area').removeClass('menu-sticky');
				  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/
		
		/*START PROGRESS-BAR JS*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS-BAR JS*/
		
		// Main slider
			$('.slider-active').owlCarousel({
				loop:true,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				smartSpeed:450,
				autoplay:true,
				autoplayTimeout:6000,
				mouseDrag:false,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})	
			
			// Serviec slider
			$('#service-active').owlCarousel({
				autoplay:true,
				items: 3,
				margin: 30,
				loop:true,
				nav:false,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:3
					}
				}
			})
		
			/*START COUNTER JS*/
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
			/*END COUNTER JS*/
			
			/*START MIXITUP JS*/
			$('.portfolio_item').mixItUp();
			/*END MIXITUP JS*/
			
			// BLOG SLIDER slider
			$('#blog-slider').owlCarousel({
				loop:true,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				smartSpeed:450,
				autoplay:true,
				autoplayTimeout:6000,
				mouseDrag:true,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:3
					}
				}
			})	
		
			/*START PARTNER LOGO*/
			$('.brand-active').owlCarousel({
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			})
			/*END PARTNER LOGO*/
			
			
			// testimonial slider
			$("#testimonial-slider").owlCarousel({
				items:1,
				itemsDesktop:[1000,2],
				itemsDesktopSmall:[979,1],
				itemsTablet:[768,1],
				pagination:true,
				autoPlay:false
			  });
			})

		// Active  WOW
		new WOW().init();

})(jQuery);	
