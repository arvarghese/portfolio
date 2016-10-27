new WOW().init()

var portfolioDetails = {
	"resume":{

	},
	"home":{

	},
	"blog":{

	},
	"meteor":{

	}
};

var Portfolio = {
	showContent: function(e){
		e.preventDefault();
		$(this).find('.content').toggleClass('content-visible');
		$(this).find('.background').toggleClass('background-covered');
	},
	loadItemDetails: function(e){
		e.preventDefault();
		$('#portfolio').addClass('portfolio-hidden');
		Portfolio.getItemData($(this).attr('item'));
	},
	getItemData: function(item){
		console.log(item);
	}	
};

$('.portfolio-item').hover(Portfolio.showContent);
$('.more-btn').click(Portfolio.loadItemDetails);