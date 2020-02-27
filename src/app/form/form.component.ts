import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public data: any = {
    selectedBooktype: '',
    maxticket: '',
    minticket: '',
    loancollection: '',
    courses: '',
    performancedate: '',
    revenue: '',
    soldpreformancedate: '',
    studentenrolled: '',
    material_info: []
  }

  constructor() { }

  ngOnInit() {
  }

}
