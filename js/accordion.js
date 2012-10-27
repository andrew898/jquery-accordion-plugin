$(document).ready(function(){
	//Script sugli oggetti accordion
	$(".accordioncontent.active").prev().css("border-bottom-left-radius", "0px").css("border-bottom-right-radius", "0px");
	//Evento click di un qualsiasi header di accordion
	$(".accordionheader").click(function() {
		$obj = $(this).next();
		$header = $(this);
		
		//Chiusura del content
		if ($obj.hasClass("active")){
			$obj.slideUp("slow", 
				function() {
					$header.css("border-bottom-left-radius", "8px").css("border-bottom-right-radius", "8px");
					$obj.removeClass("active");
					$header.find("img").attr("src","imgs/arrowright.png");
				}
			);
		} else { //Apertura del content e chiusura di tutti gli altri aperti
			//Chiusura di tutti i content attivi
			$(".accordioncontent.active").slideUp("slow", 
				function() {
					$(".accordioncontent.active").prev().css("border-bottom-left-radius", "8px").css("border-bottom-right-radius", "8px");
					$(this).removeClass("active");
					$(this).prev().find("img").attr("src","imgs/arrowright.png");
				}
			);
			//Apertura del content richiesto
			$obj.slideDown("slow", 
				function() {
					$header.css("border-bottom-left-radius", "0px").css("border-bottom-right-radius", "0px");
					$obj.addClass("active");
					$header.find("img").attr("src","imgs/arrowdown.png");
				}
			);
			
		}
	});

}); //End document ready
