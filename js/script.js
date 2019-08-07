jQuery('document').ready(function(){


/* 	var actelm = jQuery('.scroller').height();
	var nextelm = jQuery('.scroller.active').next();
	var secelm = nextelm.offset().top;


	jQuery('.page-wrapper').scroll(function(){

	 
		if(actelm <= secelm ){
			
		 setTimeout(function(){ 
			jQuery('.page-wrapper').animate({ scrollTop: actelm }, "slow").stop();
			
			jQuery('.scroller.active').removeClass('active').next().addClass('active');
		}, 1500);		
			
		}else{
				console.log('outefr');
			jQuery('.page-wrapper').animate({ scrollTop: 900 }, "slow");
		}
		
	
		
	});
	
	 */
/* 	
	var lastScrollTop = 0;
$('.page-wrapper').scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
	   
       	console.log('down');
		$('.page-wrapper').off('scroll');
		
   } else {
	   $('.page-wrapper').on('scroll');
      console.log('up');
	  $('.page-wrapper').off('scroll');
   }
   lastScrollTop = st;
});
	 */
	
/* $('#pagepiling').pagepiling({
	
	direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right'
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

}); */
	$('#fullPage').fullpage({
			autoScrolling:true,
			scrollHorizontally: true,
			afterLoad: function(anchorLink, index, slideAnchor, slideIndex){
				
			
			var videotag = jQuery(this).find('video');
				
				if(videotag.length){
					videotag[0].play();
				}
			
			
				if(index == 3){
					jQuery(this).addClass('pos-abb');
				}
				if(index == 2 ){
					jQuery('section.fade-out').removeClass('fade-out');
				}
				if(index == 4 ){
					setTimeout(function(){
						jQuery('section.fade-out').removeClass('fade-out');
						//jQuery('#panel-4').removeClass('loading');
					}, 500);
				}
			},
			onLeave: function(index, nextIndex, direction) {
				console.log(nextIndex);
				
				jQuery(this).removeClass('down up');
				jQuery('.section.prev-section').removeClass('prev-section');
				jQuery(this).addClass('prev-section');
				//jQuery('.section').eq(nextIndex-1).removeClass('up');
				jQuery('.section').eq(nextIndex-1).addClass(direction);
				
				
				if(index == 3){
					jQuery(this).addClass('fade-out');
				}
				if(index == 4 || index == 2 ){
					jQuery('section.fade-out').removeClass('fade-out');
				}
				/* if(index == 5 &&  direction == 'up'){
					jQuery('#panel-4').addClass('loading');
				} */
			}
			
			
			
	});
	
	
	
	
	
	
	//$(function() {
	/* 	$.scrollify({
			section : '.scroller',
			scrollSpeed: 1800,
			updateHash: false,
			setHeights: false,
			overflowScroll: true,
			before:function(index) {
				var url = $.scrollify.current().data('video');
				
				//$.scrollify.current().find('source').attr('src', url);
				
				var videotag = $.scrollify.current().find('video');
				
				if(videotag.length){
					videotag[0].play();
				}
		
				
				if(index == 0){
					jQuery('.shopping-btn').removeClass('active');
					jQuery('.sk-bar').removeClass('fixed');
				}else{
					jQuery('.shopping-btn').addClass('active');
				}
				
				var thisItem = $.scrollify.current().attr('id');
				
				if(thisItem == "panel-2"){
					var lgtext =  document.querySelector('.lg-text');
					lgtext.classList.add('animated', 'fadeInUp');
				}
				
				
			
				jQuery('.scroller.active').removeClass('active').addClass('disable');
				$.scrollify.current().removeClass('disable').addClass('active');
			},
			after:function(index){
				if(index !== 0){
					jQuery('.sk-bar').addClass('fixed');
					
				}
				var videotag = $.scrollify.current().find('video');
				
				if(videotag.length){
					videotag[0].play();
				}
				
				var thisItem = $.scrollify.current().attr('id');
				
				if(thisItem == "panel-1"){
					jQuery('.sk-bar').removeClass('fixed');
				}
				if(thisItem == "panel-2"){
					var lgtext =  document.querySelector('.lg-text');
					lgtext.classList.remove('animated', 'fadeInUp');
				}
			
			}	
			
		}); */
	//});
	
/* 	jQuery('.discover').click(function(){
		$.scrollify.next();
	}); */
	
	
	
/* var position = jQuery(window).scrollTop();
jQuery(window).scroll(function(){
	var scrollTop = jQuery(window).scrollTop();
	
	if(scrollTop > position){
	
	}else{
	
	
	}

});
 */	


/* 	jQuery('.slick-slider').on('init', function(event, slick){
		$('.animated').addClass('activate fadeInUp');
	});		


 jQuery('.slick-slider').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow:1,
    infinite: true,
    pauseOnHover: false,
    vertical: true,
    speed: 1000,
	draggable:true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
	  	focusOnSelect: true
  });
  
	jQuery('.slick-slider').on('afterChange', function(event, slick, currentSlide, currentIndex) {
		jQuery('.animated').removeClass('off fadeOutUp');
		jQuery('.animated').addClass('activate fadeInUp');
		
		if(jQuery('.slick-current').find('video').length > 0){
			jQuery('.slick-current').find('video').get(0).play();
		}
		
		if(slick.currentSlide !== 0){
			jQuery('.slick-slider').addClass('allow');
		}else{
			jQuery('.slick-slider').removeClass('allow');
		}
		console.log(slick.currentSlide);
		
		
	});	

	jQuery('.slick-slider').on('beforeChange', function(event, slick, currentSlide) {
		jQuery('.animated').removeClass('activate fadeInUp');
		jQuery('.animated').addClass('off fadeOutUp');
	}); */

});