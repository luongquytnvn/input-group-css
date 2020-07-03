import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  form: FormGroup = new FormGroup({
    aaa: new FormControl(''),
    bbb: new FormControl(''),
    ccc: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
