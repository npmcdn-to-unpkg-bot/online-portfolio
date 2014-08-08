$(document).ready(function(){
	// Smooth scrolling
	// $(function() {
	//   $('a[href*=#]:not([href=#])').click(function() {
	//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	//       var target = $(this.hash);
	//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	//       if (target.length) {
	//         $('html,body').animate({
	//           scrollTop: target.offset().top
	//         }, 1000);
	//         return false;
	//       }
	//     }
	//   });
	// });

      !function ($) {
        $('a[href^="#"]:not([data-toggle]):not([data-slide])').bind('click.smoothscroll',function (e) {
            e.preventDefault();
            var target = this.hash;
                $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 500, 'swing', function () {
                window.location.hash = target;
            });
        });
      }(window.jQuery)

      $('[data-toggle="tooltip"]').hover(function(){
      	$(this).tooltip('show');
      });

      	$(".pillar-btn").click(function(){

		var element = this;
		$(".pillar-wrapper").hide("slide", { "direction": "up" },function(){

			switch (element.id){
				case "emotive-btn": 
					$("#pillar-title").text("Emotive");
					$("#pillar-details").html("The experiences on PlayStation® are so vivid that we feel real emotions. It’s this emotive pull that the brand needs to capitalise on.");
					break;
				case "immersive-btn":
					$("#pillar-title").text("Immersive");
					$("#pillar-details").html("The brand's communications should be deep and all-encompassing. Creating truly immersive experiences that replicate the level of play on PlayStation®.");
					break;
				case "irreverent-btn":
					$("#pillar-title").text("Irreverent");
					$("#pillar-details").html("The brand is playful, cheeky, always question authority and have a mischievous, slightly naughty streak. It must do cool stuff that gets people talking.");
					break;
				case "celebratory-btn":
					$("#pillar-title").text("Celebratory");
					$("#pillar-details").html("The brand must celebrate its fans and create the most amazing communications experiences for them.");
					break;
				case "unexpected-btn":
					$("#pillar-title").text("Unexpected");
					$("#pillar-details").html("The brand exceeds expectations, challenge perceptions, innovate within the industry and defy convention.");
					break;
				case "fearless-btn":
					$("#pillar-title").text("Fearless");
					$("#pillar-details").html("The brand is the gold standard gaming brand and it should always act like it.");
					break;
			}

		});

		$(".pillar-wrapper").show("slide", {"direction": "up"});

	})

	$('#demoModal').on('show.bs.modal', function (e) {
		// $(this).css("margin-top", "0px");
		$(this).css("margin-left", "0px");
		$(this).css("margin-bottom", "0px")
	})

	var $container = $('#thumb-container').imagesLoaded( function() {
	  $container.isotope({
	  	layoutMode: 'fitRows'
	    // options
	  });
	});

	$('#filters').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	});	

	$('#myModal').on('shown.bs.modal', function (e) {
		// $(this).css("margin-top", "0px");
		$container.isotope({ filter: '*' });
	})
	// $("#two").on( "pageshow", function( event ) { 
	// 	$container.isotope({ filter: '*' });
	// } )


});