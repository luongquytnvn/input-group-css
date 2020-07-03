import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  form: FormGroup = new FormGroup({
    aaa: new FormControl(''),
    bbb: new FormControl(''),
    ccc: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
