let Portfolio = {
	portfolioItems: {
		"phototiles": {
			"title": "Photo Tiles",
			"url": "http://aletghese.me/photo-tiles/",
			"techstack": ['Github', 'HTML', 'Javascript', 'CSS'],
			"description": "This is a Javascript implementation of Mac's Photo Tiles screensaver"
		},
		"charmingdesigns": {
			"title": "Charming Designs",
			"url": "http://charmingdesigns.us",
			"techstack": ['Github', 'HTML', 'Javascript', 'CSS'],
			"description": "This is a website for a client made to promote their services<br>IN PROGRESS"
		},
		"landing": {
			"title": "Personal Website",
			"url": "http://aletghese.me/",
			"techstack": ['Github', 'HTML', 'Javascript', 'CSS'],
			"description": "This is my personal site made from simple Javascript, HTML, and CSS"
		},
		"meteor": {
			"title": "Meteor Website",
			"url": "http://av.meteorapp.com",
			"techstack": ['Github', 'HTML', 'Javascript', 'CSS'],
			"description": "This is my personal site built using Meteor.js<br>CURRENTLY DOWN FOR MAINTENANCE",
			"blog": "http://aletghese.me/blog/development/2016/01/01/meteor-website.html"
		},
		"travel": {
			"title": "Travel Gallery",
			"url": "http://aletghese.me/travel",
			"techstack": ['Github', 'HTML', 'Javascript', 'CSS'],
			"description": "This is gallery demo made from simple Javascript, HTML, and CSS",
			"blog": "http://aletghese.me/blog//development/2016/11/09/travel-gallery.html"
		},
		"blog": {
			"title": "My Blog",
			"url": "http://aletghese.me/blog",
			"techstack": ['Github', 'HTML', 'Javascript', 'CSS'],
			"description": "This is my personal blog created using Jekyll and Github",
			"blog": "http://aletghese.me/blog/development/2016/04/28/jekyll-blog.html"
		},
		"resume": {
			"title": "Online Resume",
			"url": "http://aletghese.me/resume",
			"techstack": ['Github', 'HTML', 'Javascript', 'CSS'],
			"description": "This is my resume site made from simple Javascript, HTML, and CSS"
		},
		"rb-app": {
			"title": "Resume Builder",
			"url": "https://resume-builder5.herokuapp.com/",
			"techstack": ['Node', 'Angular 1', 'Heroku', 'HTML', 'Javascript', 'CSS'],
			"description": "This is a demo app created using Angular 1, Node, Heroku",
			"blog": "http://aletghese.me/blog/development/2016/06/01/first-mean-project.html"
		}
	},
	initialize: () => {
		Portfolio.loadPortfolio(Portfolio.portfolioItems);
		Portfolio.loadEvents();
	},
	loadEvents: () => {
		$('.portfolio-item').hover(Portfolio.showContent);
		$('.more-btn').click(Portfolio.loadItemDetails);
		$('.item-details-close-btn,.item-details').click(Portfolio.hideItemDetails);
		$('.portfolio-item').on('mousemove', Portfolio.panItem);
	},
	showContent: (e) => {
		let element = e.target.parentNode;		
		$(element).find('.content').toggleClass('content-visible');
		$(element).find('.background').toggleClass('background-covered');
	},
	loadPortfolio: (portfolio) => {
		for (let key in portfolio) {
			let item = portfolio[key];
			$('#portfolio').append(`<div class="portfolio-item wow fadeIn"><div class="content"><h2 class="item-title">${item.title}</h2><hr><p class="description">${item.description}</p><div class="more-btn" item="${key}">Learn More</div><a href="${item.url}"><div class="site-btn">Visit Site</div></a></div><div class="background" style="background: url(assets/images/portfolio-images/${key}.jpg);"></div></div>`);
		}
	},
	loadItemDetails: (e) => {
		let element = e.target.parentNode;
		Portfolio.getItemData($(element).attr('item'));
		$('#header').addClass('header-hidden')
		$('#portfolio').addClass('portfolio-hidden');
		$('#itemDetails').addClass('item-details-visible');
	},
	hideItemDetails: () => {
		$('#header').removeClass('header-hidden')
		$('#portfolio').removeClass('portfolio-hidden');
		$('#itemDetails').removeClass('item-details-visible');
	},
	getItemData: (key) => {
		let item = Portfolio.portfolioItems[key];
		$('#title').html(item.title);
		$('#thumbnail').html(`<img src="assets/images/portfolio-images/${key}.jpg" class="item-thumbnail"></img>`);
		$('#site').html(`<h4>Website:</h4><a href="${item.url}" target="_blank">${item.url}&nbsp; <i class="fa fa-external-link"></i></a>`);
		$('#techstack').html(`<h4>Technology:</h4>${item.techstack}`);
		$('#description').html(`<h4>Description:</h4> <i class="fa fa-quote-left"></i> &nbsp;${item.description}&nbsp; <i class="fa fa-quote-right"></i>`);
		if (item.blog) {
			$('#blog').html(`<h4>Blog link:</h4><a href="${item.blog}" target="_blank">${item.blog}&nbsp; <i class="fa fa-external-link"></i></a>`);
		}
	},
	panItem: (e) => {
		let item = e.target.parentNode;
		console.log(item);
		$(item).children(".background").css({
			"transform-origin": ((e.pageX - $(item).offset().left) / $(item).width()) * 100 + "% " + ((e.pageY - $(item).offset().top) / $(item).height()) * 100 + "%"
		});
	}
};

Portfolio.initialize();



