// JavaScript Document
(function HomeActivate() {
	  	if(!homeVisible) {
			menuColor="#CF5300";
			$("#Home").animate({left:'0%'});
			$("Home").css("width", "100%");
			homeVisible = true;
		}
		else {
			menuColor="#F00";
			$("#Home").animate({left:'-100%'});
			$("Home").css("width", "0");
			homeVisible = false;
		}
	})(jQuery);