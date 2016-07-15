

$(document).ready(function(){

	// Smooth Scrolling
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

	// Bootstrap Tooltip
	$('[data-toggle="tooltip"]').hover(function(){
		$(this).tooltip('show');
	});
	


  	// Brand Pillars Demo
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

	// Google Maps Demo
	$('#mapModal').on('show.bs.modal', function (e) {
		$(this).css("margin-left", "0px");
		$(this).css("margin-bottom", "0px")
	})

	// My Favourites
	var $container = $('.thumb-container').imagesLoaded( function() {
	  $container.isotope({
	  	layoutMode: 'fitRows'
	    // options
	  });
	});

	$('#favouritesModal').on('shown.bs.modal', function (e) {
		$container.isotope({ filter: '*' });
	})

	$('.isotope-filter-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	});	

	// Change is-checked class on buttons
	$('.isotope-filter-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
		  $buttonGroup.find('.is-checked').removeClass('is-checked');
		  $( this ).addClass('is-checked');
		});
	});


	// Skills Accordion
	$('.panel-collapse').on('shown.bs.collapse', function () {
	  var text = $(this).prev().find('.fa');

	  if (text.hasClass('fa-chevron-circle-down')) {
	  	text.removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
	  }
	})

	$('.panel-collapse').on('hidden.bs.collapse', function () {
	  var text = $(this).prev().find('.fa');

	  if (text.hasClass('fa-chevron-circle-up')) {
	  	text.removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
	  }
	})

	$(".progress-bar").css("width", function(){
		return $(this).attr("aria-valuenow") + "%";
	})


});