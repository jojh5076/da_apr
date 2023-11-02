$(document).ready(function() {
    
	//Default Action
	$(".stab_content").hide(); //Hide all content
	$(".tab_menu li:first").addClass("active").show(); //Activate first tab
	$(".stab_content:first").show(); //Show first tab content
	
	//On Click Event
	$(".tab_menu li").click(function() {
		$(".tab_menu li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".stab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});