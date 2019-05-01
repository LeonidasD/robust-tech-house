import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { BillDetail } from 'src/app/models/bill.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detail: any;
  displayedColumns: string[] = ['no', 'id', 'name', 'price', 'image', 'quantity'];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ){
    this.detail = data.detail;
    this.dataSource = new MatTableDataSource(this.detail.list_item);

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
