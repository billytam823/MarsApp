import { Component } from '@angular/core';
import { OccupationService, ColonistService, AlienService, EncounterService } from './shared/services'
import {IOccupation, Colonist, IAliens, Encounter} from './shared/models';


@Component({
	moduleId: module.id,
	selector: 'angular2-project-app',
	templateUrl: 'angular2-project.component.html',
	styleUrls: ['angular2-project.component.css'],
	providers: [OccupationService, ColonistService, AlienService, EncounterService] //Defining the dependencies
})
export class Angular2ProjectAppComponent {

	title = 'angular2-project works!';
	public job: IOccupation; //Assign job as IOccupation to use
	public colonist: Colonist;
	public alien: IAliens;
	public encounter: Encounter;

	constructor(
		//Get
		private occupationService: OccupationService,
		private alienService: AlienService,
		//Post
		private colonistService: ColonistService,
		private encounterService: EncounterService
	) {

		// this.colonist = new Colonist('Mack', 34, '4');
		// this.encounter = new Encounter('Billy', "2016-05-31", "66", "Didnt understand AngularJS");

		occupationService.getjobs().then((jobs) => {
			// this.job = jobs[0];
			console.log(jobs);
		});

		alienService.getAliens().then((aliens) => {
			console.log(aliens);
		});

		colonistService.createColonist(this.colonist).then((colonist) => {
			console.log(colonist);
		});

		encounterService.createEncounter(this.encounter).then((encounter) => {
			console.log(encounter);
		});

	}
}
