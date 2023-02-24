import {Component} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

const SAMPLE_TEXT = `Anim aute mollit ut laboris ad cillum do nostrud cupidatat quis. Aliqua qui id nulla est in veniam in nulla proident. Eu tempor ipsum magna nostrud veniam ullamco dolore excepteur ex qui sunt ullamco. Anim ea nulla veniam ullamco voluptate non consectetur ipsum do irure fugiat. Enim incididunt nostrud labore elit enim sunt duis anim nisi incididunt occaecat qui. Magna proident quis ad dolor magna veniam ad ut ex aliqua fugiat magna elit anim.

Anim nulla dolor labore enim non adipisicing voluptate consectetur in do. Fugiat est irure aliqua ad minim enim minim minim do proident aliquip ipsum. Laboris officia incididunt cillum adipisicing ex laborum ut adipisicing officia. Aliqua et ipsum sint sunt Lorem.

Elit enim aute qui aliqua sunt dolore. Sit id sint veniam non ut amet. Laboris culpa aliquip ullamco ad deserunt ut enim quis. Proident veniam esse sit proident commodo irure. Culpa cillum et consequat ea mollit in. In laborum in non pariatur.

Lorem quis cillum pariatur eiusmod nostrud aliquip. Esse ut voluptate culpa dolor ullamco nulla pariatur. Qui enim laboris sint cupidatat est consequat officia commodo ea labore incididunt cupidatat voluptate. Cillum dolore reprehenderit ullamco aliqua exercitation exercitation eu velit culpa culpa aliqua. Irure ullamco aute adipisicing aliqua amet proident aute.

Dolor dolor amet incididunt incididunt. Consequat aliquip laboris qui proident elit dolore. Ea Lorem esse ad ullamco esse incididunt sint sit ad ut consequat consectetur.

Elit excepteur proident tempor dolor officia. Culpa tempor elit nostrud adipisicing voluptate incididunt incididunt non. Ut est magna fugiat deserunt in incididunt amet consequat. Adipisicing ullamco amet duis do esse veniam incididunt enim.

Ipsum ut magna labore cillum cupidatat. Sunt ullamco ut ex excepteur elit velit non aute aliquip. Irure non aliquip veniam laboris officia id in sunt fugiat irure consequat.

Do magna duis laboris sunt et ipsum incididunt voluptate veniam in culpa veniam minim esse. Deserunt reprehenderit elit ipsum reprehenderit est et laboris magna ad consectetur veniam nostrud adipisicing. Anim commodo ut do tempor ex ipsum enim dolor labore. Velit veniam adipisicing anim quis aliquip enim sit esse. Ut consectetur in adipisicing incididunt elit irure pariatur.

Amet aliquip commodo qui duis quis. Eiusmod sit amet consectetur ea proident eiusmod qui occaecat eiusmod duis Lorem anim sunt. Proident adipisicing Lorem ex fugiat cillum duis quis quis dolore ex ut labore non.

Excepteur et do in in velit aute nulla. Incididunt exercitation cillum eiusmod esse consectetur officia ipsum ullamco officia cillum amet aliqua. Minim aliqua sit et duis laborum est id. Ad ex nisi tempor est amet aliquip eu. Dolor aute proident id elit officia commodo consectetur non mollit enim dolore nisi cupidatat. Cupidatat occaecat commodo excepteur ex aute adipisicing sint eiusmod quis. Lorem enim est ad culpa quis exercitation id Lorem esse ipsum officia aute do.`;

@Component({
  selector: "create-course-step-1",
  templateUrl:"create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {



  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SAMPLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });


  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {

    const date = cellDate.getDate();

    if (date == 1 && view == 'month') {
      return 'highlight-date';
    }

    return '';

  }

  constructor(private fb: UntypedFormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title'];
  }

  showDate(){
    console.log(this.form.get('releasedAt').value);
  }

}
