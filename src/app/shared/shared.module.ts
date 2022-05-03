import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarSecreComponent } from './sidebar-secre/sidebar-secre.component';
import { MessengerComponent } from './messenger/messenger.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarSecreComponent,
    MessengerComponent,
  ],
  exports:[
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarSecreComponent,
    MessengerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
