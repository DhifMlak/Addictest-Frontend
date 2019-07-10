import { Component, OnInit } from '@angular/core';
import { FilterTestPipe } from '../pipes/filter-test.pipe';
import { AppService } from '../app.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  searchJson = { type: [] };
  filteredColleges;
  colleges;
  isVisible: boolean;
  top5: any;
  isSpining: boolean;
  constructor(private appService: AppService) { }

   ngOnInit() {
     this.isVisible = false;
     this.isSpining = false;

   this.colleges = this.appService.getAll();
  }


  addToFilter(filterValue) {
    let arrayCol: any[] = <Array<any>>this.searchJson['type'];
    if (arrayCol.includes(filterValue.toLowerCase())) {
      arrayCol = arrayCol.filter(elem => elem !== filterValue.toLowerCase());
    } else {
      arrayCol.push(filterValue.toLowerCase());
    }
    this.searchJson['type'] = arrayCol;
    const p = new FilterTestPipe();
    this.filteredColleges = p.transform(this.colleges, this.searchJson);
  }



  showTop5() {
    this.isSpining = true;
    const shuffled = this.colleges.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    this.top5 = selected;
    this.isVisible = true;
    this.isSpining = false;

  }
  setSelected(college) {
    this.appService.selected = college;
  }

}
