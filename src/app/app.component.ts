import { Component } from '@angular/core';

export interface Data {
  name: string;
  email: string;
  number: number;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  data: Data[] = [] ;
  value = [];
  name: string = '';
  email: string = '';
  number: number = 0;
  address: string = '';
  id: number = 60;
  constructor() { }

  edit(id, item: {i:number; name: string; email: string; number: number; address: string; }){
    this.name = item.name;
    this.email = item.email;
    this.number = item.number;
    this.address = item.address;
    this.id = id;
  }
  delete(i,item){
    delete this.value[i];
  }

  onSubmit(data: any){
    this.data = data;
    if(this.id && this.id !== 60) {
      this.value[this.id].name = data.name;
      this.value[this.id].email = data.email;
      this.value[this.id].number = data.number;
      this.value[this.id].address = data.address;
    }else {
      // @ts-ignore
      this.value.push(data);
    }
    this.name = '';
    this.email = '';
    this.number = 0;
    this.address = '';
    this.id = 60;
  }
}



