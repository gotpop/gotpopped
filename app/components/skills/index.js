/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import SkillsData from './skills.json'
import {siteStatus} from '../site/status.js'
import Html from '../utils'

/////////////////////////////////////////////////
// Skills
/////////////////////////////////////////////////

export default class Skills {
  constructor(pageObject) {
    this.pageObject = pageObject
    this.makeSkills()
  }
  makeSkills() {

    let maView = document.getElementById('view')
    let maSection = document.createElement('section')

    let maH1 = new Html({type: 'h2', text: this.pageObject.title}).build()

    let skillsP = new Html({type: 'p', text: this.pageObject.about}).build()

    maSection.appendChild(maH1)
    maSection.appendChild(skillsP)
    maView.appendChild(maSection)

  }
  // loopSkillsData() {
  //   for (let SKillsObject of SKillsData) {
  //     this.makeSkillsList(SKillsObject)
  //   }
  // }
  //
  // makeSkillsList(SkillsObject) {
  //   let maDiv = new Html({
  //     type: 'div',
  //     class: 'portfolio-thumbnail',
  //     dataId: PortfolioObject.ID
  //   }).build()
  // }

}
