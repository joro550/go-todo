import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './pages/home/home.component';

import { AddComponent } from './components/todo/add/add.component';
import { ListComponent } from './components/todo/list/list.component';
import { ListComponent as TestList } from './components/test/list/list.component';
import { TodoModalViewComponent } from './components/todo/todo-modal-view/todo-modal-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    TestList,

    ListComponent,
    TodoModalViewComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
