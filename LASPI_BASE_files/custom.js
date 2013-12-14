$(document).ready(function(){
    prepareDocument();
    
})


function prepareDocument(){
    $(".tipsy-e").click(function() {
        var idNum = $(this).attr("id").split("-")[1];
        var id = "#region-"+idNum; 
        $(id).slideToggle( "slow" );
    });
    
}

function horisMenuHover() {
	$(".horisontal-menu li a").hover(function(){
		//$(".horisontal-menu li ul").css("display", "none");
		$(this).closest("ul").slideToggle("slow");
	})
}

