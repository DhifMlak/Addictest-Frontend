import { Component, OnInit } from '@angular/core';
import { FilterTestPipe } from '../pipes/filter-test.pipe';
import { AppService } from '../app.service';


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
    this.appService.getAll().subscribe(data => {
      this.colleges = data;
      console.log(data);
    });
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


}
