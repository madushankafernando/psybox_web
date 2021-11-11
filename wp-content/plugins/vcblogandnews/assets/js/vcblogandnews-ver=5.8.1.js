/*
 * MultiPurpose addons for Visual Composer
 */
 
 jQuery(document).ready(function($){
	$(".vcblogandnews-custom-js").each(function( index ) {
		var custom_css = $(this).attr("data-vcblogandnews-custom-css");
		$( custom_css ).appendTo( "head" );
	});
	
    $('.vcblogandnews-team-owl-carousel').each( function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
			dots : $carousel.data("vcblogandnews-carousel-owl-pagination"),
			margin : $carousel.data("vcblogandnews-carousel-owl-margin"),
			nav : $carousel.data("vcblogandnews-carousel-owl-navigation"),
			rtl : $carousel.data("vcblogandnews-carousel-owl-rtl"),
			loop: $carousel.data("vcblogandnews-carousel-owl-loop"),
			smartSpeed: $carousel.data("vcblogandnews-carousel-owl-smart-speed"),
			autoplay : true,
			autoplayTimeout : $carousel.data("vcblogandnews-carousel-owl-autoplay"),
			navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items: $carousel.data("vcblogandnews-carousel-owl-items-600")
				},
				600:{
					items: $carousel.data("vcblogandnews-carousel-owl-items-900")
				},
				1000:{
					items: $carousel.data("vcblogandnews-carousel-owl-items")
				}
			}			
        });
    });	

    $('.vcblogandnews-logo-owl-carousel').each( function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
			dots : $carousel.data("vcblogandnews-logo-owl-pagination"),
			margin : $carousel.data("vcblogandnews-logo-owl-margin"),
			nav : $carousel.data("vcblogandnews-logo-owl-navigation"),
			rtl : $carousel.data("vcblogandnews-logo-owl-rtl"),
			loop: $carousel.data("vcblogandnews-logo-owl-loop"),
			smartSpeed: $carousel.data("vcblogandnews-logo-owl-smart-speed"),
			autoplay : true,
			autoplayTimeout : $carousel.data("vcblogandnews-logo-owl-autoplay"),
			navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items: $carousel.data("vcblogandnews-logo-owl-items-600")
				},
				600:{
					items: $carousel.data("vcblogandnews-logo-owl-items-900")
				},
				1000:{
					items: $carousel.data("vcblogandnews-logo-owl-items")
				}
			}			
        });
    });	

    $('.vcblogandnews-bp-vc-element-carousel-blog').each( function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
			dots : $carousel.data("vcblogandnews-blog-carousel-owl-pagination"),
			margin : $carousel.data("vcblogandnews-blog-carousel-owl-margin"),
			nav : $carousel.data("vcblogandnews-blog-carousel-owl-navigation"),
			rtl : $carousel.data("vcblogandnews-blog-carousel-owl-rtl"),
			loop: $carousel.data("vcblogandnews-blog-carousel-owl-loop"),
			smartSpeed: $carousel.data("vcblogandnews-blog-carousel-owl-smart-speed"),
			autoplay : true,
			autoplayTimeout : $carousel.data("vcblogandnews-blog-carousel-owl-autoplay"),
			navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items: $carousel.data("vcblogandnews-blog-carousel-owl-items-600")
				},
				600:{
					items: $carousel.data("vcblogandnews-blog-carousel-owl-items-900")
				},
				1000:{
					items: $carousel.data("vcblogandnews-blog-carousel-owl-items")
				}
			}			
        });
    });

    $('.vcblogandnews-np-vc-element-carousel-news').each( function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
			dots : $carousel.data("vcblogandnews-news-carousel-owl-pagination"),
			margin : $carousel.data("vcblogandnews-news-carousel-owl-margin"),
			nav : $carousel.data("vcblogandnews-news-carousel-owl-navigation"),
			rtl : $carousel.data("vcblogandnews-news-carousel-owl-rtl"),
			loop: $carousel.data("vcblogandnews-news-carousel-owl-loop"),
			smartSpeed: $carousel.data("vcblogandnews-news-carousel-owl-smart-speed"),
			autoplay : true,
			autoplayTimeout : $carousel.data("vcblogandnews-news-carousel-owl-autoplay"),
			navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items: $carousel.data("vcblogandnews-news-carousel-owl-items-600")
				},
				600:{
					items: $carousel.data("vcblogandnews-news-carousel-owl-items-900")
				},
				1000:{
					items: $carousel.data("vcblogandnews-news-carousel-owl-items")
				}
			}			
        });
    });

	// ** Gallery **
	// PrettyPhoto
    $('.vcblogandnews-gallery-pp').each( function() {
        var $gallery_pp = $(this);
		var social = $gallery_pp.data("vcblogandnews-gallery-pp-social");
		if(social == false) { 
			$("a[data-vcblogandnews-rel-pp^=\'prettyPhoto\']", this).prettyPhoto({
				animation_speed : $gallery_pp.data("vcblogandnews-gallery-pp-speed"),
				slideshow : $gallery_pp.data("vcblogandnews-gallery-pp-slideshow"),
				autoplay_slideshow : $gallery_pp.data("vcblogandnews-gallery-pp-autoplay"),
				show_title : $gallery_pp.data("vcblogandnews-gallery-pp-title"),
				social_tools: false				
			});
		} else {	
			$("a[data-vcblogandnews-rel-pp^=\'prettyPhoto\']", this).prettyPhoto({
				animation_speed : $gallery_pp.data("vcblogandnews-gallery-pp-speed"),
				slideshow : $gallery_pp.data("vcblogandnews-gallery-pp-slideshow"),
				autoplay_slideshow : $gallery_pp.data("vcblogandnews-gallery-pp-autoplay"),
				show_title : $gallery_pp.data("vcblogandnews-gallery-pp-title")		
			});	
		}		
    });	
	
	// Magnific PopUp
	$('.vcblogandnews-gallery-magnific-popup').each( function() {
		$('.vcblogandnews-gallery-magnific-popup').magnificPopup({type:'image', gallery:{ enabled:true }});
	});
	
	// Light Gallery
    $('.vcblogandnews-gallery-lg').each( function() {
        var $gallery_lg = $(this);
		$gallery_lg.lightGallery({
			selector: '.vcblogandnews-gallery-lg .vcblogandnews-gallery-lightbox a',
			mode: $gallery_lg.data("vcblogandnews-gallery-lg-mode"),
			speed: $gallery_lg.data("vcblogandnews-gallery-lg-speed"),
			thumbnail: $gallery_lg.data("vcblogandnews-gallery-lg-thumbnail"),
			controls: $gallery_lg.data("vcblogandnews-gallery-lg-controls")
		});
    });
	
	// Gallery Grid with Masonry
    $('.vcblogandnews-gallery.vcblogandnews-gallery-masonry').each( function() {
		  var $container = $(this).masonry({
			columnWidth: 1
		  });
		  $container.imagesLoaded( function() {
			$container.masonry();
		  });		
    });	
	
	// Gallery Caption Height Check
	$('.vcblogandnews-gallery-columns-2 .vcblogandnews-gallery-caption').each( function() {
		var CaptionHeight = $( this ).height();
		if (CaptionHeight > 40 && CaptionHeight < 60){
			$(this).parent().parent().addClass('vcblogandnews-gallery-caption-2-line');
		} else if ( CaptionHeight >= 60) {
			$(this).parent().parent().addClass('vcblogandnews-gallery-caption-3-line');
		}
	});	
	$('.vcblogandnews-gallery-columns-3 .vcblogandnews-gallery-caption').each( function() {
		var CaptionHeight = $( this ).height();
		if (CaptionHeight > 20 && CaptionHeight < 50){
			$(this).parent().parent().addClass('vcblogandnews-gallery-caption-2-line');
		} else if ( CaptionHeight >= 50) {
			$(this).parent().parent().addClass('vcblogandnews-gallery-caption-3-line');
		}
	});
	
	// Social Share
    $('.vcblogandnews-gallery-share-image').on( "click", function() {
        var $share_popup = $(this);
		var img_link = $share_popup.data("vcblogandnews-gallery-share-link");
		var img_caption = $share_popup.data("vcblogandnews-gallery-share-caption");
		var facebook_share = '<a target="_blank" href="http://www.facebook.com/sharer.php?caption=' + img_caption + '&description=' + img_caption + '&u=' + img_link + '&picture=' + img_link + '"><i class="fa fa-facebook"></i></a>';
		var google_plus_share = '<a target="_blank" href="https://plus.google.com/share?url=' + img_link + '" title="' + img_caption + '"><i class="fa fa-google-plus"></i></a>';
		var twitter_share = '<a target="_blank" href="http://twitter.com/home?status=' + img_link + '" title="' + img_caption + '"><i class="fa fa-twitter"></i></a>';
		var linkedin_share = '<a target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + img_link + '" title="' + img_caption + '"><i class="fa fa-linkedin"></i></a>';
		var pinterest_share = '<a target="_blank" href="http://pinterest.com/pin/create/button/?url=' + img_link + '&description=' + img_caption + '"><i class="fa fa-pinterest"></i></a>';
		var close_share_popup = '<a class="vcblogandnews-gallery-social-share-popup">x</a>';
		$( "body" ).append( '<div class="vcblogandnews-gallery-social-share-container" style="display:none"><div class="vcblogandnews-gallery-social-share-container-content">' + facebook_share + ' ' + google_plus_share + '  ' + twitter_share + '  ' + linkedin_share + '  ' + pinterest_share + ' </div>' + close_share_popup + '</div>' );
		$( ".vcblogandnews-gallery-social-share-container" ).fadeIn(500);
		$('.vcblogandnews-gallery-social-share-popup').on( "click", function() {
			$(this).parent().fadeOut("normal", function() {
					$(this).remove();
			});						
		});	
    });

	// Maps
    $('.vcblogandnews-gmaps').each( function() {
        var $maps = $(this);
		var mp_id = $maps.data("vcblogandnews-map-id");
		var mp_type = $maps.data("vcblogandnews-map-type");
		var mp_latidude = $maps.data("vcblogandnews-map-latidude");
		var mp_longitude = $maps.data("vcblogandnews-map-longitude");
		var mp_zoom = $maps.data("vcblogandnews-map-zoom");
		var mp_messagge = $maps.data("vcblogandnews-map-messagge");
		var mp_marker = $maps.data("vcblogandnews-map-marker");
		var mp_marker_image = $maps.data("vcblogandnews-map-marker-image");
		var mp_zoomcontrol = $maps.data("vcblogandnews-map-zoomcontrol");
		var mp_scalecontrol = $maps.data("vcblogandnews-map-scalecontrol");
		var mp_streetviewcontrol = $maps.data("vcblogandnews-map-streetviewcontrol");
		var mp_rotatecontrol = $maps.data("vcblogandnews-map-rotatecontrol");
		var mp_maptypecontrol = $maps.data("vcblogandnews-map-maptypecontrol");
		var mp_pancontrol = $maps.data("vcblogandnews-map-pancontrol");
		var mp_overviewmapcontrol = $maps.data("vcblogandnews-map-overviewmapcontrol");
        function initializeGoogleMap() {
     
              var myLatlng = new google.maps.LatLng(mp_latidude,mp_longitude);
              var myOptions = {
                center: myLatlng, 
                zoom: mp_zoom,
                mapTypeId: google.maps.MapTypeId.mp_type,
				panControl: mp_pancontrol,
				zoomControl: mp_zoomcontrol,
				mapTypeControl: mp_maptypecontrol,
				scaleControl: mp_scalecontrol,
				streetViewControl: mp_streetviewcontrol,
				overviewMapControl: mp_overviewmapcontrol,
				rotateControl: mp_rotatecontrol		
              };
              var map = new google.maps.Map(document.getElementById(mp_id), myOptions);

              var contentString = mp_messagge;
              var infowindow = new google.maps.InfoWindow({
                  content: contentString
              });
			  
              if(mp_marker == 'on') {
				var marker = new google.maps.Marker({
					position: myLatlng,				  
				}); 
			  } else {
	              var marker = new google.maps.Marker({
                  position: myLatlng,			  
				  icon: mp_marker_image
				});  
			  }
               
              google.maps.event.addListener(marker, "click", function() {
                  infowindow.open(map,marker);
              });
               
              marker.setMap(map);
             
          }
          initializeGoogleMap();
    });	

	
	
	
 });