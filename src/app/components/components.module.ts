
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [WrapperComponent, TableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [WrapperComponent, TableComponent],
  providers: [],
})
export class ComponentsModule {}
