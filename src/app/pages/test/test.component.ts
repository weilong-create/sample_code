import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  dropDownOptions:any
  popupData:any;
  showEditPopUp: boolean=false;
  test=[{id:1,name:123456},{id:2,name:123456},{id:3,name:123456},{id:4,name:123456},{id:5,name:123456},,{id:6,name:123456}]
  constructor() {this.dropDownOptions = {
    maxHeight: 200,
    onShown(e: any) {
      e.component.option({
        container: e.element,
        hideOnParentScroll: true,
      });
    },
  }; }

  ngOnInit(): void {
  }
  openPopup() {
    this.showEditPopUp = true;
  }
}
