new WOW().init()

var Resume = {
	initialize: function(){
		Resume.seedFile();
	},
	seedFile: function(){
		$.ajax({
		    url:'https://raw.githubusercontent.com/arvarghese/resume/master/resume-seed.json',
		    type: 'GET',
		    dataType: 'json',
		    error: function() {
		      console.error('unable to retrieve resume-seed from github...');
		    },
		    success: function(resume) {
		    	console.log('retrieving work authorization: '+JSON.stringify(resume.workAuthorization));
		    	
		    	Resume.loadData('.highlights>ul','li',resume.highlights);
		    	
		    	Resume.loadData('.experience>.first>ul','li',resume.experience.first.highlights);
		    	Resume.loadData('.experience>.second>ul','li',resume.experience.second.highlights);
		    	Resume.loadData('.experience>.third>ul','li',resume.experience.third.highlights);
		    	
		    	Resume.loadData('.experience>.first.projects','span', resume.experience.first.projects);
		    	Resume.loadData('.experience>.second.projects','span', resume.experience.second.projects);
		    	Resume.loadData('.experience>.third.projects','span', resume.experience.third.projects);
		    	
		    	Resume.loadData('.experience>.first.environment','span', resume.experience.first.environment);
		    	Resume.loadData('.experience>.second.environment','span', resume.experience.second.environment);
		    	Resume.loadData('.experience>.third.environment','span', resume.experience.third.environment);		    	
		    }
		});
	},
	loadData: function(selector,type,data){
		$(selector).empty();
		for(var i in data){
			$(selector).append("<"+type+">" + data[i] + "</"+type+">");
		}
	},
};

// Resume.initialize();

$('.nav-btn').click(function(){
	$('.nav-btn').toggleClass('nav-close');
	$('.nav').toggleClass('nav-open');
	$('.page-wrap').toggleClass('page-wrap-disable');
});

$('.nav-menu>ul>li>a').click(function(){
	$('.nav-btn').toggleClass('nav-close');
	$('.nav').toggleClass('nav-open');
	$('.page-wrap').toggleClass('page-wrap-disable');
});