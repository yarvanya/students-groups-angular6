import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = [
      {first_name: 'Ivan', second_name: 'Yarymovych', group_name: 'KT-51'},
      {first_name: 'Nata', second_name: 'Kovalchuk', group_name: 'KT-51'},
      {first_name: 'Anna', second_name: 'Karnasevych', group_name: 'KT-51'},
      {first_name: 'Oksana', second_name: 'Martyn', group_name: 'KT-51'},
      {first_name: 'Maryana', second_name: 'Tarnavska', group_name: 'KT-51'},
      {first_name: 'Roma', second_name: 'Chychkevych', group_name: 'AU-5'},
      {first_name: 'Slava', second_name: 'Skilny', group_name: 'AU-5'},
      {first_name: 'Petro', second_name: 'Yakubovski', group_name: 'AU-5'},
      {first_name: 'Orest', second_name: 'Denyshyn', group_name: 'AU-5'},
      {first_name: 'Andrii', second_name: 'Gema', group_name: 'AU-5'},
  ];

  showAlert: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  selectStudent (student) {
    console.log(student);
  }

  deleteStudent (student) {
    this.showAlert = true;
  }

  closeAlert () {
    this.showAlert = false;
  }
}
