import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    college: any;
    constructor(private appService: AppService) { }

    ngOnInit() {
    this.college = this.appService.selected;
   }

}
