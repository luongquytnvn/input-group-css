import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-test-slick',
  templateUrl: './test-slick.component.html',
  styleUrls: ['./test-slick.component.css']
})
export class TestSlickComponent implements OnInit {
  form: FormGroup = new FormGroup({
    aaa: new FormControl(''),
    bbb: new FormControl(''),
    ccc: new FormControl('')
  });
  data = [1, 2];

  constructor() {
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   $('.slick-test').slick({
    //     lazyLoad: 'ondemand', // ondemand progressive anticipated
    //     infinite: true,
    //   });
    // }, 1000);

    // this.slick();

    // $('.slick-test').slick({
    //   lazyLoad: 'ondemand', // ondemand progressive anticipated
    //   infinite: true,
    // });
  }

  slick() {
    $(document).ready(() => {
      console.log('slick');
      $('.slick-test').slick({
        // lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: false,
      });
    });
  }

  unSlick() {
    // $('.slick-test');
    // if ($('.slick-test').hasClass('slick-initialized')) {
    console.log('unslick');
    $('.slick-test').slick('unslick');
    setTimeout(() => {
      this.slick();
    }, 4000);
    // $slick.slick('destroy');
    // $slick.removeClass('slick-initialized slick-slider');
    // }
  }

  resetInit() {
    $('.slick-test').slick('reinit');
  }

  add() {
    // this.data.push(3);
    console.log('add');
    this.data.push(3);
    console.log(this.data);
    // this.unSlick();
    // this.slick();
    // $(document).ready(() => {
    // $('.slick-test').slick('refresh');
    // $('.slick-test')[0].slick.refresh();
    // });
  }

  isUse(num) {
    return this.data.filter(d => d === num).length !== 0;
  }
}
