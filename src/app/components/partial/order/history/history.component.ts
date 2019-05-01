import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['no', 'id', 'role', 'date'];

  bill_list = JSON.parse(localStorage.getItem('bill-list'));
  order_history = JSON.parse(localStorage.getItem('order-history'));

  dataSource = new MatTableDataSource(this.bill_list);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(id: string): void {
    let detail = this.order_history.find(x => x.bill_id == id);
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: {detail: detail}
    });

    // dialogRef.afterClosed().subscribe();
  }
}
