new WOW().init()

var Portfolio = {
	portfolioItems: {
		"landing":{
			"title":"Personal Website",
			"url":"http://avarghese.me/",
			"techstack":['Github','HTML','Javascript','CSS'],
			"description":"This is my personal site made from simple Javascript, HTML, and CSS"
		},
		"meteor":{
			"title":"Meteor Website",
			"url":"http://av.meteorapp.com",
			"techstack":['Github','HTML','Javascript','CSS'],
			"description":"This is my personal site built using Meteor.js<br>CURRENTLY DOWN FOR MAINTENANCE",
			"blog":"http://avarghese.me/blog/development/2016/01/01/meteor-website.html"		
		},
		"travel":{
			"title":"Travel Gallery",
			"url":"http://avarghese.me/travel",
			"techstack":['Github','HTML','Javascript','CSS'],
			"description":"This is gallery demo made from simple Javascript, HTML, and CSS",
			"blog":"http://avarghese.me/blog//development/2016/11/09/travel-gallery.html"
		},
		"blog":{
			"title":"My Blog",
			"url":"http://avarghese.me/blog",
			"techstack":['Github','HTML','Javascript','CSS'],
			"description":"This is my personal blog created using Jekyll and Github",
			"blog":"http://avarghese.me/blog/development/2016/04/28/jekyll-blog.html"
		},
		"resume":{
			"title":"Online Resume",
			"url":"http://avarghese.me/resume",
			"techstack":['Github','HTML','Javascript','CSS'],
			"description":"This is my resume site made from simple Javascript, HTML, and CSS"
		},
		"rb-app":{
			"title":"Resume Builder",
			"url":"https://resume-builder5.herokuapp.com/",
			"techstack":['Node','Angular 1','Heroku','HTML','Javascript','CSS'],
			"description":"This is a demo app created using Angular 1, Node, Heroku",
			"blog":"http://avarghese.me/blog/development/2016/06/01/first-mean-project.html"
		}
	},
	initialize: function(){
		Portfolio.loadPortfolio(Portfolio.portfolioItems);
		Portfolio.loadEvents();
	},
	loadEvents: function(){
		$('.portfolio-item').hover(Portfolio.showContent);
		$('.more-btn').click(Portfolio.loadItemDetails);
		$('.item-details-close-btn,.item-details').click(Portfolio.hideItemDetails);
		$('.portfolio-item').on('mousemove', Portfolio.panItem); 
	},
	showContent: function(){
		$(this).find('.content').toggleClass('content-visible');
		$(this).find('.background').toggleClass('background-covered');
	},
	loadPortfolio: function(portfolio){
		for (var key in portfolio) {
			var item = portfolio[key];
			$('#portfolio').append('<div class="portfolio-item wow fadeIn"><div class="content"><h2 class="item-title">'+
				item.title+'</h2><hr><p class="description">'+
				item.description+'</p><div class="more-btn" item="'+key+'">Learn More</div><a href="'+
				item.url+'"><div class="site-btn">Visit Site</div></a></div><div class="background" style="background: url('+
				'public/images/portfolio-images/'+key+'.jpg);"></div></div>');	
		}
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
	getItemData: function(key){
		var item = Portfolio.portfolioItems[key];
		$('#title').html(item.title);
		$('#thumbnail').html('<img src="'+'public/images/portfolio-images/'+key+'.jpg" class="item-thumbnail"></img>');
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

Portfolio.initialize();



