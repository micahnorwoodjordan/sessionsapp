import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private readonly BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  pingAPI(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/ping`);
  }
}
