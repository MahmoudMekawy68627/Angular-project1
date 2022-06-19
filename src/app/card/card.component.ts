import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output() messageFromChild = new EventEmitter<string>()
  @Input('productData')productData:any;
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    console.log("clicked");
    this.messageFromChild.emit("hello mk");
  }

}
