import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class EncountersComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
