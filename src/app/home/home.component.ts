import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.service.api('name').subscribe((res: any) => {
      console.log(res);
    })
  }

  register() {
    this.service.register('杨元甫', '1159069524@qq.com', '123456').subscribe(res => {
      console.log(res);
    })
  }

}
