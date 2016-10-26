new WOW().init()

var Portfolio = {
	initialize: function(){
		
	}
};

Portfolio.initialize();

var showContent = function(){
	$(this).find('.content').toggleClass('content-visible');
	$(this).find('.background').toggleClass('background-covered');
}

$('.portfolio-item').hover(showContent);