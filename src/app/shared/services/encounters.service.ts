import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Encounter} from '../models';

//Service Pattern
@Injectable()
export class EncounterService {

  //url to get the json	
  encounterUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  constructor(private http: Http) {}

  createEncounter(encounter: Encounter): Promise<Encounter[]>{
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify({ encounter }) 

    //return the post method 
    return this.http.post(this.encounterUrl, body, { headers })
                                  .toPromise()
                                  .then(response=>response.json().encounter)
                                  .catch(this.handleError)
  }

  //Error handling (same for most cases)
  private handleError(error: any){
	 console.log('There was an error!', error);
	 return Promise.reject(error.message || error); 	
  }

}