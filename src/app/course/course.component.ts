import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay, map, catchError, finalize} from 'rxjs/operators';
import {merge, fromEvent, Observable, throwError} from "rxjs";
import { Lesson } from '../model/lesson';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, AfterViewInit {

    course:Course;
    loading: boolean = false;
    lessons: Lesson[];
    pageIndex: number = 0;
    pageSize: number = 3;

    @ViewChild('paginator')
    paginator: MatPaginator;

    /*lessons = [
       {
        id: 120,
        'description': 'Introduction to Angular Material',
        'duration': '4:17',
        'seqNo': 1,
        courseId: 11
      },
      {
        id: 121,
        'description': 'Navigation and Containers',
        'duration': '6:37',
        'seqNo': 2,
        courseId: 11
      },
      {
        id: 122,
        'description': 'Data Tables',
        'duration': '8:03',
        'seqNo': 3,
        courseId: 11
      },
      {
        id: 123,
        'description': 'Dialogs and Overlays',
        'duration': '11:46',
        'seqNo': 4,
        courseId: 11
      },
      {
        id: 124,
        'description': 'Commonly used Form Controls',
        'duration': '7:17',
        'seqNo': 5,
        courseId: 11
      },
      {
        id: 125,
        'description': 'Drag and Drop',
        'duration': '8:16',
        'seqNo': 6,
        courseId: 11
      },
      {
        id: 126,
        'description': 'Responsive Design',
        'duration': '7:28',
        'seqNo': 7,
        courseId: 11
      },
      {
        id: 127,
        'description': 'Tree Component',
        'duration': '11:09',
        'seqNo': 8,
        courseId: 11
      },
      {
        id: 128,
        'description': 'Virtual Scrolling',
        'duration': '3:44',
        'seqNo': 9,
        courseId: 11
      },
      {
        id: 129,
        'description': 'Custom Themes',
        'duration': '8:55',
        'seqNo': 10,
        courseId: 11
      },
      {
        id: 130,
        'description': 'Changing Theme at Runtime',
        'duration': '12:37',
        'seqNo': 11,
        courseId: 11
      }
    ];*/

    constructor(private route: ActivatedRoute,
                private coursesService: CoursesService) {

    }

    displayedColumns = ['seqNo', 'description', 'duration'];

    ngOnInit() {

        this.course = this.route.snapshot.data["course"];

        this.loadLessonsPage();
    }

    loadLessonsPage() {

      this.loading = true;
      this.coursesService.findLessons(
        this.course.id,
        'asc',
        this.pageIndex ,
        this.pageSize)
      .pipe(
        tap(less => this.lessons = less),
        catchError(err => {
          console.log("Error loading lessons", err);
          alert("Error loading lessons");
          this.loading = false;
          return throwError(err);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe();

    }

    handlePageEvent($event){

      this.pageIndex =  $event.pageIndex;
      this.pageSize = $event.pageSize;
      this.loadLessonsPage();
    }

    ngAfterViewInit() {
    /*
      this.paginator.page
      .pipe(
        tap( () => {
          this.loadLessonsPage();
        } )
      )
      .subscribe();
    */

    }

}
