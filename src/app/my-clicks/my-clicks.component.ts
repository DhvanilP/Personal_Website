import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title }     from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';
declare var baguetteBox, run: any;


@Component({
  selector: 'app-my-clicks',
  templateUrl: './my-clicks.component.html',
  styleUrls: ['./my-clicks.component.sass']
})
export class MyClicksComponent implements OnInit {
  PHOTOS: string [];
  constructor (private httpService: HttpClient, private titleService: Title) { 
    this.setTitle('My-Clicks | DHP')
  }
  ngOnInit() {
    this.httpService.get('./assets/clicks.json').subscribe(
      data => {
        this.PHOTOS = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.PHOTOS[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      },
      () => {
        $(document).ready(function() {
          // alert('The doc is ready;');
          baguetteBox.run('.tz-gallery');
        });
      }
    );
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
