/////////////////////////////////////////////////
// Status
/////////////////////////////////////////////////

class Status {
  constructor() {
    this.makeStatus()
    this.getSetLocation()

    this.currentPage
    this.currentPortfolioPage
    this.mobile
  }
  makeStatus() {
    this.currentPage = 'home'
    this.currentPortfolioPage = 'hackett'
    // console.log(this)
  }
  getSetLocation() {
    let hashLocation = location.hash.substring(1)
    if (hashLocation.length > 1) {
      this.currentPage = hashLocation
    }
  }

}

export let siteStatus = new Status
