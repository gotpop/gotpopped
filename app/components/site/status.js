/////////////////////////////////////////////////
// Status
/////////////////////////////////////////////////

class Status {
  constructor() {
    this.makeStatus()
    this.url()
    this.currentPage
    this.currentPortfolioPage
  }
  makeStatus() {
    this.currentPage = 'work'
    this.currentPortfolioPage = 'hackett'
  }
  url() {
    let hashLocation = location.hash.substring(1)
    console.log('hashLocation: ', hashLocation);
    this.currentPage = hashLocation
  }
}

export let siteStatus = new Status
