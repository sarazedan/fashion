$(function(){
	
	 //featured work shuflle
    $('.gallery ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
	 
	    //console.log($(this).data('class'));
		if($(this).data('class')==='all'){
			$('.shuffle-imgs .col-sm').css('opacity',1);
		}
		else{
		
			$('.shuffle-imgs .col-sm').css('opacity','.09');
			$($(this).data('class')).parent().css('opacity',1);
			
		}
			
		});
			 $(window).scroll(function(){
		 
		 var navbar=$('.navbar');
		 if($(window).scrollTop() >= navbar.height()){
			 
			 navbar.addClass('scrolled');
		 }
		 else{
			 
			 navbar.removeClass('scrolled');
			 
		 }
	 
	 });
	 //show color option onclick gear icon
		$(".gear-check").click(function(){
			$(".color-option").fadeToggle();
			
		});
		//change theme color on click from gear icon
		
		var colorLi=$(".color-option ul li");
		
		colorLi
			.eq(0).css("backgroundColor","#f16930").end()
			.eq(1).css("backgroundColor","#E426D5").end()
			.eq(2).css("backgroundColor","gray").end()
			.eq(3).css("backgroundColor","yellow").end()
			.eq(4).css("backgroundColor","green");

        colorLi.click(function()
        {
	 
	    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
		
		});
	
		
	
});