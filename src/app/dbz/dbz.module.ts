import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListDbzComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule {

}
