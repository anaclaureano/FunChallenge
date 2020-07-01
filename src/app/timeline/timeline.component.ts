import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public counterContentContainer:number =0;
  public contentList: any[] = [];



  constructor() { }

  ngOnInit(): void {
  }
  addEntry(){
    this.counterContentContainer = this.counterContentContainer+1;
    this.contentList.push(this.counterContentContainer);

  }


}
