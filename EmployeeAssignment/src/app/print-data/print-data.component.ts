import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-data',
  templateUrl: './print-data.component.html',
  styleUrls: ['./print-data.component.css']
})
export class PrintDataComponent implements OnInit {
  employee: object;


  constructor() {
    this.employee = [ {ID: 1001, Name: 'Rahul', Salary: 9000, Dept: 'JAVA'},
                      {ID: 1002, Name: 'Vikash', Salary: 11000, Dept: 'ORAAPS'},
                      {ID: 1003, Name: 'Uma', Salary: 12000, Dept: 'JAVA'},
                      {ID: 1004, Name: 'Sachin', Salary: 11500, Dept: 'ORAAPS'},
                      {ID: 1005, Name: 'Amol', Salary: 7000 , Dept: '.NET'},
                      {ID: 1006, Name: 'Vishal', Salary: 17000, Dept: 'BI'},
                      {ID: 1007, Name: 'Rajita', Salary: 21000, Dept: 'BI'},
                      {ID: 1008, Name: 'Neelima', Salary: 81000, Dept: 'TESTING'},
                      {ID: 1009, Name: 'Daya', Salary: 1000, Dept: 'TESTING'} ]
  }

  ngOnInit() {
    //console.log(this.names);
    console.log("hellloo");
  }

}
