import { Component } from '@angular/core';

export interface Data {
  data: any;
  name: string;
  standard: string;
  subject: string;
  division: string;
  collage: string;
  email: string;
  number: number;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data: Data[] = '';
  value = [];
  name = '';
  standard = '';
  subject = '';
  division = '';
  collage = '';
  email = '';
  number: number = '';
  id: number = '';
  IsEdit = false;
  editedId: number;
  // tslint:disable-next-line:variable-name

  constructor()   { }

    edit(i: any, item: {i: number; name: string; standard: string; subject: string; division: string; collage: string; email: string; number: number; id: number; }) {
      this.IsEdit = true;
      this.name = item.name;
      this.standard = item.standard;
      this.subject = item.division;
      this.collage = item.collage;
      this.email = item.email;
      this.number = item.number;
      this.id = item.id;
      this.editedId = i;
    }

    delete(i, item: any){
      delete this.value[i];
    }
  // tslint:disable-next-line:typedef
  OnClick(data:any){
    if(this.IsEdit){
      this.value[this.editedId].name = data.name;
      this.value[this.editedId].standard = data.standard;
      this.value[this.editedId].subject = data.subject;
      this.value[this.editedId].division = data.division;
      this.value[this.editedId].collage = data.collage;
      this.value[this.editedId].email = data.email;
      this.value[this.editedId].number = data.number;
      this.value[this.editedId].id = data.id;
    } else{
      // @ts-ignore
      this.value.push(data);
    }
    this.name = '';
    this.standard = '';
    this.subject = '';
    this.division = '';
    this.collage = '';
    this.email = '';
    this.number = '';
    this.id = '';
  }
}
