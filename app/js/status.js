/////////////////////////////////////////////////
// Status
/////////////////////////////////////////////////

class Status {
  constructor() {
    this.makeStatus()
    this.currentPage
  }
  makeStatus() {
    this.currentPage = 'Home'
  }
}

export let siteStatus = new Status
console.log(siteStatus)
