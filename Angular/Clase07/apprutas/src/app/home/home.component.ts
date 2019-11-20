import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const fragmento = this.activateRoute.snapshot.fragment
    console.log(fragmento)

    this.activateRoute.fragment.subscribe((info: any) =>{
      console.log(info)
    })
  }

}
