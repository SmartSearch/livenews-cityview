/**
 * Vodafone YU
 * Copyright 2012 Prisa Digital
 * Version 2.0
 */

$(document).ready(function() {
	
//-------BARRA-------
		$("#barra img").click(function () {
	      $("#cont_barra").slideToggle("slow");
    	});


 //-------window------
	  
	
	
	
	
	
        	$("#iconCity_central").addClass('active');
        	$("#mod_iconCity").addClass('visible');

    //-------contenido_central-------

	        $("#iconCity").click(function() {
	        	$('.box-central_content').removeClass('active');
				$("#iconCity_central").addClass('active');
		 		$('.modulo_widget').removeClass('visible');
				$("#mod_iconCity").addClass('visible');
			});
			$("#iconSports").click(function() {
	        	$('.box-central_content').removeClass('active');
				$("#iconSports_central").addClass('active');
		 		$('.modulo_widget').removeClass('visible');
				$("#mod_iconSports").addClass('visible');
			});
			$("#iconColours").click(function() {
	        	$('.box-central_content').removeClass('active');
				$("#iconColours_central").addClass('active');
		 		$('.modulo_widget').removeClass('visible');
				$("#mod_iconColours").addClass('visible');
			});
			$("#iconEvents").click(function() {
	        	$('.box-central_content').removeClass('active');
				$("#iconEvents_central").addClass('active');
		 		$('.modulo_widget').removeClass('visible');
				$("#mod_iconEvents").addClass('visible');
			});
			$("#iconPics").click(function() {
	        	$('.box-central_content').removeClass('active');
				$("#iconPic_central").addClass('active');
		 		$('.modulo_widget').removeClass('visible');
				$("#mod_iconPics").addClass('visible');
			});
			$("#iconVideo").click(function() {
	        	$('.box-central_content').removeClass('active');
				$("#iconVideo_central").addClass('active');
		 		$('.modulo_widget').removeClass('visible');
				$("#mod_iconVideo").addClass('visible');
			});

			$("#MenuSidebar li").click(function() {
					$('#MenuSidebar li').removeClass('active');  
					$(this).addClass('active'); 
					$('#MenuSidebar .desactive').removeClass('active');
			});

    	
    	
	//-------buscador-------
			
			$("#mod_filter a").click(function() {
					$('#mod_filter a').removeClass('active');  
					$(this).addClass('active'); 
			});
			$("#lupa").click(function() {
					$('#mod_filter a').removeClass('active');  
			});
			$("#sidebar").click(function() {
					$('#mod_filter a').removeClass('active');  
			});

	 //-------widgets-------
	 window.addEventListener('onorientationchange', function () {
    	window.location.reload()    	
    });
    
	 var mq = window.matchMedia( "(min-width: 850px)" ); 
	     if (mq.matches) {  
        // window width is at least 850px 
        	
			$('#menu_tw').addClass('active'); 
        	$("#mod_twitter").addClass('visible');
        	 
	        $("#iconTwitter").click(function() {
		 		$('.modulo_widget').removeClass('visible');
				$("#mod_twitter").addClass('visible');
			});
			$("#iconFacebook").click(function() {
				$('.modulo_widget').removeClass('visible');
				$("#mod_facebook").addClass('visible');
			});
			$("#iconVideos").click(function() {
				$('.modulo_widget').removeClass('visible');
				$("#mod_videos").addClass('visible'); 
			});
			$("#iconFacebook_comment").click(function() {
				$('.modulo_widget').removeClass('visible');
				$("#mod_comment").addClass('visible'); 
			});
			$("#iconFotos").click(function() {
				$('.modulo_widget').removeClass('visible');
				$("#mod_fotos").addClass('visible'); 
			});


			$("#MenuSidebar li").click(function() {
					$('#MenuSidebar li').removeClass('active');  
					$(this).addClass('active'); 
					$('#MenuSidebar .desactive').removeClass('active');
			});

	    }  
	    else {  
	        // window width is less than 850px  
	         $("#iconTwitter").click(function() {
		 		$('.modulo_widget').fadeOut("slow");
				$("#mod_twitter").fadeIn("slow");
			});
			$("#iconFacebook").click(function() {
				$('.modulo_widget').fadeOut("slow");
				$("#mod_facebook").fadeIn("slow");
			});
			$("#iconVideos").click(function() {
				$('.modulo_widget').fadeOut("slow");
				$("#mod_videos").fadeIn("slow");
			});
			$("#iconFacebook_comment").click(function() {
				$('.modulo_widget').fadeOut("slow");
				$("#mod_comment").fadeIn("slow");
			});
			$("#iconFotos").click(function() {
				$('.modulo_widget').fadeOut("slow");
				$("#mod_fotos").fadeIn("slow");
			});
			
			
			$("#MenuSidebar li").click(function() {
				$('#MenuSidebar li').removeClass('active');  
				$(this).addClass('active'); 
				$('#widgets').fadeIn("slow");
				$('#playerContainer').css('opacity', '0');
			});
			$(".tit_widget .close").click(function() {
				$('#MenuSidebar li').removeClass('active'); 
				$('#widgets').fadeOut("slow");
				$('#playerContainer').css('opacity', '1');
			});
			
	    }  
	 
	 
	 
	 

		

});


 
