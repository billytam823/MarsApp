import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Colonist,IColonist} from '../models';

//Service Pattern
@Injectable()
export class ColonistService {

  //url to get the json	
  colonistUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

  constructor(private http: Http) {}

  createColonist(colonist: Colonist): Promise<IColonist>{
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify({ colonist }) // Same as colonist : colonist

    //return the post method 
    return this.http.post(this.colonistUrl, body, { headers })
                                  .toPromise()
                                  .then(response=>response.json().colonist)
                                  .catch(this.handleError)
  }

  //Error handling (same for most cases)
  private handleError(error: any){
	 console.log('There was an error!', error);
	 return Promise.reject(error.message || error); 	
  }

}