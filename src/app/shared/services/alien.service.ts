import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {IAliens} from '../models';

//Service Pattern
@Injectable()
export class AlienService {

  //url to get the json	
  aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

  constructor(private http: Http) {}

  getAliens(): Promise<IAliens[]>{
  	 //Returns URL promise, either success with json or fail with errorhandler (same for most cases) 
	 return this.http.get(this.aliensUrl)
	  			.toPromise()
	  			.then( response => response.json().aliens) //if succes, should get response from json URL and return the json
	  			.catch( this.handleError) //if fail, pass in error handler
  }

  //Error handling (same for most cases)
  private handleError(error: any){
	 console.log('There was an error!', error);
	 return Promise.reject(error.message || error); 	
  }

}