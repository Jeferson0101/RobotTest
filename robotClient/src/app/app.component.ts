import { Component } from '@angular/core';
import { ApiService } from '../services/robotApi/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'robotClient';
  constructor(private robotApi: ApiService) {
    //this.HeadInclination('UP');
    //this.headRotation('IN_REST');
    //this.rightElbow('HIGHLY_CONTRACTED');
    //this.leftElbow('HIGHLY_CONTRACTED');
    //this.righWrist('MINUS_45');
    //this.leftWrist('MINUS_45');
  }

  headInclination(newState) {
    this.robotApi.putHeadInclination(newState).subscribe(data => {
      console.log(data);
    })

  }

  headRotation(newState){
    this.robotApi.putHeadRotation(newState).subscribe(data =>{
      console.log(data);
    })
  }

  rightElbow(newState){
    this.robotApi.putRightElbow(newState).subscribe(data =>{
      console.log(data);
    })
  }

  leftElbow(newState){
    this.robotApi.putLeftElbow(newState).subscribe(data =>{
      console.log(data);
    })
  }

  righWrist(newState){
    this.robotApi.putRightWrist(newState).subscribe(data =>{
      console.log(data);
    })
  }

  leftWrist(newState){
    this.robotApi.putLeftWrist(newState).subscribe(data =>{
      console.log(data);
    })
  }
  
}