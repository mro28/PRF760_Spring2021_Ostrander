$(document).ready(function(){
	//initialize
	$(".home").show();
	$(".resume").hide();
	$(".contact").hide();
	$(".about").hide();
	
	//open home
	$("#home").click(function(){
        $("#home").addClass( "active" );
		$("#resume").removeClass( "active");
		$("#contact").removeClass( "active");
		$("#about").removeClass( "active");
		$(".home").show();
		$(".resume").hide();
		$(".contact").hide();
		$(".about").hide();
    });
	
	//open resume
	$("#resume").click(function(){
        $("#home").removeClass( "active" );
		$("#resume").addClass( "active");
		$("#contact").removeClass( "active");
		$("#about").removeClass( "active");
		$(".home").hide();
		$(".resume").show();
		$(".contact").hide();
		$(".about").hide();
    });
	
	//open contact
	$("#contact").click(function(){
        $("#home").removeClass( "active" );
		$("#resume").removeClass( "active");
		$("#contact").addClass( "active");
		$("#about").removeClass( "active");
		$(".home").hide();
		$(".resume").hide();
		$(".contact").show();
		$(".about").hide();
    });
	
	// open about
	$("#about").click(function(){
        $("#home").removeClass( "active" );
		$("#resume").removeClass( "active");
		$("#contact").removeClass( "active");
		$("#about").addClass( "active");
		$(".home").hide();
		$(".resume").hide();
		$(".contact").hide();
		$(".about").show();
    });
});