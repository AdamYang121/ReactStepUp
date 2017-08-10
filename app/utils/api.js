var axios = require('axios');

module.exports = {
	fetchPopularRepos: function(languages) {
		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+languages+'&sort=stars&order=desc&type=Repositories');
	return axios.get(encodedURI)
			.then(function(response){
				return response.data.items;
			});
	}
}

// fetchPopularRepos('Java')
// 	.then(function(res){

// 	})