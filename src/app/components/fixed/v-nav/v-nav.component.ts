import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-v-nav',
  templateUrl: './v-nav.component.html',
  styleUrls: ['./v-nav.component.css']
})
export class VNavComponent implements OnInit {


  posIsActive = true;
  selectedItem = 'pos';
  childrenChevron = 'down';
  constructor() { }

  ngOnInit() {
  }

  setActive(listItemName: string, event?: any){
    listItemName != 'pos' ? this.posIsActive = false : this.posIsActive = true;
    this.selectedItem = listItemName;
    if(event){
      if($(event.target).find('.fa').hasClass('fa-chevron-down')){
        $(event.target).find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }
      else{
        $(event.target).find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      }
    }

  }
}
