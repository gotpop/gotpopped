import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @HostBinding('class') class = 'view-item';

  constructor() { }

  ngOnInit() {
  }

}
