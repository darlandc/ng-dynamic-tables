import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  tableDataSrc: any;
  tableCols: string[] = ['name', 'role', 'skillset', 'color', 'humor'];
  tableData: {}[] = [
    {
      name: 'Rick Sanchez',
      role: 'Genius',
      skillset: 'multiverse travel, sciences',
      color: 'beige',
      humor: 'sarcastic, funny, insufferable'
    },
    {
      name: 'Morty',
      role: 'Dummie',
      skillset: 'cry, complain, annoy',
      color: 'light brown',
      humor: 'happy, fool, silly'
    }
  ]

  constructor(){}

  ngOnInit(): void {
    this.tableDataSrc = new MatTableDataSource(this.tableData);
  }

}
