import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {IOccupation} from '../models';

//Service Pattern
@Injectable()
export class OccupationService {

  //url to get the json	
  occupationUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';

  constructor(private http: Http) {}

  getjobs(): Promise<IOccupation[]>{
  	 //Returns URL promise, either success with json or fail with errorhandler (same for most cases) 
	 return this.http.get(this.occupationUrl)
	  			.toPromise()
	  			.then( response => response.json().jobs) //if succes, should get response from json URL and return the json
	  			.catch( this.handleError) //if fail, pass in error handler
  }

  //Error handling (same for most cases)
  private handleError(error: any){
	 console.log('There was an error!', error);
	 return Promise.reject(error.message || error); 	
  }

}