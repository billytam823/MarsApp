import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'; //Put it on main?
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

import { ColonistService, OccupationService } from '../shared/services';
import { Colonist, IColonist, IOccupation} from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ColonistService, OccupationService]
})

export class RegisterComponent implements OnInit {

  public NO_OCCUPATION_SELECTED: string;
  public colonist: Colonist;

	//variable for pulling lists
  public occupations: IOccupation[];
  public colonistList: IColonist[];

  constructor(
  	private router: Router,
  	private colonistService:ColonistService,
  	private occupationService: OccupationService
  ) {
    this.NO_OCCUPATION_SELECTED = '(none)';
  }

  ngOnInit(): void {
    this.colonist = new Colonist(null,null, this.NO_OCCUPATION_SELECTED); //creating a new colonist with default value in field
	  this.occupationService.getjobs().then((jobs) => this.occupations = jobs); //pulling the list of jobs into dropdown menu
  }

  get noOccupation(): boolean{
    return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
  }

  onSubmit(event): void{
      this.colonistService.createColonist(this.colonist).then((colonist: IColonist) => 
        { 
          localStorage.setItem("colonistID", colonist.id);
          this.router.navigate(['/encounters']); 
        }
      );
  }

}
