import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

import { AlienService, EncounterService, ColonistService } from '../shared/services';
import { IAliens, Encounter, IColonist} from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
  providers: [AlienService, EncounterService, ColonistService]
})

export class ReportComponent implements OnInit {

	public aliens: IAliens[];
	public encounter: Encounter;
	public NO_ALIEN_SELECTED: string;
	public colonist: IColonist[];

  constructor(
  	private router: Router,
	private alienService: AlienService,
	private encounterService: EncounterService,
	private colonistService: ColonistService

  ) {
	  this.NO_ALIEN_SELECTED = '(none)';
  }

  ngOnInit() {

	  //Getting today's date
	  let now = new Date();
	  let yyyy = now.getFullYear();
	  let month = now.getMonth();
	  let date = now.getDate();
	  let dd = "";
	  let mm = "";

	  //adds 0 before date and month if less than 10
	  if (date < 10) { dd = '0' + date} else { dd = String(date)}
	  if (month < 10) {mm = '0' + month} else { mm = String(month)} 
	  let today = yyyy + "-" + mm + "-" + dd;

	  //Adding new Encounter
	  this.encounter = new Encounter(this.NO_ALIEN_SELECTED, today, null, localStorage.getItem("colonistID"));
	  this.alienService.getAliens().then((alien) => this.aliens = alien); 
  }

  get noAlien(): boolean{
	  return this.encounter.atype === this.NO_ALIEN_SELECTED;
  }

  onSubmit(event): void {
      this.encounterService.createEncounter(this.encounter).then(encounter => this.router.navigate(['/encounters']));
  }

}
