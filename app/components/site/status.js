/////////////////////////////////////////////////
// Status
/////////////////////////////////////////////////

class Status {
  constructor() {
    this.makeStatus()
    this.currentPage
  }
  makeStatus() {
    this.currentPage = 'home'
  }
}

export let siteStatus = new Status
