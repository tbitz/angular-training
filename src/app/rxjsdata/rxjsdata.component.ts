import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';
import { Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-rxjsdata',
  templateUrl: './rxjsdata.component.html',
  styleUrl: './rxjsdata.component.css',
})
export class RxjsdataComponent {
  data$!: Observable<any>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService
      .getData()
      .pipe(take(1))
      .subscribe((res) => (this.data$ = of(res.slice(0, 5))));
  }
}
