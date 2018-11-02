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

// Create Class and Constructor 
class UI {

	// Show user repos
	showRepos(repos) {
		let output = '';

		repos.forEach(function(repo) {
			output += `
			<div class="card card-body mb-2">
			<div class="row">
				<div class="col-md-3">
					<a href="${repo.html_url}" target="_blank"><strong>${repo.name}</strong></a>
				</div>
				<div class="col-md-9">
				<span>${repo.description}</span><br><br>
				<span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
				<span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
				<span class="badge badge-success">Forks: ${repo.forms_count}</span>
				</div>
			</div>
		</div>
	`;
		});

		// Output repos
		document.getElementById('latestrepos').innerHTML = output;	
	}

};

// Init Github
const git = new Github;

// Init UI
const ui = new UI;

// Make http call
git.getUser() 
.then(data => {
  console.log(data);
  ui.showRepos(data.repos);
});