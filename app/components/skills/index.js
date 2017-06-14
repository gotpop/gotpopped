/////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////

import SKillsData from './skills.json'
import {siteStatus} from '../site/status.js'
import Html from '../utils'

/////////////////////////////////////////////////
// Skills
/////////////////////////////////////////////////

export default class Skills {
  constructor(pageObject) {
    this.pageObject = pageObject
    this.skillsUl
    this.makeSkills()
  }
  makeSkills() {

    let maView = document.getElementById('view')
    let maSection = document.createElement('section')

    let maH1 = new Html({type: 'h2', text: this.pageObject.title}).build()
    let skillsP = new Html({type: 'p', text: this.pageObject.about}).build()
    let skillsUl = new Html({type: 'ul', class: 'skills-list'}).build()

    maSection.appendChild(maH1)
    maSection.appendChild(skillsP)

    this.loopSkillsData(skillsUl)

    maSection.appendChild(skillsUl)
    maView.appendChild(maSection)

  }
  loopSkillsData(skillsUl) {
    for (let SKillsObject of SKillsData) {
      let thisSkill = new Html({type: 'li', text: SKillsObject.skill}).build()
      skillsUl.appendChild(thisSkill)
    }
  }

}
