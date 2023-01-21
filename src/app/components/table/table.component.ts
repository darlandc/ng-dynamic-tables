import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  profile: any;
  tableDataSrc: any;
  tableCols: string[] = ['name', 'role', 'skillset'];
  tableData: {}[] = [
    {
      name: 'Rick Sanchez',
      role: 'Genius',
      skillset: 'multiverse travel, sciences'
    },
    {
      name: 'Morty',
      role: 'Dummie',
      skillset: 'cry, complain, annoy'
    }
  ]

  constructor(){}

  ngOnInit(): void {
    this.tableDataSrc = new MatTableDataSource(this.tableData);
    console.log(this.tableDataSrc)
  }

}
