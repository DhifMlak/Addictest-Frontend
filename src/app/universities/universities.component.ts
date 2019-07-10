import { Component, OnInit } from '@angular/core';
import { FilterTestPipe } from '../pipes/filter-test.pipe';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {
  searchJson = { type: [] };
  filteredColleges;
  colleges;

  constructor(private appService: AppService) { }

   ngOnInit() {
   this.colleges = this.appService.getAll();
  //  console.log(this.colleges);
   this.filteredColleges = this.colleges;

  }

  addToFilter(filterValue) {
   this.colleges = this.colleges.slice(0, 16);
    // console.log(filterValue);
    // let arrayCol: any[] = <Array<any>>this.searchJson['type'];
    // if (arrayCol.includes(filterValue.name.toLowerCase())) {
    //   arrayCol = arrayCol.filter(elem => elem[filterValue.name] !== filterValue.value.toLowerCase());
    // } else {
    //   arrayCol.push(filterValue);
    // }
    // this.colleges.slice(0, 4);
    // this.searchJson['type'] = arrayCol;
    // const p = new FilterTestPipe();
    // this.filteredColleges = p.transform(this.colleges, this.searchJson);
  }

  setSelected(college) {
    this.appService.selected = college;
  }
  resetFilters() {
    this.colleges = this.filteredColleges;
  }

}
