/////////////////////////////////////////////////
// Status
/////////////////////////////////////////////////

class Status {
  constructor() {
    this.makeStatus()
    this.currentPage
    this.currentPortfolioPage
  }
  makeStatus() {
    this.currentPage = 'work'
    this.currentPortfolioPage = 'columbus'
  }
}

export let siteStatus = new Status
