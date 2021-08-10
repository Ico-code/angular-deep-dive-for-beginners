import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, NgModule} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import { HttpClient, HttpParams } from '@angular/common/http';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  course = COURSES;
  courses$ : Observable<Course[]>;

  constructor(private http: HttpClient, 
              private coursesService: CoursesService) {

  }

  ngOnInit() {

    this.courses$ = this.coursesService.loadCourse();
    console.log(this.course)
  }

  save(course:Course){
    this.coursesService.saveCourse(course)
    .subscribe(
      () => console.log("Course Saved!")
    );
  }


}
