import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  form: FormGroup = new FormGroup({
    aaa: new FormControl(''),
    bbb: new FormControl(''),
    ccc: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
