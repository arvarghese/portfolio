new WOW().init()

var Portfolio = {
	initialize: function(){
		
	}
};

Portfolio.initialize();

var showContent = function(){
	$(this).find('.content,.overlay').toggleClass('content-visible overlay-visible');
}


$('.portfolio-item').focus(showContent);