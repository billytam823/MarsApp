import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HomeComponent } from './+home';
import { RegisterComponent } from './+register';
import { EncountersComponent } from './+encounters';
import { ReportComponent } from './+report';


@Component({
	moduleId: module.id,
	selector: 'angular2-project-app',
	templateUrl: 'angular2-project.component.html',
	styleUrls: ['angular2-project.component.css'],
	directives: [ROUTER_DIRECTIVES],
  	providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/register', component: RegisterComponent},
  {path: '/encounters', component: EncountersComponent},
  {path: '/report', component: ReportComponent}
])
export class Angular2ProjectAppComponent implements OnInit {

	constructor(private router: Router) {


	}

	ngOnInit(){
		this.router.navigate(['/home']);
	}

}
