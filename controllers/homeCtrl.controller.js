angular.module( 'rentababy' )
.controller( 'homeCtrl', function( $scope, $state, $stateParams ) {
    $scope.babyCart = [];

    $scope.addToCart = ( babyType ) => {
        chooseBaby( babyType );
        let baby = {
            id: $scope.babyCart.length,
            babyHeaderPicture: $scope.babyHeaderPicture,
            babyName: $scope.babyName,
            babyHeader: $scope.babyHeader,
            babyPrice: $scope.babyPrice,
            babyPictures: $scope.babyPictures
        }
        $scope.babyCart.push( baby );
    }

    $scope.emptyCart = () => {
        $scope.babyCart = [];
    }

    function chooseBaby( babyType ) {
        switch( babyType ) {
            case 'calm':
                $scope.babyHeaderPicture = './images/thecalmchild2-rentababy.jpg';
                $scope.babyName = 'The Calm Baby';
                $scope.babyHeader = 'So quiet that you\'ll even forget he\'s there.';
                $scope.babyPrice = '$800';
                $scope.babyPictures =  [ './images/thecalmchild-rentababy.jpg', './images/thecalmchild-rentababy2.jpg' ];
                break;
            case 'sleeper':
                $scope.babyHeaderPicture = './images/thesleeper2-rentababy.jpg';
                $scope.babyName = 'The Sleeper';
                $scope.babyHeader = 'Even cuter than Sleeping Beauty.';
                $scope.babyPrice = '$400';
                $scope.babyPictures = [ './images/thesleeper-rentababy.jpg', './images/thesleeper4-rentababy.jpg',  './images/thesleeper3-rentababy.jpg' ];
                break;
            case 'smiler':
                $scope.babyHeaderPicture = './images/thesmiler2-rentababy.jpg';
                $scope.babyName = 'The Smiler';
                $scope.babyHeader = 'If this little guy can\'t make you happy, then nothing will.';
                $scope.babyPrice = '$750';
                $scope.babyPictures = [ './images/thesmiler-rentababy.jpg', './images/thesmiler3-rentababy.jpg' ];
                break;
            case 'whiner':
                $scope.babyHeaderPicture = './images/thesmiler2-rentababy.jpg';
                $scope.babyName = 'The Whiner';
                $scope.babyHeader = 'The ultimate form of birth control. Works 99.9% of the time.';
                $scope.babyPrice = '$540';
                $scope.babyPictures = [ './images/thewhiner-rentababy.jpg', './images/thesmiler3-rentababy.jpg' ];
                break;
            case 'model':
                $scope.babyHeaderPicture = './images/themodel-rentababy.jpg';
                $scope.babyName = 'The Model';
                $scope.babyHeader = 'If you ignore the ego, he sure is pretty.';
                $scope.babyPrice = '$350';
                $scope.babyPictures = [ './images/themodel-rentababy.jpg', './images/thesmiler3-rentababy.jpg' ];
                break;
            case 'lilbro':
                $scope.babyHeaderPicture = './images/thelilbro-rentababy.jpg';
                $scope.babyName = 'The Lil\' Bro';
                $scope.babyHeader = 'Full of energy and ready to play.';
                $scope.babyPrice = '$600';
                $scope.babyPictures = [ './images/thelilbro-rentababy.jpg', './images/thesmiler3-rentababy.jpg' ];
                break;
            case 'yawner':
                $scope.babyHeaderPicture = './images/theyawner-rentababy.jpg';
                $scope.babyName = 'The Yawner';
                $scope.babyHeader = 'His yawn is deceptive. He\'s really not even tired.';
                $scope.babyPrice = '$780';
                $scope.babyPictures = [ './images/theyawner-rentababy.jpg', './images/thesmiler3-rentababy.jpg' ];
                break;
            case 'bedhog':
                $scope.babyHeaderPicture = './images/thebedhog-rentababy.jpg';
                $scope.babyName = 'The Bed Hog';
                $scope.babyHeader = 'Watch out: this one\'s a cuddler.';
                $scope.babyPrice = '$800';
                $scope.babyPictures = [ './images/thebedhog-rentababy.jpg', './images/thesmiler3-rentababy.jpg' ];
                break;
            case 'twins':
                $scope.babyHeaderPicture = './images/thetwins-rentababy.jpg';
                $scope.babyName = 'The Whiner';
                $scope.babyHeader = 'Two in one? What could be better than that?';
                $scope.babyPrice = '$1,100';
                $scope.babyPictures = [ './images/thetwins-rentababy.jpg', './images/thesmiler3-rentababy.jpg' ];
                break;
            case 'thinker':
                $scope.babyHeaderPicture = './images/thethinker-rentababy.jpg';
                $scope.babyName = 'The Thinker';
                $scope.babyHeader = 'He might be the next Einstein. Or he could be thinking about his food.';
                $scope.babyPrice = '$960';
                $scope.babyPictures = [ './images/thethinker-rentababy.jpg', './images/thesmiler3-rentababy.jpg' ];
                break;
       }
    }

    if ( $state.current.name === 'baby' ) {
       chooseBaby( $stateParams.baby );
    }

angular.element(document).ready(function () {
    ;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var tabs = function() {

		// Auto adjust height
		$('.fh5co-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.fh5co-tab-content-wrap'),
					tabHeight = $('.fh5co-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.fh5co-tab-content-wrap'),
						tabHeight = $('.fh5co-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);
			
		};

		autoHeight();


		// Click tab menu
		$('.fh5co-tab-nav a').on('click', function(event){
			
			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.fh5co-tab-nav li').removeClass('active');
			
			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.fh5co-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		}); 
	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	});

	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		tabs();
		goToTop();
		loaderPage();
		counterWayPoint();
		sliderMain();
		testimonialCarousel();
	});


    }());
} );

} );