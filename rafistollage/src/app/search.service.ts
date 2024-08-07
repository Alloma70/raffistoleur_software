import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  searchRafistolleurs(quartier: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?quartier=${quartier}`);
  }
}