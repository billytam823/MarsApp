import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/common';
//Import Services
import { EncounterService } from '../shared/services';
import { IEncounter } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [EncounterService]
})

export class EncountersComponent implements OnInit {

	public encounter: IEncounter[];

  constructor(
  	private router: Router,
  	private encounterServices: EncounterService
  ) {}

  ngOnInit() {
    this.encounterServices.getEncounters().then((encounters) => this.encounter = encounters);
  }

}
