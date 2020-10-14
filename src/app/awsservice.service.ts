import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Model} from './model';
import {Observable} from 'rxjs';

export interface ApiResponse {
  items: Array<Model>;
}

@Injectable({
  providedIn: 'root'
})
export class AwsserviceService {

  constructor(private http: HttpClient) {
  }

  getFundInformation(): Observable<Model[]> {
    console.log('inside get fund information ');
    const res = this.http.get<Model[]>('https://0ojbbf2fe6.execute-api.ap-southeast-2.amazonaws.com/dev');
    console.log('response formatted - ' + JSON.stringify(res));
    return res;
  }

}
