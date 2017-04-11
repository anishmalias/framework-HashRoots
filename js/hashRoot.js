

// Javascript Components

$(function(){
	console.log("Betta Version");

	// Define Global Variable

	var xs 		= 	600;
	var xsm 	= 	767;
	var sm 		= 	991;
	var md 		= 	1200;


	function navigation(){
		// Detect Drown

		var $nav = $(".nav");
		$nav.find("li>ul").parent().addClass("dropdown");

		// dropDown menu
		$nav.find("li").hover(function(){
			$(this).find(">ul").stop(true, false).slideToggle(200);
		});

		// mobile menu trigger click

		$nav.find(".nav-trigger").click(function(){
			$(this).parent().find(">ul").stop(true, false).slideToggle(250);
		});


		// Mobile menu 
		function getTruggerResponce(){
			var WinWidth = $(window).innerWidth();
			var getMenuTrigger = $nav.attr('mobile-menu'); 
			if( WinWidth <= md && getMenuTrigger == 'md'){
				console.log("d");
				$nav.addClass("mobile-menu");
				$nav.find(".nav-trigger").show();
				$nav.find(">ul").hide();
			}else if(WinWidth <= sm && getMenuTrigger == 'sm'){
				$nav.addClass("mobile-menu");
				$nav.find(".nav-trigger").show();
				$nav.find(">ul").hide();
			}else if(WinWidth <= xsm && getMenuTrigger == 'xsm'){
				$nav.addClass("mobile-menu");
				$nav.find(".nav-trigger").show();
				$nav.find(">ul").hide();
			}else if(WinWidth <= xs && getMenuTrigger == 'xs'){
				$nav.addClass("mobile-menu");
				$nav.find(".nav-trigger").show();
				$nav.find(">ul").hide();
			}else{
				$nav.find(".nav-trigger").hide();
				$nav.find(">ul").show();
				$nav.removeClass("mobile-menu");
			}
		}

		getTruggerResponce();

		$(window).resize(function(){
			getTruggerResponce();
		});
		

	}
	navigation();

	// Tooltip

	$.fn.tooltip = function(){
		var $this = $(this);
		// get tooltip text
		var $tooltipText = $this.attr('title');

		// create tooltip 

		$this.hover(function(){ 
			$('body').append('<div class="tooltip-outer"><span class="tooltip-arrow"></span><div class="tooltip-text">'+$tooltipText+'</div></div>');

			// tooltip position
			var $topPos = $(this).offset().top;
			var $leftPos = $(this).offset().left;
			if($(".tooltip-outer").is(":empty")){
				console.log("yes");
			}else{
				console.log("no")
			}
			var $toolTopHeight = $(".tooltip-outer").outerHeight() + 25; console.log($toolTopHeight);
			var $elementWidth = $(this).outerWidth();	
			$(".tooltip-outer").css({'left':$leftPos,'top': $topPos - $toolTopHeight}).find('.tooltip-arrow').css({'left':($elementWidth/2)-4});

			}, function(){
			$('body').find('.tooltip-outer').remove();
		});
	}

	$('[data-toggle="tooltip"]').tooltip();

});
