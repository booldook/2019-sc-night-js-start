$(".navi > li").hover(function(){
	// $(this).find(".subs").stop().slideDown(500);
	$(this).find(".subs").stop().fadeIn(1000);
}, function(){
	// $(this).find(".subs").stop().slideUp(500);
	$(this).find(".subs").stop().fadeOut(1000);
});