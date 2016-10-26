new WOW().init()

var Portfolio = {
	initialize: function(){
		
	}
};

Portfolio.initialize();

$('.portfolio-item').hover(function(){
	$(this).find('.content').toggleClass('content-visible');
});