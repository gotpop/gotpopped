/////////////////////////////////////////////////
// Skills
/////////////////////////////////////////////////

export default class Skills {
  constructor(pageObject) {
    this.pageObject = pageObject
    this.makeSkills()
  }
  makeSkills(){
      console.log('skills innit');
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
