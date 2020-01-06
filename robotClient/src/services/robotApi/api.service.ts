import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  putHeadInclination(newState): Observable<any>{
    return this.http.put('http://localhost:3300/robot/move_head_inclination',{state: newState});
  } 

  putHeadRotation(newState): Observable<any>{
    return this.http.put('http://localhost:3300/robot/move_head_rotation',{state: newState});
  }

  putRightElbow(newState): Observable<any>{
    return this.http.put('http://localhost:3300/robot/move_right_elbow',{state: newState});
  }

  putLeftElbow(newState): Observable<any>{
    return this.http.put('http://localhost:3300/robot/move_left_elbow',{state: newState});
  }

  putRightWrist(newState): Observable<any>{
    return this.http.put('http://localhost:3300/robot/move_right_wrist',{state: newState});
  }
  
  putLeftWrist(newState): Observable<any>{
    return this.http.put('http://localhost:3300/robot/move_left_wrist',{state: newState});
  }

}
