import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { DxContextMenuComponent } from 'devextreme-angular';
import { DxContextMenuModule } from 'devextreme-angular/ui/context-menu';

@Component({
  selector: 'app-testmessage',
  templateUrl: './testmessage.component.html',
  styleUrls: ['./testmessage.component.scss']
})
export class TestmessageComponent implements OnInit {
  items:any
  constructor() {   
    this.items = [{
    text: 'Share',
    items: [
      { text: 'Facebook' },
      { text: 'Twitter' }],
  },
  { text: 'Download' },
  { text: 'Comment' },
  { text: 'Favorite' },
  ];}
  @ViewChild(DxContextMenuComponent, { static: false }) contextMenuComponent!: DxContextMenuComponent;
  ngOnInit(): void {
  }

  onContextMenuShown() {
    // if (this.currentInputElement) {
    //   console.log(123456)
    //   this.currentInputElement.focus();
    // }
  }

}
@NgModule({
  imports: [
    DxContextMenuModule,
    CommonModule
  ],
  declarations: [ TestmessageComponent ],
  exports: [ TestmessageComponent ]
})
export class TestmessagelModule { }
