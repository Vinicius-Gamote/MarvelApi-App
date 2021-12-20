import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Marvel Api'
  public heroes: Observable<any> | undefined
  public showImg: boolean = false
  public widthImg: Number = 150
  public marginImg: Number = 2

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get("http://gateway.marvel.com/v1/public/characters?ts=1639846442&apikey=9183f800e30756ada325a557437ea8bb&hash=13beda4e1a0640c41aad4b4be8033df8")
    .subscribe(d => console.log(d))

    this.heroes = this.http.get("http://gateway.marvel.com/v1/public/characters?ts=1639846442&apikey=9183f800e30756ada325a557437ea8bb&hash=13beda4e1a0640c41aad4b4be8033df8")
  }

  public alterImage(): void {
    this.showImg = !this.showImg
  }

}
