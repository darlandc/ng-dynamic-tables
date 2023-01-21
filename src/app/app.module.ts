import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
