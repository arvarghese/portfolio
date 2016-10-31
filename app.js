new WOW().init()

var portfolioDetails = {
	"resume":{
		"title":"My Online Resume",
		"url":"http://avarghese.me/resume",
		"techstack":['Github','HTML','Javascript','CSS'],
		"description":"This is my resume site made from simple Javascript, HTML, and CSS",
		"thumbnail":"http://i.imgur.com/PF5imjLh.jpg"
	},
	"home":{
		"title":"Personal Website",
		"url":"http://avarghese.me/",
		"techstack":['Github','HTML','Javascript','CSS'],
		"description":"This is my personal site made from simple Javascript, HTML, and CSS",
		"thumbnail":"http://i.imgur.com/tHvkrGWh.jpg"
	},
	"blog":{
		"title":"My Blog",
		"url":"http://avarghese.me/blog",
		"techstack":['Github','HTML','Javascript','CSS'],
		"description":"This is my personal blog created using Jekyll and Github",
		"blog":"http://avarghese.me/blog/development/2016/04/28/jekyll-blog.html",
		"thumbnail":"http://i.imgur.com/jwpYs2zh.jpg"
	},
	"meteor":{
		"title":"My Website in Meteor",
		"url":"http://av.meteorapp.com",
		"techstack":['Github','HTML','Javascript','CSS'],
		"description":"This is my personal site built using Meteor.js",
		"blog":"http://avarghese.me/blog/development/2016/01/01/meteor-website.html",
		"thumbnail":"http://i.imgur.com/IXeTDowh.jpg"
	},
	"resumebuilder":{
		"title":"Resume Builder",
		"url":"https://resume-builder5.herokuapp.com/",
		"techstack":['Node','Angular 1','Heroku','HTML','Javascript','CSS'],
		"description":"This is a demo app created using Angular 1, Node, Heroku",
		"blog":"http://avarghese.me/blog/development/2016/06/01/first-mean-project.html",
		"thumbnail":"http://i.imgur.com/zLs8iqFh.jpg"
	}
};

var Portfolio = {
	showContent: function(){
		$(this).find('.content').toggleClass('content-visible');
		$(this).find('.background').toggleClass('background-covered');
	},
	loadItemDetails: function(){
		Portfolio.getItemData($(this).attr('item'));
		$('#header').addClass('header-hidden')
		$('#portfolio').addClass('portfolio-hidden');
		$('#itemDetails').addClass('item-details-visible');
	},
	hideItemDetails: function(){
		$('#header').removeClass('header-hidden')
		$('#portfolio').removeClass('portfolio-hidden');
		$('#itemDetails').removeClass('item-details-visible');		
	},
	getItemData: function(item){
		var item = portfolioDetails[item];
		$('#title').html(item.title);
		$('#thumbnail').html('<img src="'+item.thumbnail+'" class="item-thumbnail"></img>');
		$('#site').html('<h4>Website:</h4><a href="'+item.url+'" target="_blank">'+item.url+'&nbsp; <i class="fa fa-external-link"></i></a>');
		$('#techstack').html('<h4>Technology:</h4>' + item.techstack);
		$('#description').html('<h4>Description:</h4> <i class="fa fa-quote-left"></i> &nbsp;' +item.description+'&nbsp; <i class="fa fa-quote-right"></i>');
		if(item.blog){
			$('#blog').html('<h4>Blog link:</h4><a href="'+item.blog+'" target="_blank">'+item.blog+'&nbsp; <i class="fa fa-external-link"></i></a>');
		}
	},
	panItem: function(e){
      $(this).children('.background').css({
      	'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + 
      	'% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%',
      	'transition':'0s'
      });
	}	
};

$('.portfolio-item').hover(Portfolio.showContent);
$('.more-btn').click(Portfolio.loadItemDetails);
$('.item-details-close-btn,.item-details').click(Portfolio.hideItemDetails);
$('.portfolio-item').on('mousemove', Portfolio.panItem); 