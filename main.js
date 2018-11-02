$(function() {
	
	// Cache the Window object
	var $window = $(window);
	
	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
		
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
			
		}); // end window scroll
	});
	
});

// Create Class and Constructor 
class Github {
	constructor() {
    this.repos_count = 8;
    this.repos_sort = 'created: asc'
  }

	async getUser(){

		const repoResponse = await fetch(`https://api.github.com/users/iamdeshaun/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

		const repos = await repoResponse.json();
		
		return {
      repos
    }

	}

};