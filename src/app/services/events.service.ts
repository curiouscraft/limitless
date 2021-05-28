import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get('./assets/json/events.json');
  }

  getCurrentEvent(): Observable<any> {
    return this.http.get('./assets/json/currentevent.json');
  }

}
