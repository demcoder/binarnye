/* JQUERY based */
$().ready(function(){
	externalLinks();
	
	
	/*var goTop=$(".gotop");
	$(window).scroll(function(){
		if($(this).scrollTop()>$(".container").height()/3){
			goTop.addClass('visible');
		}else {
			goTop.removeClass('visible');
		}
	});
	
	goTop.click(function(event){
		$("html, body").stop().animate({scrollTop:0}, '500', 'swing');
		event.preventDefault();
		return false;
	})*/
	
	$(".mobilemenu .button").click(function(e){
		var t=$(this).attr("data-target");
		if($(this).hasClass("opened")) {
			$(this).removeClass("opened")
			$("#"+t).removeClass("open");
			return;
		}
		$(this).parent().find(".button").removeClass("opened");
		$(this).addClass("opened");
		$(".sidebar .open").removeClass("open");
		$("#"+t).addClass("open");
		e.preventDefault();
	});
	
	$("form .site").val("");
	
});
function externalLinks(){
	$("a").each(function(i,a){
		if($(a).attr('href')&&$(a).attr('href').indexOf('#/starttrade/')>=0){
			$(a).click(function(e){
				var href=$(a).attr('href');
				href=href.replace(/^.*\#/g,'');
				
				location.href=href;
				return false;
			});
		};
	})
}


