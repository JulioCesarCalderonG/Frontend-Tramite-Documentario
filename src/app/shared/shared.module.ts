import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarSecreComponent } from './sidebar-secre/sidebar-secre.component';
import { MessengerComponent } from './messenger/messenger.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarSecreComponent,
    MessengerComponent,
    SidebarAdminComponent,
  ],
  exports:[
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarSecreComponent,
    MessengerComponent,
    SidebarAdminComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
