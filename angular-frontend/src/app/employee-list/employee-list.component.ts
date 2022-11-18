import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees?: Employee[];

  constructor(
    private employeeService : EmployeeService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(){
    this.employeeService.getEmloyeesList().subscribe(data=>{
      this.employees = data;
    });
  }
  updateEmployee(id: any){
    this.router.navigate(['update-employee',id])
  }
  deleteEmployee(id:any) {
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    },
    error => console.log(error)
    );
  }
  viewEmployee(id:any){
    this.router.navigate(['employee-details',id]);
  }
    

}
