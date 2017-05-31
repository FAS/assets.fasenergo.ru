


$('#header .menu').click(function() {
	$('#header .topmenu').slideToggle(400);
	$(this).toggleClass('open');
});

	$('.tov_slider').owlCarousel({
		loop:true,
		margin:0,
		 items:1,
		nav:true,
		navText:false,
		dots:true,
		
	});
	
$('.slider_mini').owlCarousel({
    loop:false,
    margin:0,
	nav:true,
	navText:false,
	dots:true,
	responsive:{
		0:{
            items:1,
            nav:true
        },
		500:{
            items:2,
            nav:true
        },
        700:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true
        }
    }
});

$(".numbox").mask("+7 (999) 999 99 99");

$('#header .right_block .button').click(function() {
		$('#call_modal').arcticmodal();
	});
	
	$('#footer .cont_block .button').click(function() {
		$('#call_modal').arcticmodal();
	});
	
	$('.b24-web-form-popup-btn-10').click(function() {
		$('#call_modal2').arcticmodal();
	});
	
	
	
	$(document).ready(function(){
	
	function falidator(item) {
		check = true;
		$(item).find('input').each(function() {
			if($(this).hasClass('required') && $(this).val() == '') {
				check = false;
				$(this).css('border', '1px red solid');
			} else {
				$(this).css('border', '1px transparent solid');
			}
		});
		if(check) {
			return true;
		} else {
			return false;
		}
	}

	/**************************/
	$("#form1").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({ 
			type: "POST", 
			url: "php/form1.php",
			data: $("#form1").serialize(),
			success: function(html) { 
			
			}
		});
		
		$('#call_modal').arcticmodal('close');
		$('#spasibo').arcticmodal();
		$('#form1').trigger("reset");
		return false;
	});
	
	$("#form2").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({ 
			type: "POST", 
			url: "php/form2.php",
			data: $("#form2").serialize(),
			success: function(html) { 
			
			}
		});
		
		$('#call_moda2').arcticmodal('close');
		$('#spasibo').arcticmodal();
		$('#form2').trigger("reset");
		return false;
	});
	/**************************/
	
	
	
});


$('#mini1 .slide').click(function() {
	$('#mini1 .slide').removeClass('active');
	$(this).addClass('active');
	$('#gen1 .sl_item').removeClass('active').eq($(this).parent().index()).addClass('active');
	return false;
});

$('#mini2 .slide').click(function() {
	$('#mini2 .slide').removeClass('active');
	$(this).addClass('active');
	$('#gen2 .sl_item').removeClass('active').eq($(this).parent().index()).addClass('active');
	return false;
});
