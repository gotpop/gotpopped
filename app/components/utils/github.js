/////////////////////////////////////////////////
// Github
/////////////////////////////////////////////////

export default class Github {
  constructor() {
    this.githubUrl = 'https://api.github.com/users/gotpop'
    this.getGithubUrl()
  }
  getGithubUrl() {

    fetch(this.githubUrl).then(function(response) {
      console.log(response)
      return response
    })

  }
}
