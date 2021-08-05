import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { COURSES } from '../../db-data';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course:Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }
  onCourseViewed(){
    console.log("card component - button clicked ...");
    this.courseEmitter.emit(this.course);
  }
  isImageVisible(){
      return this.course && this.course.iconUrl;
    };
  cardClasses(){
    if(this.course.category == "BEGINNER"){
      return ['BEGINNER']
    }
    //return this.course.category;
  };
}
