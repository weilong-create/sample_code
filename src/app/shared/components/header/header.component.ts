import { Component, NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService, IUser } from '../../services';
import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxContextMenuModule } from 'devextreme-angular/ui/context-menu';

import { Router } from '@angular/router';
import { TestmessageComponent, TestmessagelModule } from '../testmessage/testmessage.component';
import { timer } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;

  user: IUser | null = { email: '' };

  items:any;

  currentInputElement: HTMLInputElement | null = null;

  messageContextVisible: boolean = false;

  userMenuItems = [{
    text: 'Profile',
    icon: 'user',
    onClick: () => {
      this.router.navigate(['/profile']);
    }
  },
  {
    text: 'Logout',
    icon: 'runner',
    onClick: () => {
      this.authService.logOut();
    }
  }];

  constructor(private authService: AuthService, private router: Router) {
    this.items = [{
      text: 'Share',
      items: [
        { text: 'Facebook' },
        { text: 'Twitter' }],
    },
    { text: 'Download' },
    { text: 'Comment' },
    { text: 'Favorite' },
    ];

  }
  startInterval()
  {
  setTimeout
  (() => {
    this.messageContextVisible = false;
  }, 1000)
}
  onContextMenuShowing() {
    this.startInterval();
      this.currentInputElement = document.activeElement as HTMLInputElement;
  }
  
  onContextMenuShown() {
      if (this.currentInputElement) {
        console.log(this.currentInputElement);
        this.currentInputElement.focus();
      }
  }

  ngOnInit() {
    this.authService.getUser().then((e) => this.user = e.data);
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
}

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    UserPanelModule,
    DxToolbarModule,
    TestmessagelModule,
    DxContextMenuModule
  ],
  declarations: [ HeaderComponent],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
