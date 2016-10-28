new WOW().init()

var portfolioDetails = {
	"resume":{
		"url":"http://avarghese.me/resume",
		"techstack":['Github','HTML','Javascript','CSS'],
		"description":"This is my resume site made from simple Javascript, HTML, and CSS"
	},
	"home":{
		"url":"http://avarghese.me/",
		"techstack":['Github','HTML','Javascript','CSS'],
		"description":"This is my personal site made from simple Javascript, HTML, and CSS"
	},
	"blog":{
		"url":"http://avarghese.me/blog",
		"techstack":['Github','HTML','Javascript','CSS'],
		"description":"This is my personal blog created using Jekyll and Github"
	},
	"meteor":{
		"url":"http://av.meteorapp.com",
		"techstack":['Github','HTML','Javascript','CSS'],
		"description":"This is my personal site built using Meteor.js"
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
		$('#itemDetails').addClass('item-details-visible');
		Portfolio.getItemData($(this).attr('item'));
	},
	hideItemDetails: function(){
		$('#portfolio').removeClass('portfolio-hidden');
		$('#itemDetails').removeClass('item-details-visible');		
	},
	getItemData: function(item){
		var item = portfolioDetails[item];
		$('#site').text(item.url);
		$('#techstack').text(item.techstack);
		$('#description').text(item.description);
	}	
};

$('.portfolio-item').hover(Portfolio.showContent);
$('.more-btn').click(Portfolio.loadItemDetails);
$('.item-details-close-btn,.item-details').click(Portfolio.hideItemDetails);