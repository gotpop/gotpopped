import Portfolio from './portfolio.json'

/////////////////////////////////////////////////
// Work
/////////////////////////////////////////////////

export default class Work {
  constructor(pageObject) {
    this.pageObject = pageObject
    this.makeWork()
  }
  makeWork(){
      console.log('work aint it');
      let maView = document.getElementById('view')
      let maSection = document.createElement('section')
      let maH1 = document.createElement('h1')
      let maH1TextNode = document.createTextNode(this.pageObject.title)

      maH1.appendChild(maH1TextNode)
      maSection.appendChild(maH1)

      let maP = document.createElement('p')
      let maPText = document.createTextNode(this.pageObject.about)

      maP.appendChild(maPText)
      maSection.appendChild(maP)
      maView.appendChild(maSection)


  }
}
